-- Dữ liệu mẫu cho bảng blog_posts (6 sự kiện). Chạy SAU schema.sql.
-- Chạy lại không bị trùng: bài đã có cùng slug sẽ được bỏ qua.

insert into public.blog_posts
  (slug, title, category, event_date, event_time, location, cover_url, excerpt, content)
values
  ('dem-vang-bordeaux-thang-11',
   'Đêm Vang Bordeaux — Hành Trình Qua Tả Ngạn & Hữu Ngạn',
   'Wine Tasting',
   '2026-11-08',
   '19:00 — 22:00',
   'Vanghè · 65 Trịnh Phong, Nha Trang',
   '/images/wine-selection.jpg',
   'Năm chai vang Bordeaux được chọn lọc, từ Médoc mạnh mẽ đến Saint-Émilion mềm mại, kết hợp cùng đĩa cold cut và phô mai Pháp.',
   'Tối thứ Bảy, Vanghè mời bạn cùng thử năm chai vang Bordeaux đến từ hai bờ sông Gironde. Bên Tả Ngạn là Cabernet Sauvignon đậm đà, cấu trúc chắc; bên Hữu Ngạn là Merlot tròn trịa, mượt mà.

Mỗi chai được giới thiệu ngắn gọn về vùng trồng, niên vụ và cách thưởng thức. Đi kèm là đĩa cold cut, phô mai Brie, Comté và bánh mì nướng giòn.

Số chỗ giới hạn 20 khách. Vui lòng đặt bàn trước qua hotline hoặc form đặt bàn trên website.'),
  ('tablescape-giang-sinh-2026',
   'Tablescape Giáng Sinh — Bàn Tiệc Ánh Nến Cuối Năm',
   'Sự kiện mùa lễ',
   '2026-12-24',
   '18:00 — 23:30',
   'Vanghè · 65 Trịnh Phong, Nha Trang',
   '/images/tablescape-main.jpg',
   'Không gian được trang hoàng với nến, cành thông và khăn trải bàn nhung đỏ. Set menu Giáng Sinh 3 món kèm một ly vang nổ chào đón.',
   'Đêm Giáng Sinh năm nay, mỗi bàn tại Vanghè sẽ được bày trí riêng theo phong cách tablescape: nến sáp ong, cành thông tươi, quả thông và khăn nhung đỏ rượu vang.

Set menu 3 món gồm khai vị cold cut, món chính thịt bò hầm vang đỏ và tráng miệng bánh khúc cây, kèm một ly vang nổ chào đón cho mỗi khách.

Nhận đặt bàn nhóm 2 — 10 người. Bàn gần cửa sổ ưu tiên cho khách đặt sớm.'),
  ('live-jazz-toi-thu-sau',
   'Live Jazz Tối Thứ Sáu Cùng Bộ Ba Acoustic',
   'Âm nhạc',
   '2026-10-24',
   '20:00 — 22:30',
   'Vanghè · 65 Trịnh Phong, Nha Trang',
   '/images/gallery-night.jpg',
   'Những bản jazz kinh điển qua tiếng saxophone, guitar và contrabass. Ưu đãi 15% cho chai vang đỏ Ý trong suốt buổi diễn.',
   'Bộ ba acoustic sẽ mang đến những bản jazz quen thuộc như Autumn Leaves, Fly Me to the Moon và Take Five trong không gian ấm cúng của Vanghè.

Trong suốt buổi diễn, tất cả chai vang đỏ Ý được giảm 15%. Không thu phí vào cửa.'),
  ('workshop-ghep-vang-va-phomai',
   'Workshop: Ghép Vang & Phô Mai Cho Người Mới Bắt Đầu',
   'Workshop',
   '2026-10-04',
   '16:00 — 18:00',
   'Vanghè · 65 Trịnh Phong, Nha Trang',
   '/images/coldcut-glass.jpg',
   'Buổi workshop nhỏ giúp bạn hiểu vì sao vang trắng hợp phô mai dê, còn vang đỏ đậm lại hợp phô mai cứng lâu năm.',
   'Buổi workshop đầu tiên của Vanghè đã diễn ra với 16 học viên. Mọi người cùng nếm 4 loại vang và 6 loại phô mai, ghi lại cảm nhận vào phiếu thử.

Nguyên tắc dễ nhớ nhất: vang có độ chua cao hợp phô mai béo và mặn; vang đỏ nhiều tannin hợp phô mai cứng, ủ lâu.

Cảm ơn tất cả học viên đã tham gia. Buổi tiếp theo sẽ được thông báo trên trang này.'),
  ('khai-truong-goc-vang-moi',
   'Ra Mắt Góc Vang Mới Với Hơn 80 Nhãn Nhập Khẩu',
   'Tin tức',
   '2026-09-12',
   '17:00 — 23:30',
   'Vanghè · 65 Trịnh Phong, Nha Trang',
   '/images/gallery-shelves.jpg',
   'Kệ vang được mở rộng với hơn 80 nhãn từ Ý, Pháp, Chile và Tây Ban Nha, bảo quản ở nhiệt độ ổn định 16°C.',
   'Sau một tháng sửa sang, góc vang mới của Vanghè đã chính thức mở cửa với hơn 80 nhãn vang nhập khẩu, được sắp xếp theo vùng và giống nho.

Khách có thể chọn chai tại kệ và thưởng thức ngay tại bàn, hoặc mang về với giá ưu đãi.'),
  ('dem-nen-trung-thu',
   'Đêm Nến Trung Thu — Vang Ngọt & Bánh Nướng',
   'Sự kiện mùa lễ',
   '2026-09-25',
   '18:30 — 22:00',
   'Vanghè · 65 Trịnh Phong, Nha Trang',
   '/images/gallery-candles.jpg',
   'Một đêm Trung Thu khác lạ: vang ngọt Moscato d''Asti kết hợp bánh nướng nhân hạt sen dưới ánh nến lung linh.',
   'Đêm Trung Thu tại Vanghè được thắp sáng bởi hàng trăm ngọn nến. Khách được thưởng thức Moscato d''Asti nhẹ nhàng, ngọt thanh cùng bánh nướng truyền thống.

Cảm ơn quý khách đã cùng Vanghè đón một mùa trăng thật ấm áp.')
on conflict (slug) do nothing;
