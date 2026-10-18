import { brl, site } from "@/site.config";
import CTA from "./CTA";
import { Check, Leaf } from "./ui";

const seals = ["Acesso imediato", "Revisado por agrônomo", `Garantia de ${site.guaranteeDays} dias`];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="container-x pb-14 pt-6 md:pb-24">
        <nav aria-label="Marca" className="mb-10 flex items-center gap-2 text-folha-900 md:mb-16">
          <Leaf className="h-7 w-7 text-folha-700" />
          <span className="font-display text-xl font-semibold">{site.brand}</span>
        </nav>

        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow mb-4">{site.tagline}</p>
            <h1 className="text-4xl font-semibold leading-[1.08] md:text-6xl">{site.headlines[site.headline]}</h1>
            <p className="mt-5 max-w-xl text-lg text-muted">{site.subheadline}</p>
            <div className="mt-8">
              <CTA>Quero salvar minhas plantas</CTA>
              <p className="mt-3 text-sm text-muted">
                De <s>{brl(site.price.from)}</s> por <strong className="text-folha-900">{brl(site.price.now)}</strong> à vista · pagamento único
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-folha-900">
              {seals.map((s) => (
                <li key={s} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-folha-700" />{s}</li>
              ))}
            </ul>
          </div>

          {/* Mockup do e-book em formato celular: ficha de triagem (CSS puro, sem imagem, LCP leve) */}
          <div className="mx-auto w-full max-w-[290px] rotate-2" aria-hidden="true">
            <div className="rounded-[2.2rem] border-[6px] border-folha-900 bg-creme-50 p-5 shadow-[10px_10px_0_0_theme(colors.folha.800/0.18)]">
              <p className="eyebrow">Ficha de triagem</p>
              <p className="mt-1 font-display text-2xl font-semibold leading-tight text-folha-900">Folha amarela</p>
              <div className="rule my-3" />
              <dl className="space-y-3 text-sm">
                <div><dt className="font-bold text-folha-900">Causa provável</dt><dd className="text-muted">Excesso de água ou drenagem ruim</dd></div>
                <div><dt className="font-bold text-folha-900">Como confirmar</dt><dd className="text-muted">Terra úmida há dias e folhas velhas amarelando primeiro</dd></div>
                <div><dt className="font-bold text-folha-900">O que fazer</dt><dd className="text-muted">Suspender a rega e checar o furo do vaso</dd></div>
              </dl>
              <div className="rule my-3" />
              <div className="flex gap-1.5">
                {["Luz", "Água", "Raiz", "Praga"].map((s, i) => (
                  <span key={s} className={`rounded-full px-2.5 py-1 text-xs font-bold ${i === 1 ? "bg-mostarda-400 text-folha-900" : "bg-folha-100 text-folha-800"}`}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
