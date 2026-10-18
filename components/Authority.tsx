import { site } from "@/site.config";
import { Slot } from "./ui";

export default function Authority() {
  if (!site.flags.showReviewer) return null;
  const r = site.reviewer;
  return (
    <section className="section">
      <div className="container-x reveal grid items-center gap-8 md:grid-cols-[180px_1fr] md:gap-12">
        <Slot src={site.images.reviewer} alt={`Foto de ${r.name}`} label="Foto do revisor" className="mx-auto aspect-square w-40 rounded-full md:w-full" sizes="180px" />
        <div>
          <p className="eyebrow mb-2">Conteúdo revisado por</p>
          <h2 className="text-3xl font-semibold">{r.name}</h2>
          <p className="mt-1 font-semibold text-folha-800">Engenheiro(a) Agrônomo(a) · {r.crea}</p>
          <p className="mt-3 max-w-2xl text-muted">{r.bio}</p>
        </div>
      </div>
    </section>
  );
}
