import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #4a5568 0%, #2d3748 100%)",
          borderRadius: 6,
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Pena Palace inspired tower silhouette */}
          {/* Main tower */}
          <rect x="9" y="6" width="6" height="14" fill="#e8dcc8" rx="0.5" />
          {/* Dome top */}
          <ellipse cx="12" cy="6" rx="4" ry="2.5" fill="#c9956b" />
          {/* Dome tip */}
          <rect x="11.2" y="2" width="1.6" height="4" fill="#c9956b" rx="0.8" />
          {/* Flag */}
          <polygon points="12.8,2 16,3.2 12.8,4.2" fill="#d4a853" />
          {/* Left wing */}
          <rect x="4" y="12" width="5" height="8" fill="#e8dcc8" rx="0.5" />
          <rect x="4" y="10.5" width="5" height="2" fill="#c9956b" rx="0.5" />
          {/* Right wing */}
          <rect x="15" y="12" width="5" height="8" fill="#e8dcc8" rx="0.5" />
          <rect x="15" y="10.5" width="5" height="2" fill="#c9956b" rx="0.5" />
          {/* Windows */}
          <rect x="10.5" y="9" width="1.2" height="1.8" fill="#4a5568" rx="0.3" />
          <rect x="12.3" y="9" width="1.2" height="1.8" fill="#4a5568" rx="0.3" />
          <rect x="10.5" y="13" width="1.2" height="1.8" fill="#4a5568" rx="0.3" />
          <rect x="12.3" y="13" width="1.2" height="1.8" fill="#4a5568" rx="0.3" />
          {/* Door */}
          <rect x="11" y="16.5" width="2" height="3.5" fill="#4a5568" rx="1" />
          {/* Base wall */}
          <rect x="2" y="20" width="20" height="2" fill="#b8a88a" rx="0.3" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
