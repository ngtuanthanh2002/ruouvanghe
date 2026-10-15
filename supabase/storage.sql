-- Vanghè — bucket Storage chứa ảnh Blog (ảnh bìa + ảnh trong bài)
-- Chạy 1 lần trong Supabase: SQL Editor → New query → dán → Run. Chạy lại không lỗi.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'blog',
  'blog',
  true,                                                    -- ai cũng XEM được ảnh (để hiện trên website)
  5242880,                                                 -- tối đa 5 MB / ảnh
  array['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

-- Không cần thêm policy: website tải ảnh lên bằng link có chữ ký do server cấp
-- (chỉ sau khi admin đăng nhập), nên người ngoài không tải lên được.
