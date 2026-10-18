import Image from "next/image";
import { brl, site } from "@/site.config";
import CTA from "./CTA";

const pains = [
  "Folhas amarelas e a dúvida: água demais ou de menos?",
  "Ponta marrom que você corta e que volta.",
  "Regar por palpite: “será que já é hora?”",
  "Terra dura, vaso que nunca seca.",
  "Mosquinhas, bolinhas brancas, teias… e nenhuma ideia do que usar.",
];

export default function PainPoints() {
  const img = site.images.leaf;
  return (
    <section className="section">
      <div className="container-x grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <Image src={img.src} alt="Lia examinando uma folha de jiboia" width={img.w} height={img.h} sizes="(min-width: 768px) 320px, 80vw" loading="lazy" className="reveal hidden aspect-[4/5] w-full rounded-[2rem] object-cover md:block" />
        <div className="reveal">
          <h2 className="h2">Você comprou a planta com carinho. Semanas depois, ela começa a definhar.</h2>
          <ul className="mt-6 space-y-3">
            {pains.map((p) => (
              <li key={p} className="flex gap-3 text-lg">
                <span aria-hidden="true" className="mt-2 h-3.5 w-3.5 shrink-0 rounded-full bg-mostarda-400" />{p}
              </li>
            ))}
          </ul>
          <p className="mt-7 rounded-2xl bg-creme-200 p-5 text-lg">
            <strong className="font-display text-2xl text-folha-900">A culpa nunca foi sua.</strong><br />
            Ninguém ensina a ler uma planta. Sem saber o que olhar, qualquer pessoa trata o sintoma errado, e cada tentativa errada custa dinheiro, tempo e ânimo.
            O guia custa <strong>{brl(site.price.now)}</strong> e vale para as plantas que você tem e para as que vierem.
          </p>
          <div className="mt-7"><CTA>Quero entender minha planta</CTA></div>
        </div>
      </div>
    </section>
  );
}
