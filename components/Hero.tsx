import Image from "next/image";
import { brl, site } from "@/site.config";
import CTA from "./CTA";
import { Check, Leaf } from "./ui";

const seals = ["Acesso imediato", "Revisado por agrônomo", `Garantia de ${site.guaranteeDays} dias`];

export default function Hero() {
  const img = site.images.hero;
  return (
    <section id="topo" className="on-dark relative overflow-hidden bg-folha-900 text-creme-100">
      {/* folhagem decorativa de fundo */}
      <Leaf className="pointer-events-none absolute -right-24 -top-16 h-[34rem] w-[34rem] rotate-12 text-folha-700 opacity-30" />
      <Leaf className="pointer-events-none absolute -bottom-20 -left-24 h-96 w-96 -rotate-45 text-folha-700 opacity-25" />

      <div className="container-x relative pb-16 pt-6 md:pb-24">
        <nav aria-label="Marca" className="mb-10 flex items-center gap-2 text-creme-50 md:mb-14">
          <Leaf className="h-7 w-7 text-mostarda-300" />
          <span className="font-display text-xl font-semibold">{site.brand}</span>
        </nav>

        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="eyebrow mb-4">Para quem já perdeu planta e não sabe por quê</p>
            <h1 className="text-4xl font-semibold leading-[1.08] !text-creme-50 md:text-6xl">{site.headlines[site.headline]}</h1>
            <p className="mt-5 max-w-xl text-lg text-creme-200">{site.subheadline}</p>
            <div className="mt-8">
              <CTA>Quero salvar minhas plantas</CTA>
              <p className="mt-3 text-sm text-creme-200">
                De <s>{brl(site.price.from)}</s> por <strong className="text-creme-50">{brl(site.price.now)}</strong> · pagamento único
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-creme-50">
              {seals.map((s) => (
                <li key={s} className="flex items-center gap-1.5"><Check className="h-4 w-4 text-mostarda-300" />{s}</li>
              ))}
            </ul>
          </div>

          <figure className="relative mx-auto mb-10 w-full max-w-[340px] md:mb-0">
            <Image src={img.src} alt="Ilustração de uma jardineira sorrindo, regando suculentas em uma sacada de apartamento" width={img.w} height={img.h} loading="eager" sizes="(min-width: 768px) 340px, 86vw" className="aspect-[4/5] w-full rounded-t-[10rem] rounded-b-3xl border-4 border-creme-100/90 object-cover" />
            <div className="absolute -bottom-9 -left-2 w-[66%] -rotate-2 rounded-2xl bg-creme-50 p-4 text-ink shadow-xl sm:-left-8" aria-hidden="true">
              <p className="eyebrow !text-mostarda-700">Ficha de triagem</p>
              <p className="font-display text-xl font-semibold leading-tight text-folha-900">Folha amarela</p>
              <div className="rule my-2" />
              <p className="text-xs"><b className="text-folha-900">Causa provável:</b> <span className="text-muted">excesso de água ou drenagem ruim</span></p>
              <div className="mt-2 flex gap-1">
                {["Luz", "Água", "Raiz", "Praga"].map((s, i) => (
                  <span key={s} className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${i === 1 ? "bg-mostarda-400 text-folha-900" : "bg-folha-100 text-folha-800"}`}>{s}</span>
                ))}
              </div>
            </div>
            <figcaption className="mt-14 text-center text-xs text-creme-200">Imagem ilustrativa criada com IA</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
