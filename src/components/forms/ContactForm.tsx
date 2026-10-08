"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { CheckCircleIcon, WineGlassIcon } from "../ui/Icons";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("vang-do");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <WineGlassIcon size={32} className={styles.formLogoIcon} />
        <h2 className={styles.formTitle}>Gửi Yêu Cầu Tư Vấn Sommelier</h2>
        <p className={styles.formSubtitle}>
          Vui lòng để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ lại trong vòng 15 phút.
        </p>
      </div>

      {submitted ? (
        <div className={styles.successBox}>
          <CheckCircleIcon size={48} className={styles.successIcon} />
          <h3 className={styles.successTitle}>Gửi Yêu Cầu Thành Công!</h3>
          <p className={styles.successDesc}>
            Cảm ơn quý khách <strong>{fullName}</strong>. Chuyên viên Sommelier của Rượu Vang Hè sẽ
            liên hệ đến số điện thoại <strong>{phone}</strong> trong ít phút.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFullName("");
              setPhone("");
              setMessage("");
            }}
            className="btn-outline-gold"
            style={{ marginTop: "1rem" }}
          >
            Gửi yêu cầu khác
          </button>
        </div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Họ và tên của quý khách *</label>
            <input
              id="fullName"
              type="text"
              placeholder="Ví dụ: Nguyễn Văn An"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="interest">Dòng sản phẩm quý khách quan tâm</label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className={styles.select}
            >
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
      )}
    </div>
  );
}
