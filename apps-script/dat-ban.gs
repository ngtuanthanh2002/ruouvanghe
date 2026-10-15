/**
 * Vanghè — nhận yêu cầu đặt bàn từ website và ghi vào Google Sheet.
 *
 * CÁCH CÀI ĐẶT
 * 1. Mở Google Sheet → Tiện ích mở rộng (Extensions) → Apps Script.
 * 2. Xoá code mặc định, dán toàn bộ file này vào, bấm Lưu.
 * 3. Triển khai (Deploy) → Tùy chọn triển khai mới (New deployment)
 *    - Loại: Ứng dụng web (Web app)
 *    - Thực thi với tư cách (Execute as): Tôi (Me)
 *    - Người có quyền truy cập (Who has access): Bất kỳ ai (Anyone)
 * 4. Cấp quyền khi được hỏi, rồi copy "URL ứng dụng web" (…/exec)
 *    và dán vào `bookingScriptUrl` trong src/lib/site-config.ts.
 *
 * 5. Email thông báo: chọn hàm `testEmail` → Chạy (Run) → cấp quyền
 *    "Gửi email thay mặt bạn". Kiểm tra hộp thư (cả mục Spam).
 *    Gmail miễn phí cho phép gửi ~100 email/ngày qua Apps Script.
 *
 * Khi sửa code: Deploy → Quản lý triển khai → chỉnh sửa (bút chì)
 * → Phiên bản: "Phiên bản mới" → Triển khai. URL giữ nguyên.
 */

const SPREADSHEET_ID = "1tH8Z2p89aKrJkCytzN7Tw8r9hqGDGRySY6qwVCVY7Dw";
const SHEET_NAME = "Đặt bàn";
const TIMEZONE = "Asia/Ho_Chi_Minh";

// Email nhận thông báo mỗi khi có đơn mới. Mặc định là Gmail của chủ script
// (tài khoản triển khai Web app). Có thể thay bằng "a@gmail.com, b@gmail.com",
// hoặc đặt "" để tắt thông báo.
const NOTIFY_EMAIL = Session.getEffectiveUser().getEmail();

const HEADERS = [
  "Thời gian gửi",
  "Họ tên",
  "Số điện thoại",
  "Giờ Đặt Bàn",
  "Số khách",
  "Ghi chú",
  "Trạng thái",
];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const name = clean_(data.name);
    const phone = clean_(data.phone);
    if (!name || !phone) {
      return json_({ ok: false, error: "missing name or phone" });
    }

    // "18:00 · 20/10/2026" — khách không chọn ngày thì chỉ ghi giờ
    const bookingTime = [clean_(data.time), formatDate_(data.date)].filter(String).join(" · ");

    const sheet = getSheet_();
    const submittedAt = Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss");
    sheet.appendRow([
      submittedAt,
      name,
      "'" + phone, // giữ số 0 ở đầu
      bookingTime,
      clean_(data.guests),
      clean_(data.notes),
      "Mới",
    ]);

    // Đơn đã được lưu vào Sheet; lỗi gửi mail (vd. hết hạn mức ngày) không được
    // làm khách thấy báo lỗi rồi gửi lại, gây trùng đơn.
    try {
      notify_({
        name: name,
        phone: phone,
        bookingTime: bookingTime,
        guests: clean_(data.guests),
        notes: clean_(data.notes),
        submittedAt: submittedAt,
      });
    } catch (mailErr) {
      console.error("Gửi email thông báo thất bại: " + mailErr);
    }

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Mở URL /exec trên trình duyệt để kiểm tra script đã chạy
function doGet() {
  return json_({ ok: true, message: "Vanghè booking endpoint is running" });
}

function getSheet_() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#F5ECE0");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function notify_(b) {
  if (!NOTIFY_EMAIL) return;
  const sheetUrl = "https://docs.google.com/spreadsheets/d/" + SPREADSHEET_ID;
  const rows = [
    ["Họ tên", b.name],
    ["Số điện thoại", b.phone],
    ["Giờ đặt bàn", b.bookingTime || "(chưa chọn)"],
    ["Số khách", b.guests],
    ["Ghi chú", b.notes],
    ["Gửi lúc", b.submittedAt],
  ];
  const tel = "tel:" + b.phone.replace(/[^\d+]/g, "");

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: "[Vanghè] Đặt bàn mới: " + b.name + " — " + b.phone + (b.bookingTime ? " — " + b.bookingTime : ""),
    body:
      rows.map((r) => r[0] + ": " + r[1]).join("\n") + "\n\nXem tất cả đơn: " + sheetUrl,
    htmlBody:
      '<div style="font-family:Arial,sans-serif;font-size:15px;color:#222">' +
      '<h2 style="color:#7a1f2b;margin:0 0 12px">Có khách đặt bàn mới</h2>' +
      '<table cellpadding="6" style="border-collapse:collapse">' +
      rows
        .map(
          (r) =>
            '<tr><td style="color:#777;white-space:nowrap">' + r[0] + "</td><td><b>" +
            escapeHtml_(r[1]) + "</b></td></tr>"
        )
        .join("") +
      "</table>" +
      '<p style="margin-top:16px"><a href="' + escapeHtml_(tel) + '">📞 Gọi khách</a>' +
      ' &nbsp;·&nbsp; <a href="' + sheetUrl + '">Mở Google Sheet</a></p></div>',
    name: "Vanghè – Đặt bàn",
  });
}

function escapeHtml_(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Chạy hàm này 1 lần trong trình soạn thảo Apps Script để cấp quyền gửi mail
// và kiểm tra email có tới hộp thư không (không ghi gì vào Sheet).
function testEmail() {
  notify_({
    name: "Khách thử",
    phone: "0900000000",
    bookingTime: "19:00 · 20/10/2026",
    guests: "2",
    notes: "Email kiểm tra",
    submittedAt: Utilities.formatDate(new Date(), TIMEZONE, "dd/MM/yyyy HH:mm:ss"),
  });
}

// Chặn ký tự đầu = + - @ để Sheet không hiểu nhầm thành công thức
function clean_(value) {
  const s = String(value == null ? "" : value).trim().slice(0, 1000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

// "2026-10-14" → "14/10/2026"
function formatDate_(value) {
  const m = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return m ? m[3] + "/" + m[2] + "/" + m[1] : clean_(value);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
