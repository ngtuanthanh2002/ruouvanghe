import sanitizeHtml from "sanitize-html";

// Lọc HTML nội dung bài Blog: chỉ giữ các thẻ mà trình soạn thảo tạo ra,
// bỏ script, style, sự kiện onClick… để nội dung không thể chèn mã độc vào website.

const OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: [
    "p", "br", "h2", "h3", "strong", "b", "em", "i", "u", "s",
    "a", "ul", "ol", "li", "blockquote", "hr", "img", "code", "pre",
  ],
  allowedAttributes: {
    a: ["href", "target", "rel"],
    img: ["src", "alt", "title"],
  },
  allowedSchemes: ["https", "http", "mailto", "tel"],
  allowedSchemesByTag: { img: ["https"] },
  allowProtocolRelative: false,
  // Ảnh bị bỏ src (vd. link http) thì bỏ luôn thẻ
  exclusiveFilter: (frame) => frame.tag === "img" && !frame.attribs.src,
  transformTags: {
    // Link ra ngoài mở tab mới, có rel an toàn
    a: (tagName, attribs) => {
      const href = attribs.href ?? "";
      const result: sanitizeHtml.Attributes = { href };
      if (/^https?:\/\//.test(href)) {
        result.target = "_blank";
        result.rel = "noopener noreferrer";
      }
      return { tagName, attribs: result };
    },
  },
};

export function sanitizeBlogHtml(html: string) {
  return sanitizeHtml(html, OPTIONS);
}

/** Lấy chữ thuần từ HTML (dùng làm mô tả ngắn khi người viết để trống) */
export function htmlToText(html: string) {
  // Thêm khoảng trắng sau mỗi khối để chữ của hai đoạn liền nhau không bị dính
  const spaced = html.replace(/<\/(p|h\d|li|blockquote)>|<br\s*\/?>/gi, "$& ");
  return sanitizeHtml(spaced, { allowedTags: [], allowedAttributes: {} })
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
