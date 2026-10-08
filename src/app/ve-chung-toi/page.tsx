import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import Breadcrumb from "@/components/seo/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  AwardIcon,
  CheckCircleIcon,
  PhoneIcon,
  ShieldCheckIcon,
  TemperatureIcon,
  WineBottleIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Về Chúng Tôi - Câu Chuyện Thương Hiệu Rượu Vang Hè",
  description:
    "Tìm hiểu về Rượu Vang Hè: Hệ thống phân phối rượu vang nhập khẩu chính hãng hàng đầu, sở hữu hầm rượu tiêu chuẩn quốc tế 16°C và đội ngũ chuyên gia Sommelier uy tín.",
  alternates: {
    canonical: "/ve-chung-toi",
  },
  openGraph: {
    title: "Về Rượu Vang Hè - Đẳng Cấp Hầm Rượu Nhập Khẩu",
    description:
      "Lịch sử hình thành, sứ mệnh gìn giữ văn hóa thưởng vang và cam kết chất lượng 100% CO/CQ của Rượu Vang Hè.",
    url: `${siteConfig.url}/ve-chung-toi`,
  },
};

export default function AboutPage() {
  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <Breadcrumb items={[{ name: "Về chúng tôi", item: "/ve-chung-toi" }]} />

      <header className={styles.header}>
        <SectionHeading
          badge="CÂU CHUYỆN THƯƠNG HIỆU"
          title="Hành Trình Gìn Giữ Tinh Hoa Rượu Vang Thế Giới"
          description="Khởi nguồn từ niềm đam mê cháy bỏng với văn hóa làm vang lâu đời, Rượu Vang Hè ra đời với sứ mệnh mang những giọt vang thượng hạng đích thực về Việt Nam."
        />
      </header>

      {/* Brand Story Section */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <h2>Sứ Mệnh Của Rượu Vang Hè</h2>
          <p>
            Được thành lập từ năm 2018 bởi những chuyên gia nếm thử rượu vang (Sommelier) được đào tạo
            chuẩn quốc tế, <strong>Rượu Vang Hè (Heritage Cellar)</strong> không đơn thuần chỉ là một nhà nhập khẩu
            và phân phối. Chúng tôi xem mình là người kể chuyện – cầu nối đưa văn hóa và sự kỳ công của các điền trang
            lừng danh tại Pháp, Ý, Chile, Tây Ban Nha đến với người yêu vang tại Việt Nam.
          </p>
          <p>
            Chúng tôi hiểu rằng: Rượu vang là một thực thể sống. Một chai Grand Cru Bordeaux hay Amarone della Valpolicella
            có thể mất đi 50% hương vị nếu phải trải qua nhiệt độ vận chuyển không đảm bảo hoặc nằm dưới ánh nắng nhiệt đới.
            Chính vì vậy, ngay từ ngày đầu, Rượu Vang Hè đã đầu tư xây dựng hệ thống hầm rượu lưu trữ đạt chuẩn khắt khe nhất thế giới.
          </p>
        </div>

        <div className={styles.highlightsGrid}>
          <div className={styles.highlightCard}>
            <TemperatureIcon size={32} className={styles.iconGold} />
            <h3>Hầm Lưu Trữ 16°C</h3>
            <p>Hệ thống điều hòa chính xác 24/7 kiểm soát nhiệt độ từ 16°C – 18°C và độ ẩm 70% – 75%.</p>
          </div>

          <div className={styles.highlightCard}>
            <ShieldCheckIcon size={32} className={styles.iconGold} />
            <h3>100% Hồ Sơ CO/CQ</h3>
            <p>Nhập khẩu chính ngạch từ nhà sản xuất, tem hải quan sắc nét, xuất hóa đơn VAT đầy đủ.</p>
          </div>

          <div className={styles.highlightCard}>
            <AwardIcon size={32} className={styles.iconGold} />
            <h3>Đội Ngũ Sommelier WSET</h3>
            <p>Các chuyên viên đạt chứng chỉ quốc tế WSET Level 3 trực tiếp thử nếm và tư vấn cho khách hàng.</p>
          </div>

          <div className={styles.highlightCard}>
            <WineBottleIcon size={32} className={styles.iconGold} />
            <h3>1.500+ Dòng Vang</h3>
            <p>Bộ sưu tập từ những chai vang uống hàng ngày (Daily wine) đến các kiệt tác đầu tư (Investment wine).</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <h2>4 Cam Kết Vàng Từ Rượu Vang Hè</h2>
        <div className={styles.valuesList}>
          <div className={styles.valueRow}>
            <CheckCircleIcon size={24} className={styles.iconGold} />
            <div>
              <strong>1. Cam Kết Xuất Xứ Tuyệt Đối:</strong> Hoàn tiền 300% giá trị đơn hàng nếu quý khách phát hiện bất kỳ sản phẩm nào không chuẩn xuất xứ chính hãng.
            </div>
          </div>
          <div className={styles.valueRow}>
            <CheckCircleIcon size={24} className={styles.iconGold} />
            <div>
              <strong>2. Bảo Quản Hoàn Hảo Đến Tay Khách Hàng:</strong> Giao hàng bằng thùng chống sốc và túi bảo ôn nhiệt độ giúp rượu không bị sốc nhiệt khi vận chuyển.
            </div>
          </div>
          <div className={styles.valueRow}>
            <CheckCircleIcon size={24} className={styles.iconGold} />
            <div>
              <strong>3. Nếm Thử Trực Tiếp Tại Showroom:</strong> Quý khách luôn được chào đón đến thăm hầm rượu và trải nghiệm thử nếm trước khi quyết định mua số lượng lớn.
            </div>
          </div>
          <div className={styles.valueRow}>
            <CheckCircleIcon size={24} className={styles.iconGold} />
            <div>
              <strong>4. Dịch Vụ Quà Tặng Doanh Nghiệp Tinh Hoa:</strong> Gia công hộp da, hộp gỗ dập nổi kim tuyến, in logo thương hiệu chỉn chu và hóa đơn VAT nhanh chóng.
            </div>
          </div>
        </div>
      </section>

      {/* Sommelier Consultation Banner */}
      <section className={styles.aboutCta}>
        <h2>Trải Nghiệm Thử Rượu Trực Tiếp Cùng Chuyên Gia</h2>
        <p>
          Ghé thăm showroom Rượu Vang Hè tại Hà Nội và TP.HCM để hòa mình vào không gian hầm vang châu Âu cổ điển.
        </p>
        <div className={styles.aboutCtaBtns}>
          <a
            href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
            className="btn-gold"
          >
            <PhoneIcon size={18} /> Đặt Lịch Tiếp Đón: {siteConfig.contact.hotlineDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
