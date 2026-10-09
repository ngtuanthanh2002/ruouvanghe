import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import { siteConfig } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon, ShieldCheckIcon } from "../ui/Icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Trust Badges Bar */}
      <div className={styles.trustBar}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <ShieldCheckIcon size={24} className={styles.trustIcon} />
            <div>
              <h4 className={styles.trustTitle}>100% Chính Hãng Nhập Khẩu</h4>
              <p className={styles.trustDesc}>Đầy đủ CO/CQ từ các nhà làm vang danh tiếng thế giới</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>❄️</span>
            <div>
              <h4 className={styles.trustTitle}>Hầm Bảo Quản Tiêu Chuẩn 16°C</h4>
              <p className={styles.trustDesc}>Nhiệt độ & độ ẩm 70% gìn giữ trọn vẹn hương vị tinh hoa</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>✨</span>
            <div>
              <h4 className={styles.trustTitle}>Nghệ Thuật Tablescape</h4>
              <p className={styles.trustDesc}>Sắp đặt bàn tiệc nghệ thuật & pairing phô mai hảo hạng</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🍷</span>
            <div>
              <h4 className={styles.trustTitle}>Tư Vấn Sommelier Chuyên Nghiệp</h4>
              <p className={styles.trustDesc}>Đồng hành lựa chọn vị vang hoàn hảo cho từng dịp gặp gỡ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className={`container ${styles.mainFooter}`}>
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Showrooms */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo} aria-label="Trang chủ Vang Hè">
              <Image
                src="/Logo_VH-White.png"
                alt="Logo Vang Hè — The Wine Corner"
                width={48}
                height={48}
                className={styles.logoImg}
              />
              <div className={styles.logoText}>
                <span className={styles.brandTitle}>vanghè</span>
                <span className={styles.brandSub}>THE WINE CORNER · NHA TRANG</span>
              </div>
            </Link>
            <p className={styles.brandSummary}>{siteConfig.description}</p>

            <div className={styles.locations}>
              <h5 className={styles.subHeading}>Không Gian Trải Nghiệm & Hầm Rượu:</h5>
              {siteConfig.locations.map((loc, idx) => (
                <div key={idx} className={styles.locationItem}>
                  <MapPinIcon size={16} className={styles.locIcon} />
                  <div>
                    <strong>{loc.name}:</strong>
                    <address className={styles.address}>{loc.address}</address>
                    <span className={styles.hours}>Giờ phục vụ: {loc.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Story & Experience */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Khám Phá Câu Chuyện</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/#cau-chuyen">Câu Chuyện Vang Hè</Link>
              </li>
              <li>
                <Link href="/#ban-tiec">Nghệ Thuật Tablescape</Link>
              </li>
              <li>
                <Link href="/#ham-vang">Hầm Vang Tuyển Chọn</Link>
              </li>
              <li>
                <Link href="/#khong-gian">Không Gian Vanghé Nha Trang</Link>
              </li>
              <li>
                <Link href="/#dat-ban">Đặt Bàn Thưởng Vang</Link>
              </li>
              <li>
                <a
                  href={siteConfig.socialLinks[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  Instagram @vanghe.thewinecorner ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Wine Categories */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Bộ Sưu Tập Rượu Vang</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/san-pham?category=vang-do">Rượu Vang Đỏ (Red Wine)</Link>
              </li>
              <li>
                <Link href="/san-pham?category=vang-trang">Rượu Vang Trắng (White Wine)</Link>
              </li>
              <li>
                <Link href="/san-pham?category=vang-no">Champagne & Vang Nổ</Link>
              </li>
              <li>
                <Link href="/san-pham?category=hop-qua">Hộp Quà & Set Thử Rượu</Link>
              </li>
              <li>
                <Link href="/kienthuc-ruouvang">Cẩm Nang Kiến Thức Thưởng Vang</Link>
              </li>
              <li>
                <Link href="/ve-chung-toi">Về Triết Lý Thương Hiệu</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Reservation */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Đặt Bàn & Tư Vấn VIP</h4>
            <p className={styles.contactIntro}>
              Liên hệ trực tiếp đội ngũ Sommelier để chuẩn bị trước bàn tiệc hoặc tư vấn bộ sưu tập vang phù hợp.
            </p>

            <div className={styles.contactBlock}>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className={styles.hotlineLink}
              >
                <PhoneIcon size={18} />
                <span>Hotline: {siteConfig.contact.hotlineDisplay}</span>
              </a>
              <p className={styles.emailText}>Email: {siteConfig.contact.email}</p>
              <Link href="/#dat-ban" className="btn" style={{ marginTop: "12px", width: "100%" }}>
                Đặt Bàn Ngay
              </Link>
            </div>
          </div>
        </div>

        {/* Responsible Drinking Notice */}
        <div className={styles.legalNotice}>
          <p className={styles.warningText}>
            ⚠️ <strong>THƯỞNG THỨC CÓ TRÁCH NHIỆM:</strong> Tuân thủ quy định pháp luật Việt Nam. Rượu không dành cho người dưới 18 tuổi và phụ nữ mang thai. Đã uống rượu bia, không lái xe. Chúng tôi chỉ tiếp đón và cung cấp thông tin cho khách hàng đủ 18 tuổi.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.bottomBar}>
          <p>© 2026 {siteConfig.publisher} · 65 Trịnh Phong, Nha Trang. Mọi quyền được bảo lưu.</p>
          <p className={styles.bottomDisclaimer}>
            Website thiết kế chuẩn SEO, Semantic Microdata Schema.org & Tối ưu hóa trải nghiệm người dùng.
          </p>
        </div>
      </div>
    </footer>
  );
}
