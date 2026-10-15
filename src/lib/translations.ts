export type Language = "vi" | "en" | "ru" | "ko" | "zh";

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
  /** Mã rút gọn hiển thị trên nút chọn ngôn ngữ ở header */
  short: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "vi", label: "Tiếng Việt", nativeLabel: "Tiếng Việt", flag: "🇻🇳", short: "VN" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧", short: "EN" },
  { code: "ru", label: "Русский", nativeLabel: "Русский", flag: "🇷🇺", short: "RU" },
  { code: "ko", label: "한국어", nativeLabel: "한국어", flag: "🇰🇷", short: "KR" },
  { code: "zh", label: "中文", nativeLabel: "中文", flag: "🇨🇳", short: "CN" },
];

export const translations = {
  vi: {
    // Top Bar & Header
    "topbar.address": "65 Trịnh Phong, P. Tân Lập, Nha Trang",
    "topbar.hours": "Mở cửa mỗi ngày 17:00 — 23:30",
    "topbar.hotline": "Hotline",
    "nav.about": "Giới Thiệu",
    "nav.menu": "Thực Đơn",
    "nav.reservation": "Đặt Bàn",
    "nav.story": "Giới Thiệu",
    "nav.tablescape": "Bàn Tiệc",
    "nav.space": "Không Gian",
    "nav.film": "Thước Phim",
    "nav.location": "Bản Đồ & Vị Trí",
    "nav.handbook": "Cẩm Nang Vang",
    "nav.contact": "Đặt Bàn",
    "nav.blog": "Blog",

    // Hero Section
    "script.hero": "Viên ngọc ẩm thực & rượu vang",
    "script.about": "Viên ngọc ẩm thực",
    "script.space": "Ánh nến & mộc mạc an yên",
    "script.location": "Điểm hẹn ấm cúng",
    "script.feedback": "Lời yêu thương từ thực khách",
    "script.reservation": "Đón tiếp chu đáo & tận tâm",
    "hero.live_badge": "Mở cửa mỗi tối: 17:00 — 23:30 · 65 Trịnh Phong, Nha Trang",
    "hero.eyebrow": "Vanghè · The Wine Corner · Nha Trang",
    "hero.title_white": "Nơi Bàn Tiệc",
    "hero.title_gold": "Mở Lời Cho Cuộc Vui",
    "hero.tagline":
      "Góc rượu vang ấm cúng giữa lòng phố biển Nha Trang.",
    "hero.cta_menu": "Thực Đơn ↗",
    "hero.cta_space": "Khám Phá Không Gian",
    "hero.cta_reserve": "Đặt Bàn",
    "hero.cta_film": "Thước Phim Vang Hè",
    "hero.cta_map": "Bản Đồ Google Maps ↗",
    "hero.scroll_down": "Cuộn xuống khám phá",

    // Concise About Us
    "about.badge": "GIỚI THIỆU · VANG HÈ NHA TRANG",
    "about.title": "Góc Nhỏ Thưởng Vang Ấm Cúng",
    "about.quote":
      "Ở Vang Hè, chúng tôi không đơn thuần rót một ly vang. Chúng tôi ủ ấm những câu chuyện, gìn giữ những khoảnh khắc mà thời gian dường như ngưng đọng bên ánh nến lung linh và giai điệu jazz êm đềm.",
    "about.quote_author": "— Vang Hè · 65 Trịnh Phong, Nha Trang",
    "about.lead":
      "Vang Hè là góc nhỏ tại 65 Trịnh Phong — ánh đèn vàng dịu, nhịp phố biển chậm lại cho những buổi tối bên ly vang.",
    "about.body1":
      "Không cầu kỳ. Giá trị của một chai vang ngon nằm ở khoảnh khắc mở ra giữa bạn bè và người thương.",
    "about.p1_title": "Rượu Vang Tuyển Chọn",
    "about.p1_desc": "Sparkling, White, Rose & Red tuyển chọn từ các điền trang danh tiếng thế giới, bảo quản hầm chuẩn 16°C.",
    "about.p2_title": "Cold Cut & Khai Vị Chuẩn Gu",
    "about.p2_desc": "Khay thịt nguội Jamon Iberico, phô mai nhập khẩu châu Âu và bánh mì Sourdough nướng giòn cùng Pate Hải Phòng.",
    "about.p3_title": "Không Gian Thân Mật",
    "about.p3_desc": "Ánh nến ấm áp, giai điệu dịu êm và bàn tiệc lãng mạn cho những buổi hẹn hò hay gặp gỡ bạn bè thân tình.",
    "about.cta_menu": "Xem Thực Đơn Chi Tiết ↗",

    // Home Menu Preview Section
    "homemenu.badge": "THỰC ĐƠN · MENU HIGHLIGHTS",
    "homemenu.title": "Thực Đơn Theo Ngày",
    "homemenu.subtitle":
      "Rượu vang tuyển chọn cùng cold cut, phô mai và bánh mì Sourdough.",
    "homemenu.cta": "Xem Thực Đơn ↗",

    // Story
    "story.badge": "GIỚI THIỆU · VANG HÈ",
    "story.title": "Góc Nhỏ Thưởng Vang Ấm Cúng Giữa Phố Biển",
    "story.quote":
      "Ở Vang Hè, chúng tôi không đơn thuần rót một ly vang. Chúng tôi ủ ấm những câu chuyện bên ánh nến lung linh và giai điệu jazz êm đềm.",
    "story.quote_author": "— Vang Hè · 65 Trịnh Phong, Nha Trang",
    "story.lead":
      "Vang Hè (The Wine Corner) là góc nhỏ ấm áp tại số 65 Trịnh Phong, nơi ánh đèn vàng hạ bớt độ sáng và nhịp sống phố biển chậm lại.",
    "story.body1":
      "Chúng tôi tin rằng: giá trị lớn nhất của một chai vang ngon không nằm ở mức giá, mà ở khoảnh khắc nó được mở ra giữa những người bạn, người thương.",
    "story.body2":
      "Dù bạn muốn thưởng thức một dòng vang đỏ đậm sâu hay nhâm nhi ly vang trắng mát lạnh cùng đĩa cold cut sau ngày dài — Vang Hè luôn sẵn sàng một chiếc ghế êm và nụ cười đón tiếp.",
    "story.p1_title": "Rượu Vang Tuyển Chọn",
    "story.p1_desc": "Hầm ủ 16°C giữ trọn vẹn tầng hương hoa quả cho từng dòng vang.",
    "story.p2_title": "Cold Cut Chuẩn Gu",
    "story.p2_desc": "Phô mai châu Âu, Jamon Iberico và bánh mì Sourdough Pate Hải Phòng.",
    "story.p3_title": "Ánh Nến & Gỗ Mộc",
    "story.p3_desc": "Không gian mộc mạc bên ánh nến ấm, đưa nhịp sống chậm lại.",
    "story.p4_title": "Chạm Ly Pha Lê",
    "story.p4_desc": "Tiếng ly pha lê ngân vang mở đầu cho những sẻ chia chân thành.",
    "story.img_tag": "Vang Hè · The Wine Corner · Nha Trang",
    "story.img_sub": "Góc hẹn thân mật từ 17:00 mỗi chiều",
    "story.accent_badge": "Ấm cúng & Lãng mạn",

    // Space
    "space.badge": "KHÔNG GIAN · THE SPACE",
    "space.title": "Không Gian Cho Khoảnh Khắc Đẹp",
    "space.subtitle":
      "Mộc mạc, ấm cúng — nơi bạn có thể ngồi lâu bên người thân.",
    "space.g1_tag": "01 · Lounge & Bar",
    "space.g1_title": "Quầy Bar & Không Gian Đón Khách",
    "space.g1_desc": "Ánh sáng ấm cúng, ghế da êm ái cùng quầy bar gỗ mộc mạc",
    "space.g2_tag": "02 · Cellar & Crystal",
    "space.g2_title": "Kệ Vang Tuyển Chọn & Ly Pha Lê",
    "space.g2_desc": "Bảo quản chuẩn 16°C cùng ly pha lê cho từng dòng vang",
    "space.g3_tag": "03 · Banquette Nook",
    "space.g3_title": "Băng Ghế Banquette & Bàn Tiệc Ấm Cúng",
    "space.g3_desc": "Góc trò chuyện riêng tư bên ánh đèn viền mềm mại",
    "space.g4_tag": "04 · Brand Heritage",
    "space.g4_title": "Biển Đồng Vanghè & Góc Check-in Tinh Tế",
    "space.g4_desc": "Điểm nhấn kim loại đồng ấm áp và góc gương nghệ thuật",
    "space.g5_tag": "05 · Candlelit Mood",
    "space.g5_title": "Nến Chai Mộc & Bình Hoa Bàn Tiệc",
    "space.g5_desc": "Chân nến sáp tự nhiên và hoa tươi mang lại mỹ cảm lãng mạn",
    "space.g6_title": "Không Gian Thân Mật",
    "space.g6_desc": "Sofa êm ái cho những đêm vui không khoảng cách",
    "space.banner_badge": "TRẢI NGHIỆM ĐẶC BIỆT · VANG HÈ CORNER",
    "space.banner_title": "Bàn Tiệc Hoa Nến & Khay Cold Cut Thượng Hạng",
    "space.banner_desc": "Sự kết hợp hoàn mỹ giữa hoa tươi rực rỡ, đĩa phô mai thịt nguội thượng hạng và ly vang nồng nàn cho những buổi gặp gỡ thăng hoa.",
    "space.banner_tag1": "Hoa tươi theo mùa",
    "space.banner_tag2": "Cold Cut & Cheese",
    "space.banner_tag3": "Ly Pha Lê Sommelier",

    // Location
    "loc.badge": "ĐIỂM HẸN NHA TRANG",
    "loc.title": "Hẹn Gặp Bạn Tại Vang Hè",
    "loc.subtitle": "65 Trịnh Phong, P. Tân Lập, Nha Trang · 17:00 — 23:30 mỗi ngày.",
    "loc.c1_label": "THỜI GIAN MỞ CỬA",
    "loc.c1_val": "17:00 — 23:30",
    "loc.c1_sub": "Mở cửa mỗi ngày từ hoàng hôn đến khuya",
    "loc.c2_label": "ĐỊA ĐIỂM TRẢI NGHIỆM",
    "loc.c2_val": "65 Trịnh Phong",
    "loc.c2_sub": "P. Tân Lập, TP. Nha Trang, Khánh Hòa",
    "loc.c3_label": "HOTLINE & ZALO",
    "loc.c3_val": "0866 817 884",
    "loc.c3_sub": "Hotline · Zalo: 0868 833 059",
    "loc.c4_label": "DỊCH VỤ ĐẶC TRƯNG",
    "loc.c4_val": "Wine & Cold Cut",
    "loc.c4_sub": "Bàn tiệc hoa nến & ghép đôi ẩm thực",
    "loc.map_title": "Vang Hè — The Wine Corner trên Google Maps",
    "loc.map_addr": "65 Trịnh Phong, Phường Tân Lập, Nha Trang",
    "loc.map_btn": "Mở Trên Google Maps",

    // Reservation
    "res.badge": "ĐẶT BÀN",
    "res.title": "Đặt Bàn",
    "res.subtitle":
      "Đặt trước để có bàn ấm cúng. Chúng tôi sẽ gọi xác nhận trong 15 phút.",
    "res.success_title": "Đã nhận yêu cầu!",
    "res.success_desc": "Chúng tôi sẽ liên hệ trong vòng 15 phút để xác nhận.",
    "res.success_hotline": "Cần gấp? Gọi hotline:",
    "res.success_btn": "Đặt thêm bàn",
    "res.label_name": "Họ & Tên *",
    "res.label_phone": "Số điện thoại *",
    "res.label_date": "Ngày",
    "res.label_time": "Giờ",
    "res.label_guests": "Số khách",
    "res.label_occasion": "Dịp gặp gỡ",
    "res.label_notes": "Ghi chú (tuỳ chọn)",
    "res.notes_placeholder": "Ví dụ: bàn góc yên tĩnh, cold cut sẵn…",
    "res.submit_btn": "Gửi yêu cầu đặt bàn",
    "res.sidebar_badge": "LIÊN HỆ",
    "res.sidebar_title": "Liên hệ nhanh",
    "res.sidebar_desc": "Gọi hoặc nhắn để đặt bàn tối nay.",
    "res.hotline_sub": "Hotline",
    "res.sidebar_note": "Mở cửa 17:00 — 23:30",

    // Feedback / Guest Reviews
    "feedback.badge": "CẢM NHẬN THỰC KHÁCH",
    "feedback.title": "Khách Nói Về Vang Hè",
    "feedback.subtitle": "Những khoảnh khắc ấm áp bên ly vang.",
    "feedback.rating_summary": "4.9/5 từ khách đã ghé thăm",
    "feedback.c1_name": "Tran Chammy",
    "feedback.c1_role": "Local Guide · Google Maps",
    "feedback.c1_comment": "Thèm wine nên lên gg map thử thì thấy đc tiệm. Ghé tính uống 1 ly rồi về mà hông nghĩ đi trúng lady night, thế là buy 1 get 1 🤣 mấy bạn nhân viên dth, chu đáo. Nói chuyện nhỏ nhẹ rất hợp tai. Loại mình uống mấy bạn rcm cũng rất ngon nữa. Rất iu và hợp vibe dữ lắm, nhạc hay và coá gu. Nhất định sẽ quay lại",
    "feedback.c1_tag": "Bàn hoa nến",
    "feedback.c2_name": "Тринити",
    "feedback.c2_role": "Google Maps",
    "feedback.c2_comment": "Tôi và bạn gái tình cờ đi ngang qua và thấy một quán rượu rất phong cách. Chúng tôi bước vào và được tặng ưu đãi đặc biệt mua 2 ly rượu kèm 2 đồ uống khác. Quán có nhiều loại rượu ngon, và dù tôi không phải chuyên gia, nhưng tôi rất thích rượu ở đây. Không gian quán rất dễ thương, tối giản và được thiết kế tinh tế. Tôi rất khuyên bạn nên đến đây hẹn hò lãng mạn – thật tuyệt vời!",
    "feedback.c2_tag": "Bàn thân mật",
    "feedback.c3_name": "Ma Vương Kaon",
    "feedback.c3_role": "Local Guide · Google Maps",
    "feedback.c3_comment": "Nhân viên tư vấn phục vụ nhiệt tình, sơ hở là rót nước cho khách khi hết nước :))) quán có promo cho lady night thứ 3 hàng tuần mình có thể chọn 2 loại rượu vang khác nhau mình đi trúng nên khá lời. Về menu thì nhiều loại được uống theo ly và đồ ăn, vang giá cũng khá rẻ. Lúc mình đi ko xem menu nên tới thấy cũng hơi bất ngờ",
    "feedback.c3_tag": "Romantic Dinner",


    // Dedicated Menu Page Translations (/thuc-don)
    "menu.page_title": "Thực Đơn — Vang Hè Nha Trang",
    "menu.hero_title": "Thực Đơn Vang Hè",
    "menu.hero_subtitle": "The Wine Corner · 65 Trịnh Phong, Nha Trang",
    "menu.alacarte_title": "Thực đơn gọi món",
    "menu.alacarte_desc":
      "Hòa tấu giữa rượu vang tuyển chọn và đồ nguội thượng hạng: Jamon Iberico, phô mai châu Âu và bánh mì Sourdough nướng giòn.",
    "menu.btn_explore": "Thực đơn",
    "menu.slider_title": "Món Ăn & Thức Uống Đặc Sắc",
    "menu.slider_subtitle": "Tuyển chọn chuẩn gu tại Vang Hè",
    "menu.more_title": "Một điều gì đó mới hơn....",
    "menu.more_subtitle":
      "Những set kết hợp chuẩn gu cho bàn tiệc thêm trọn vẹn.",
    "menu.tapas_title": "COLD CUT & TAPAS",
    "menu.tapas_desc":
      "Jamon Iberico, phô mai Truffle, xúc xích Chorizo và quả ô liu tuyển chọn.",
    "menu.bread_title": "BÁNH MÌ SOURDOUGH & MÓN KÈM",
    "menu.bread_desc":
      "Bánh mì Sourdough giòn rụm, Pate Hải Phòng gia truyền và phô mai hun khói.",
    "menu.wine_title": "BỘ SƯU TẬP RƯỢU VANG",
    "menu.wine_desc":
      "Sparkling, White và Rose tuyển chọn từ các điền trang danh tiếng thế giới, bảo quản chuẩn 16°C.",
    "menu.modal_title": "Thực Đơn — Vang Hè Nha Trang",
    "menu.modal_hint": "Bấm vào các trang để xem hình ảnh thực đơn",
    "menu.modal_close": "Đóng",
    "menu.modal_drive_btn": "Xem Toàn Bộ Thực Đơn ↗",
    "menu.vat_notice": "Giá trên áp dụng theo menu tại quán (chưa bao gồm VAT). Đơn vị: 1.000 VNĐ.",

    // Trust Bar & Footer
    "trust.t1_title": "100% Chính Hãng",
    "trust.t1_desc": "Đầy đủ CO/CQ",
    "trust.t2_title": "Hầm Vang 16°C",
    "trust.t2_desc": "Bảo quản tiêu chuẩn",
    "trust.t3_title": "Cold Cut Chuẩn Gu",
    "trust.t3_desc": "Jamon Iberico & phô mai",
    "trust.t4_title": "Tư Vấn Sommelier",
    "trust.t4_desc": "Chu đáo & tận tâm",
    "footer.brand_desc":
      "Góc rượu vang ấm cúng giữa lòng phố biển Nha Trang.",
    "footer.open_hours": "Mở cửa mỗi tối:",
    "footer.col_explore": "Khám Phá",
    "footer.col_contact": "Liên Hệ & Đặt Bàn",
    "footer.contact_intro":
      "Liên hệ trực tiếp để chuẩn bị trước bàn tiệc chu đáo.",
    "footer.legal":
      "Thưởng thức có trách nhiệm: Tuân thủ quy định pháp luật. Rượu bia không dành cho người dưới 18 tuổi. Đã uống rượu bia, không lái xe.",
    "footer.copy": "© 2026 Vang Hè · The Wine Corner · 65 Trịnh Phong, Nha Trang.",
  },

  en: {
    // Top Bar & Header
    "topbar.address": "65 Trinh Phong, Tan Lap, Nha Trang",
    "topbar.hours": "Open Daily 17:00 — 23:30",
    "topbar.hotline": "Hotline",
    "nav.about": "About Us",
    "nav.menu": "Menu",
    "nav.reservation": "Reservation",
    "nav.story": "About Us",
    "nav.tablescape": "Tablescape",
    "nav.space": "The Space",
    "nav.film": "Film",
    "nav.location": "Map & Location",
    "nav.handbook": "Wine Journal",
    "nav.contact": "Reservation",
    "nav.blog": "Blog",

    // Hero Section
    "script.hero": "A culinary & wine gem",
    "script.about": "A coastal culinary gem",
    "script.space": "Warm candlelight & rustic charm",
    "script.location": "An intimate rendezvous",
    "script.feedback": "Heartfelt words from guests",
    "script.reservation": "Thoughtful & gracious welcome",
    "hero.live_badge": "Open Tonight: 17:00 — 23:30 · 65 Trinh Phong, Nha Trang",
    "hero.eyebrow": "Vanghè · The Wine Corner · Nha Trang",
    "hero.title_white": "Where Fine Wine",
    "hero.title_gold": "Begins The Night",
    "hero.tagline":
      "A cozy wine corner in the heart of coastal Nha Trang.",
    "hero.cta_menu": "Menu ↗",
    "hero.cta_space": "Explore The Space",
    "hero.cta_reserve": "Reserve",
    "hero.cta_film": "Cinematic Film",
    "hero.cta_map": "Google Maps Directions ↗",
    "hero.scroll_down": "Scroll to discover",

    // Concise About Us
    "about.badge": "ABOUT US · VANG HÈ NHA TRANG",
    "about.title": "An Intimate Wine Corner",
    "about.quote":
      "At Vang Hè, we do not merely pour a glass of wine. We nurture stories, holding still the fleeting moments where time gently slows beside dancing candlelight and soothing jazz melodies.",
    "about.quote_author": "— Vang Hè · 65 Trinh Phong, Nha Trang",
    "about.lead":
      "Vang Hè is a quiet corner at 65 Trinh Phong — soft golden light, a slower coastal pace for evenings over wine.",
    "about.body1":
      "Unpretentious. The best of wine is the moment it is shared with friends and loved ones.",
    "about.p1_title": "Curated Wine Cellar",
    "about.p1_desc": "Sparkling, White, Rose & Red wines curated from premier estates, cellared at precise 16°C.",
    "about.p2_title": "Artisanal Charcuterie",
    "about.p2_desc": "Jamon Iberico ham platters, European cheeses, and oven-crisp sourdough with Hai Phong pate.",
    "about.p3_title": "Intimate Ambiance",
    "about.p3_desc": "Warm candle glow, gentle jazz, and candlelit tables for unforgettable romantic dates and heartfelt reunions.",
    "about.cta_menu": "View Full Menu ↗",

    // Home Menu Preview Section
    "homemenu.badge": "MENU HIGHLIGHTS",
    "homemenu.title": "Seasonal Menu",
    "homemenu.subtitle":
      "Curated wines with cold cuts, cheese, and sourdough.",
    "homemenu.cta": "View Menu ↗",

    // Story
    "story.badge": "ABOUT US · VANG HÈ",
    "story.title": "A Cozy Coastal Wine Haven",
    "story.quote":
      "At Vang Hè, we do not merely pour a glass of wine. We nurture stories beside dancing candlelight and soothing jazz melodies.",
    "story.quote_author": "— Vang Hè · 65 Trinh Phong, Nha Trang",
    "story.lead":
      "Vang Hè (The Wine Corner) is a warm, inviting corner at 65 Trinh Phong, where soft ambient lighting slows down the coastal pulse.",
    "story.body1":
      "We believe the true value of a bottle of wine lies not in its label, but in the cherished memories uncorked with friends and loved ones.",
    "story.body2":
      "Whether you desire a full-bodied red or a crisp, chilled white paired with artisanal cold cuts after a sunlit day — Vang Hè always welcomes you with an open heart.",
    "story.p1_title": "Curated Vintages",
    "story.p1_desc": "Cellared at 16°C preserving pure berry and terroir nuances.",
    "story.p2_title": "Artisanal Cold Cuts",
    "story.p2_desc": "European cheese, Jamon Iberico, and Hai Phong pate sourdough.",
    "story.p3_title": "Candlelight & Wood",
    "story.p3_desc": "Rustic wood textures and flickering candle glow to unwind.",
    "story.p4_title": "Crystal Cheers",
    "story.p4_desc": "Sommelier crystal glasses ringing in heartfelt conversations.",
    "story.img_tag": "Vang Hè · The Wine Corner · Nha Trang",
    "story.img_sub": "Intimate rendezvous every evening from 17:00",
    "story.accent_badge": "Cozy & Romantic",

    // Space
    "space.badge": "THE SPACE · VANG HÈ",
    "space.title": "Space for Beautiful Moments",
    "space.subtitle":
      "Rustic and cozy — linger for hours with the people you love.",
    "space.g1_tag": "01 · Lounge & Bar",
    "space.g1_title": "Bar & Welcome Lounge",
    "space.g1_desc": "Warm amber lighting, plush leather seating, and rustic wooden bar",
    "space.g2_tag": "02 · Cellar & Crystal",
    "space.g2_title": "Wine Cellar & Crystal Stemware",
    "space.g2_desc": "16°C climate-controlled storage with fine crystal for every grape variety",
    "space.g3_tag": "03 · Banquette Nook",
    "space.g3_title": "Banquette Seating & Cozy Dining",
    "space.g3_desc": "Intimate private alcove flanked by soft architectural cove lighting",
    "space.g4_tag": "04 · Brand Heritage",
    "space.g4_title": "Brass Emblem & Photo Corner",
    "space.g4_desc": "Warm brushed brass emblem and artistic backlit mirror corner",
    "space.g5_tag": "05 · Candlelit Mood",
    "space.g5_title": "Candle Bottles & Floral Tablescape",
    "space.g5_desc": "Natural dripping wax candles and fresh seasonal floral arrangements",
    "space.g6_title": "Intimate Lounge",
    "space.g6_desc": "Comfortable seating for vibrant evenings with zero distance",
    "space.banner_badge": "SIGNATURE EXPERIENCE · VANG HÈ CORNER",
    "space.banner_title": "Floral Candle Tablescape & Charcuterie Platter",
    "space.banner_desc": "A perfect symphony of vibrant blooms, artisan cheese & cold cut boards, and velvety vintages for unforgettable gatherings.",
    "space.banner_tag1": "Seasonal Blooms",
    "space.banner_tag2": "Cold Cut & Cheese",
    "space.banner_tag3": "Crystal Glassware",

    // Location
    "loc.badge": "NHA TRANG DESTINATION",
    "loc.title": "Meet Us At Vang Hè",
    "loc.subtitle": "65 Trinh Phong, Tan Lap, Nha Trang · Open daily 17:00 — 23:30.",
    "loc.c1_label": "OPENING HOURS",
    "loc.c1_val": "17:00 — 23:30",
    "loc.c1_sub": "Open daily from golden hour until late night",
    "loc.c2_label": "LOCATION",
    "loc.c2_val": "65 Trinh Phong",
    "loc.c2_sub": "Tan Lap Ward, Nha Trang City, Khanh Hoa",
    "loc.c3_label": "HOTLINE & ZALO",
    "loc.c3_val": "0866 817 884",
    "loc.c3_sub": "Hotline · Zalo: 0868 833 059",
    "loc.c4_label": "SIGNATURE OFFERINGS",
    "loc.c4_val": "Wine & Cold Cut",
    "loc.c4_sub": "Floral tablescapes & bespoke food pairing",
    "loc.map_title": "Vang Hè — The Wine Corner on Google Maps",
    "loc.map_addr": "65 Trinh Phong, Tan Lap, Nha Trang",
    "loc.map_btn": "Open in Google Maps",

    // Reservation
    "res.badge": "RESERVATION",
    "res.title": "Reserve a Table",
    "res.subtitle":
      "Book ahead for a cozy seat. We will call to confirm within 15 minutes.",
    "res.success_title": "Request received!",
    "res.success_desc": "We will contact you within 15 minutes to confirm.",
    "res.success_hotline": "Need it now? Call:",
    "res.success_btn": "Book another table",
    "res.label_name": "Full name *",
    "res.label_phone": "Phone *",
    "res.label_date": "Date",
    "res.label_time": "Time",
    "res.label_guests": "Guests",
    "res.label_occasion": "Occasion",
    "res.label_notes": "Notes (optional)",
    "res.notes_placeholder": "E.g. quiet corner, cheese platter ready…",
    "res.submit_btn": "Send reservation request",
    "res.sidebar_badge": "CONTACT",
    "res.sidebar_title": "Quick contact",
    "res.sidebar_desc": "Call or message to book for tonight.",
    "res.hotline_sub": "Hotline",
    "res.sidebar_note": "Open 17:00 — 23:30",

    // Feedback / Guest Reviews
    "feedback.badge": "GUEST EXPERIENCES",
    "feedback.title": "What Guests Say",
    "feedback.subtitle": "Warm moments shared over a glass of wine.",
    "feedback.rating_summary": "4.9/5 from visiting guests",
    "feedback.c1_name": "Tran Chammy",
    "feedback.c1_role": "Local Guide · Google Maps",
    "feedback.c1_comment": "Craving wine, I searched Google Maps and found this place. I only meant to have one glass, but it happened to be Lady Night — buy 1 get 1 🤣 The staff are lovely and attentive, soft-spoken and easy to talk to. The wines they recommended were delicious too. Love the vibe — great music, real taste. Will definitely be back!",
    "feedback.c1_tag": "Floral Tablescape",
    "feedback.c2_name": "Тринити",
    "feedback.c2_role": "Google Maps",
    "feedback.c2_comment": "My girlfriend and I were walking by and spotted a very stylish wine bar. We stepped in and got a special offer: buy 2 glasses of wine, get 2 more drinks. They have many great wines, and although I'm no expert, I really loved the wine here. The space is adorable, minimalist and beautifully designed. Highly recommended for a romantic date — just wonderful!",
    "feedback.c2_tag": "Intimate Gathering",
    "feedback.c3_name": "Ma Vương Kaon",
    "feedback.c3_role": "Local Guide · Google Maps",
    "feedback.c3_comment": "Warm, attentive staff — they top up your water the moment it runs low :))) There's a Lady Night promo every Tuesday where you can pick 2 different wines; I happened to come that night, great value. Lots of wines by the glass and food on the menu, and prices are quite affordable. I didn't check the menu beforehand, so it was a pleasant surprise.",
    "feedback.c3_tag": "Romantic Dinner",


    // Dedicated Menu Page Translations (/thuc-don)
    "menu.page_title": "Menu — Vang Hè Nha Trang",
    "menu.hero_title": "Vang Hè Menu",
    "menu.hero_subtitle": "The Wine Corner · 65 Trinh Phong, Nha Trang",
    "menu.alacarte_title": "A la carte menu",
    "menu.alacarte_desc":
      "Harmonious pairing of curated wines and premium cold cuts: Jamon Iberico, European cheese, and artisan toasted sourdough.",
    "menu.btn_explore": "Menu",
    "menu.slider_title": "Signature Food & Wine",
    "menu.slider_subtitle": "Carefully curated selections at Vang Hè",
    "menu.more_title": "Something even more special....",
    "menu.more_subtitle":
      "Harmonious sets paired to perfection for your gathering.",
    "menu.tapas_title": "COLD CUT & TAPAS",
    "menu.tapas_desc":
      "Jamon Iberico ham, Truffle cheese, Chorizo sausages, and pitted olives.",
    "menu.bread_title": "SOURDOUGH BREAD & SIDES",
    "menu.bread_desc":
      "Toasted sourdough, traditional Hai Phong pate, and smoked string cheese.",
    "menu.wine_title": "WINE COLLECTION",
    "menu.wine_desc":
      "Sparkling, White, and Rose handpicked from renowned world vineyards, preserved at 16°C.",
    "menu.modal_title": "Menu — Vang Hè Nha Trang",
    "menu.modal_hint": "Select pages below to view menu images",
    "menu.modal_close": "Close",
    "menu.modal_drive_btn": "Open Full Menu ↗",
    "menu.vat_notice": "Prices follow in-house menu (VAT not included). Unit: 1,000 VND.",

    // Trust Bar & Footer
    "trust.t1_title": "100% Authentic",
    "trust.t1_desc": "Certified origin",
    "trust.t2_title": "16°C Wine Cellar",
    "trust.t2_desc": "Optimal storage",
    "trust.t3_title": "Artisanal Charcuterie",
    "trust.t3_desc": "Jamon Iberico & cheese",
    "trust.t4_title": "Sommelier Guidance",
    "trust.t4_desc": "Dedicated service",
    "footer.brand_desc":
      "An intimate wine corner in coastal Nha Trang.",
    "footer.open_hours": "Open nightly:",
    "footer.col_explore": "Explore",
    "footer.col_contact": "Contact & Booking",
    "footer.contact_intro":
      "Contact us directly to reserve your candlelit table.",
    "footer.legal":
      "Drink responsibly: In compliance with law. Alcohol is not for persons under 18. Do not drive after drinking.",
    "footer.copy": "© 2026 Vang Hè · The Wine Corner · 65 Trinh Phong, Nha Trang.",
  },

  ru: {
    // Top Bar & Header
    "topbar.address": "65 Trinh Phong, Tan Lap, Нячанг",
    "topbar.hours": "Открыто ежедневно 17:00 — 23:30",
    "topbar.hotline": "Горячая линия",
    "nav.about": "О нас",
    "nav.menu": "Меню",
    "nav.reservation": "Бронь стола",
    "nav.story": "О нас",
    "nav.tablescape": "Столы и свечи",
    "nav.space": "Атмосфера",
    "nav.film": "Фильм",
    "nav.location": "Карта и адрес",
    "nav.handbook": "Гид по винам",
    "nav.contact": "Бронь стола",
    "nav.blog": "Блог",

    // Hero Section
    "script.hero": "Винная жемчужина у моря",
    "script.about": "Кулинарная жемчужина",
    "script.space": "Тепло свечей и дерева",
    "script.location": "Место душевных встреч",
    "script.feedback": "Теплые слова наших гостей",
    "script.reservation": "Искреннее гостеприимство",
    "hero.live_badge": "Открыто каждый вечер: 17:00 — 23:30 · 65 Trinh Phong, Нячанг",
    "hero.eyebrow": "Vanghè · The Wine Corner · Нячанг",
    "hero.title_white": "Там, где вино",
    "hero.title_gold": "Открывает вечер",
    "hero.tagline":
      "Уютный винный уголок в сердце прибрежного Нячанга.",
    "hero.cta_menu": "Меню ↗",
    "hero.cta_space": "Посмотреть залы",
    "hero.cta_reserve": "Бронь",
    "hero.cta_film": "Фильм о Vang Hè",
    "hero.cta_map": "Google Maps ↗",
    "hero.scroll_down": "Прокрутите вниз",

    // Concise About Us
    "about.badge": "О НАС · VANG HÈ НЯЧАНГ",
    "about.title": "Уютный винный уголок",
    "about.quote":
      "В Vang Hè мы не просто наливаем вино. Мы согреваем истории и бережем мгновения, когда время замирает при свете свечей под звуки мягкого джаза.",
    "about.quote_author": "— Vang Hè · 65 Trinh Phong, Нячанг",
    "about.lead":
      "Vang Hè — тихий уголок на Trinh Phong 65: мягкий свет и спокойный вечер за бокалом вина.",
    "about.body1":
      "Без пафоса. Ценность вина — в мгновениях с близкими.",
    "about.p1_title": "Коллекция вин",
    "about.p1_desc": "Игристые, белые, розовые и красные вина из лучших виноделен мира при температуре 16°C.",
    "about.p2_title": "Мясные и сырные тарелки",
    "about.p2_desc": "Хамон Иберико, европейские сыры и хрустящий хлеб на закваске с нежным паштетом.",
    "about.p3_title": "Уютная атмосфера",
    "about.p3_desc": "Мягкий свет свечей, нежный джаз и романтическая сервировка для свиданий и теплых встреч.",
    "about.cta_menu": "Полное меню ↗",

    // Home Menu Preview Section
    "homemenu.badge": "МЕНЮ · ФИРМЕННЫЕ БЛЮДА",
    "homemenu.title": "Меню дня",
    "homemenu.subtitle":
      "Отборные вина с мясными тарелками, сыром и хлебом на закваске.",
    "homemenu.cta": "Смотреть меню ↗",

    // Story
    "story.badge": "О НАС · VANG HÈ",
    "story.title": "Уютный винный бар в прибрежном городе",
    "story.quote":
      "В Vang Hè мы бережно храним моменты теплого общения при мерцании свечей под мягкие ритмы джаза.",
    "story.quote_author": "— Vang Hè · 65 Trinh Phong, Нячанг",
    "story.lead":
      "Vang Hè — островок тепла и спокойствия на Trinh Phong 65, где отдых обретает новый благородный вкус.",
    "story.body1":
      "Ценность бутылки вина раскрывается в улыбках и историях тех, кто собрался за общим столом.",
    "story.body2":
      "Хотите ли вы глубокое красное вино или бокал охлажденного белого с тарелкой деликатесов — Vang Hè всегда рад вам.",
    "story.p1_title": "Отборные вина",
    "story.p1_desc": "Хранение при 16°C для идеального раскрытия букета.",
    "story.p2_title": "Гастрономия",
    "story.p2_desc": "Иберийский хамон, сыры Европы и традиционные закуски.",
    "story.p3_title": "Свечи и дерево",
    "story.p3_desc": "Натуральные текстуры дерева и живое пламя свечей.",
    "story.p4_title": "Хрусталь сомелье",
    "story.p4_desc": "Звон бокалов, открывающий вечер искренних бесед.",
    "story.img_tag": "Vang Hè · The Wine Corner · Нячанг",
    "story.img_sub": "Уютные встречи каждый вечер с 17:00",
    "story.accent_badge": "Уют и романтика",

    // Space
    "space.badge": "ПРОСТРАНСТВО · THE SPACE",
    "space.title": "Пространство для прекрасных моментов",
    "space.subtitle":
      "Уютно и по-домашнему — можно сидеть часами с близкими.",
    "space.g1_tag": "01 · Lounge & Bar",
    "space.g1_title": "Барная стойка и лаунж",
    "space.g1_desc": "Теплый янтарный свет, мягкая кожаная мебель и массив натурального дерева",
    "space.g2_tag": "02 · Cellar & Crystal",
    "space.g2_title": "Винная витрина и хрусталь",
    "space.g2_desc": "Температурный режим 16°C и бокалы под каждый сорт винограда",
    "space.g3_tag": "03 · Banquette Nook",
    "space.g3_title": "Уединенные банкетки и столики",
    "space.g3_desc": "Комфортные диваны с мягкой фоновой подсветкой",
    "space.g4_tag": "04 · Brand Heritage",
    "space.g4_title": "Латунный логотип Vanghè",
    "space.g4_desc": "Теплые латунные акценты и арт-зеркала",
    "space.g5_tag": "05 · Candlelit Mood",
    "space.g5_title": "Бутылки-подсвечники и цветы",
    "space.g5_desc": "Капли воска на бутылках и живые сезонные цветы",
    "space.g6_title": "Камерный зал",
    "space.g6_desc": "Удобные кресла для бесед без дистанции",
    "space.banner_badge": "ОСОБЕННЫЙ ОПЫТ · VANG HÈ CORNER",
    "space.banner_title": "Сервировка со свечами и тарелка деликатесов",
    "space.banner_desc": "Симфония свежих цветов, сыров, испанского хамона и благородного вина для незабываемых вечеров.",
    "space.banner_tag1": "Свежие цветы",
    "space.banner_tag2": "Сыры и хамон",
    "space.banner_tag3": "Хрусталь сомелье",

    // Location
    "loc.badge": "ЛОКАЦИЯ В НЯЧАНГЕ",
    "loc.title": "Ждем вас в Vang Hè",
    "loc.subtitle": "65 Trinh Phong, Tan Lap, Нячанг · Ежедневно 17:00 — 23:30.",
    "loc.c1_label": "ЧАСЫ РАБОТЫ",
    "loc.c1_val": "17:00 — 23:30",
    "loc.c1_sub": "Ежедневно с заката до поздней ночи",
    "loc.c2_label": "АДРЕС",
    "loc.c2_val": "65 Trinh Phong",
    "loc.c2_sub": "Квартал Tan Lap, город Нячанг",
    "loc.c3_label": "ГОРЯЧАЯ ЛИНИЯ И ZALO",
    "loc.c3_val": "0866 817 884",
    "loc.c3_sub": "Горячая линия · WhatsApp / Kakao: 0866 817 884",
    "loc.c4_label": "ФИРМЕННЫЙ СЕРВИС",
    "loc.c4_val": "Вино и гастрономия",
    "loc.c4_sub": "Декор со свечами и фуд-пейринг",
    "loc.map_title": "Vang Hè — The Wine Corner на Google картах",
    "loc.map_addr": "65 Trinh Phong, Tan Lap, Нячанг",
    "loc.map_btn": "Открыть на Google Maps",

    // Reservation
    "res.badge": "БРОНИРОВАНИЕ",
    "res.title": "Забронировать стол",
    "res.subtitle":
      "Бронируйте заранее. Мы подтвердим звонком в течение 15 минут.",
    "res.success_title": "Заявка принята!",
    "res.success_desc": "Мы свяжемся с вами в течение 15 минут.",
    "res.success_hotline": "Срочно? Звоните:",
    "res.success_btn": "Забронировать еще",
    "res.label_name": "Имя *",
    "res.label_phone": "Телефон *",
    "res.label_date": "Дата",
    "res.label_time": "Время",
    "res.label_guests": "Гости",
    "res.label_occasion": "Повод",
    "res.label_notes": "Заметки (необязательно)",
    "res.notes_placeholder": "Например: тихий столик, сырная тарелка…",
    "res.submit_btn": "Отправить заявку",
    "res.sidebar_badge": "КОНТАКТЫ",
    "res.sidebar_title": "Быстрая связь",
    "res.sidebar_desc": "Позвоните или напишите для брони на сегодня.",
    "res.hotline_sub": "Горячая линия",
    "res.sidebar_note": "Открыто 17:00 — 23:30",

    // Feedback / Guest Reviews
    "feedback.badge": "ОТЗЫВЫ ГОСТЕЙ",
    "feedback.title": "Отзывы гостей",
    "feedback.subtitle": "Теплые моменты за бокалом вина.",
    "feedback.rating_summary": "4.9/5 от гостей",
    "feedback.c1_name": "Tran Chammy",
    "feedback.c1_role": "Local Guide · Google Maps",
    "feedback.c1_comment": "Захотелось вина — нашла это место на Google Maps. Зашла на один бокал и попала на Lady Night: 1+1 🤣 Персонал милый и внимательный, говорят тихо и приятно. Вино, которое посоветовали, очень вкусное. Обожаю атмосферу — отличная музыка со вкусом. Обязательно вернусь!",
    "feedback.c1_tag": "Стол со свечами",
    "feedback.c2_name": "Тринити",
    "feedback.c2_role": "Google Maps",
    "feedback.c2_comment": "Мы с девушкой случайно проходили мимо и увидели очень стильный винный бар. Зашли и получили специальное предложение: 2 бокала вина и 2 других напитка. Здесь много хороших вин, и хотя я не эксперт, вино мне очень понравилось. Интерьер очень милый, минималистичный и продуманный. Очень рекомендую для романтического свидания — просто замечательно!",
    "feedback.c2_tag": "Встреча с друзьями",
    "feedback.c3_name": "Ma Vương Kaon",
    "feedback.c3_role": "Local Guide · Google Maps",
    "feedback.c3_comment": "Персонал внимательный и радушный — сразу подливают воду, как только стакан пустеет :))) По вторникам акция Lady Night, можно выбрать 2 разных вина — я как раз попала, очень выгодно. В меню много вин по бокалам и блюд, цены вполне доступные. Я не смотрела меню заранее, так что была приятно удивлена.",
    "feedback.c3_tag": "Romantic Dinner",


    // Dedicated Menu Page Translations (/thuc-don)
    "menu.page_title": "Меню — Vang Hè Нячанг",
    "menu.hero_title": "Меню Vang Hè",
    "menu.hero_subtitle": "The Wine Corner · 65 Trinh Phong, Нячанг",
    "menu.alacarte_title": "Меню à la carte",
    "menu.alacarte_desc":
      "Гармония отборных вин и закусок: Хамон Иберико, благородные сыры и хрустящий хлеб на закваске.",
    "menu.btn_explore": "Меню",
    "menu.slider_title": "Фирменные блюда и напитки",
    "menu.slider_subtitle": "Лучшие сочетания Vang Hè",
    "menu.more_title": "Нечто особенное....",
    "menu.more_subtitle":
      "Идеальные гастрономические сеты для вашего стола.",
    "menu.tapas_title": "МЯСНЫЕ И СЫРНЫЕ ТАРЕЛКИ",
    "menu.tapas_desc":
      "Хамон Иберико, трюфельный сыр, чоризо и отборные оливки.",
    "menu.bread_title": "ХЛЕБ НА ЗАКВАСКЕ И ЗАКУСКИ",
    "menu.bread_desc":
      "Хрустящий тартин, паштет Хайфон и копченый сыр косичка.",
    "menu.wine_title": "ВИННАЯ КАРТА",
    "menu.wine_desc":
      "Игристые, белые и розовые вина от знаменитых шато мира при температуре 16°C.",
    "menu.modal_title": "Меню — Vang Hè Нячанг",
    "menu.modal_hint": "Нажмите на страницы ниже для просмотра",
    "menu.modal_close": "Закрыть",
    "menu.modal_drive_btn": "Открыть полное меню ↗",
    "menu.vat_notice": "Цены согласно меню бара (без учета НДС). Единица: 1.000 VND.",

    // Trust Bar & Footer
    "trust.t1_title": "100% Оригинал",
    "trust.t1_desc": "Сертификаты качества",
    "trust.t2_title": "Погреб 16°C",
    "trust.t2_desc": "Идеальное хранение",
    "trust.t3_title": "Деликатесы",
    "trust.t3_desc": "Хамон и сыры",
    "trust.t4_title": "Гид Сомелье",
    "trust.t4_desc": "Внимание к деталям",
    "footer.brand_desc":
      "Уютный винный уголок в центре курортного Нячанга.",
    "footer.open_hours": "Открыто каждый вечер:",
    "footer.col_explore": "Навигация",
    "footer.col_contact": "Контакты и бронь",
    "footer.contact_intro":
      "Свяжитесь с нами, чтобы подготовить стол к вашему приходу.",
    "footer.legal":
      "Употребляйте ответственно: в соответствии с законом. Алкоголь не предназначен для лиц младше 18 лет. Не садитесь за руль после употребления алкоголя.",
    "footer.copy": "© 2026 Vang Hè · The Wine Corner · 65 Trinh Phong, Нячанг.",
  },

  ko: {
    // Top Bar & Header
    "topbar.address": "65 Trinh Phong, Tan Lap, 나트랑",
    "topbar.hours": "매일 영업 17:00 — 23:30",
    "topbar.hotline": "문의 전화",
    "nav.about": "소개",
    "nav.menu": "메뉴",
    "nav.reservation": "예약",
    "nav.story": "스토리",
    "nav.tablescape": "테이블 세팅",
    "nav.space": "공간",
    "nav.film": "영상",
    "nav.location": "위치 안내",
    "nav.handbook": "와인 가이드",
    "nav.contact": "예약하기",
    "nav.blog": "블로그",

    // Hero Section
    "script.hero": "도심 속 프라이빗 와인바",
    "script.about": "바닷가 감성 안식처",
    "script.space": "따스한 촛불과 원목의 아늑함",
    "script.location": "나트랑의 특별한 아지트",
    "script.feedback": "고객들의 진솔한 이야기",
    "script.reservation": "정성 가득한 VIP 환대",
    "hero.live_badge": "매일 저녁 영업: 17:00 — 23:30 · 65 Trinh Phong, 나트랑",
    "hero.eyebrow": "Vanghè · The Wine Corner · 나트랑",
    "hero.title_white": "와인 잔이 부딪히며",
    "hero.title_gold": "시작되는 특별한 밤",
    "hero.tagline":
      "나트랑 중심의 아늑한 와인 코너.",
    "hero.cta_menu": "메뉴 ↗",
    "hero.cta_space": "공간 둘러보기",
    "hero.cta_reserve": "예약",
    "hero.cta_film": "방헤 시네마틱 영상",
    "hero.cta_map": "구글 지도 보기 ↗",
    "hero.scroll_down": "스크롤하여 둘러보기",

    // Concise About Us
    "about.badge": "소개 · VANG HÈ 나트랑",
    "about.title": "아늑한 와인 코너",
    "about.quote":
      "방헤(Vang Hè)에서는 단순한 와인 한 잔을 넘어, 은은한 촛불과 감미로운 재즈 선율 속에서 시간마저 멈춘 듯한 따뜻한 순간을 선물합니다.",
    "about.quote_author": "— Vang Hè · 65 Trinh Phong, 나트랑",
    "about.lead":
      "Vang Hè는 Trinh Phong 65의 작은 공간 — 부드러운 조명 아래 와인과 함께하는 저녁.",
    "about.body1":
      "좋은 와인의 가치는 소중한 사람과 잔을 나누는 순간에 있습니다.",
    "about.p1_title": "엄선된 프리미엄 와인",
    "about.p1_desc": "스파클링, 화이트, 로제, 레드 와인을 16°C 전용 와인 셀러에서 최상의 상태로 보관합니다.",
    "about.p2_title": "수제 콜드컷 & 타파스",
    "about.p2_desc": "이베리코 하몽, 유럽 수입 치즈, 바삭한 사워도우와 특제 파테 플래터.",
    "about.p3_title": "아늑한 프라이빗 무드",
    "about.p3_desc": "따뜻한 촛불과 감미로운 음악, 연인과의 데이트나 친구 모임을 위한 최고의 분위기.",
    "about.cta_menu": "전체 메뉴 보기 ↗",

    // Home Menu Preview Section
    "homemenu.badge": "메뉴 하이라이트",
    "homemenu.title": "오늘의 메뉴",
    "homemenu.subtitle":
      "엄선 와인과 콜드컷, 치즈, 사워도우.",
    "homemenu.cta": "메뉴 보기 ↗",

    // Story
    "story.badge": "소개 · VANG HÈ",
    "story.title": "나트랑에서 만나는 따뜻한 와인 쉼터",
    "story.quote":
      "방헤에서는 은은한 촛불과 재즈 음악 속에서 잊지 못할 밤의 온기를 나눕니다.",
    "story.quote_author": "— Vang Hè · 65 Trinh Phong, 나트랑",
    "story.lead":
      "Trinh Phong 65번지 골목에 위치한 Vang Hè는 일상의 번잡함을 잊고 온전히 쉴 수 있는 힐링 공간입니다.",
    "story.body1":
      "와인의 진정한 가치는 라벨이 아닌, 사랑하는 이들과 함께 나누는 추억에 있습니다.",
    "story.body2":
      "깊은 풍미의 레드 와인부터 상쾌한 화이트 와인까지, 방헤는 언제나 편안한 좌석과 미소로 여러분을 맞이합니다.",
    "story.p1_title": "와인 셀렉션",
    "story.p1_desc": "풍부한 과일 향을 유지하는 16°C 항온 와인 셀러.",
    "story.p2_title": "감성 콜드컷",
    "story.p2_desc": "유럽산 치즈와 하몽, 사워도우 빵 페어링.",
    "story.p3_title": "캔들과 우드",
    "story.p3_desc": "따뜻한 나무 향과 부드러운 촛불의 감성.",
    "story.p4_title": "크리스탈 글라스",
    "story.p4_desc": "청아한 와인 잔 소리와 함께 깊어지는 이야기.",
    "story.img_tag": "Vang Hè · The Wine Corner · 나트랑",
    "story.img_sub": "매일 저녁 17:00부터 시작되는 로맨틱 모먼트",
    "story.accent_badge": "아늑함 & 로맨스",

    // Space
    "space.badge": "공간 안내 · THE SPACE",
    "space.title": "아름다운 순간을 위한 공간",
    "space.subtitle":
      "소박하고 아늑하게 — 소중한 사람과 오래 머물 수 있습니다.",
    "space.g1_tag": "01 · Lounge & Bar",
    "space.g1_title": "바 카운터 & 웰컴 라운지",
    "space.g1_desc": "은은한 앰버 조명과 가죽 체어, 원목 바 카운터",
    "space.g2_tag": "02 · Cellar & Crystal",
    "space.g2_title": "와인 셀러 & 크리스탈 글라스",
    "space.g2_desc": "품종별 전용 소믈리에 크리스탈 잔과 16°C 와인 보관",
    "space.g3_tag": "03 · Banquette Nook",
    "space.g3_title": "뱅큇 소파 & 프라이빗 좌석",
    "space.g3_desc": "부드러운 간접 조명과 편안한 쿠션 좌석",
    "space.g4_tag": "04 · Brand Heritage",
    "space.g4_title": "브라스 엠블럼 & 포토 스팟",
    "space.g4_desc": "고급스러운 브라스 로고와 감각적인 거울 인테리어",
    "space.g5_tag": "05 · Candlelit Mood",
    "space.g5_title": "촛불 바틀 & 생화 플라워",
    "space.g5_desc": "흘러내린 촛농 캔들과 계절 생화가 빚어내는 로맨틱 무드",
    "space.g6_title": "아늑한 대화 공간",
    "space.g6_desc": "거리감 없이 친밀한 대화를 나눌 수 있는 편안한 소파",
    "space.banner_badge": "시그니처 플라워 테이블 세팅",
    "space.banner_title": "플라워 캔들 세팅 & 프리미엄 콜드컷",
    "space.banner_desc": "생화 장식과 촛불, 최고급 치즈 플래터와 깊은 풍미의 와인이 어우러진 감동적인 다이닝.",
    "space.banner_tag1": "계절 생화",
    "space.banner_tag2": "치즈 & 콜드컷",
    "space.banner_tag3": "소믈리에 글라스",

    // Location
    "loc.badge": "나트랑 핫플레이스",
    "loc.title": "방헤에서 만나요",
    "loc.subtitle": "65 Trinh Phong, Tan Lap, Nha Trang · 매일 17:00 — 23:30.",
    "loc.c1_label": "영업 시간",
    "loc.c1_val": "17:00 — 23:30",
    "loc.c1_sub": "매일 노을 질 무렵부터 늦은 밤까지",
    "loc.c2_label": "주소 안내",
    "loc.c2_val": "65 Trinh Phong",
    "loc.c2_sub": "나트랑 시 탄랍 구 Trinh Phong 65번지",
    "loc.c3_label": "전화 & 카카오톡",
    "loc.c3_val": "0866 817 884",
    "loc.c3_sub": "핫라인 · 카카오톡: 0866 817 884",
    "loc.c4_label": "시그니처 서비스",
    "loc.c4_val": "와인 & 콜드컷",
    "loc.c4_sub": "플라워 캔들 테이블 & 푸드 페어링",
    "loc.map_title": "구글 지도에서 Vang Hè 확인하기",
    "loc.map_addr": "65 Trinh Phong, Tan Lap, Nha Trang",
    "loc.map_btn": "구글 맵으로 길찾기",

    // Reservation
    "res.badge": "테이블 예약",
    "res.title": "테이블 예약",
    "res.subtitle":
      "미리 예약해 주세요. 15분 이내에 확인 전화를 드립니다.",
    "res.success_title": "예약이 접수되었습니다!",
    "res.success_desc": "15분 이내에 연락드려 확정해 드립니다.",
    "res.success_hotline": "급하신가요? 전화:",
    "res.success_btn": "추가 예약하기",
    "res.label_name": "성함 *",
    "res.label_phone": "연락처 *",
    "res.label_date": "날짜",
    "res.label_time": "시간",
    "res.label_guests": "인원",
    "res.label_occasion": "방문 목적",
    "res.label_notes": "메모 (선택)",
    "res.notes_placeholder": "예: 조용한 자리, 치즈 플래터…",
    "res.submit_btn": "예약 신청하기",
    "res.sidebar_badge": "연락처",
    "res.sidebar_title": "빠른 연락",
    "res.sidebar_desc": "오늘 예약은 전화나 메시지로 문의해 주세요.",
    "res.hotline_sub": "핫라인",
    "res.sidebar_note": "영업 17:00 — 23:30",

    // Feedback / Guest Reviews
    "feedback.badge": "고객 후기",
    "feedback.title": "고객 후기",
    "feedback.subtitle": "와인과 함께한 따뜻한 순간들.",
    "feedback.rating_summary": "방문 고객 평점 4.9/5",
    "feedback.c1_name": "Tran Chammy",
    "feedback.c1_role": "Local Guide · Google Maps",
    "feedback.c1_comment": "와인이 당겨서 구글맵으로 찾아왔어요. 한 잔만 하고 가려다 레이디 나잇에 딱 맞춰 와서 1+1 🤣 직원분들이 귀엽고 세심해요. 조곤조곤 말해줘서 듣기 편했어요. 추천받은 와인도 정말 맛있었고요. 분위기 너무 좋고 음악도 취향저격. 꼭 다시 올게요!",
    "feedback.c1_tag": "플라워 캔들석",
    "feedback.c2_name": "Тринити",
    "feedback.c2_role": "Google Maps",
    "feedback.c2_comment": "여자친구와 우연히 지나가다 아주 세련된 와인바를 발견했어요. 들어가니 와인 2잔에 다른 음료 2잔을 주는 특별 혜택을 받았어요. 맛있는 와인이 많고, 전문가는 아니지만 이곳 와인이 정말 좋았어요. 공간이 아기자기하고 미니멀하며 섬세하게 꾸며져 있어요. 로맨틱한 데이트 장소로 강력 추천합니다 — 정말 최고예요!",
    "feedback.c2_tag": "친목 모임",
    "feedback.c3_name": "Ma Vương Kaon",
    "feedback.c3_role": "Local Guide · Google Maps",
    "feedback.c3_comment": "직원분들이 친절하고 세심해서 물이 떨어지기 무섭게 채워줘요 :))) 매주 화요일 레이디 나잇 프로모션이 있어 서로 다른 와인 2종을 고를 수 있는데, 마침 그날 가서 득템했어요. 글라스 와인과 음식 메뉴가 다양하고 가격도 꽤 착해요. 메뉴를 미리 안 보고 가서 더 놀랐어요.",
    "feedback.c3_tag": "Romantic Dinner",


    // Dedicated Menu Page Translations (/thuc-don)
    "menu.page_title": "메뉴 — Vang Hè 나트랑",
    "menu.hero_title": "방헤 메뉴 안내",
    "menu.hero_subtitle": "The Wine Corner · 65 Trinh Phong, 나트랑",
    "menu.alacarte_title": "단품 메뉴",
    "menu.alacarte_desc":
      "엄선된 와인과 프리미엄 콜드컷의 조화: 이베리코 하몽, 유럽산 치즈, 바삭한 사워도우.",
    "menu.btn_explore": "메뉴판 보기",
    "menu.slider_title": "시그니처 푸드 & 와인",
    "menu.slider_subtitle": "방헤가 추천하는 베스트 페어링",
    "menu.more_title": "더 특별한 세트 메뉴....",
    "menu.more_subtitle":
      "완벽한 밤을 위한 세심한 푸드 세트 구성.",
    "menu.tapas_title": "콜드컷 & 타파스",
    "menu.tapas_desc":
      "이베리코 하몽, 트러플 치즈, 초리조 소시지, 그린 올리브.",
    "menu.bread_title": "사워도우 & 사이드",
    "menu.bread_desc":
      "바삭하게 구운 사워도우, 전통 하이퐁 파테, 스모크 스트링 치즈.",
    "menu.wine_title": "와인 컬렉션",
    "menu.wine_desc":
      "세계 유수 와이너리에서 공수한 스파클링, 화이트, 로제 와인 (16°C 보관).",
    "menu.modal_title": "메뉴판 — Vang Hè 나트랑",
    "menu.modal_hint": "페이지를 클릭하면 크게 볼 수 있습니다",
    "menu.modal_close": "닫기",
    "menu.modal_drive_btn": "전체 메뉴 크게 보기 ↗",
    "menu.vat_notice": "가격은 매장 메뉴판 기준입니다 (부가세 별도). 단위: 1,000 VND.",

    // Trust Bar & Footer
    "trust.t1_title": "100% 정품 인증",
    "trust.t1_desc": "원산지 보증",
    "trust.t2_title": "16°C 와인 셀러",
    "trust.t2_desc": "항온 보관",
    "trust.t3_title": "프리미엄 콜드컷",
    "trust.t3_desc": "이베리코 & 치즈",
    "trust.t4_title": "전문 소믈리에",
    "trust.t4_desc": "맞춤 와인 추천",
    "footer.brand_desc":
      "나트랑 해변 도시의 아늑하고 따뜻한 와인 코너.",
    "footer.open_hours": "매일 저녁 영업:",
    "footer.col_explore": "둘러보기",
    "footer.col_contact": "예약 및 문의",
    "footer.contact_intro":
      "사전 예약하시면 더욱 정성껏 준비해 드립니다.",
    "footer.legal":
      "책임감 있는 음주 문화를 지향합니다. 만 18세 미만 청소년에게는 주류를 판매하지 않습니다. 음주 후 운전 금지.",
    "footer.copy": "© 2026 Vang Hè · The Wine Corner · 65 Trinh Phong, 나트랑.",
  },

  zh: {
    // Top Bar & Header
    "topbar.address": "芽庄市新立坊郑峰路65号",
    "topbar.hours": "每日营业 17:00 — 23:30",
    "topbar.hotline": "服务热线",
    "nav.about": "关于我们",
    "nav.menu": "精选菜单",
    "nav.reservation": "在线预订",
    "nav.story": "品牌故事",
    "nav.tablescape": "烛光餐桌",
    "nav.space": "环境空间",
    "nav.film": "光影短片",
    "nav.location": "位置导航",
    "nav.handbook": "品酒手册",
    "nav.contact": "立即订座",
    "nav.blog": "博客",

    // Hero Section
    "script.hero": "美食与佳酿的私享之地",
    "script.about": "海滨微醺秘境",
    "script.space": "暖烛与原木光影",
    "script.location": "芽庄市中心的静谧之约",
    "script.feedback": "宾客温情心声",
    "script.reservation": "悉心备至的专属款待",
    "hero.live_badge": "每晚营业: 17:00 — 23:30 · 芽庄郑峰路65号",
    "hero.eyebrow": "Vanghè · The Wine Corner · 越南芽庄",
    "hero.title_white": "杯酒微醺",
    "hero.title_gold": "开启浪漫夜晚",
    "hero.tagline":
      "芽庄市中心的温馨葡萄酒小店。",
    "hero.cta_menu": "菜单 ↗",
    "hero.cta_space": "欣赏空间",
    "hero.cta_reserve": "预订",
    "hero.cta_film": "观赏短片",
    "hero.cta_map": "谷歌地图导航 ↗",
    "hero.scroll_down": "向下滑动探索",

    // Concise About Us
    "about.badge": "关于我们 · VANG HÈ 芽庄",
    "about.title": "温馨的品酒角落",
    "about.quote":
      "在 Vang Hè，我们呈献的不只是一杯佳酿。在摇曳烛光与慵懒爵士乐中，我们为您温存每一个难忘时刻。",
    "about.quote_author": "— Vang Hè · 芽庄郑峰路65号",
    "about.lead":
      "Vang Hè 位于郑峰路65号 — 柔和灯光下，与美酒共度的慢节奏夜晚。",
    "about.body1":
      "一瓶好酒的价值，在于与好友和挚爱共享的那一刻。",
    "about.p1_title": "精选名庄佳酿",
    "about.p1_desc": "气泡酒、干白、桃红与红葡萄酒，均严格储存于16°C恒温酒窖中。",
    "about.p2_title": "地道冷盘切片",
    "about.p2_desc": "伊比利亚橡果火腿切片、欧洲进口干酪、香脆酵母酸面包与特制海防肉酱。",
    "about.p3_title": "浪漫私享空间",
    "about.p3_desc": "温馨烛光、柔和爵士乐与精致桌花，非常适合情侣约会或挚友相聚。",
    "about.cta_menu": "查看完整菜单 ↗",

    // Home Menu Preview Section
    "homemenu.badge": "精选菜单亮点",
    "homemenu.title": "当日菜单",
    "homemenu.subtitle":
      "精选美酒搭配冷盘、奶酪与酸面包。",
    "homemenu.cta": "查看菜单 ↗",

    // Story
    "story.badge": "品牌故事 · VANG HÈ",
    "story.title": "海滨城市的温馨葡萄酒吧",
    "story.quote":
      "在 Vang Hè，我们守护摇曳烛光与慵懒爵士乐中的温暖故事。",
    "story.quote_author": "— Vang Hè · 芽庄郑峰路65号",
    "story.lead":
      "郑峰路65号的 Vang Hè 是一处温暖角落，给旅途带来归属感与诗意。",
    "story.body1":
      "美酒的真正价值不在于价格，而在于与亲友共同分享的美好瞬间。",
    "story.body2":
      "无论您是想细品一杯浓郁的红葡萄酒，还是在日光沐浴后享用冰爽白葡萄酒与冷盘切片 — 我们随时为您备好舒适的座位。",
    "story.p1_title": "精选葡萄酒",
    "story.p1_desc": "16°C恒温锁住每一滴果香与风土精髓。",
    "story.p2_title": "精品冷盘",
    "story.p2_desc": "欧洲干酪、伊比利亚火腿及特色面包搭配。",
    "story.p3_title": "烛光与原木",
    "story.p3_desc": "质朴原木与温暖烛光，舒缓身心疲惫。",
    "story.p4_title": "水晶碰杯",
    "story.p4_desc": "清脆的水晶杯碰撞声，开启走心畅谈。",
    "story.img_tag": "Vang Hè · The Wine Corner · 芽庄",
    "story.img_sub": "每晚 17:00 起温馨迎候",
    "story.accent_badge": "温馨 & 浪漫",

    // Space
    "space.badge": "环境空间 · THE SPACE",
    "space.title": "留给美好时刻的空间",
    "space.subtitle":
      "质朴温馨 — 可与挚爱久坐畅谈。",
    "space.g1_tag": "01 · Lounge & Bar",
    "space.g1_title": "吧台与迎宾酒廊",
    "space.g1_desc": "温馨琥珀色灯光、柔软皮革座椅与原木吧台",
    "space.g2_tag": "02 · Cellar & Crystal",
    "space.g2_title": "恒温酒柜与水晶高脚杯",
    "space.g2_desc": "16°C恒温酒窖，针对不同葡萄品种配备侍酒师水晶杯",
    "space.g3_tag": "03 · Banquette Nook",
    "space.g3_title": "长条卡座与温馨餐桌",
    "space.g3_desc": "柔和线条灯勾勒出的私密对话空间",
    "space.g4_tag": "04 · Brand Heritage",
    "space.g4_title": "黄铜标识与艺术打卡角",
    "space.g4_desc": "质感黄铜招牌与艺术镜面空间",
    "space.g5_tag": "05 · Candlelit Mood",
    "space.g5_title": "酒瓶烛台与当季桌花",
    "space.g5_desc": "自然流淌的蜡烛泪与鲜花，营造纯粹浪漫意境",
    "space.g6_title": "亲密沙发位",
    "space.g6_desc": "柔软舒适沙发，拉近心灵的距离",
    "space.banner_badge": "特色体验 · 浪漫烛光餐桌",
    "space.banner_title": "鲜花烛光餐桌 & 精品冷盘切片",
    "space.banner_desc": "鲜活花卉、高品质干酪火腿拼盘与醇厚佳酿的完美碰撞，点亮难忘聚会。",
    "space.banner_tag1": "当季鲜花",
    "space.banner_tag2": "干酪与火腿",
    "space.banner_tag3": "水晶酒具",

    // Location
    "loc.badge": "芽庄坐标",
    "loc.title": "期待与您相聚在 Vang Hè",
    "loc.subtitle": "芽庄市新立坊郑峰路65号 · 每日 17:00 — 23:30。",
    "loc.c1_label": "营业时间",
    "loc.c1_val": "17:00 — 23:30",
    "loc.c1_sub": "每日黄昏至深夜",
    "loc.c2_label": "门店地址",
    "loc.c2_val": "郑峰路65号",
    "loc.c2_sub": "芽庄市新立坊郑峰路65号",
    "loc.c3_label": "热线与微信/Zalo",
    "loc.c3_val": "0866 817 884",
    "loc.c3_sub": "热线 · WhatsApp / 电话: 0866 817 884",
    "loc.c4_label": "招牌体验",
    "loc.c4_val": "葡萄酒与冷盘",
    "loc.c4_sub": "鲜花烛光布置与专业餐酒搭配",
    "loc.map_title": "在谷歌地图上查看 Vang Hè",
    "loc.map_addr": "芽庄市新立坊郑峰路65号",
    "loc.map_btn": "在谷歌地图中打开",

    // Reservation
    "res.badge": "座位预订",
    "res.title": "预订座位",
    "res.subtitle":
      "请提前预订。我们将在15分钟内致电确认。",
    "res.success_title": "已收到申请！",
    "res.success_desc": "我们将在15分钟内联系您确认。",
    "res.success_hotline": "加急？请致电：",
    "res.success_btn": "再订一桌",
    "res.label_name": "姓名 *",
    "res.label_phone": "电话 *",
    "res.label_date": "日期",
    "res.label_time": "时间",
    "res.label_guests": "人数",
    "res.label_occasion": "场合",
    "res.label_notes": "备注（可选）",
    "res.notes_placeholder": "例如：安静角落、奶酪拼盘…",
    "res.submit_btn": "提交订座申请",
    "res.sidebar_badge": "联系",
    "res.sidebar_title": "快速联系",
    "res.sidebar_desc": "今晚订座请电话或留言。",
    "res.hotline_sub": "热线",
    "res.sidebar_note": "营业 17:00 — 23:30",

    // Feedback / Guest Reviews
    "feedback.badge": "宾客心声",
    "feedback.title": "顾客评价",
    "feedback.subtitle": "与美酒共度的温暖时光。",
    "feedback.rating_summary": "到店顾客 4.9/5",
    "feedback.c1_name": "Tran Chammy",
    "feedback.c1_role": "Local Guide · Google Maps",
    "feedback.c1_comment": "想喝红酒就在谷歌地图上搜到了这家店。本想喝一杯就走，没想到碰上 Lady Night，买一送一 🤣 店员们可爱又贴心，说话轻声细语很舒服。推荐的酒也很好喝。超爱这里的氛围，音乐好听又有品味。一定会再来！",
    "feedback.c1_tag": "鲜花烛光席",
    "feedback.c2_name": "Тринити",
    "feedback.c2_role": "Google Maps",
    "feedback.c2_comment": "我和女朋友偶然路过，看到一家很有格调的酒吧。走进去后获得了特别优惠：买2杯葡萄酒送2杯其他饮品。这里有很多好酒，虽然我不是专家，但非常喜欢这里的酒。店内空间可爱、简约且设计精致。强烈推荐来这里浪漫约会——太棒了！",
    "feedback.c2_tag": "好友小聚",
    "feedback.c3_name": "Ma Vương Kaon",
    "feedback.c3_role": "Local Guide · Google Maps",
    "feedback.c3_comment": "店员热情周到，水一喝完马上帮你加满 :))) 每周二有 Lady Night 优惠，可以选 2 款不同的葡萄酒，我刚好碰上，很划算。菜单上有很多单杯酒和餐点，价格也挺实惠。去之前没看菜单，到了还挺惊喜的。",
    "feedback.c3_tag": "Romantic Dinner",


    // Dedicated Menu Page Translations (/thuc-don)
    "menu.page_title": "菜单 — Vang Hè 芽庄",
    "menu.hero_title": "Vang Hè 精选菜单",
    "menu.hero_subtitle": "The Wine Corner · 芽庄郑峰路65号",
    "menu.alacarte_title": "单点菜单",
    "menu.alacarte_desc":
      "世界佳酿与上等冷盘的交响乐：伊比利亚火腿、欧洲优质奶酪与香脆酵母面包。",
    "menu.btn_explore": "查看菜单",
    "menu.slider_title": "招牌美酒与美食",
    "menu.slider_subtitle": "Vang Hè 精选搭配推荐",
    "menu.more_title": "更多惊喜体验....",
    "menu.more_subtitle":
      "为聚会锦上添花的完美拼盘套餐。",
    "menu.tapas_title": "冷盘与塔帕斯",
    "menu.tapas_desc":
      "伊比利亚火腿、黑松露奶酪、西班牙香肠与去核橄榄。",
    "menu.bread_title": "酵母酸面包与配菜",
    "menu.bread_desc":
      "香脆烤酸面包、传统海防肉酱与烟熏芝士条。",
    "menu.wine_title": "精选葡萄酒系列",
    "menu.wine_desc":
      "从世界著名庄园甄选的气泡酒、干白与桃红葡萄酒，16°C恒温保存。",
    "menu.modal_title": "菜单 — Vang Hè 芽庄",
    "menu.modal_hint": "点击下方页面查看清晰菜单图",
    "menu.modal_close": "关闭",
    "menu.modal_drive_btn": "查看高清完整菜单 ↗",
    "menu.vat_notice": "价格以店内纸质菜单为准（不含增值税）。单位：1,000 越南盾。",

    // Trust Bar & Footer
    "trust.t1_title": "100% 正品保障",
    "trust.t1_desc": "正规清关证书",
    "trust.t2_title": "16°C 恒温酒窖",
    "trust.t2_desc": "专业品质保存",
    "trust.t3_title": "纯正风味冷盘",
    "trust.t3_desc": "伊比利亚火腿与干酪",
    "trust.t4_title": "专业侍酒师",
    "trust.t4_desc": "细致贴心服务",
    "footer.brand_desc":
      "海滨城市芽庄市中心的温馨葡萄酒吧。",
    "footer.open_hours": "每晚营业时间:",
    "footer.col_explore": "探索",
    "footer.col_contact": "联系与预订",
    "footer.contact_intro":
      "直接联系我们，提前为您布置温馨烛光餐桌。",
    "footer.legal":
      "理性饮酒，关爱健康。禁止向未满18周岁未成年人售酒。酒后请勿驾车。",
    "footer.copy": "© 2026 Vang Hè · The Wine Corner · 芽庄郑峰路65号.",
  },
};

export type TranslationKey = keyof typeof translations.vi;
