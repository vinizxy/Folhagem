import CTA from "./CTA";
import { Bug, Drop, Root, Sun } from "./ui";

const signs = [
  { Icon: Sun, name: "Luz", q: "Ela recebe a luz de que precisa?", d: "Folhas esticadas, pálidas ou queimadas apontam para a janela." },
  { Icon: Drop, name: "Água", q: "A rega está no ritmo certo?", d: "O teste do dedo e o peso do vaso dizem mais que o calendário." },
  { Icon: Root, name: "Raiz", q: "O vaso e a terra estão ajudando?", d: "Drenagem, terra compactada e raízes apertadas aparecem antes do estrago." },
  { Icon: Bug, name: "Praga", q: "Tem alguém se alimentando dela?", d: "Olhe o verso das folhas e a base dos caules, é onde elas se escondem." },
];

export default function Method() {
  return (
    <section className="section on-dark bg-folha-900 text-creme-100">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow mb-3">A virada</p>
          <h2 className="h2 !text-creme-50">O Método dos 4 Sinais: diagnóstico em 10 minutos</h2>
          <p className="mt-5 text-lg text-creme-200">
            Quase todo problema de planta de apartamento cai em um destes quatro grupos. Você olha na ordem, elimina o que não é e chega à causa provável sem chute.
          </p>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-creme-100/15 sm:grid-cols-2 lg:grid-cols-4">
          {signs.map(({ Icon, name, q, d }, i) => (
            <li key={name} className="reveal bg-folha-900 p-6">
              <div className="flex items-center justify-between text-mostarda-300">
                <Icon />
                <span className="font-display text-4xl font-semibold opacity-60">{i + 1}</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold !text-creme-50">{name}</h3>
              <p className="mt-1 font-semibold text-mostarda-300">{q}</p>
              <p className="mt-2 text-creme-200">{d}</p>
            </li>
          ))}
        </ol>
        <div className="reveal mt-12 max-w-2xl">
          <p className="text-xl text-creme-50">Em vez de adivinhar, você segue quatro perguntas e para de tratar o problema errado.</p>
          <div className="mt-6"><CTA>Quero o Método dos 4 Sinais</CTA></div>
        </div>
      </div>
    </section>
  );
}
