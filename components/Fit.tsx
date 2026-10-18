import { Check } from "./ui";

const yes = [
  "Tem plantas dentro de casa ou no apartamento.",
  "Já perdeu plantas e quer entender o que deu errado.",
  "É iniciante e quer um passo a passo sem termos técnicos.",
  "Prefere ler no celular, com fotos, e resolver rápido.",
];
const no = [
  "Procura um curso completo de jardinagem ou paisagismo.",
  "Espera uma garantia de que toda planta se recupera. Algumas já chegam tarde demais.",
  "Cuida de horta, jardim externo ou cultivo comercial.",
  "Não pretende ajustar nada na rotina de cuidados.",
];

export default function Fit() {
  return (
    <section className="section bg-creme-50">
      <div className="container-x grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <h2 className="h2">Para quem é</h2>
          <ul className="mt-6 space-y-3">
            {yes.map((t) => <li key={t} className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-folha-700" />{t}</li>)}
          </ul>
        </div>
        <div className="reveal">
          <h2 className="h2">Para quem não é</h2>
          <ul className="mt-6 space-y-3">
            {no.map((t) => <li key={t} className="flex gap-3"><span aria-hidden="true" className="mt-0.5 w-5 shrink-0 text-center font-bold text-mostarda-700">×</span>{t}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
