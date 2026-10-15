# Kết nối trang Blog với Supabase

Trang `/blog` lấy bài viết từ bảng `blog_posts` trên Supabase. Khi bạn thêm hoặc sửa bài trên Supabase, website sẽ cập nhật sau khoảng **1 phút**, không cần deploy lại.

Khi chưa cấu hình Supabase, trang Blog hiển thị 6 bài mẫu có sẵn trong code.

| File | Vai trò |
| --- | --- |
| `supabase/schema.sql` | Tạo bảng `blog_posts` và quyền đọc công khai |
| `supabase/storage.sql` | Tạo bucket `blog` chứa ảnh cho chức năng đăng bài |
| `supabase/seed.sql` | Thêm 6 bài mẫu vào bảng (không bắt buộc) |
| `src/lib/blog.ts` | Code lấy dữ liệu từ Supabase cho website |
| `.env.local` | Nơi điền URL và khoá Supabase |

---

## Bước 1 — Tạo project Supabase

1. Vào <https://supabase.com>, đăng nhập rồi bấm **New project**.
2. Đặt tên (ví dụ `vanghe`), tạo mật khẩu database (lưu lại), chọn Region **Southeast Asia (Singapore)**.
3. Bấm **Create new project** và đợi khoảng 1–2 phút.

## Bước 2 — Tạo bảng

1. Trong project, mở **SQL Editor** → **New query**.
2. Mở file `supabase/schema.sql`, copy toàn bộ, dán vào rồi bấm **Run**. Kết quả phải là `Success. No rows returned`.
3. Mở **Table Editor** → bảng `blog_posts` để xem dữ liệu.

## Bước 3 — Lấy URL và khoá

1. Vào **Project Settings** (bánh răng) → **API Keys**. Copy khoá **Publishable key**, dạng `sb_publishable_...`.
   - Nếu project chỉ có khoá kiểu cũ thì dùng khoá **anon public**.
   - **Không** dùng khoá `secret` / `service_role`, vì khoá đó có toàn quyền ghi và xoá.
2. Vào **Project Settings** → **Data API**, copy **Project URL**, dạng `https://abcxyz.supabase.co`. Dán cả dạng có đuôi `/rest/v1/` cũng được.
3. Mở file `.env.local` ở thư mục gốc dự án và điền 2 dòng đã có sẵn:

   ```env
   SUPABASE_URL=https://abcxyz.supabase.co
   SUPABASE_PUBLISHABLE_KEY=sb_publishable_xxxxxxxxxxxxxxxx
   ```

4. Tắt `npm run dev` rồi chạy lại, vì Next.js chỉ đọc `.env.local` lúc khởi động.

## Bước 4 — Kiểm tra

- Mở <http://localhost:3000/blog>. Bài trên trang phải khớp với bảng trên Supabase.
- Kiểm tra API trực tiếp (thay URL và khoá của bạn):

  ```bash
  curl "https://abcxyz.supabase.co/rest/v1/blog_posts?select=slug,title" -H "apikey: sb_publishable_xxx"
  ```

  Lệnh này phải trả về danh sách bài dạng JSON.

---

## Bật chức năng đăng bài từ website

Sau khi làm xong, admin đăng nhập rồi vào trang **`/admin/dang-bai`** để viết bài: tải ảnh bìa, soạn nội dung có định dạng (tiêu đề, in đậm, danh sách, trích dẫn, link) và chèn ảnh vào giữa bài. Có 2 lối vào trang này: nút **✎ Đăng bài mới** trong ô tài khoản (biểu tượng người dùng trên header) và trên trang Blog.

**1. Tạo bucket chứa ảnh.** Trong **SQL Editor** → **New query**, dán toàn bộ `supabase/storage.sql` rồi bấm **Run**. Kết quả là bucket `blog` công khai, nhận ảnh tối đa 5 MB.

**2. Thêm khoá secret.** Vào **Project Settings** → **API Keys** → mục **Secret keys** và copy khoá dạng `sb_secret_...`. Nếu project dùng khoá kiểu cũ thì copy khoá `service_role`. Điền vào `.env.local`:

```env
SUPABASE_SECRET_KEY=sb_secret_xxxxxxxxxxxxxxxx
```

Sau đó chạy lại `npm run dev`.

> ⚠️ Khoá secret có **toàn quyền** với database. Khoá chỉ được dùng trong code server (`src/lib/supabase-admin.ts`), không bao giờ gửi xuống trình duyệt. Không commit lên git, không gửi cho ai. Nếu lỡ lộ, vào **API Keys** để thu hồi và tạo khoá mới.

**3. Viết bài.**

