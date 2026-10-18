"use client";
import { useState } from "react";
import CTA from "./CTA";

const data = [
  { s: "Folhas amarelas", cause: "Excesso de água ou drenagem ruim (às vezes falta de luz).", check: "Terra úmida há dias e as folhas mais velhas amarelam primeiro.", act: "Suspenda a rega até secar a camada de cima e confira se o vaso tem furos." },
  { s: "Ponta marrom e seca", cause: "Ar seco, água com muito cloro ou sal, ou rega irregular.", check: "Só a ponta seca; o resto da folha está firme.", act: "Regue em ritmo constante e, se der, use água filtrada ou de chuva." },
  { s: "Planta murcha", cause: "Sede, ou raiz sufocada por excesso de água.", check: "Enfie o dedo 3 cm na terra: seca indica sede; encharcada e com cheiro ruim indica raiz.", act: "Seca: regue bem. Encharcada: tire do vaso e deixe as raízes arejarem." },
  { s: "Mosquinhas no vaso", cause: "Mosquinha-do-fungo, atraída por substrato sempre úmido.", check: "Elas voam quando você mexe na terra.", act: "Deixe secar mais entre as regas e retire a camada de cima da terra." },
  { s: "Folhas pálidas e esticadas", cause: "Falta de luz.", check: "Ela se inclina em direção à janela e cresce com espaços longos entre as folhas.", act: "Aproxime da janela, aos poucos, evitando sol direto forte." },
];

export default function SymptomPicker() {
  const [i, setI] = useState(0);
  const d = data[i];
  return (
    <section className="section bg-creme-200">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow mb-3">Teste agora, é grátis</p>
          <h2 className="h2">O que a sua planta está mostrando?</h2>
          <p className="mt-3 text-lg text-muted">Toque no sintoma e veja a causa provável. É assim, em minutos, que o guia funciona.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Sintomas">
          {data.map((x, n) => (
            <button key={x.s} onClick={() => setI(n)} aria-pressed={i === n}
              className={`min-h-[44px] rounded-full border-2 px-5 text-base font-semibold transition ${i === n ? "border-folha-800 bg-folha-800 text-creme-50" : "border-folha-800/40 bg-creme-50 text-folha-900 hover:border-folha-800"}`}>
              {x.s}
            </button>
          ))}
        </div>
        <div aria-live="polite" className="mt-6 grid gap-6 rounded-3xl bg-creme-50 p-6 md:grid-cols-3 md:p-8">
          <div><p className="eyebrow">Causa provável</p><p className="mt-1 text-lg">{d.cause}</p></div>
          <div><p className="eyebrow">Como confirmar</p><p className="mt-1 text-lg">{d.check}</p></div>
          <div><p className="eyebrow">O que fazer</p><p className="mt-1 text-lg">{d.act}</p></div>
        </div>
        <p className="mt-4 text-sm text-muted">Resumo ilustrativo. No guia você encontra de 12 a 15 sintomas, com fotos e o passo a passo completo.</p>
        <div className="mt-6"><CTA>Quero a tabela completa</CTA></div>
      </div>
    </section>
  );
}
