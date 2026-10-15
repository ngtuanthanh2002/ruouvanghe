"use client";

import React, { useRef, useState } from "react";
import { EditorContent, useEditor, useEditorState, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { Placeholder } from "@tiptap/extensions";
import styles from "./RichTextEditor.module.css";
import { uploadBlogImage } from "@/lib/upload-image";

interface RichTextEditorProps {
  initialHtml?: string;
  onChange: (html: string) => void;
}

export default function RichTextEditor({ initialHtml = "", onChange }: RichTextEditorProps) {
  const editor = useEditor({
    // Tránh lệch nội dung giữa server và trình duyệt khi hydrate
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        link: { openOnClick: false, autolink: true, defaultProtocol: "https" },
      }),
      Image.configure({ HTMLAttributes: { loading: "lazy" } }),
      Placeholder.configure({ placeholder: "Viết nội dung bài ở đây…" }),
    ],
    content: initialHtml,
    editorProps: { attributes: { class: styles.content } },
    onUpdate: ({ editor }) => onChange(editor.isEmpty ? "" : editor.getHTML()),
  });

  return (
    <div className={styles.editor}>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}

function Btn({
  title,
  active = false,
  disabled = false,
  onClick,
  children,
}: {
  title: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={active}
      className={`${styles.btn} ${active ? styles.active : ""}`}
      onMouseDown={(e) => e.preventDefault()} // giữ vùng chọn trong editor
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

function Toolbar({ editor }: { editor: Editor }) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  // Chỉ render lại thanh công cụ khi trạng thái nút thay đổi
  const s = useEditorState({
    editor,
    selector: ({ editor }) => ({
      h2: editor.isActive("heading", { level: 2 }),
      h3: editor.isActive("heading", { level: 3 }),
      bold: editor.isActive("bold"),
      italic: editor.isActive("italic"),
      underline: editor.isActive("underline"),
      strike: editor.isActive("strike"),
      link: editor.isActive("link"),
      bullet: editor.isActive("bulletList"),
      ordered: editor.isActive("orderedList"),
      quote: editor.isActive("blockquote"),
      canUndo: editor.can().undo(),
      canRedo: editor.can().redo(),
    }),
  });

  const setLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Nhập đường link (để trống để bỏ link):", prev ?? "https://");
    if (url === null) return;
    const chain = editor.chain().focus().extendMarkRange("link");
    if (url.trim() === "" || url.trim() === "https://") chain.unsetLink().run();
    else chain.setLink({ href: url.trim() }).run();
  };

  const insertImages = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    setError("");
    try {
      for (const file of Array.from(files)) {
        const src = await uploadBlogImage(file);
        editor.chain().focus().setImage({ src, alt: "" }).createParagraphNear().run();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Tải ảnh thất bại");
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  const run = () => editor.chain().focus();

  return (
    <div className={styles.toolbarWrap}>
      <div className={styles.toolbar} role="toolbar" aria-label="Định dạng nội dung">
        <Btn title="Tiêu đề lớn" active={s.h2} onClick={() => run().toggleHeading({ level: 2 }).run()}>H2</Btn>
        <Btn title="Tiêu đề nhỏ" active={s.h3} onClick={() => run().toggleHeading({ level: 3 }).run()}>H3</Btn>
        <span className={styles.sep} />
        <Btn title="In đậm (Ctrl+B)" active={s.bold} onClick={() => run().toggleBold().run()}><b>B</b></Btn>
        <Btn title="In nghiêng (Ctrl+I)" active={s.italic} onClick={() => run().toggleItalic().run()}><i>I</i></Btn>
        <Btn title="Gạch chân (Ctrl+U)" active={s.underline} onClick={() => run().toggleUnderline().run()}><u>U</u></Btn>
        <Btn title="Gạch ngang" active={s.strike} onClick={() => run().toggleStrike().run()}><s>S</s></Btn>
        <Btn title="Chèn / sửa link" active={s.link} onClick={setLink}>🔗</Btn>
        <span className={styles.sep} />
        <Btn title="Danh sách chấm" active={s.bullet} onClick={() => run().toggleBulletList().run()}>• ≡</Btn>
        <Btn title="Danh sách số" active={s.ordered} onClick={() => run().toggleOrderedList().run()}>1. ≡</Btn>
        <Btn title="Trích dẫn" active={s.quote} onClick={() => run().toggleBlockquote().run()}>❝</Btn>
        <Btn title="Đường kẻ ngang" onClick={() => run().setHorizontalRule().run()}>—</Btn>
        <span className={styles.sep} />
        <Btn title="Chèn ảnh" disabled={uploading} onClick={() => fileRef.current?.click()}>
          {uploading ? "Đang tải…" : "🖼 Ảnh"}
        </Btn>
        <span className={styles.sep} />
        <Btn title="Hoàn tác (Ctrl+Z)" disabled={!s.canUndo} onClick={() => run().undo().run()}>↶</Btn>
        <Btn title="Làm lại (Ctrl+Y)" disabled={!s.canRedo} onClick={() => run().redo().run()}>↷</Btn>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          hidden
          onChange={(e) => insertImages(e.target.files)}
        />
      </div>
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