- **Đăng nhập:** bấm biểu tượng người dùng trên header và đăng nhập bằng tài khoản admin. Email đã đăng nhập được lưu vào localStorage của trình duyệt (không lưu mật khẩu).
- **Đăng ngay:** để tick **Hiển thị ngay trên website** rồi bấm **Đăng bài**. Bài hiện lên trang Blog ngay lập tức.
- **Lưu nháp:** bỏ tick để lưu bài ở chế độ ẩn. Muốn đăng sau thì bật cột `published` trong Table Editor.
- **Sửa hoặc xoá bài đã đăng:** hiện vẫn làm trong **Table Editor** của Supabase.

---

## Thêm hoặc sửa bài viết trên Supabase

Vào **Table Editor** → `blog_posts` → **Insert** → **Insert row**, hoặc bấm vào một ô để sửa.

| Cột | Bắt buộc | Ghi chú |
| --- | --- | --- |
| `slug` | ✔ | Đường dẫn bài: chữ thường không dấu, nối bằng `-`, ví dụ `dem-nhac-jazz-thang-12` → `/blog/dem-nhac-jazz-thang-12`. Không được trùng bài khác. |
| `title` | ✔ | Tiêu đề |
| `excerpt` | ✔ | Mô tả ngắn hiện trên thẻ ở trang Blog (tối đa 3 dòng, dài hơn sẽ có "...") |
| `cover_url` | ✔ | Link ảnh bìa (xem phần dưới) |
| `event_date` | ✔ | Ngày diễn ra. Bài có ngày mới nhất hiện đầu tiên |
| `event_time` | | Ví dụ `19:00 — 22:00` |
| `category` | | Ví dụ `Workshop`, `Âm nhạc` |
| `location` | | Mặc định là địa chỉ quán |
| `content` | | Nội dung chi tiết. Nhập tay thì **mỗi đoạn văn cách nhau một dòng trống**. Bài đăng từ website lưu dạng HTML, khi sửa tay cần giữ nguyên các thẻ `<p>`, `<h2>`… |
| `published` | | Bỏ tick (`false`) để ẩn bài khỏi website mà không phải xoá |

Bỏ trống các cột `id`, `created_at`, `updated_at`, Supabase sẽ tự điền.

## Ảnh bìa

**Cách 1: dùng ảnh có sẵn trong website.** Điền đường dẫn bắt đầu bằng `/images/`, ví dụ `/images/gallery-night.jpg`.

**Cách 2: tải ảnh mới lên Supabase Storage.**

1. Tạo bucket `blog` bằng `supabase/storage.sql` (xem phần đăng bài ở trên). Chỉ cần làm 1 lần.
2. Mở bucket `blog` → **Upload file** và chọn ảnh. Nên dùng ảnh JPG dưới 1 MB, ngang khoảng 1600px.
3. Bấm vào ảnh → **Get URL** (hoặc **Copy URL**) và dán vào cột `cover_url`. Link có dạng:
   `https://abcxyz.supabase.co/storage/v1/object/public/blog/ten-anh.jpg`

Website đã được cấu hình sẵn để hiển thị ảnh từ `*.supabase.co` (xem `next.config.ts`).

---

## Đưa lên website thật (Vercel hoặc nơi host khác)

Khai báo 2 biến môi trường trên nơi host, ví dụ Vercel → Project → **Settings** → **Environment Variables**:

```
SUPABASE_URL
SUPABASE_PUBLISHABLE_KEY
SUPABASE_SECRET_KEY
```

Sau đó **Redeploy**. Ở đây cũng cần khai báo 3 biến của chức năng đăng nhập: `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `SESSION_SECRET`.

---

## Lưu ý

- **Thời gian cập nhật:** website giữ dữ liệu trong khoảng 1 phút rồi mới lấy lại từ Supabase. Sửa bài xong, đợi khoảng 1 phút rồi tải lại trang.
- **Bảo mật:** khoá publishable chỉ **đọc** được bài có `published = true`, vì đã bật Row Level Security trong `schema.sql`. Không ai dùng được khoá này để sửa hay xoá bài. Mọi thay đổi chỉ làm được từ Dashboard Supabase.
- **Gói miễn phí:** project Supabase miễn phí sẽ tự **tạm dừng** nếu không có truy cập trong khoảng 1 tuần. Nếu trang Blog báo lỗi, vào Supabase bấm **Restore project**.
- **Khi trang Blog báo lỗi:** xem log terminal (`npm run dev`) hoặc log trên Vercel. Lỗi có dạng `Supabase lỗi 401` là sai khoá, `404` là chưa chạy `schema.sql` hoặc sai URL.
