"use client";

import React from "react";
import styles from "./AmbientDepthBackground.module.css";

// 1. Crystal Wine Glass Silhouette (Ly Vang Pha Lê)
function WineGlassSvg({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.4)}
      viewBox="0 0 24 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.symbolWineGlass} ${className}`}
      aria-hidden="true"
    >
      {/* Bowl */}
      <path
        d="M5 3.5C5 11.5 7.8 16 12 16C16.2 16 19 11.5 19 3.5H5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shimmering wine surface */}
      <path
        d="M6.5 9.5C8.2 11.8 10.2 12.8 12 12.8C13.8 12.8 15.8 11.8 17.5 9.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeOpacity="0.75"
        strokeLinecap="round"
      />
      {/* Stem */}
      <path
        d="M12 16V29"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M6.5 30.5C8.5 29.8 15.5 29.8 17.5 30.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Sparkle glint on rim */}
      <circle cx="6.5" cy="3.5" r="1" fill="currentColor" />
    </svg>
  );
}

// 2. Champagne Coupe / Saucer Glass (Ly Coupe Cổ Điển)
function CoupeSvg({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.15)}
      viewBox="0 0 30 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.symbolCoupe} ${className}`}
      aria-hidden="true"
    >
      {/* Shallow wide bowl */}
      <path
        d="M3 6.5C3 14 8.5 16.5 15 16.5C21.5 16.5 27 14 27 6.5H3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Champagne bubble rim */}
      <path
        d="M6 10.5C9.5 12 20.5 12 24 10.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeOpacity="0.65"
      />
      {/* Stem */}
      <path
        d="M15 16.5V29"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Base */}
      <path
        d="M9 30.5H21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 3. Faceted Sparkle Star 4-Point (Ngôi Sao Kim 4 Cánh)
function SparkleSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.symbolSparkle} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 7 13.5 10.5 20.5 12C13.5 13.5 12 17 12 24C12 17 10.5 13.5 3.5 12C10.5 10.5 12 7 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

// 4. Wine Droplet (Giọt Vang Óng Ánh)
function WineDropSvg({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={Math.round(size * 1.35)}
      viewBox="0 0 20 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.symbolDrop} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 2C10 2 3.5 11.5 3.5 17C3.5 21.2 6.5 24.5 10 24.5C13.5 24.5 16.5 21.2 16.5 17C16.5 11.5 10 2 10 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      {/* Interior light reflection */}
      <path
        d="M7 16C7 19.2 8.3 21.2 10 21.2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
    </svg>
  );
}

// 5. Luminous Halo Ring (Vòng Hào Quang Pha Lê)
function HaloRingSvg({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${styles.symbolRing} ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeDasharray="3 3.5"
      />
      <circle
        cx="16"
        cy="16"
        r="7.5"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeOpacity="0.6"
      />
    </svg>
  );
}

interface SymbolConfig {
  type: "glass" | "coupe" | "sparkle" | "drop" | "ring";
  size: number;
  top: string;
  left?: string;
  right?: string;
  depth: "depthFar" | "depthMid" | "depthNear";
  anim: "animBob1" | "animBob2" | "animBob3" | "animBob4" | "animBob5" | "animSparkle";
  delay?: string;
  hideOnMobile?: boolean;
}

