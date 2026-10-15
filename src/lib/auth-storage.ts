import { useMemo, useSyncExternalStore } from "react";
import type { SessionUser } from "./auth";

// Lưu tài khoản đã đăng nhập vào localStorage để giao diện (header, nút Đăng bài) hiện ngay khi tải trang.
// Chỉ lưu email — KHÔNG lưu mật khẩu. Quyền thật vẫn do cookie httpOnly trên server quyết định;
// giá trị ở đây chỉ để hiển thị và luôn được đối chiếu lại với server (xem Header).

const KEY = "vh_user";
const EVENT = "vh-user-change";

function readRaw() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function storeUser(user: SessionUser | null) {
  try {
    if (user) localStorage.setItem(KEY, JSON.stringify({ email: user.email }));
    else localStorage.removeItem(KEY);
  } catch {
    // Trình duyệt chặn localStorage (chế độ riêng tư…) — bỏ qua, cookie vẫn hoạt động
  }
  window.dispatchEvent(new Event(EVENT));
}

// Theo dõi thay đổi trong cùng tab và từ tab khác
function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => e.key === KEY && onChange();
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

/** Tài khoản đang lưu trong localStorage (null khi render trên server hoặc chưa đăng nhập) */
export function useStoredUser(): SessionUser | null {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  return useMemo(() => {
    try {
      const data = JSON.parse(raw ?? "null");
      return typeof data?.email === "string" ? { email: data.email } : null;
    } catch {
      return null;
    }
  }, [raw]);
}
