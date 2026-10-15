// Kiểu dữ liệu bài Blog + dữ liệu mẫu.
// Dữ liệu thật lấy từ Supabase (xem src/lib/blog.ts). SAMPLE_BLOG_POSTS chỉ dùng khi chưa
// cấu hình Supabase, và cũng là nội dung của supabase/seed.sql.

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  /** Ngày diễn ra sự kiện, dạng YYYY-MM-DD */
  date: string;
  time: string;
  location: string;
  cover: string;
  excerpt: string;
  /** Nội dung dạng chữ thường, mỗi phần tử là một đoạn văn */
  content: string[];
  /** Nội dung HTML (đã lọc an toàn) — bài đăng từ trang quản trị */
  contentHtml?: string;
}

export const SAMPLE_BLOG_POSTS: BlogPost[] = [
  {
    slug: "dem-vang-bordeaux-thang-11",
    title: "Đêm Vang Bordeaux — Hành Trình Qua Tả Ngạn & Hữu Ngạn",
    category: "Wine Tasting",
    date: "2026-11-08",
    time: "19:00 — 22:00",
    location: "Vanghè · 65 Trịnh Phong, Nha Trang",
    cover: "/images/wine-selection.jpg",
    excerpt:
      "Năm chai vang Bordeaux được chọn lọc, từ Médoc mạnh mẽ đến Saint-Émilion mềm mại, kết hợp cùng đĩa cold cut và phô mai Pháp.",
    content: [
      "Tối thứ Bảy, Vanghè mời bạn cùng thử năm chai vang Bordeaux đến từ hai bờ sông Gironde. Bên Tả Ngạn là Cabernet Sauvignon đậm đà, cấu trúc chắc; bên Hữu Ngạn là Merlot tròn trịa, mượt mà.",
      "Mỗi chai được giới thiệu ngắn gọn về vùng trồng, niên vụ và cách thưởng thức. Đi kèm là đĩa cold cut, phô mai Brie, Comté và bánh mì nướng giòn.",
      "Số chỗ giới hạn 20 khách. Vui lòng đặt bàn trước qua hotline hoặc form đặt bàn trên website.",
    ],
  },
  {
    slug: "tablescape-giang-sinh-2026",
    title: "Tablescape Giáng Sinh — Bàn Tiệc Ánh Nến Cuối Năm",
    category: "Sự kiện mùa lễ",
    date: "2026-12-24",
    time: "18:00 — 23:30",
    location: "Vanghè · 65 Trịnh Phong, Nha Trang",
    cover: "/images/tablescape-main.jpg",
    excerpt:
      "Không gian được trang hoàng với nến, cành thông và khăn trải bàn nhung đỏ. Set menu Giáng Sinh 3 món kèm một ly vang nổ chào đón.",
    content: [
      "Đêm Giáng Sinh năm nay, mỗi bàn tại Vanghè sẽ được bày trí riêng theo phong cách tablescape: nến sáp ong, cành thông tươi, quả thông và khăn nhung đỏ rượu vang.",
      "Set menu 3 món gồm khai vị cold cut, món chính thịt bò hầm vang đỏ và tráng miệng bánh khúc cây, kèm một ly vang nổ chào đón cho mỗi khách.",
      "Nhận đặt bàn nhóm 2 — 10 người. Bàn gần cửa sổ ưu tiên cho khách đặt sớm.",
    ],
  },
  {
    slug: "live-jazz-toi-thu-sau",
    title: "Live Jazz Tối Thứ Sáu Cùng Bộ Ba Acoustic",
    category: "Âm nhạc",
    date: "2026-10-24",
    time: "20:00 — 22:30",
    location: "Vanghè · 65 Trịnh Phong, Nha Trang",
    cover: "/images/gallery-night.jpg",
    excerpt:
      "Những bản jazz kinh điển qua tiếng saxophone, guitar và contrabass. Ưu đãi 15% cho chai vang đỏ Ý trong suốt buổi diễn.",
    content: [
      "Bộ ba acoustic sẽ mang đến những bản jazz quen thuộc như Autumn Leaves, Fly Me to the Moon và Take Five trong không gian ấm cúng của Vanghè.",
      "Trong suốt buổi diễn, tất cả chai vang đỏ Ý được giảm 15%. Không thu phí vào cửa.",
    ],
  },
  {
    slug: "workshop-ghep-vang-va-phomai",
    title: "Workshop: Ghép Vang & Phô Mai Cho Người Mới Bắt Đầu",
    category: "Workshop",
    date: "2026-10-04",
    time: "16:00 — 18:00",
    location: "Vanghè · 65 Trịnh Phong, Nha Trang",
    cover: "/images/coldcut-glass.jpg",
    excerpt:
      "Buổi workshop nhỏ giúp bạn hiểu vì sao vang trắng hợp phô mai dê, còn vang đỏ đậm lại hợp phô mai cứng lâu năm.",
    content: [
      "Buổi workshop đầu tiên của Vanghè đã diễn ra với 16 học viên. Mọi người cùng nếm 4 loại vang và 6 loại phô mai, ghi lại cảm nhận vào phiếu thử.",
      "Nguyên tắc dễ nhớ nhất: vang có độ chua cao hợp phô mai béo và mặn; vang đỏ nhiều tannin hợp phô mai cứng, ủ lâu.",
      "Cảm ơn tất cả học viên đã tham gia. Buổi tiếp theo sẽ được thông báo trên trang này.",
    ],
  },
  {
    slug: "khai-truong-goc-vang-moi",
    title: "Ra Mắt Góc Vang Mới Với Hơn 80 Nhãn Nhập Khẩu",
    category: "Tin tức",
    date: "2026-09-12",
    time: "17:00 — 23:30",
    location: "Vanghè · 65 Trịnh Phong, Nha Trang",
    cover: "/images/gallery-shelves.jpg",
    excerpt:
      "Kệ vang được mở rộng với hơn 80 nhãn từ Ý, Pháp, Chile và Tây Ban Nha, bảo quản ở nhiệt độ ổn định 16°C.",
    content: [
      "Sau một tháng sửa sang, góc vang mới của Vanghè đã chính thức mở cửa với hơn 80 nhãn vang nhập khẩu, được sắp xếp theo vùng và giống nho.",
      "Khách có thể chọn chai tại kệ và thưởng thức ngay tại bàn, hoặc mang về với giá ưu đãi.",
    ],
  },
  {
    slug: "dem-nen-trung-thu",
    title: "Đêm Nến Trung Thu — Vang Ngọt & Bánh Nướng",
    category: "Sự kiện mùa lễ",
    date: "2026-09-25",
    time: "18:30 — 22:00",
    location: "Vanghè · 65 Trịnh Phong, Nha Trang",
    cover: "/images/gallery-candles.jpg",
    excerpt:
      "Một đêm Trung Thu khác lạ: vang ngọt Moscato d'Asti kết hợp bánh nướng nhân hạt sen dưới ánh nến lung linh.",
    content: [
      "Đêm Trung Thu tại Vanghè được thắp sáng bởi hàng trăm ngọn nến. Khách được thưởng thức Moscato d'Asti nhẹ nhàng, ngọt thanh cùng bánh nướng truyền thống.",
      "Cảm ơn quý khách đã cùng Vanghè đón một mùa trăng thật ấm áp.",
    ],
  },
];

/** "2026-11-08" → "08/11/2026" */
export function formatBlogDate(date: string) {
  return date.split("-").reverse().join("/");
}