const PRESETS: Record<string, SymbolConfig[]> = {
  hero: [
    // Top-left cluster (far edge)
    { type: "glass", size: 36, top: "12%", left: "3%", depth: "depthNear", anim: "animBob1" },
    { type: "sparkle", size: 24, top: "24%", left: "12%", depth: "depthMid", anim: "animSparkle", delay: "0.6s", hideOnMobile: true },
    { type: "drop", size: 18, top: "36%", left: "4%", depth: "depthFar", anim: "animBob4", delay: "1.2s", hideOnMobile: true },

    // Top-right cluster (far edge)
    { type: "coupe", size: 38, top: "13%", right: "3%", depth: "depthNear", anim: "animBob3", delay: "0.3s" },
    { type: "sparkle", size: 26, top: "27%", right: "15%", depth: "depthNear", anim: "animSparkle", delay: "1.5s", hideOnMobile: true },
    { type: "ring", size: 32, top: "38%", right: "5%", depth: "depthMid", anim: "animBob2", delay: "0.9s", hideOnMobile: true },

    // Lower flanks (bottom edge)
    { type: "glass", size: 32, top: "68%", left: "7%", depth: "depthMid", anim: "animBob2", delay: "1.8s", hideOnMobile: true },
    { type: "sparkle", size: 18, top: "78%", left: "14%", depth: "depthFar", anim: "animSparkle", delay: "2.2s", hideOnMobile: true },
    { type: "drop", size: 20, top: "82%", right: "3%", depth: "depthNear", anim: "animBob5", delay: "0.4s" },
    { type: "sparkle", size: 22, top: "82%", right: "16%", depth: "depthMid", anim: "animSparkle", delay: "1.1s", hideOnMobile: true },
  ],

  story: [
    // Chapter I: Story & Philosophy
    { type: "glass", size: 36, top: "12%", left: "3%", depth: "depthNear", anim: "animBob2" },
    { type: "sparkle", size: 22, top: "22%", left: "11%", depth: "depthMid", anim: "animSparkle", delay: "0.8s", hideOnMobile: true },
    { type: "drop", size: 18, top: "52%", left: "4%", depth: "depthFar", anim: "animBob4", delay: "1.6s", hideOnMobile: true },
    { type: "coupe", size: 36, top: "16%", right: "3%", depth: "depthMid", anim: "animBob1", delay: "0.5s" },
    { type: "sparkle", size: 26, top: "32%", right: "10%", depth: "depthNear", anim: "animSparkle", delay: "1.2s", hideOnMobile: true },
    { type: "ring", size: 28, top: "70%", right: "5%", depth: "depthFar", anim: "animBob3", delay: "2.0s", hideOnMobile: true },
    { type: "glass", size: 30, top: "84%", left: "3%", depth: "depthMid", anim: "animBob5", delay: "1.4s" },
  ],

  tablescape: [
    // Chapter II: Tablescape & Menu (Warm paper background)
    { type: "coupe", size: 38, top: "10%", right: "3%", depth: "depthNear", anim: "animBob1" },
    { type: "sparkle", size: 24, top: "18%", right: "12%", depth: "depthMid", anim: "animSparkle", delay: "0.7s", hideOnMobile: true },
    { type: "glass", size: 34, top: "45%", left: "3%", depth: "depthMid", anim: "animBob3", delay: "1.3s" },
    { type: "drop", size: 20, top: "58%", left: "8%", depth: "depthFar", anim: "animBob5", delay: "0.9s", hideOnMobile: true },
    { type: "sparkle", size: 26, top: "78%", right: "3%", depth: "depthNear", anim: "animSparkle", delay: "1.8s" },
    { type: "ring", size: 30, top: "86%", left: "6%", depth: "depthFar", anim: "animBob2", delay: "1.1s", hideOnMobile: true },
  ],

  space: [
    // Chapter III: Space Mosaic (Deep espresso brown background)
    { type: "glass", size: 40, top: "8%", left: "3%", depth: "depthNear", anim: "animBob3" },
    { type: "sparkle", size: 28, top: "16%", left: "10%", depth: "depthNear", anim: "animSparkle", delay: "0.5s", hideOnMobile: true },
    { type: "ring", size: 34, top: "25%", right: "3%", depth: "depthMid", anim: "animBob2", delay: "1.2s" },
    { type: "coupe", size: 36, top: "48%", right: "3%", depth: "depthMid", anim: "animBob4", delay: "0.9s", hideOnMobile: true },
    { type: "sparkle", size: 20, top: "62%", left: "3%", depth: "depthFar", anim: "animSparkle", delay: "1.7s", hideOnMobile: true },
    { type: "drop", size: 22, top: "78%", right: "3%", depth: "depthNear", anim: "animBob1", delay: "0.4s" },
    { type: "glass", size: 32, top: "90%", left: "7%", depth: "depthMid", anim: "animBob5", delay: "2.1s", hideOnMobile: true },
  ],

  video: [
    // Chapter IV: Cinematic Film Tour
    { type: "sparkle", size: 24, top: "12%", left: "3%", depth: "depthNear", anim: "animSparkle" },
    { type: "glass", size: 36, top: "28%", left: "3%", depth: "depthMid", anim: "animBob1", delay: "0.8s", hideOnMobile: true },
    { type: "coupe", size: 38, top: "14%", right: "3%", depth: "depthNear", anim: "animBob2", delay: "0.4s" },
    { type: "sparkle", size: 22, top: "35%", right: "11%", depth: "depthMid", anim: "animSparkle", delay: "1.4s", hideOnMobile: true },
    { type: "ring", size: 30, top: "72%", left: "3%", depth: "depthFar", anim: "animBob3", delay: "1.9s", hideOnMobile: true },
    { type: "drop", size: 22, top: "80%", right: "3%", depth: "depthMid", anim: "animBob5", delay: "1.1s" },
  ],

  reservation: [
    // Chapter VI: Reservation Lounge
    { type: "glass", size: 38, top: "10%", left: "3%", depth: "depthNear", anim: "animBob1" },
    { type: "sparkle", size: 26, top: "20%", left: "11%", depth: "depthNear", anim: "animSparkle", delay: "0.6s", hideOnMobile: true },
    { type: "drop", size: 20, top: "45%", left: "3%", depth: "depthFar", anim: "animBob4", delay: "1.5s", hideOnMobile: true },
    { type: "coupe", size: 36, top: "12%", right: "3%", depth: "depthMid", anim: "animBob3", delay: "0.3s" },
    { type: "sparkle", size: 28, top: "26%", right: "10%", depth: "depthNear", anim: "animSparkle", delay: "1.2s", hideOnMobile: true },
    { type: "ring", size: 32, top: "68%", right: "3%", depth: "depthMid", anim: "animBob2", delay: "1.8s", hideOnMobile: true },
    { type: "glass", size: 30, top: "85%", left: "3%", depth: "depthMid", anim: "animBob5", delay: "0.9s" },
  ],
};

