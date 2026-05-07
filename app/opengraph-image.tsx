import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Hantavirus Watch outbreak tracker";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f8fb",
          color: "#101820",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI",
          padding: "70px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#073d5d",
              color: "white",
              fontSize: 24,
              fontWeight: 800,
              borderRadius: 6,
            }}
          >
            HW
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 28, fontWeight: 800 }}>
              Hantavirus Watch
            </span>
            <span style={{ color: "#5e6975", fontSize: 22 }}>
              Current situation // May 7, 2026
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              color: "#073d5d",
              fontSize: 28,
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            MV Hondius // Andes virus
          </div>
          <div
            style={{
              maxWidth: 930,
              fontSize: 82,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: 0,
            }}
          >
            Hantavirus Outbreak Tracker
          </div>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          {[
            ["8", "reported cases"],
            ["5", "confirmed"],
            ["3", "deaths"],
            ["Low", "wider public risk"],
          ].map(([value, label]) => (
            <div
              key={label}
              style={{
                width: 245,
                border: "1px solid #d7dee8",
                borderTop: `7px solid ${label === "deaths" ? "#b42318" : "#0b5e8e"}`,
                borderRadius: 8,
                background: "#ffffff",
                padding: 22,
              }}
            >
              <div style={{ fontSize: 44, fontWeight: 900 }}>{value}</div>
              <div
                style={{
                  color: "#5e6975",
                  fontSize: 20,
                  fontWeight: 750,
                  textTransform: "uppercase",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
