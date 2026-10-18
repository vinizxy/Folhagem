import { brl, site } from "@/site.config";
import Image from "next/image";
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

          {/* Guia da marca (imagem ilustrativa gerada por IA) + ficha de triagem sobreposta */}
          <figure className="relative mx-auto mb-10 w-full max-w-[360px] md:mb-0">
            <Image src="/images/guia-folhagem.webp" alt="Ilustração de uma jardineira sorrindo, segurando uma folha de jiboia com as mãos sujas de terra" width={1122} height={1402} priority sizes="(min-width: 768px) 360px, 90vw" className="aspect-[4/5] w-full rounded-[2rem] border-[6px] border-folha-900 object-cover shadow-[10px_10px_0_0_theme(colors.folha.800/0.18)]" />
            <div className="absolute -bottom-9 -left-2 w-[68%] -rotate-2 rounded-2xl border-[3px] border-folha-900 bg-creme-50 p-4 shadow-[6px_6px_0_0_theme(colors.folha.800/0.18)] sm:-left-8" aria-hidden="true">
              <p className="eyebrow">Ficha de triagem</p>
              <p className="font-display text-xl font-semibold leading-tight text-folha-900">Folha amarela</p>
              <div className="rule my-2" />
              <p className="text-xs"><b className="text-folha-900">Causa provável:</b> <span className="text-muted">excesso de água ou drenagem ruim</span></p>
              <div className="mt-2 flex gap-1">
                {["Luz", "Água", "Raiz", "Praga"].map((s, i) => (
                  <span key={s} className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${i === 1 ? "bg-mostarda-400 text-folha-900" : "bg-folha-100 text-folha-800"}`}>{s}</span>
                ))}
              </div>
            </div>
            <figcaption className="mt-14 text-center text-xs text-muted">Imagem ilustrativa criada com IA</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
