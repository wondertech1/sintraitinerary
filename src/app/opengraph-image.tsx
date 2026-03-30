import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sintra Itinerary — Day Trip Guide from Lisbon";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #3D4A56 0%, #4F5E6B 40%, #2D4226 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#B5CCAE",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            sintraitinerary.com
          </div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#FFFFFF",
              textAlign: "center",
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            Sintra Itinerary 2026
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              color: "#C9D3DB",
              textAlign: "center",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            Honest day trip guides from Lisbon — real prices, realistic timing, tested routes
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            display: "flex",
            gap: "32px",
            fontSize: "16px",
            color: "#95A5B4",
          }}
        >
          <span>Pena Palace</span>
          <span style={{ color: "#74956A" }}>·</span>
          <span>Quinta da Regaleira</span>
          <span style={{ color: "#74956A" }}>·</span>
          <span>Moorish Castle</span>
          <span style={{ color: "#74956A" }}>·</span>
          <span>Monserrate</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
