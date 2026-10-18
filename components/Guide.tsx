import Image from "next/image";
import { site } from "@/site.config";

/** Apresenta a Lia (personagem da marca) e, se preenchido, o revisor real. */
export default function Guide() {
  const img = site.images.guia;
  const r = site.reviewer;
  const reviewerReady = !r.name.startsWith("[");
  return (
    <section className="section bg-creme-200">
      <div className="container-x grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
        <figure className="reveal mx-auto w-full max-w-[220px] md:max-w-none">
          <Image src={img.src} alt="Ilustração da Lia, a guia do Folhagem, podando plantas em um jardim" width={img.w} height={img.h} sizes="(min-width: 768px) 320px, 80vw" loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover" />
          <figcaption className="mt-2 text-center text-xs text-muted">Lia é uma personagem ilustrada com IA</figcaption>
        </figure>
        <div className="reveal">
          <p className="eyebrow mb-3">Quem vai te guiar</p>
          <h2 className="h2">Oi, eu sou a {site.persona.name}, {site.persona.role}.</h2>
          <p className="mt-4 text-lg">
            Sou a voz que acompanha você no guia: sem pressa, sem julgamento e sem palavra difícil. A minha ideia é simples: te ajudar a olhar para a sua planta e entender o que ela está pedindo.
          </p>
          <p className="mt-3 text-lg text-muted">
            Aqui, errar faz parte. Planta de apartamento tem as suas manhas, e a gente vai aprender a ler cada uma.
          </p>
          {reviewerReady && (
            <div className="mt-6 border-t border-dashed border-folha-800/30 pt-5">
              <p className="eyebrow mb-1">Conteúdo revisado por</p>
              <p className="font-display text-2xl font-semibold text-folha-900">{r.name}</p>
              <p className="font-semibold text-folha-800">Engenheiro(a) Agrônomo(a) · {r.crea}</p>
              <p className="mt-2 text-muted">{r.bio}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
