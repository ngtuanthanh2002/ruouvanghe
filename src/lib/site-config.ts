export const siteConfig = {
  name: "Vang Hè · The Wine Corner",
  shortName: "Vang Hè",
  slogan: "Nơi Bàn Tiệc Mở Lời Cho Cuộc Vui",
  description:
    "Vanghè — The Wine Corner: Góc rượu vang ấm cúng giữa lòng Nha Trang và hệ thống tuyển chọn rượu vang nhập khẩu cao cấp. Nơi bàn tiệc tablescape nghệ thuật gặp gỡ những giọt vang tinh hoa, kết nối câu chuyện và cảm xúc.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ruouvanghe.vn",
  ogImage: "https://ruouvanghe.vn/opengraph-image",
  keywords: [
    "vang hè",
    "vanghè the wine corner",
    "rượu vang hè nha trang",
    "quán rượu vang nha trang",
    "tablescape tiệc rượu vang",
    "rượu vang nhập khẩu chính hãng",
    "rượu vang ý cao cấp",
    "rượu vang pháp bordeaux",
    "đặt bàn tiệc rượu vang",
    "sommelier tư vấn rượu vang",
    "hầm rượu bảo quản 16 độ",
    "cold cut phô mai rượu vang"
  ],
  author: {
    name: "Vang Hè · The Wine Corner",
    url: "https://ruouvanghe.vn",
  },
  creator: "Vanghè Sommelier & Hospitality Team",
  publisher: "Vanghè — The Wine Corner",
  contact: {
    hotline: "0866.817.884",
    hotlineDisplay: "0866 817 884",
    salesPhone: "0866 817 884",
    email: "contact@ruouvanghe.vn",
    zalo: "https://zalo.me/0868833059",
    zaloPhone: "0868 833 059",
    whatsapp: "https://wa.me/84866817884",
    whatsappPhone: "0866 817 884",
    kakaotalk: "0866817884",
    facebook: "https://www.facebook.com/share/14ooaK66yHR/?mibextid=wwXIfr",
    instagram: "https://www.instagram.com/vanghe.thewinecorner?dlrf=bmF5YmNvN3ByMGZo&utm_source=qr",
    tiktok: "https://www.tiktok.com/@vanghe.thewinecorner?_r=1&_t=ZS-9APUdFujXdO",
    menuUrl: "https://drive.google.com/drive/mobile/folders/1OSyZy0XzsEAoZuMRYNFzVkOgqW_nIOYk",
  },
  // URL Web App của Apps Script (apps-script/dat-ban.gs) — dạng https://script.google.com/macros/s/.../exec
  bookingScriptUrl:
    "https://script.google.com/macros/s/AKfycbzDKWskMsI696UNXP_2O1X22FVlPdSGw9nX52-cFcLVSi3mwxsifQCIN16aAsXmLyWNRQ/exec",
  primaryLocation: {
    name: "Vanghè — The Wine Corner",
    address: "65 Trịnh Phong, Phường Tân Lập, TP. Nha Trang, Khánh Hòa",
    phone: "0866 817 884",
    hours: "17:00 — 23:30 (Mở cửa tất cả các ngày trong tuần)",
    geo: {
      latitude: 12.2415,
      longitude: 109.1912,
    },
  },
  locations: [
    {
      name: "Vanghè — The Wine Corner (Nha Trang)",
      address: "65 Trịnh Phong, Phường Tân Lập, TP. Nha Trang, Khánh Hòa",
      phone: "0866 817 884",
      hours: "17:00 — 23:30 (Mở cửa hàng ngày)",
      geo: {
        latitude: 12.2415,
        longitude: 109.1912,
      },
    },
    {
      name: "Showroom & Hầm Rượu Hà Nội",
      address: "Số 88 Phố Vọng, Phường Phương Liệt, Quận Thanh Xuân, Hà Nội",
      phone: "0866 817 884",
      hours: "08:30 — 22:00 (Tất cả các ngày trong tuần)",
      geo: {
        latitude: 20.9984,
        longitude: 105.8436,
      },
    },
    {
      name: "Showroom TP. Hồ Chí Minh",
      address: "Số 168 Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, TP. Hồ Chí Minh",
      phone: "0866 817 884",
      hours: "08:30 — 22:00 (Tất cả các ngày trong tuần)",
      geo: {
        latitude: 10.7769,
        longitude: 106.6917,
      },
    },
  ],
  socialLinks: [
    { name: "Instagram", url: "https://www.instagram.com/vanghe.thewinecorner?dlrf=bmF5YmNvN3ByMGZo&utm_source=qr" },
    { name: "Facebook", url: "https://www.facebook.com/share/14ooaK66yHR/?mibextid=wwXIfr" },
    { name: "TikTok", url: "https://www.tiktok.com/@vanghe.thewinecorner?_r=1&_t=ZS-9APUdFujXdO" },
    { name: "Zalo", url: "https://zalo.me/0868833059" },
    { name: "WhatsApp", url: "https://wa.me/84866817884" },
  ],
};
