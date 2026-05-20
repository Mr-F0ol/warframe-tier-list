import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WarframeFool - Tier List Warframe";
export const size = {
  width: 1200,
  height: 630
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
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #061114 0%, #0b1d23 48%, #071013 100%)",
          color: "#f8fbff",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 18%, rgba(247,198,91,.34), transparent 28%), radial-gradient(circle at 78% 22%, rgba(103,232,249,.26), transparent 31%), linear-gradient(rgba(103,232,249,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,.08) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 54px 54px, 54px 54px"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 74,
            width: 112,
            height: 112,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f7c65b",
            border: "2px solid rgba(247,198,91,.45)",
            background: "rgba(7,16,19,.72)",
            boxShadow: "0 0 40px rgba(247,198,91,.22)"
          }}
        >
          <div style={{ fontSize: 74, fontWeight: 900, lineHeight: 1 }}>V</div>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "210px 72px 68px", width: "100%" }}>
          <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
            <span style={{ border: "1px solid rgba(103,232,249,.42)", background: "rgba(103,232,249,.12)", padding: "10px 16px", color: "#a5f3fc", fontSize: 22, fontWeight: 800 }}>
              META 2026
            </span>
            <span style={{ border: "1px solid rgba(247,198,91,.42)", background: "rgba(247,198,91,.12)", padding: "10px 16px", color: "#fde68a", fontSize: 22, fontWeight: 800 }}>
              UPDATE 42.0.10
            </span>
          </div>
          <div style={{ fontSize: 86, fontWeight: 950, letterSpacing: -2, lineHeight: .95 }}>WarframeFool</div>
          <div style={{ marginTop: 18, color: "#cffafe", fontSize: 38, fontWeight: 800 }}>Tier List Warframe</div>
          <div style={{ marginTop: 28, maxWidth: 920, color: "rgba(235,254,255,.86)", fontSize: 25, lineHeight: 1.4 }}>
            Warframes Prime, armas Incarnon, Steel Path, farm, bosses, prioridades e recomendações rápidas.
          </div>
          <div style={{ marginTop: "auto", display: "flex", gap: 16, color: "#fef3c7", fontSize: 23, fontWeight: 800 }}>
            <span>warframefool.vercel.app</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
