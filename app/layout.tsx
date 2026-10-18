import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import Analytics from "@/components/Analytics";
import { site } from "@/site.config";
import "./globals.css";

// Fontes self-hosted pelo next/font, com font-display: swap.
const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap", axes: ["opsz"] });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const title = `${site.product} | ${site.brand}`;
const description = "E-book em PDF para identificar o sintoma da sua planta, descobrir a causa provável e saber o que fazer. Revisado por agrônomo, acesso imediato e garantia de 7 dias.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "pt_BR", url: "/", siteName: site.brand, title, description },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#13291D", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
