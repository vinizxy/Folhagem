import { brl, site } from "@/site.config";
import CTA from "./CTA";
import Guarantee from "./Guarantee";
import { Check } from "./ui";

const included = [
  "Guia Folhagem em PDF: 58 páginas, formato vertical para o celular",
  "15 sintomas: causa provável, como confirmar e o que fazer",
  "Método dos 4 Sinais para diagnosticar em 10 minutos",
  "Fichas de 14 plantas populares, com luz, rega e toxicidade para pets",
  "Plano de resgate de 7 dias e rotina mensal de cuidados",
  "Acesso imediato por e-mail após o pagamento",
];

export default function Offer() {
  const { from, now, installments } = site.price;
  return (
    <section id="oferta" className="section scroll-mt-4">
      <div className="container-x">
        <div className="reveal mx-auto max-w-2xl rounded-3xl bg-creme-50 p-6 shadow-2xl shadow-folha-900/15 md:p-10">
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
