export interface MenuItem {
  id: string;
  name: string;
  subName?: string;
  category: "coldcut" | "bread" | "sparkling" | "rose" | "white";
  categoryLabel: { vi: string; en: string };
  price: string;
  glassPrice?: string;
  bottlePrice?: string;
  origin?: string;
  grape?: string;
  alc?: string;
  sweetness?: string;
  descVi: string;
  descEn: string;
  image: string;
  badge?: string;
  featured?: boolean;
}

export const MENU_HIGHLIGHTS: MenuItem[] = [
  {
    id: "mix-cold-cut",
    name: "Mix Cold Cut & Cheese",
    subName: "Khay Thịt Nguội & Phô Mai Tổng Hợp",
    category: "coldcut",
    categoryLabel: { vi: "Đồ Nguội & Phô Mai", en: "Cold Cut & Cheese" },
    price: "280.000đ — 380.000đ",
    origin: "Tây Ban Nha & Pháp",
    descVi: "Khay tổng hợp các loại thịt nguội hảo hạng kết hợp phô mai châu Âu béo ngậy, quả ô liu và bánh mì giòn.",
    descEn: "Premium assortment of Spanish cured meats paired with French cheeses, olives, and crisp sourdough toast.",
    image: "/images/coldcut-glass.jpg",
    badge: "Signature Pair",
    featured: true,
  },
  {
    id: "jamon-iberico",
    name: "Jamon Iberico with Truffle Cheese",
    subName: "Đùi Heo Muối Iberico & Phô Mai Cừu Truffle",
    category: "coldcut",
    categoryLabel: { vi: "Đồ Nguội Thượng Hạng", en: "Gourmet Cold Cut" },
    price: "170.000đ",
    origin: "Tây Ban Nha",
    descVi: "Thịt đùi heo muối Iberico cao cấp ăn cùng phô mai cừu ủ nấm Truffle đen và lát bánh mì Sourdough thơm giòn.",
    descEn: "Renowned Spanish Iberico ham paired with truffle-infused sheep cheese and rustic sourdough slices.",
    image: "/images/1791444307770_8243178211297854059_8243178211297854059_52b0a90d325388b8b3bee750cac163ed.jpg",
    badge: "Must Try",
    featured: true,
  },
  {
    id: "hai-phong-pate",
    name: "Hai Phong Pate Bread",
    subName: "Bánh Mì Sourdough & Pate Hải Phòng",
    category: "bread",
    categoryLabel: { vi: "Bánh Mì & Khai Vị", en: "Bread & Bites" },
    price: "80.000đ",
    origin: "Đặc sản Hải Phòng",
    descVi: "Lát bánh mì Sourdough nướng giòn rụm phết lớp pate Hải Phòng gia truyền béo ngậy, đậm đà khó quên.",
    descEn: "Artisanal crusty sourdough accompanied by traditional Hai Phong rich & savory signature pate.",
    image: "/images/1791444307758_8243178211297854059_8243178211297854059_2153babe5b013813bf90f2f8d0b093dc.jpg",
    badge: "Đặc Sản",
    featured: true,
  },
  {
    id: "spumante-rosato",
    name: "Piazza Grande Spumante Rosato Brut",
    subName: "Vang Sủi Hồng Ý",
    category: "sparkling",
    categoryLabel: { vi: "Vang Sủi Tăm", en: "Sparkling Wine" },
    price: "140.000đ / Ly · 650.000đ / Chai",
    glassPrice: "140.000đ",
    bottlePrice: "650.000đ",
    origin: "Italy (Ý)",
    grape: "Lambrusco Di Sorbara / Salamino",
    alc: "11.5% alc.",
    sweetness: "Brut / Dry",
    descVi: "Sắc hồng cherry dịu dàng, hương dâu tây và hoa nở thanh thoát, bọt kem mịn màng và độ chua sảng khoái.",
    descEn: "Delicate cherry pink color, fresh notes of wild strawberries and blossoms with a velvety creamy mousse.",
    image: "/images/1791445317444_8243178211297854059_8243178211297854059_57ab304fc5f49f6332852522703d2ff8.jpg",
    badge: "By The Glass",
    featured: true,
  },
  {
    id: "prosecco-extra-dry",
    name: "Terre Dei Buth Prosecco DOC Extra Dry",
    subName: "Vang Sủi Trắng Hữu Cơ",
    category: "sparkling",
    categoryLabel: { vi: "Vang Sủi Tăm", en: "Sparkling Wine" },
    price: "750.000đ / Chai",
    bottlePrice: "750.000đ",
    origin: "Italy (Ý)",
    grape: "Glera",
    alc: "11% alc.",
    sweetness: "Extra Dry",
    descVi: "Hương thơm tinh tế hòa quyện giữa hoa keo, dưa lưới và đào trắng. Vị vang quyến rũ, thơm dịu và mềm mượt.",
    descEn: "Refined bouquet combining acacia flowers, melon, and white peach. Charming, aromatic, and velvety finish.",
    image: "/images/wine-selection.jpg",
    badge: "Organic",
    featured: true,
  },
  {
    id: "pink-moscato",
    name: "De Bortoli, Emeri's Garden Pink Moscato",
    subName: "Vang Hồng Ngọt Nhẹ Úc",
    category: "rose",
    categoryLabel: { vi: "Vang Hồng", en: "Rose Wine" },
    price: "160.000đ / Ly · 750.000đ / Chai",
    glassPrice: "160.000đ",
    bottlePrice: "750.000đ",
    origin: "Australia (Úc)",
    grape: "Moscato",
    alc: "8% alc.",
    sweetness: "Sweet",
    descVi: "Hương dâu tây, mâm xôi, đào trắng và hoa hồng. Vị ngọt nhẹ, sủi bọt tự nhiên mang lại cảm giác tươi mát.",
    descEn: "Expressive aromas of strawberry, peach, and rose petals. Delicately sweet with fine natural bubbles.",
    image: "/images/1791445317470_8243178211297854059_8243178211297854059_096b1cb11051682f8f3eac4b5b70f571.jpg",
    badge: "Dành Cho Phái Đẹp",
    featured: true,
  },
  {
    id: "robertson-gewurztraminer",
    name: "Robertson Gewurztraminer",
    subName: "Vang Trắng Bán Ngọt Nam Phi",
    category: "white",
    categoryLabel: { vi: "Vang Trắng", en: "White Wine" },
    price: "150.000đ / Ly · 700.000đ / Chai",
    glassPrice: "150.000đ",
    bottlePrice: "700.000đ",
    origin: "South Africa (Nam Phi)",
    grape: "Gewürztraminer",
    alc: "11.5% alc.",
    sweetness: "Semi-Sweet",
    descVi: "Cấu trúc đậm đà với hương kim ngân hoa và cánh hoa hồng. Vị ngọt thanh cân bằng cùng độ chua êm ái.",
    descEn: "Full-bodied wine with honeysuckle and rose petal aromas. Rich and smooth with balanced honeyed sweetness.",
    image: "/images/1791444307738_8243178211297854059_8243178211297854059_a8381f6ddfb3dcb9f29ebf653506f051.jpg",
    badge: "By The Glass",
    featured: true,
  },
  {
    id: "cheese-board",
    name: "Cheese Board",
    subName: "Khay Phô Mai Tổng Hợp",
    category: "coldcut",
    categoryLabel: { vi: "Phô Mai Châu Âu", en: "European Cheese" },
    price: "220.000đ",
    origin: "Pháp & Ý",
    descVi: "Tuyển chọn các loại phô mai hảo hạng như Brie de Nangis béo ngậy, phô mai sợi hun khói ăn kèm trái cây sấy.",
    descEn: "Curated selection of fine European cheeses including creamy Brie de Nangis, smoked string cheese & dried fruits.",
    image: "/images/1791444307775_8243178211297854059_8243178211297854059_5c990cc05a4fdfcc5c2ec28d1763e762.jpg",
    badge: "Classic",
    featured: true,
  },
];

