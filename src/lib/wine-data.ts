export interface WineItem {
  id: string;
  slug: string;
  name: string;
  vietnameseName: string;
  winery: string;
  origin: "Ý (Italy)" | "Pháp (France)" | "Chile" | "Tây Ban Nha (Spain)";
  countryCode: "IT" | "FR" | "CL" | "ES";
  region: string;
  type: "Vang Đỏ" | "Vang Trắng" | "Vang Nổ (Sparkling)" | "Hộp Quà Cao Cấp";
  typeSlug: "vang-do" | "vang-trang" | "vang-no" | "hop-qua";
  grapes: string[];
  vintage: string;
  alcohol: string;
  volume: string;
  price: number;
  originalPrice: number;
  ratingValue: number;
  reviewCount: number;
  criticScore: string;
  inStock: boolean;
  featured: boolean;
  bestSeller?: boolean;
  badge?: string;
  accentColor: string;
  summary: string;
  description: string;
  tastingNotes: {
    aroma: string;
    palate: string;
    finish: string;
    pairing: string;
    temperature: string;
    decanting: string;
  };
  producerStory: string;
}

export const WINE_PRODUCTS: WineItem[] = [
  {
    id: "wine-01",
    slug: "f-gold-limited-edition-negroamaro-san-marzano",
    name: "F Gold Limited Edition Negroamaro San Marzano",
    vietnameseName: "Rượu Vang Ý F Gold Mạ Vàng 24K Thượng Hạng",
    winery: "Cantine San Marzano",
    origin: "Ý (Italy)",
    countryCode: "IT",
    region: "Salento, Puglia",
    type: "Vang Đỏ",
    typeSlug: "vang-do",
    grapes: ["Negroamaro 100%"],
    vintage: "2020",
    alcohol: "15% Vol",
    volume: "750ml",
    price: 1650000,
    originalPrice: 1950000,
    ratingValue: 4.9,
    reviewCount: 142,
    criticScore: "99/100 Luca Maroni",
    inStock: true,
    featured: true,
    bestSeller: true,
    badge: "Mạ Vàng 24K",
    accentColor: "#D4AF37",
    summary:
      "Biểu tượng danh giá của vùng Puglia nước Ý với nhãn mạ vàng 24K lộng lẫy, hương mứt quả đen, socola và vani quý phái.",
    description:
      "Rượu Vang F Gold 24K Limited Edition là siêu phẩm đến từ nhà làm vang huyền thoại Cantine San Marzano. Được tuyển chọn từ những gốc nho Negroamaro cổ thụ trên 60 năm tuổi tại vùng Salento đầy nắng gió, trải qua 12 tháng ủ trong thùng gỗ sồi Pháp và Caucasian. Rượu mang màu đỏ ruby ánh tím huyền bí, tannin mịn màng như nhung lụa và hậu vị kéo dài bất tận.",
    tastingNotes: {
      aroma: "Hương thơm nồng nàn của quả mâm xôi chín, mận đen, anh đào marasca quyện cùng socola đen, vani và gỗ sồi nướng.",
      palate: "Vị đậm đà, tròn trịa, cấu trúc tannin mượt mà cân bằng hoàn hảo với độ chua thanh tao và vị ngọt dịu tự nhiên.",
      finish: "Hậu vị sâu lắng, lắng đọng dư vị bánh gừng, cacao và gia vị Địa Trung Hải kéo dài.",
      pairing: "Lý tưởng cùng bít tết bò Wagyu, cừu nướng thảo mộc, phô mai lâu năm và thịt nguội Iberico.",
      temperature: "16°C - 18°C",
      decanting: "Decant 30 - 45 phút trước khi thưởng thức",
    },
    producerStory:
      "Cantine San Marzano thành lập năm 1962 tại Puglia bởi 19 gia đình trồng nho tâm huyết. Ngày nay, nhà vang sở hữu hơn 1.200 héc-ta nho và được mệnh danh là ngọn cờ đầu đưa rượu vang Ý vươn tầm thế giới.",
  },
  {
    id: "wine-02",
    slug: "chateau-margaux-premier-grand-cru-classe-bordeaux",
    name: "Château Margaux Premier Grand Cru Classé",
    vietnameseName: "Rượu Vang Pháp Château Margaux Đẳng Cấp Thượng Lưu",
    winery: "Château Margaux",
    origin: "Pháp (France)",
    countryCode: "FR",
    region: "Margaux, Bordeaux",
    type: "Vang Đỏ",
    typeSlug: "vang-do",
    grapes: ["Cabernet Sauvignon 87%", "Merlot 8%", "Cabernet Franc 3%", "Petit Verdot 2%"],
    vintage: "2018",
    alcohol: "14% Vol",
    volume: "750ml",
    price: 24500000,
    originalPrice: 26000000,
    ratingValue: 5.0,
    reviewCount: 38,
    criticScore: "99/100 Robert Parker",
    inStock: true,
    featured: true,
    bestSeller: false,
    badge: "Grand Cru 1855",
    accentColor: "#800020",
    summary:
      "Một trong ngũ đại quốc bảo Bordeaux 1855, đỉnh cao của sự tinh tế, hương hoa violet quý phái và cấu trúc quý tộc bất hủ.",
    description:
      "Château Margaux là biểu tượng vĩnh cửu của nghệ thuật làm vang nước Pháp. Niên vụ 2018 được đánh giá là một trong những kiệt tác thế kỷ với điều kiện thổ nhưỡng lý tưởng. Rượu kết hợp hoàn mỹ giữa sức mạnh của Cabernet Sauvignon và sự mềm mại duyên dáng, khả năng lưu trữ qua nhiều thập kỷ.",
    tastingNotes: {
      aroma: "Hương hoa violet quý phái, nho đen cassis, hộp xì gà Havana, nấm truffle đen và khoáng chất tinh khiết.",
      palate: "Chất rượu thanh lịch tuyệt đối, tannin tơ lụa, độ cân bằng siêu việt và sự sống động tươi mới kỳ diệu.",
      finish: "Dư vị ngân vang cả phút với nốt hương hoa hồi, gỗ tuyết tùng và trái cây chín mọng.",
      pairing: "Bò hầm rượu vang kiểu Pháp, chim bồ câu nướng nấm truffle, gan ngỗng áp chảo.",
      temperature: "16°C - 18°C",
      decanting: "Decant 60 - 90 phút trước khi thưởng thức",
    },
    producerStory:
      "Với lịch sử từ thế kỷ 16, Château Margaux được xếp hạng Premier Grand Cru Classé ngay trong Bảng phân loại rượu vang Bordeaux năm 1855 trứ danh.",
  },
  {
    id: "wine-03",
    slug: "seña-aconcagua-valley-icon-chile",
    name: "Seña Icon Wine Aconcagua Valley",
    vietnameseName: "Rượu Vang Chile Seña Đỉnh Cao Huyền Thoại",
    winery: "Viña Seña (Robert Mondavi & Eduardo Chadwick)",
    origin: "Chile",
    countryCode: "CL",
    region: "Aconcagua Valley",
    type: "Vang Đỏ",
    typeSlug: "vang-do",
    grapes: ["Cabernet Sauvignon 55%", "Malbec 18%", "Carménère 15%", "Cabernet Franc 7%", "Petit Verdot 5%"],
    vintage: "2019",
    alcohol: "14% Vol",
    volume: "750ml",
    price: 4950000,
    originalPrice: 5600000,
    ratingValue: 4.9,
    reviewCount: 67,
    criticScore: "98/100 James Suckling",
    inStock: true,
    featured: true,
    bestSeller: true,
    badge: "Icon Wine Chile",
    accentColor: "#9E2A2B",
    summary:
      "Rượu vang biểu tượng của Chile làm nên lịch sử tại Paris Tasting, canh tác theo phương pháp sinh học Biodynamic danh tiếng.",
    description:
      "Seña là sự kết hợp huyền thoại giữa ông hoàng rượu vang Mỹ Robert Mondavi và doanh nhân Eduardo Chadwick của dòng họ làm vang danh giá nhất Chile. Được nuôi dưỡng theo nông nghiệp sinh học Biodynamic tôn trọng tự nhiên, Seña thể hiện trọn vẹn terroir độc nhất của thung lũng Aconcagua.",
    tastingNotes: {
      aroma: "Quả lý chua đen, việt quất, quả vả tây quyện cùng tiêu đỏ cay nồng, lá thuốc lá và gỗ tuyết tùng sang trọng.",
      palate: "Vị vang dày dặn nhưng vô cùng mềm mượt, axit cân đối tinh tế và cấu trúc tannin sắc sảo.",
      finish: "Dài bất tận với dấu ấn khoáng chất, socola nguyên chất và trái cây đỏ thanh tao.",
      pairing: "Sườn cừu đút lò sốt tiêu, thịt bò nướng tảng Tomahawk, phô mai Manchego.",
      temperature: "16°C - 18°C",
      decanting: "Decant 45 phút",
    },
    producerStory:
      "Viña Seña được thành lập năm 1995 với tầm nhìn tạo nên chai vang vĩ đại đầu tiên của Chile có thể sánh ngang với các dòng Grand Cru danh giá nhất thế giới.",
  },
  {
    id: "wine-04",
    slug: "luigi-bosca-chablis-premier-cru-fourchaume",
    name: "Domaine Laroche Chablis Premier Cru Fourchaume",
    vietnameseName: "Rượu Vang Trắng Chablis Premier Cru Fourchaume",
    winery: "Domaine Laroche",
    origin: "Pháp (France)",
    countryCode: "FR",
    region: "Chablis, Bourgogne",
    type: "Vang Trắng",
    typeSlug: "vang-trang",
    grapes: ["Chardonnay 100%"],
    vintage: "2021",
    alcohol: "13% Vol",
    volume: "750ml",
    price: 2150000,
    originalPrice: 2450000,
    ratingValue: 4.8,
    reviewCount: 53,
    criticScore: "94/100 Wine Spectator",
    inStock: true,
    featured: true,
    bestSeller: false,
    badge: "Premier Cru",
    accentColor: "#B59E5F",
    summary:
      "Tinh hoa vang trắng vùng Chablis với khoáng chất đá vôi Kimmeridgian nghìn năm, hương chanh bưởi tươi mát và bơ ngậy tinh xảo.",
    description:
      "Chablis Premier Cru Fourchaume nổi tiếng là vườn nho 1er Cru danh tiếng bậc nhất tả ngạn sông Serein. Đất đá vôi giàu vỏ sò hóa thạch Kimmeridgian đem đến cho chai vang khoáng vị đặc trưng không nơi nào sao chép được. Rượu vang được ủ một phần trong thùng sồi Pháp để tạo độ đằm thắm hoàn mỹ.",
    tastingNotes: {
      aroma: "Hoa trắng cam quýt, táo xanh giòn, quả đào trắng, vỏ chanh vàng và khoáng chất đá lửa đặc trưng Chablis.",
      palate: "Độ chua giòn tan sảng khoái, chất rượu đậm đà vừa phải với cảm giác kem béo ngậy kín đáo ở hậu vị.",
      finish: "Hậu vị tươi sáng dài lâu với dư vị mặn mòi khoáng chất biển và hạnh nhân tươi.",
      pairing: "Hàu nướng mỡ hành, tôm hùm hấp bơ tỏi, sashimi cá hồi cao cấp, cá tuyết sốt vang trắng.",
      temperature: "10°C - 12°C",
      decanting: "Dùng trực tiếp, không cần decant",
    },
    producerStory:
      "Domaine Laroche là một trong những điền trang lâu đời nhất tại Chablis từ thời kỳ Tu viện Saint Martin thế kỷ thứ 9, luôn giữ gìn truyền thống làm vang thuần khiết.",
  },
  {
    id: "wine-05",
    slug: "dom-perignon-vintage-luminous-champagne",
    name: "Champagne Dom Pérignon Vintage Brut",
    vietnameseName: "Rượu Champagne Dom Pérignon Phát Sáng Danh Giá",
    winery: "Moët & Chandon / Dom Pérignon",
    origin: "Pháp (France)",
    countryCode: "FR",
    region: "Épernay, Champagne",
    type: "Vang Nổ (Sparkling)",
    typeSlug: "vang-no",
    grapes: ["Pinot Noir 54%", "Chardonnay 46%"],
    vintage: "2013",
    alcohol: "12.5% Vol",
    volume: "750ml",
    price: 7800000,
    originalPrice: 8500000,
    ratingValue: 5.0,
    reviewCount: 91,
    criticScore: "98/100 Decanter",
    inStock: true,
    featured: true,
    bestSeller: true,
    badge: "Vintage Champagne",
    accentColor: "#C5A059",
    summary:
      "Tuyệt đỉnh Champagne dành riêng cho các sự kiện hoàng gia và tiệc mừng đẳng cấp, bọt sủi li ti mịn màng cùng hương thơm bánh mì bơ brioche.",
    description:
      "Dom Pérignon chỉ sản xuất vào những năm có mùa thu hoạch nho xuất sắc nhất. Mỗi chai vang được ủ tối thiểu 8 năm trong hầm đá phấn trước khi xuất xưởng. Sự hòa quyện thần kỳ giữa nho Chardonnay thanh khiết và Pinot Noir quyền quý mang đến trải nghiệm vị giác không tiền khoáng hậu.",
    tastingNotes: {
      aroma: "Bạch đàn, bạc hà the mát kết hợp vỏ bưởi nướng, mơ chín, bánh mì brioche bơ Pháp và hạt dẻ rang.",
      palate: "Lớp bọt sủi sủi tăm tăm như nhung tơ, thể hiện vị chua sắc sảo, độ sâu ấn tượng và độ căng tràn sống động.",
      finish: "Dư vị khoáng chất khói, muối biển và trái cây hạch kéo dài vô tận.",
      pairing: "Trứng cá muối Caviar đen, gan ngỗng áp chảo, tôm hùm Alaska hấp, sushi cá ngừ vây xanh O-toro.",
      temperature: "8°C - 10°C",
      decanting: "Ướp xô đá 30 phút trước khi mở",
    },
    producerStory:
      "Mang tên vị tu sĩ Benedictine Dom Pierre Pérignon – người có công lao vĩ đại đặt nền móng hoàn thiện quy trình sản xuất Champagne lừng danh thế giới.",
  },
  {
    id: "wine-06",
    slug: "hop-qua-ruou-vang-tet-heritage-hoang-gia",
    name: "Hộp Quà Rượu Vang Tết Heritage Hoàng Gia Vàng 24K",
    vietnameseName: "Set Quà Tặng Rượu Vang Tết Doanh Nghiệp Thượng Hạng",
    winery: "Rượu Vang Hè Curated Collection",
    origin: "Ý (Italy)",
    countryCode: "IT",
    region: "Puglia & Verona",
    type: "Hộp Quà Cao Cấp",
    typeSlug: "hop-qua",
    grapes: ["Primitivo & Negroamaro"],
    vintage: "2021",
    alcohol: "14.5% Vol",
    volume: "Set Hộp Da Đôi + 4 Phụ Kiện Rót Rượu",
    price: 2850000,
    originalPrice: 3200000,
    ratingValue: 4.9,
    reviewCount: 115,
    criticScore: "Top 1 Quà Tết Doanh Nghiệp",
    inStock: true,
    featured: true,
    bestSeller: true,
    badge: "Hộp Da Cao Cấp",
    accentColor: "#B8860B",
    summary:
      "Bộ quà biếu sang trọng gồm 2 chai vang Ý cao cấp đặt trong hộp da may tay thủ công kèm bộ dụng cụ mở rượu mạ crom tinh xảo.",
    description:
      "Set quà tết Rượu Vang Hè Heritage được thiết kế độc quyền dành cho các đối tác doanh nghiệp, khách hàng VIP và người thân yêu dịp Tết Nguyên Đán. Vỏ hộp da cao cấp dập nổi họa tiết vân rồng phượng hoàng gia, khóa đồng cổ điển, bên trong bọc nhung đỏ Ruby bảo vệ rượu hoàn hảo.",
    tastingNotes: {
      aroma: "Hương trái cây đỏ ngào ngạt, anh đào dại, mứt dâu tây, socola ngọt ngào và vani ấm áp.",
      palate: "Dễ uống, tròn miệng, tannin ngọt ngào thích hợp cho cả người mới thưởng thức lẫn sành vang lâu năm.",
      finish: "Ấm áp, êm dịu kéo dài với hậu vị quả mọng chín.",
      pairing: "Phù hợp mọi bàn tiệc ngày Tết: giò thủ, nem nướng, bò kho, thịt xông khói và các loại hạt dinh dưỡng.",
      temperature: "16°C - 18°C",
      decanting: "Mở nắp 15 phút trước tiệc",
    },
    producerStory:
      "Bộ sưu tập quà tặng được giám tuyển bởi đội ngũ Sommelier hàng đầu của Rượu Vang Hè, cam kết 100% chính hãng có hóa đơn VAT và giấy chứng nhận CO/CQ.",
  },
];

