"use client";

import React, { useState, useEffect } from "react";
import styles from "./AgeNotice.module.css";
import { ShieldCheckIcon } from "../ui/Icons";

export default function AgeNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ruouvanghe_age_verified");
    if (!verified) {
      setShow(true);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem("ruouvanghe_age_verified", "true");
    setShow(false);
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!show) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="age-title">
      <div className={styles.modal}>
        <div className={styles.iconCircle}>
          <ShieldCheckIcon size={36} />
        </div>
        <span className={styles.badge}>XÁC NHẬN ĐỘ TUỔI</span>
        <h3 id="age-title" className={styles.title}>
          Chào Mừng Đến Với Rượu Vang Hè
        </h3>
        <p className={styles.desc}>
          Theo quy định của pháp luật Việt Nam, trang web này chứa thông tin về đồ uống có cồn
          dành riêng cho người từ 18 tuổi trở lên.
        </p>
        <p className={styles.question}>Quý khách đã đủ 18 tuổi chưa?</p>

        <div className={styles.actions}>
          <button onClick={handleConfirm} className="btn-gold" style={{ flex: 1 }}>
            Tôi Đã Đủ 18 Tuổi
          </button>
          <button onClick={handleDecline} className="btn-outline-gold" style={{ flex: 1 }}>
            Chưa Đủ 18 Tuổi
          </button>
        </div>

        <p className={styles.footnote}>
          Uống rượu bia có trách nhiệm. Đã uống rượu bia thì không lái xe.
        </p>
      </div>
    </div>
  );
}
