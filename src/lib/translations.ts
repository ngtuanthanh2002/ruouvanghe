export type Language = "vi" | "en";

export const translations = {
  vi: {
    // Top Bar & Header
    "topbar.address": "65 Trịnh Phong, P. Tân Lập, Nha Trang",
    "topbar.hours": "Mở cửa mỗi ngày 18:00 — 23:30",
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

    // Hero Section
    "hero.live_badge": "Mở cửa mỗi tối: 18:00 — 23:30 · 65 Trịnh Phong, Nha Trang",
    "hero.eyebrow": "Vanghé · The Wine Corner · Nha Trang",
    "hero.title_white": "Nơi Bàn Tiệc",
    "hero.title_gold": "Mở Lời Cho Cuộc Vui",
    "hero.tagline":
      "Góc rượu vang ấm cúng giữa lòng phố biển Nha Trang — Nơi mỗi chiếc ly chạm nhau mở ra một câu chuyện, và đêm vui thăng hoa cùng rượu vang tuyển chọn và khay cold cut hảo hạng.",
    "hero.cta_menu": "Khám Phá Thực Đơn ↗",
    "hero.cta_space": "Khám Phá Không Gian",
    "hero.cta_reserve": "Đặt Bàn Ngay",
    "hero.cta_film": "Thước Phim Vang Hè",
    "hero.cta_map": "Bản Đồ Google Maps ↗",
    "hero.scroll_down": "Cuộn xuống khám phá",

    // Concise About Us (Thay thế cho Khởi nguồn & Triết lý)
    "about.badge": "GIỚI THIỆU · VANG HÈ NHA TRANG",
    "about.title": "Góc Nhỏ Thưởng Vang Ấm Cúng Giữa Phố Biển",
    "about.quote":
      "Ở Vang Hè, chúng tôi không đơn thuần rót một ly vang. Chúng tôi ủ ấm những câu chuyện, gìn giữ những khoảnh khắc mà thời gian dường như ngưng đọng bên ánh nến lung linh và giai điệu jazz êm đềm.",
    "about.quote_author": "— Vang Hè · 65 Trịnh Phong, Nha Trang",
    "about.lead":
      "Vang Hè (The Wine Corner) là góc nhỏ tĩnh tại tại số 65 Trịnh Phong, nơi ánh đèn vàng hạ bớt độ sáng và nhịp sống phố biển chậm lại để nhường chỗ cho những xúc cảm chân thành.",
    "about.body1":
      "Không cầu kỳ kiểu cách, chúng tôi tin rằng giá trị lớn nhất của một chai vang ngon nằm ở khoảnh khắc nó được mở ra giữa những người bạn, người thương. Rượu vang là chất xúc tác để nụ cười tự nhiên hơn và câu chuyện chân thật hơn.",
    "about.p1_title": "Rượu Vang Tuyển Chọn",
    "about.p1_desc": "Sparkling, White, Rose & Red tuyển chọn từ các điền trang danh tiếng thế giới, bảo quản hầm chuẩn 16°C.",
    "about.p2_title": "Cold Cut & Khai Vị Chuẩn Gu",
    "about.p2_desc": "Khay thịt nguội Jamon Iberico, phô mai nhập khẩu châu Âu và bánh mì Sourdough nướng giòn cùng Pate Hải Phòng.",
    "about.p3_title": "Không Gian Thân Mật",
    "about.p3_desc": "Ánh nến ấm áp, giai điệu dịu êm và bàn tiệc lãng mạn cho những buổi hẹn hò hay gặp gỡ bạn bè thân tình.",
    "about.cta_menu": "Xem Thực Đơn Chi Tiết ↗",

    // Home Menu Preview Section
    "homemenu.badge": "THỰC ĐƠN · MENU HIGHLIGHTS",
    "homemenu.title": "Khám Phá Hương Vị Tại Vang Hè",
    "homemenu.subtitle":
      "Sự kết hợp tinh tế giữa những chai vang hảo hạng cùng khay cold cut phô mai, bánh mì Sourdough thơm giòn chuẩn gu.",
    "homemenu.cta": "XEM ĐẦY ĐỦ THỰC ĐƠN ↗",

    // Story (Backwards compatible fallback)
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
    "story.img_sub": "Góc hẹn thân mật từ 18:00 mỗi chiều",
    "story.accent_badge": "Ấm cúng & Lãng mạn",

    // Space
    "space.badge": "KHÔNG GIAN · THE SPACE",
    "space.title": "Góc Nhỏ Bình Yên Giữa Lòng Phố Biển",
    "space.subtitle":
      "Mộc mạc nhưng tinh tế, hiện đại nhưng ấm cúng. Nơi bạn có thể ngồi hàng giờ bên người thân mà không cảm thấy vội vã.",
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
    "space.g4_title": "Biển Đồng Vanghé & Góc Check-in Tinh Tế",
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
    "loc.subtitle": "65 Trịnh Phong, Phường Tân Lập, TP. Nha Trang — Trung tâm phố biển, thuận tiện ghé thăm và gửi xe ô tô.",
    "loc.c1_label": "THỜI GIAN MỞ CỬA",
    "loc.c1_val": "18:00 — 23:30",
    "loc.c1_sub": "Mở cửa mỗi ngày từ hoàng hôn đến khuya",
    "loc.c2_label": "ĐỊA ĐIỂM TRẢI NGHIỆM",
    "loc.c2_val": "65 Trịnh Phong",
    "loc.c2_sub": "P. Tân Lập, TP. Nha Trang, Khánh Hòa",
    "loc.c3_label": "HOTLINE & ZALO",
    "loc.c3_val": "0988 123 456",
    "loc.c3_sub": "Tư vấn Sommelier & Đặt bàn chu đáo",
    "loc.c4_label": "DỊCH VỤ ĐẶC TRƯNG",
    "loc.c4_val": "Wine & Cold Cut",
    "loc.c4_sub": "Bàn tiệc hoa nến & ghép đôi ẩm thực",
    "loc.map_title": "Vang Hè — The Wine Corner trên Google Maps",
    "loc.map_addr": "65 Trịnh Phong, Phường Tân Lập, Nha Trang",
    "loc.map_btn": "Mở Trên Google Maps",

    // Reservation
    "res.badge": "ĐẶT BÀN & TRẢI NGHIỆM",
    "res.title": "Dành Trọn Cho Bạn Một Buổi Tối Đáng Nhớ",
    "res.subtitle":
      "Để chúng tôi chuẩn bị trước bàn tiệc chu đáo, cắm hoa tươi và làm mát rượu ở nhiệt độ lý tưởng nhất trước khi bạn đến.",
    "res.success_title": "Yêu Cầu Đã Được Tiếp Nhận!",
    "res.success_desc": "Sommelier của Vang Hè sẽ liên hệ qua điện thoại trong vòng 15 phút để xác nhận bàn tiệc cho bạn.",
    "res.success_hotline": "Cần hỗ trợ gấp? Gọi ngay hotline:",
    "res.success_btn": "Đặt Thêm Bàn Khác",
    "res.label_name": "Họ & Tên Quý Khách *",
    "res.label_phone": "Số Điện Thoại (Zalo) *",
    "res.label_date": "Ngày Ghé Thăm",
    "res.label_time": "Giờ Đón Khách",
    "res.label_guests": "Số Lượng Khách",
    "res.label_occasion": "Dịp Gặp Gỡ & Tính Chất Buổi Tiệc",
    "res.label_notes": "Yêu Cầu Riêng (Vị trí bàn, trang trí, dòng vang yêu thích...)",
    "res.notes_placeholder": "Ví dụ: Cần bàn góc yên tĩnh, chuẩn bị trước đĩa cold cut phô mai...",
    "res.submit_btn": "GỬI YÊU CẦU ĐẶT BÀN TẠI VANGHÈ",
    "res.sidebar_badge": "DỊCH VỤ ĐÓN TIẾP VIP",
    "res.sidebar_title": "Liên Hệ Đặt Bàn Nhanh",
    "res.sidebar_desc":
      "Nếu quý khách cần đặt bàn ngay trong tối nay hoặc muốn tư vấn chọn dòng vang đặc biệt, vui lòng gọi điện thoại trực tiếp cho chúng tôi:",
    "res.hotline_sub": "Hotline Sommelier",
    "res.perk1": "Không phụ thu phí dịch vụ đặt bàn trước",
    "res.perk2": "Hỗ trợ bài trí hoa tươi & nến theo yêu cầu",
    "res.perk3": "Sommelier tư vấn nếm thử tại bàn",
    "res.sidebar_note": "● Mở cửa mỗi tối 18:00 — 23:30",

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
    "topbar.hours": "Open Daily 18:00 — 23:30",
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

    // Hero Section
    "hero.live_badge": "Open Tonight: 18:00 — 23:30 · 65 Trinh Phong, Nha Trang",
    "hero.eyebrow": "Vanghé · The Wine Corner · Nha Trang",
    "hero.title_white": "Where Fine Wine",
    "hero.title_gold": "Begins The Night",
    "hero.tagline":
      "An intimate wine sanctuary in the heart of coastal Nha Trang — Where every clinking glass unlocks a story, paired with curated vintages and artisanal charcuterie platters.",
    "hero.cta_menu": "Explore Menu ↗",
    "hero.cta_space": "Explore The Space",
    "hero.cta_reserve": "Reserve A Table",
    "hero.cta_film": "Cinematic Film",
    "hero.cta_map": "Google Maps Directions ↗",
    "hero.scroll_down": "Scroll to discover",

    // Concise About Us
    "about.badge": "ABOUT US · VANG HÈ NHA TRANG",
    "about.title": "An Intimate Wine Sanctuary in Coastal Nha Trang",
    "about.quote":
      "At Vang Hè, we do not merely pour a glass of wine. We nurture stories, holding still the fleeting moments where time gently slows beside dancing candlelight and soothing jazz melodies.",
    "about.quote_author": "— Vang Hè · 65 Trinh Phong, Nha Trang",
    "about.lead":
      "Vang Hè (The Wine Corner) is a quiet, poetic retreat at 65 Trinh Phong, where golden lamps dim low and the coastal pulse slows down to make room for heartfelt moments.",
    "about.body1":
      "Unpretentious and sincere, we believe that the true essence of fine wine lies in the cherished moments uncorked among friends and loved ones. Wine is the catalyst for genuine laughter and authentic connection.",
    "about.p1_title": "Curated Wine Cellar",
    "about.p1_desc": "Sparkling, White, Rose & Red wines curated from premier estates, cellared at precise 16°C.",
    "about.p2_title": "Artisanal Charcuterie & Bites",
    "about.p2_desc": "Jamon Iberico platters, European cheeses, and crusty sourdough with signature Hai Phong pate.",
    "about.p3_title": "Warm & Intimate Ambiance",
    "about.p3_desc": "Flickering candlelight, soothing tunes, and cozy settings designed for couples and close friends.",
    "about.cta_menu": "Explore Full Menu ↗",

    // Home Menu Preview Section
    "homemenu.badge": "OUR MENU · HIGHLIGHTS",
    "homemenu.title": "Discover Exceptional Flavors at Vang Hè",
    "homemenu.subtitle":
      "An artful pairing of handpicked global vintages, premium European cheese & cold cut boards, and warm sourdough bread.",
    "homemenu.cta": "VIEW COMPLETE MENU ↗",

    // Story (Fallback)
    "story.badge": "ABOUT US · VANG HÈ",
    "story.title": "An Intimate Wine Sanctuary in Coastal Nha Trang",
    "story.quote":
      "At Vang Hè, we do not merely pour a glass of wine. We nurture stories beside dancing candlelight and soothing jazz melodies.",
    "story.quote_author": "— Vang Hè · 65 Trinh Phong, Nha Trang",
    "story.lead":
      "Vang Hè (The Wine Corner) was born to craft an intimate sanctuary at 65 Trinh Phong, where golden lamps dim low and the seaside pace slows down.",
    "story.body1":
      "We believe that the true essence of a bottle of wine lies not in its price tag, but in the cherished moment it is uncorked among dearest companions.",
    "story.body2":
      "Whether you seek an intense red vintage to savor or a chilled crisp white wine with artisanal cheeses — Vang Hè awaits with a plush armchair and a warm welcoming smile.",
    "story.p1_title": "Curated Wine Cellar",
    "story.p1_desc": "16°C cellar safeguarding every delicate fruit and floral aroma.",
    "story.p2_title": "Artisanal Cold Cuts",
    "story.p2_desc": "European cheese, Jamon Iberico, and Hai Phong pate sourdough bread.",
    "story.p3_title": "Candlelight & Warmth",
    "story.p3_desc": "Artisanal candle warmth and natural wood textures slowing down time.",
    "story.p4_title": "Crystal Clinking",
    "story.p4_desc": "The bright ring of crystal glasses opening the floor for unforgettable stories.",
    "story.img_tag": "Vang Hè · The Wine Corner · Nha Trang",
    "story.img_sub": "Intimate wine gatherings from 18:00 every evening",
    "story.accent_badge": "Intimate & Romantic",

    // Space
    "space.badge": "THE SPACE · VANGHÉ",
    "space.title": "A Serene Corner in the Heart of the Coastal City",
    "space.subtitle":
      "Rustic yet refined, modern yet deeply intimate. A sanctuary where you can linger for hours with loved ones without ever feeling rushed.",
    "space.g1_tag": "01 · Lounge & Bar",
    "space.g1_title": "The Bar Counter & Guest Lounge",
    "space.g1_desc": "Warm ambient glow, leather seating and handcrafted timber counter",
    "space.g2_tag": "02 · Cellar & Crystal",
    "space.g2_title": "Sommelier Shelves & Crystal Ware",
    "space.g2_desc": "Cellared at 16°C and paired with fine crystal stemware",
    "space.g3_tag": "03 · Banquette Nook",
    "space.g3_title": "Banquette Seating & Cozy Dining",
    "space.g3_desc": "Intimate conversations flanked by gentle architectural backlighting",
    "space.g4_tag": "04 · Brand Heritage",
    "space.g4_title": "Vanghé Copper Plaque & Artful Mirror",
    "space.g4_desc": "Warm brushed copper plaque and artful mirror reflections",
    "space.g5_tag": "05 · Candlelit Mood",
    "space.g5_title": "Candlelight & Floral Centerpiece",
    "space.g5_desc": "Artisanal wax candles and seasonal blossoms creating poetic warmth",
    "space.g6_title": "Intimate Lounge",
    "space.g6_desc": "Plush seating designed for seamless, barrier-free evenings of joy",
    "space.banner_badge": "SIGNATURE EXPERIENCE · VANG HÈ CORNER",
    "space.banner_title": "Candlelit Setting, Fresh Blooms & Gourmet Platter",
    "space.banner_desc": "An enchanting harmony of vibrant seasonal blooms, artisanal cold cuts & cheese pedestals, and fine wine beneath warm candlelight.",
    "space.banner_tag1": "Seasonal Blooms",
    "space.banner_tag2": "Cold Cut & Cheese",
    "space.banner_tag3": "Sommelier Crystal",

    // Location
    "loc.badge": "NHA TRANG RENDEZVOUS",
    "loc.title": "Meet Us at Vang Hè Corner",
    "loc.subtitle": "65 Trinh Phong, Tan Lap, Nha Trang City — Central coastal location with easy access and convenient car parking.",
    "loc.c1_label": "OPENING HOURS",
    "loc.c1_val": "18:00 — 23:30",
    "loc.c1_sub": "Open every evening from sunset until late",
    "loc.c2_label": "EXPERIENCE LOCATION",
    "loc.c2_val": "65 Trinh Phong",
    "loc.c2_sub": "Tan Lap Ward, Nha Trang, Khanh Hoa",
    "loc.c3_label": "HOTLINE & ZALO",
    "loc.c3_val": "0988 123 456",
    "loc.c3_sub": "Sommelier Consultation & VIP Table Booking",
    "loc.c4_label": "SIGNATURE SERVICE",
    "loc.c4_val": "Wine & Cold Cut",
    "loc.c4_sub": "Candlelit tables & artisanal food pairing",
    "loc.map_title": "Vang Hè — The Wine Corner on Google Maps",
    "loc.map_addr": "65 Trinh Phong, Tan Lap, Nha Trang",
    "loc.map_btn": "Open in Google Maps",

    // Reservation
    "res.badge": "RESERVATION & VIP EXPERIENCE",
    "res.title": "Dedicated to Crafting Your Unforgettable Evening",
    "res.subtitle":
      "Allow us to prepare your table in advance, arrange fresh seasonal flowers, and bring your chosen vintage to ideal cellar temperature before your arrival.",
    "res.success_title": "Your Request Has Been Received!",
    "res.success_desc": "Our Sommelier will contact you within 15 minutes to confirm your table arrangement.",
    "res.success_hotline": "Urgent assistance needed? Call our hotline:",
    "res.success_btn": "Book Another Table",
    "res.label_name": "Full Name *",
    "res.label_phone": "Phone / WhatsApp / Zalo *",
    "res.label_date": "Date of Visit",
    "res.label_time": "Arrival Time",
    "res.label_guests": "Number of Guests",
    "res.label_occasion": "Occasion & Gathering Type",
    "res.label_notes": "Special Requests (Table position, decor, preferred wines...)",
    "res.notes_placeholder": "E.g., Quiet corner table, prepare artisanal charcuterie board in advance...",
    "res.submit_btn": "SUBMIT RESERVATION AT VANGHÈ",
    "res.sidebar_badge": "VIP HOSPITALITY SERVICE",
    "res.sidebar_title": "Direct VIP Booking",
    "res.sidebar_desc":
      "If you require an immediate table for tonight or wish to consult directly regarding rare vintage bottles, please reach our Sommelier directly:",
    "res.hotline_sub": "Sommelier Hotline",
    "res.perk1": "Zero reservation or advance booking surcharges",
    "res.perk2": "Complimentary floral & candle setup on request",
    "res.perk3": "At-table Sommelier tasting and pairing guidance",
    "res.sidebar_note": "● Open every evening 18:00 — 23:30",

    // Dedicated Menu Page Translations (/thuc-don)
    "menu.page_title": "Menu — Vang Hè Nha Trang",
    "menu.hero_title": "Vang Hè Menu",
    "menu.hero_subtitle": "The Wine Corner · 65 Trinh Phong, Nha Trang",
    "menu.alacarte_title": "A La Carte Menu",
    "menu.alacarte_desc":
      "A delicate pairing of curated wines and artisanal charcuterie: Jamon Iberico, European cheeses, and toasted sourdough bread.",
    "menu.btn_explore": "Menu",
    "menu.slider_title": "Featured Dishes & Drinks",
    "menu.slider_subtitle": "Handpicked favorites at Vang Hè",
    "menu.more_title": "Something a little more special....",
    "menu.more_subtitle":
      "Curated sets to elevate your evening table.",
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
};

export type TranslationKey = keyof typeof translations.vi;