export const MENU_SCAN_PAGES = [
  {
    id: "coldcut-bread",
    titleVi: "Thực Đơn Cold Cut & Bánh Mì",
    titleEn: "Cold Cut & Bread Menu",
    descVi: "Jamon Iberico, khay phô mai tổng hợp, Pate Hải Phòng & bánh mì Sourdough",
    descEn: "Jamon Iberico, artisanal cheese platters, Hai Phong pate & crusty sourdough",
    image: "/images/menu/menu-coldcut-bread.png",
  },
  {
    id: "sparkling",
    titleVi: "Thực Đơn Vang Sủi (Sparkling Wine)",
    titleEn: "Sparkling Wine Menu",
    descVi: "Piazza Grande Rosato Brut, Terre Dei Buth Prosecco, Castell D'or Cava",
    descEn: "Piazza Grande Rosato Brut, Terre Dei Buth Prosecco, Castell D'or Cava",
    image: "/images/menu/menu-sparkling.png",
  },
  {
    id: "rose",
    titleVi: "Thực Đơn Vang Hồng (Rose Wine)",
    titleEn: "Rose Wine Menu",
    descVi: "De Bortoli Pink Moscato, Barba Collemorino Cerasuolo D'Abruzzo",
    descEn: "De Bortoli Pink Moscato, Barba Collemorino Cerasuolo D'Abruzzo",
    image: "/images/menu/menu-rose.png",
  },
  {
    id: "white",
    titleVi: "Thực Đơn Vang Trắng (White Wine)",
    titleEn: "White Wine Menu",
    descVi: "Terre Dei Buth Pinot Grigio, Trebbiano D'Abruzzo, Robertson Gewurztraminer",
    descEn: "Terre Dei Buth Pinot Grigio, Trebbiano D'Abruzzo, Robertson Gewurztraminer",
    image: "/images/menu/menu-white.png",
  },
];