interface AmbientDepthBackgroundProps {
  variant: "hero" | "story" | "tablescape" | "space" | "video" | "reservation";
  theme?: "dark" | "light" | "espresso";
  className?: string;
}

export default function AmbientDepthBackground({
  variant,
  theme = "dark",
  className = "",
}: AmbientDepthBackgroundProps) {
  const items = PRESETS[variant] || PRESETS.hero;

  const themeClass =
    theme === "light"
      ? styles.themeLight
      : theme === "espresso"
      ? styles.themeEspresso
      : styles.themeDark;

  return (
    <div
      className={`${styles.ambientLayer} ${themeClass} ${className}`}
      aria-hidden="true"
    >
      {items.map((item, index) => {
        const depthClass = styles[item.depth] || styles.depthMid;
        const animClass = styles[item.anim] || styles.animBob1;
        const mobileClass = item.hideOnMobile ? styles.hideOnMobile : "";

        const posStyle: React.CSSProperties = {
          top: item.top,
          ...(item.left ? { left: item.left } : {}),
          ...(item.right ? { right: item.right } : {}),
          ...(item.delay ? { animationDelay: item.delay } : {}),
        };

        return (
          <div
            key={`${variant}-${index}`}
            className={`${styles.bobItem} ${depthClass} ${animClass} ${mobileClass}`}
            style={posStyle}
          >
            {item.type === "glass" && <WineGlassSvg size={item.size} />}
            {item.type === "coupe" && <CoupeSvg size={item.size} />}
            {item.type === "sparkle" && <SparkleSvg size={item.size} />}
            {item.type === "drop" && <WineDropSvg size={item.size} />}
            {item.type === "ring" && <HaloRingSvg size={item.size} />}
          </div>
        );
      })}
    </div>
  );
}
