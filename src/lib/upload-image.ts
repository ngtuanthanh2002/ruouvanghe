import { createImageUpload } from "@/app/actions/blog";

/** Tải ảnh lên Supabase Storage, trả về URL công khai. Chạy ở trình duyệt. */
export async function uploadBlogImage(file: File): Promise<string> {
  const ticket = await createImageUpload({ type: file.type, size: file.size });
  if (!ticket.ok) throw new Error(ticket.error);

  const res = await fetch(ticket.uploadUrl, {
    method: "PUT",
    headers: {
      apikey: ticket.apiKey,
      "content-type": file.type,
      "cache-control": "max-age=31536000",
      "x-upsert": "false",
    },
    body: file,
  });
  if (!res.ok) {
    throw new Error(`Tải ảnh thất bại (${res.status}): ${await res.text()}`);
  }
  return ticket.publicUrl;
}
