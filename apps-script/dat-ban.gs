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
 * Khi sửa code: Deploy → Quản lý triển khai → chỉnh sửa (bút chì)
 * → Phiên bản: "Phiên bản mới" → Triển khai. URL giữ nguyên.
 */

const SPREADSHEET_ID = "1tH8Z2p89aKrJkCytzN7Tw8r9hqGDGRySY6qwVCVY7Dw";
const SHEET_NAME = "Đặt bàn";
const TIMEZONE = "Asia/Ho_Chi_Minh";

// Để trống nếu không muốn nhận email báo mỗi khi có đơn mới
const NOTIFY_EMAIL = "";

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

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        "[Vanghè] Đặt bàn mới: " + name + " — " + phone,
        [
          "Họ tên: " + name,
          "SĐT: " + phone,
          "Giờ đặt bàn: " + bookingTime,
          "Số khách: " + clean_(data.guests),
          "Ghi chú: " + clean_(data.notes),
        ].join("\n")
      );
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
