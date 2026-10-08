import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";
import { siteConfig } from "@/lib/site-config";
import { MapPinIcon, PhoneIcon, ShieldCheckIcon, WineGlassIcon } from "../ui/Icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Trust Badges Bar */}
      <div className={styles.trustBar}>
        <div className={`container ${styles.trustGrid}`}>
          <div className={styles.trustItem}>
            <ShieldCheckIcon size={26} className={styles.trustIcon} />
            <div>
              <h4 className={styles.trustTitle}>100% Chính Hãng Đầy Đủ CO/CQ</h4>
              <p className={styles.trustDesc}>Nhập khẩu trực tiếp từ nhà làm vang danh tiếng</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>❄️</span>
            <div>
              <h4 className={styles.trustTitle}>Hầm Rượu Bảo Quản Chuẩn 16°C</h4>
              <p className={styles.trustDesc}>Nhiệt độ & độ ẩm 70% bảo vệ trọn vẹn hương vị</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <div>
              <h4 className={styles.trustTitle}>Giao Hàng Hỏa Tốc 2 Giờ</h4>
              <p className={styles.trustDesc}>Thùng chống sốc chuyên dụng nội thành Hà Nội & TP.HCM</p>
            </div>
          </div>

          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🍷</span>
            <div>
              <h4 className={styles.trustTitle}>Tư Vấn Sommelier Chuyên Nghiệp</h4>
              <p className={styles.trustDesc}>Đồng hành chọn vang hợp khẩu vị & thực đơn tiệc</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className={`container ${styles.mainFooter}`}>
        <div className={styles.footerGrid}>
          {/* Column 1: Brand & Showrooms */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <WineGlassIcon size={32} />
              <span className={styles.brandTitle}>RƯỢU VANG HÈ</span>
            </div>
            <p className={styles.brandSummary}>{siteConfig.description}</p>

            <div className={styles.locations}>
              <h5 className={styles.subHeading}>Hệ Thống Hầm Rượu & Showroom:</h5>
              {siteConfig.locations.map((loc, idx) => (
                <div key={idx} className={styles.locationItem}>
                  <MapPinIcon size={16} className={styles.locIcon} />
                  <div>
                    <strong>{loc.name}:</strong>
                    <address className={styles.address}>{loc.address}</address>
                    <span className={styles.hours}>Giờ mở cửa: {loc.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Wine Categories */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Danh Mục Sản Phẩm</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/san-pham?category=vang-do">Rượu Vang Đỏ Cao Cấp</Link>
              </li>
              <li>
                <Link href="/san-pham?category=vang-trang">Rượu Vang Trắng Tươi Mát</Link>
              </li>
              <li>
                <Link href="/san-pham?category=vang-no">Champagne & Vang Nổ Pháp</Link>
              </li>
              <li>
                <Link href="/san-pham?category=hop-qua">Hộp Quà Biếu Tặng Doanh Nghiệp</Link>
              </li>
              <li>
                <Link href="/san-pham?origin=Ý (Italy)">Rượu Vang Ý Thượng Hạng</Link>
              </li>
              <li>
                <Link href="/san-pham?origin=Pháp (France)">Rượu Vang Bordeaux Pháp</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Knowledge & Guides */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Cẩm Nang & Thưởng Thức</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/kienthuc-ruouvang/cach-phan-biet-ruou-vang-chinh-hang-chuan-sommelier">
                  Cách Phân Biệt Vang Thật - Giả
                </Link>
              </li>
              <li>
                <Link href="/kienthuc-ruouvang/nhiet-do-phuc-vu-ruou-vang-chuan-quoc-te">
                  Nhiệt Độ Thưởng Thức Chuẩn
                </Link>
              </li>
              <li>
                <Link href="/kienthuc-ruouvang/nghe-thuat-ket-hop-ruou-vang-va-am-thuc-viet-nam">
                  Kết Hợp Vang & Ẩm Thực Việt
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi">Về Thương Hiệu Rượu Vang Hè</Link>
              </li>
              <li>
                <Link href="/lien-he">Đặt Lịch Thử Rượu Tại Hầm</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Support & Policies */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Hỗ Trợ & Chính Sách</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/chinh-sach#giao-hang">Chính Sách Vận Chuyển Hỏa Tốc</Link>
              </li>
              <li>
                <Link href="/chinh-sach#doi-tra">Chính Sách Đổi Trả & Bảo Hành</Link>
              </li>
              <li>
                <Link href="/chinh-sach#bao-mat">Chính Sách Bảo Mật Thông Tin</Link>
              </li>
              <li>
                <Link href="/chinh-sach#hoa-don-vat">Hướng Dẫn Xuất Hóa Đơn VAT</Link>
              </li>
            </ul>

            <div className={styles.contactBlock}>
              <h5 className={styles.contactHeading}>Tư Vấn Khách Hàng VIP:</h5>
              <a
                href={`tel:${siteConfig.contact.hotline.replace(/\./g, "")}`}
                className={styles.hotlineLink}
              >
                <PhoneIcon size={18} />
                <span>{siteConfig.contact.hotlineDisplay}</span>
              </a>
              <p className={styles.emailText}>Email: {siteConfig.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Responsible Drinking Legal Notice (18+ Vietnam Regulation) */}
        <div className={styles.legalNotice}>
          <p className={styles.warningText}>
            ⚠️ <strong>CẢNH BÁO TRÁCH NHIỆM:</strong> Tuân thủ Nghị định số 24/2020/NĐ-CP và Luật Phòng, chống tác hại của rượu, bia.
            Rượu không dành cho người dưới 18 tuổi và phụ nữ có thai. Không lái xe sau khi đã uống rượu bia.
            Sản phẩm chỉ giới thiệu cho người đủ độ tuổi luật định. Chúng tôi không bán hàng trực tuyến cho người dưới 18 tuổi.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className={styles.bottomBar}>
          <p>© 2026 {siteConfig.publisher}. Mã số thuế: 0108899888. Mọi quyền được bảo lưu.</p>
          <p className={styles.bottomDisclaimer}>
            Website tuân thủ tiêu chuẩn SEO Quốc Tế, Semantic Schema.org và Core Web Vitals tối ưu bởi Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}
