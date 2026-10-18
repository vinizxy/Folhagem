import { faqs } from "./faq-data";

export default function FAQ() {
  return (
    <section className="section bg-creme-50">
      <div className="container-x max-w-3xl">
        <h2 className="h2 reveal">Perguntas frequentes</h2>
        <div className="mt-8">
          {faqs.map(([q, a]) => (
            <details key={q} className="group border-b border-dashed border-folha-800/30 py-1">
              <summary className="flex min-h-[48px] cursor-pointer items-center justify-between gap-4 py-3 text-lg font-semibold text-folha-900">
                {q}
                <span aria-hidden="true" className="text-2xl text-mostarda-700 transition group-open:rotate-45">+</span>
              </summary>
              <p className="pb-4 text-muted">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
