import { getAdminUser } from "@/lib/admin-session";
import styles from "@/app/admin/admin.module.css";

// Chỉ render nội dung khi đã đăng nhập admin. Đọc cookie là dữ liệu theo request →
// đặt component này trong <Suspense> (Cache Components).
export default async function AdminGate({ children }: { children: React.ReactNode }) {
  if (!(await getAdminUser())) {
    return (
      <p className={styles.note}>
        Trang này chỉ dành cho quản trị viên. Bấm biểu tượng tài khoản ở góc phải header để đăng nhập.
      </p>
    );
  }
  return children;
}
