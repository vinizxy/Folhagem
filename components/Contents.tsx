import { site } from "@/site.config";
import { Slot } from "./ui";

const chapters = [
  ["Método dos 4 Sinais", "luz, água, raiz e praga: diagnóstico em 10 minutos"],
  ["Tabela de sintomas", "12 a 15 problemas com causa provável, como confirmar e como resolver"],
  ["Rega certa", "teste do dedo, frequência por tipo, resgate de planta encharcada ou seca"],
  ["Luz no apartamento", "como ler a janela e onde posicionar cada planta"],
  ["Vaso e substrato", "escolha e troca de vaso, passo a passo"],
  ["Pragas e doenças", "cochonilha, ácaro, mosquinha-do-fungo e tratamentos caseiros seguros"],
  ["Fichas de plantas populares", "jiboia, zamioculca, espada-de-são-jorge, lírio-da-paz, costela-de-adão, samambaia, ficus, suculentas e mais"],
  ["Plano de resgate de 7 dias", "um roteiro diário para recuperar a planta"],
  ["Rotina mensal de cuidados", "o que fazer e quando, para não voltar ao zero"],
];

const sample = [
  ["Folha amarela, as mais velhas primeiro", "Excesso de água ou drenagem ruim", "Terra úmida por dias, vaso pesado"],
  ["Ponta marrom e seca", "Ar seco, água com muito sal ou rega irregular", "Só a ponta seca, o resto da folha firme"],
  ["Mosquinhas perto do vaso", "Mosquinha-do-fungo em substrato encharcado", "Elas sobem quando você mexe na terra"],
];

export default function Contents() {
  return (
    <section className="section bg-creme-50">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow mb-3">Por dentro do guia</p>
          <h2 className="h2">40 a 55 páginas verticais, feitas para ler no celular, com muitas fotos.</h2>
        </div>

        <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
          {chapters.map(([t, d], i) => (
            <li key={t} className="reveal flex gap-4 border-b border-dashed border-folha-800/25 py-4">
              <span className="font-display text-2xl font-semibold text-mostarda-700">{String(i + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold">{t}</h3><p className="text-muted">{d}</p></div>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 text-2xl font-semibold">Uma linha da tabela de sintomas</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-folha-800/20 bg-creme-100">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="bg-folha-100 text-folha-900">
              <tr><th className="p-3">Sintoma</th><th className="p-3">Causa provável</th><th className="p-3">Como confirmar</th></tr>
            </thead>
            <tbody>
              {sample.map((r) => (
                <tr key={r[0]} className="border-t border-folha-800/15">{r.map((c) => <td key={c} className="p-3">{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-sm text-muted">Exemplos ilustrativos; o guia traz a tabela completa e o que fazer em cada caso.</p>

        <h3 className="mt-14 text-2xl font-semibold">Prévia de páginas</h3>
        <div className="-mx-5 mt-4 flex snap-x gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
          {site.images.previews.map((src, i) => (
            <Slot key={i} src={src} alt={`Prévia da página ${i + 1} do Guia Folhagem`} label={`Prévia ${i + 1}: substitua por /images/preview-${i + 1}.jpg`}
              className="aspect-[9/16] w-[62%] shrink-0 snap-center rounded-2xl md:w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
