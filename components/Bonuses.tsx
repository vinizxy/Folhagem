import { brl, site } from "@/site.config";

export default function Bonuses() {
  const { showBonusValues } = site.flags;
  return (
    <section className="section">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <h2 className="h2">3 bônus incluídos para colocar o diagnóstico em prática</h2>
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {site.bonuses.map((b) => (
            <li key={b.title} className="reveal border-t-4 border-mostarda-400 bg-creme-50 p-4 md:p-6">
              <h3 className="mt-1 text-lg md:text-xl font-semibold">{b.title}</h3>
              <p className="mt-1 text-muted">{b.desc}</p>
              {showBonusValues && <p className="mt-3 text-sm font-semibold text-folha-800">Valor de tabela: <s>{brl(b.value)}</s> · incluso</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
