import CTA from "./CTA";

const pains = [
  "As folhas amarelam e você não sabe se é água demais ou de menos.",
  "A ponta marrom e seca aparece, você corta, e ela volta.",
  "Você rega por palpite e a dúvida nunca passa: “será que já é hora?”",
  "A terra fica dura, não absorve a água, ou o vaso nunca seca.",
  "Surgem mosquinhas, bolinhas brancas ou teias e você não sabe o que usar.",
];

export default function PainPoints() {
  return (
    <section className="section bg-creme-50">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow mb-3">Você se reconhece?</p>
          <h2 className="h2">Você comprou a planta com carinho. Semanas depois, ela começa a definhar.</h2>
          <p className="mt-5 text-lg text-muted">
            Você olha para aquela folha amarela todo dia. Pesquisa, e cada site diz uma coisa. Rega menos, rega mais, muda de lugar,
            e a planta continua pior. No fim sobra só a pergunta que machuca: <em>“será que eu não levo jeito com planta?”</em>
          </p>
        </div>

        <ul className="reveal mt-10 grid gap-x-12 gap-y-4 md:grid-cols-2">
          {pains.map((p) => (
            <li key={p} className="flex gap-3 border-b border-dashed border-folha-800/25 pb-4">
              <span aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-mostarda-500" />
              <span className="text-lg">{p}</span>
            </li>
          ))}
        </ul>

        <div className="reveal mt-12 max-w-3xl border-l-4 border-mostarda-400 pl-5">
          <p className="font-display text-2xl font-semibold text-folha-900 md:text-3xl">A culpa nunca foi sua.</p>
          <p className="mt-3 text-lg text-muted">
            Ninguém te ensinou a ler uma planta. Ela não fala, ela dá sinais, e cada sinal tem uma causa diferente.
            Sem saber o que olhar, qualquer pessoa acaba tratando o sintoma errado.
          </p>
        </div>
        <div className="mt-8"><CTA>Quero entender minha planta</CTA></div>
      </div>
    </section>
  );
}
