import { Check } from "./ui";

const items = [
  ["Entender o sintoma", "Identifique a causa provável de folha amarela, ponta seca, planta murcha e mais, em minutos."],
  ["Regar sem adivinhar", "Use o teste do dedo e saiba como resgatar planta encharcada ou seca."],
  ["Posicionar pela luz", "Leia a sua janela e coloque cada planta onde ela tem mais chance de ir bem."],
  ["Trocar vaso e terra sem trauma", "Passo a passo para replantar com segurança, com receitas de substrato."],
  ["Reconhecer pragas cedo", "Cochonilha, ácaro e mosquinha-do-fungo, com tratamentos caseiros seguros."],
  ["Seguir um plano de 7 dias", "Um roteiro dia a dia para recuperar a planta e uma rotina mensal para manter."],
];

export default function Benefits() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow mb-3">O que você vai conseguir</p>
          <h2 className="h2">Menos tentativa e erro. Mais plantas saudáveis em casa.</h2>
        </div>
        <ul className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {items.map(([t, d]) => (
            <li key={t} className="reveal flex gap-3">
              <Check className="mt-1 h-6 w-6 shrink-0 text-folha-700" />
              <div><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 text-muted">{d}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
