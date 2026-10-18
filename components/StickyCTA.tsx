import CTA from "./CTA";
import { brl, site } from "@/site.config";

/** Barra fixa embaixo, sempre visível (celular e desktop): zona do polegar, sem cobrir o topo. */
export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-folha-900/15 bg-creme-50/95 px-4 py-2.5 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <p className="text-sm font-bold leading-tight text-folha-900">
          {brl(site.price.now)}
          <span className="block text-xs font-normal text-muted">pagamento único</span>
        </p>
        <CTA className="btn !min-h-[48px] flex-1 !px-4 !py-2 text-sm sm:text-base">Quero o Guia Folhagem</CTA>
      </div>
    </div>
  );
}
