import { brl, site } from "@/site.config";
import CTA from "./CTA";
import Guarantee from "./Guarantee";
import { Check } from "./ui";

const included = [
  "Guia Folhagem em PDF (40 a 55 páginas, formato vertical)",
  ...site.bonuses.map((b) => `Bônus: ${b.title}`),
  "Acesso imediato por e-mail após o pagamento",
];

export default function Offer() {
  const { from, now, installments } = site.price;
  return (
    <section id="oferta" className="section scroll-mt-4">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl rounded-3xl border-2 border-folha-900 bg-creme-50 p-7 shadow-[8px_8px_0_0_theme(colors.folha.800/0.2)] md:p-10">
          <p className="eyebrow mb-2">Guia Folhagem + 3 bônus</p>
          <h2 className="h2">Seu pronto-socorro de plantas, no bolso, por menos que muita muda nova</h2>
          <ul className="mt-6 space-y-3">
            {included.map((t) => <li key={t} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-folha-700" />{t}</li>)}
          </ul>
          <div className="rule my-7" />
          <p className="text-muted">De <s>{brl(from)}</s> por apenas</p>
          <p className="font-display text-6xl font-semibold text-folha-900">{brl(now)}</p>
          <p className="text-sm text-muted">
            à vista, pagamento único{installments && <> · ou {installments.n}x de {brl(installments.value)}</>}
          </p>
          <div className="mt-6"><CTA className="btn w-full sm:w-auto">Quero o Guia Folhagem</CTA></div>
          <Guarantee />
        </div>
      </div>
    </section>
  );
}
