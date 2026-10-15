-- Vanghè — bảng bài Blog / sự kiện
-- Chạy file này 1 lần trong Supabase: SQL Editor → New query → dán → Run.

create table if not exists public.blog_posts (
  id          uuid primary key default gen_random_uuid(),
  slug        text not null unique
              check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),       -- vd: dem-vang-bordeaux
  title       text not null,
  category    text,
  event_date  date not null,                                   -- ngày diễn ra sự kiện
  event_time  text,                                            -- vd: 19:00 — 22:00
  location    text default 'Vanghè · 65 Trịnh Phong, Nha Trang',
  cover_url   text not null,                                   -- URL ảnh Supabase Storage hoặc /images/...
  excerpt     text not null,                                   -- mô tả ngắn hiển thị trên thẻ
  content     text,                                            -- nội dung; mỗi đoạn cách nhau 1 dòng trống
  published   boolean not null default true,                   -- false = ẩn khỏi website
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists blog_posts_event_date_idx on public.blog_posts (event_date desc);

-- Tự cập nhật updated_at mỗi khi sửa bài
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_updated_at on public.blog_posts;
create trigger blog_posts_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();

-- Bảo mật: website (khoá publishable) chỉ ĐỌC được bài đã xuất bản.
-- Không có policy insert/update/delete → chỉ sửa được từ Dashboard của Supabase.
alter table public.blog_posts enable row level security;

drop policy if exists "Public can read published posts" on public.blog_posts;
create policy "Public can read published posts"
  on public.blog_posts
  for select
  to anon, authenticated
  using (published = true);
