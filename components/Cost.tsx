import { brl, site } from "@/site.config";
import CTA from "./CTA";

const costs = [
  ["Dinheiro", "Mudas novas, vasos, adubos e “milagres” de internet que não resolveram a causa."],
  ["Tempo", "Horas em vídeos e fóruns que se contradizem, e semanas esperando para ver se melhorou."],
  ["Ânimo", "A frustração de ver o cantinho verde da casa virar um lembrete do que deu errado."],
];

export default function Cost() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <p className="eyebrow mb-3">O custo de continuar no chute</p>
          <h2 className="h2">Cada tentativa errada cobra um preço. Quase sempre, maior que o de um diagnóstico.</h2>
        </div>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {costs.map(([t, d]) => (
            <li key={t} className="reveal border-t-4 border-folha-800 pt-4">
              <h3 className="text-2xl font-semibold">{t}</h3>
              <p className="mt-2 text-muted">{d}</p>
            </li>
          ))}
        </ul>
        <p className="reveal mt-10 max-w-3xl text-xl text-folha-900">
          Pense em quanto você já gastou com plantas que não vingaram. O Guia Folhagem custa <strong>{brl(site.price.now)}</strong>,
          pagamento único, e serve para as plantas que você tem agora e para as que vierem depois.
        </p>
        <div className="mt-8"><CTA>Quero parar de perder plantas</CTA></div>
      </div>
    </section>
  );
}
