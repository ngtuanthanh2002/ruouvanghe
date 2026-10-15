import type { Metadata } from "next";
import styles from "./admin.module.css";
import AdminNav from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <AdminNav />
        {children}
      </div>
    </div>
  );
}