export const WINE_CATEGORIES = [
  {
    slug: "vang-do",
    name: "Rượu Vang Đỏ",
    nameEn: "Red Wine",
    count: "120+ Chai",
    description: "Đậm đà hương vị mận chín, quả mọng và tannin quý phái từ các vùng vang lừng danh.",
    icon: "wine-bottle",
  },
  {
    slug: "vang-trang",
    name: "Rượu Vang Trắng",
    nameEn: "White Wine",
    count: "60+ Chai",
    description: "Thanh lịch, tươi mát với khoáng chất tinh khiết và hương hoa trái cam chanh sảng khoái.",
    icon: "wine-glass",
  },
  {
    slug: "vang-no",
    name: "Champagne & Vang Nổ",
    nameEn: "Sparkling & Champagne",
    count: "40+ Chai",
    description: "Những bọt sủi quyến rũ mừng khai tiệc, lễ kỷ niệm và những khoảnh khắc trọng đại.",
    icon: "sparkles",
  },
  {
    slug: "hop-qua",
    name: "Hộp Quà Rượu Vang",
    nameEn: "Gift Sets",
    count: "50+ Mẫu",
    description: "Hộp da, hộp gỗ sơn mài tinh xảo biểu trưng cho sự thịnh vượng, tri ân đối tác và khách hàng.",
    icon: "gift",
  },
];

