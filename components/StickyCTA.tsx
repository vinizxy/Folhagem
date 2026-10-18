"use client";
import { useEffect, useState } from "react";
import CTA from "./CTA";
import { brl, site } from "@/site.config";

/** Barra discreta só no mobile: aparece após o hero e some quando a oferta está na tela. */
export default function StickyCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const seen = { topo: true, oferta: false };
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => (seen[e.target.id as "topo" | "oferta"] = e.isIntersecting));
      setShow(!seen.topo && !seen.oferta);
    });
    ["topo", "oferta"].forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return (
    <div inert={!show} className={`fixed inset-x-0 bottom-0 z-40 border-t border-folha-900/15 bg-creme-50/95 px-4 py-2.5 backdrop-blur transition-transform duration-300 motion-reduce:transition-none md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}>
      <div className="flex items-center gap-3">
        <p className="text-sm font-bold leading-tight text-folha-900">{brl(site.price.now)}<span className="block text-xs font-normal text-muted">à vista</span></p>
        <CTA className="btn !min-h-[48px] flex-1 !px-4 !py-2 text-sm">Quero o Guia Folhagem</CTA>
      </div>
    </div>
  );
}
