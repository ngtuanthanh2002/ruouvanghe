import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import Breadcrumb from "@/components/seo/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Chính Sách Giao Hàng, Đổi Trả & Bảo Hành Rượu Vang Hè",
  description:
    "Thông tin chi tiết về chính sách giao hàng hỏa tốc 2 giờ, đổi trả 7 ngày, bảo hiểm bể vỡ và xuất hóa đơn đỏ VAT tại Rượu Vang Hè.",
  alternates: {
    canonical: "/chinh-sach",
  },
};

export default function PolicyPage() {
  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <Breadcrumb items={[{ name: "Chính sách & Hỗ trợ", item: "/chinh-sach" }]} />

      <header className={styles.header}>
        <SectionHeading
          badge="CAM KẾT DỊCH VỤ"
          title="Chính Sách Bán Hàng & Quyền Lợi Khách Hàng"
          description="Rượu Vang Hè luôn đặt sự an tâm và quyền lợi của quý khách hàng lên hàng đầu với các quy trình minh bạch, chuẩn mực."
        />
      </header>

      <div className={styles.policyContent}>
        {/* Shipping */}
        <section id="giao-hang" className={styles.sectionBlock}>
          <h2>1. Chính Sách Vận Chuyển Hỏa Tốc & Bảo Hiểm Bể Vỡ</h2>
          <p>
            Rượu vang là mặt hàng thủy tinh nhạy cảm với nhiệt độ, do đó Rượu Vang Hè áp dụng quy trình giao hàng đặc biệt:
          </p>
          <ul>
            <li>
              <strong>Nội thành Hà Nội & TP. Hồ Chí Minh:</strong> Giao hàng hỏa tốc trong vòng 2 giờ kể từ khi xác nhận đơn. Rượu được đặt trong túi bảo ôn cách nhiệt và thùng chống va đập.
            </li>
            <li>
              <strong>Các tỉnh thành toàn quốc:</strong> Giao qua đơn vị vận chuyển chuyên nghiệp từ 24 - 48 giờ. Toàn bộ đơn hàng được đóng thùng xốp chống sốc nguyên khối.
            </li>
            <li>
              <strong>Bảo hiểm bể vỡ 100%:</strong> Quý khách được quyền đồng kiểm cùng nhân viên giao hàng. Nếu có bất kỳ dấu hiệu nứt vỡ hay rò rỉ, chúng tôi sẽ đổi ngay chai mới hoặc hoàn tiền ngay lập tức mà không phát sinh thêm bất kỳ chi phí nào.
            </li>
          </ul>
        </section>

        {/* Returns */}
        <section id="doi-tra" className={styles.sectionBlock}>
          <h2>2. Chính Sách Đổi Trả Trong Vòng 7 Ngày</h2>
          <p>
            Nhằm đảm bảo trải nghiệm thưởng vang trọn vẹn nhất cho quý khách, Rượu Vang Hè hỗ trợ đổi trả sản phẩm trong các trường hợp:
          </p>
          <ul>
            <li>Sản phẩm giao không đúng loại, sai niên vụ (vintage) so với đơn đặt hàng.</li>
            <li>Nút bần bị lỗi kỹ thuật tự nhiên (hiện tượng Corked - rượu bị ám mùi nút bần ẩm mốc do nấm TCA), chúng tôi sẽ thẩm định và đổi chai mới ngay trong 24h.</li>
            <li>Rượu quà tặng còn nguyên vẹn tem niêm phong, hộp và phụ kiện chưa qua sử dụng.</li>
          </ul>
        </section>

        {/* VAT */}
        <section id="hoa-don-vat" className={styles.sectionBlock}>
          <h2>3. Chính Sách Xuất Hóa Đơn Giá Trị Gia Tăng (VAT)</h2>
          <p>
            100% sản phẩm tại Rượu Vang Hè được phân phối chính ngạch, có đầy đủ hóa đơn điện tử hợp pháp theo quy định của Bộ Tài chính:
          </p>
          <ul>
            <li>Hỗ trợ xuất hóa đơn VAT cho cá nhân và công ty ngay trong ngày giao dịch.</li>
            <li>Cung cấp đầy đủ hồ sơ năng lực, giấy chứng nhận an toàn thực phẩm và CO/CQ cho các hợp đồng quà tặng tết doanh nghiệp lớn.</li>
          </ul>
        </section>

        {/* Privacy */}
        <section id="bao-mat" className={styles.sectionBlock}>
          <h2>4. Chính Sách Bảo Mật Thông Tin Khách Hàng</h2>
          <p>
            Mọi thông tin cá nhân của quý khách (Họ tên, Số điện thoại, Địa chỉ giao hàng, Lịch sử mua hàng) được bảo mật tuyệt đối,
            chỉ sử dụng cho mục đích hoàn thiện đơn hàng và chăm sóc khách hàng VIP của Rượu Vang Hè. Chúng tôi cam kết không chia sẻ dữ liệu cho bên thứ ba.
          </p>
          <p>
            Mọi thắc mắc về quyền lợi và chính sách, quý khách vui lòng liên hệ trực tiếp Hotline:{" "}
            <strong>{siteConfig.contact.hotlineDisplay}</strong> hoặc gửi thư đến Email:{" "}
            <strong>{siteConfig.contact.email}</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