export const FAQS = [
  {
    question: "Rượu Vang Hè có giấy tờ chứng minh nguồn gốc xuất xứ (CO/CQ) không?",
    answer:
      "100% sản phẩm rượu vang tại Rượu Vang Hè đều được nhập khẩu chính ngạch, có đầy đủ tem nhập khẩu hải quan, giấy chứng nhận xuất xứ hàng hóa (CO) và giấy chứng nhận chất lượng (CQ). Chúng tôi cam kết hoàn tiền 300% nếu phát hiện hàng không chuẩn.",
  },
  {
    question: "Rượu Vang Hè bảo quản rượu vang trong điều kiện như thế nào?",
    answer:
      "Tất cả sản phẩm đều được lưu trữ trong hầm rượu chuyên dụng đạt chuẩn quốc tế: nhiệt độ kiểm soát liên tục 16°C – 18°C, độ ẩm 70% – 75%, tránh hoàn toàn ánh sáng mặt trời và độ rung lắc, đảm bảo giữ nguyên vẹn chất lượng hương vị của từng giọt vang.",
  },
  {
    question: "Chính sách giao hàng của Rượu Vang Hè như thế nào?",
    answer:
      "Chúng tôi cung cấp dịch vụ giao hàng hỏa tốc trong 2 giờ tại nội thành Hà Nội và TP. Hồ Chí Minh với thùng chống sốc và túi bảo ôn nhiệt chuyên dụng. Đối với các tỉnh thành khác, thời gian giao hàng từ 1 - 3 ngày với bảo hiểm bể vỡ 100%.",
  },
  {
    question: "Tôi có thể yêu cầu tư vấn lựa chọn rượu vang theo ngân sách và tiệc không?",
    answer:
      "Hoàn toàn được! Đội ngũ Sommelier (chuyên gia nếm thử rượu vang) của Rượu Vang Hè sẵn sàng tư vấn miễn phí 24/7 qua Hotline 0988.123.456 hoặc Zalo, giúp quý khách chọn đúng chai vang phù hợp với thực đơn món ăn, phong thủy hoặc khẩu vị người nhận quà.",
  },
  {
    question: "Rượu Vang Hè có xuất hóa đơn VAT cho doanh nghiệp không?",
    answer:
      "Có. Chúng tôi hỗ trợ xuất hóa đơn giá trị gia tăng (VAT) đầy đủ, chính xác theo đúng quy định của Tổng cục Thuế ngay trong ngày cho mọi đơn hàng của cá nhân và doanh nghiệp.",
  },
];
