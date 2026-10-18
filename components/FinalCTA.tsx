import Image from "next/image";
import { site } from "@/site.config";
import CTA from "./CTA";

export default function FinalCTA() {
  const img = site.images.final;
  return (
    <section className="on-dark section bg-folha-900">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="reveal">
          <h2 className="h2 !text-creme-50">Daqui a uma semana, você pode estar olhando para uma folha nova, e não para outra amarelada.</h2>
          <p className="mt-4 text-lg text-creme-200">
            Os resultados variam com cada planta, mas você deixa de agir no escuro: em 10 minutos sabe o que olhar, o que fazer e em que ordem. E se não ajudar, são 7 dias de garantia.
          </p>
          <div className="mt-8"><CTA>Quero salvar minhas plantas</CTA></div>
        </div>
        <Image src={img.src} alt="Ilustração de uma jardineira podando uma monstera em uma cozinha com vasos" width={img.w} height={img.h} sizes="(min-width: 768px) 460px, 90vw" loading="lazy" className="reveal hidden aspect-[4/5] w-full rounded-t-[10rem] rounded-b-3xl object-cover md:block" />
      </div>
    </section>
  );
}
