import { site } from "@/site.config";

// Só aparece com a flag ligada E depoimentos reais cadastrados em site.config.ts.
export default function Testimonials() {
  if (!site.flags.showTestimonials || site.testimonials.length === 0) return null;
  return (
    <section className="section bg-creme-50">
      <div className="container-x">
        <h2 className="h2">O que leitoras e leitores dizem</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {site.testimonials.map((t) => (
            <figure key={t.name} className="reveal border-l-4 border-mostarda-400 pl-5">
              <blockquote className="text-lg">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-folha-800">{t.name}{t.city ? `, ${t.city}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
