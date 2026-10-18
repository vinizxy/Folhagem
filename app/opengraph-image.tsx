import { ImageResponse } from "next/og";
import { site } from "@/site.config";

export const alt = site.product;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#13291D", color: "#FBF7EC", padding: 72 }}>
        <div style={{ display: "flex", fontSize: 40, color: "#E0A526", fontWeight: 700 }}>{site.brand}</div>
        <div style={{ display: "flex", fontSize: 68, lineHeight: 1.1, fontWeight: 700 }}>{site.headlines[site.headline]}</div>
        <div style={{ display: "flex", fontSize: 32, color: "#EBE2CC" }}>Guia em PDF · Linguagem simples · Garantia de {site.guaranteeDays} dias</div>
      </div>
    ),
    size,
  );
}
