import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Rượu Vang Hè - Đẳng Cấp Rượu Vang Nhập Khẩu Chính Hãng";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0B0708",
          backgroundImage:
            "radial-gradient(circle at center, #350910 0%, #15060A 55%, #0B0708 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "12px solid #231217",
          position: "relative",
        }}
      >
        {/* Subtle decorative inner border */}
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "2px solid rgba(212, 175, 55, 0.4)",
            pointerEvents: "none",
          }}
        />

        {/* Top Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#D4AF37",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <span>HERITAGE WINE CELLAR</span>
          <span>•</span>
          <span>EST. 2018</span>
        </div>

        {/* Center Brand & Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "#FDFBF7",
              letterSpacing: -1,
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            RƯỢU VANG HÈ
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#E5C158",
              fontWeight: 600,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            Tuyệt Tác Rượu Vang Nhập Khẩu Chính Hãng Cao Cấp
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#C4B5A5",
              maxWidth: 780,
              lineHeight: 1.5,
              marginTop: 8,
            }}
          >
            Chuyên Vang Ý, Pháp, Chile, Tây Ban Nha • Đầy Đủ CO/CQ • Hầm Rượu Chuẩn 16°C
          </div>
        </div>

        {/* Bottom Trust Badges */}
        <div
          style={{
            display: "flex",
            gap: 40,
            color: "#FFFFFF",
            fontSize: 18,
            fontWeight: 600,
            borderTop: "1px solid rgba(212, 175, 55, 0.3)",
            paddingTop: 24,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#F3E5AB" }}>
            ✓ 100% Chính Hãng Đầy Đủ CO/CQ
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#F3E5AB" }}>
            ✓ Hầm Bảo Quản Tiêu Chuẩn 16°C
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#F3E5AB" }}>
            ✓ Giao Hỏa Tốc 2H Toàn Quốc
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
