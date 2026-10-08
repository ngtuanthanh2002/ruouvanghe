import React from "react";
import type { Metadata } from "next";
import styles from "./page.module.css";
import { siteConfig } from "@/lib/site-config";
import Breadcrumb from "@/components/seo/Breadcrumb";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPinIcon, PhoneIcon, WineGlassIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Liên Hệ Hệ Thống Hầm Rượu & Showroom Rượu Vang Hè",
  description:
    "Địa chỉ showroom và hầm rượu vang nhập khẩu Rượu Vang Hè tại Hà Nội (88 Phố Vọng) và TP.HCM (168 Nguyễn Thị Minh Khai). Hotline tư vấn Sommelier 24/7.",
  alternates: {
    canonical: "/lien-he",
  },
  openGraph: {
    title: "Liên Hệ Showroom & Hầm Rượu Vang Hè",
    description:
      "Ghé thăm trực tiếp hầm rượu tiêu chuẩn 16°C để trải nghiệm nếm thử vang hoặc đặt hàng quà tết doanh nghiệp.",
    url: `${siteConfig.url}/lien-he`,
  },
};

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingBottom: "5rem" }}>
      <Breadcrumb items={[{ name: "Liên hệ", item: "/lien-he" }]} />

      <header className={styles.header}>
        <SectionHeading
          badge="KẾT NỐI VỚI CHÚNG TÔI"
          title="Hệ Thống Showroom & Hầm Rượu Vang Hè"
          description="Quý khách có thể ghé thăm trực tiếp không gian hầm rượu để thưởng thức và nếm thử, hoặc liên hệ qua hotline để nhận tư vấn nhanh chóng."
        />
      </header>

      <div className={styles.contactLayout}>
        {/* Locations List */}
        <div className={styles.locationsCol}>
          <h2 className={styles.colTitle}>Địa Điểm Trực Tiếp</h2>

          {siteConfig.locations.map((loc, idx) => (
            <div key={idx} className={styles.locationCard}>
              <div className={styles.locIconWrapper}>
                <MapPinIcon size={24} />
              </div>
              <div className={styles.locDetails}>
                <h3 className={styles.locName}>{loc.name}</h3>
                <address className={styles.locAddress}>{loc.address}</address>
                <div className={styles.locMeta}>
                  <span>📞 Hotline: <strong>{loc.phone}</strong></span>
                  <span>⏰ Giờ mở cửa: {loc.hours}</span>
                </div>
                <div className={styles.locTags}>
                  <span className={styles.tag}>Có chỗ đỗ ô tô</span>
                  <span className={styles.tag}>Phòng thử rượu VIP</span>
                  <span className={styles.tag}>Bảo quản 16°C</span>
                </div>
              </div>
            </div>
          ))}

          {/* Quick Hotline Card */}
          <div className={styles.hotlineCard}>
            <div className={styles.hotlineText}>
              <h4>Tư Vấn Khách Hàng VIP & Doanh Nghiệp</h4>
              <p>Hỗ trợ đặt hàng quà Tết, xuất hóa đơn VAT và giao hỏa tốc 2 giờ.</p>
            </div>
            <a
              href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
              className="btn-gold"
            >
              <PhoneIcon size={18} />
              <span>Gọi: {siteConfig.contact.hotlineDisplay}</span>
            </a>
          </div>
        </div>

        {/* Contact Inquiry Form */}
        <div className={styles.formCol}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <WineGlassIcon size={32} className={styles.formLogoIcon} />
              <h2 className={styles.formTitle}>Gửi Yêu Cầu Tư Vấn Sommelier</h2>
              <p className={styles.formSubtitle}>
                Vui lòng để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ lại trong vòng 15 phút.
              </p>
            </div>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Họ và tên của quý khách *</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Ví dụ: Nguyễn Văn An"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Số điện thoại liên hệ *</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Ví dụ: 0988 123 456"
                  required
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="interest">Dòng sản phẩm quý khách quan tâm</label>
                <select id="interest" className={styles.select}>
                  <option value="vang-do">Rượu vang đỏ (Ý, Pháp, Chile)</option>
                  <option value="vang-trang">Rượu vang trắng & Hải sản</option>
                  <option value="champagne">Champagne & Vang nổ khai tiệc</option>
                  <option value="hop-qua">Hộp quà tết & Quà tặng doanh nghiệp</option>
                  <option value="khac">Tư vấn chọn vang cho tiệc cưới / sự kiện</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Ghi chú thêm (ngân sách, số lượng...)</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Quý khách cần tư vấn rượu tầm giá bao nhiêu hoặc số lượng bao nhiêu chai..."
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className="btn-gold" style={{ width: "100%", padding: "1rem" }}>
                Gửi Yêu Cầu Tư Vấn Ngay
              </button>

              <p className={styles.privacyNote}>
                🔒 Thông tin của quý khách được bảo mật tuyệt đối theo chính sách bảo mật của Rượu Vang Hè.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
