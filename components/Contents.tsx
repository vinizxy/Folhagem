const chapters = [
  ["Método dos 4 Sinais", "luz, água, raiz e praga: diagnóstico em 10 minutos"],
  ["Tabela de sintomas", "15 sintomas: causa provável, como confirmar e como resolver"],
  ["Rega certa", "teste do dedo e resgate de planta encharcada ou seca"],
  ["Luz no apartamento", "como ler a janela e onde colocar cada planta"],
  ["Vaso e substrato", "escolha e troca de vaso, passo a passo"],
  ["Pragas e doenças", "cochonilha, ácaro, mosquinha-do-fungo e tratamentos caseiros seguros"],
  ["Fichas de 14 plantas populares", "jiboia, zamioculca, espada-de-são-jorge, lírio-da-paz, samambaia, ficus, suculentas e mais, com aviso de toxicidade para pets"],
  ["Plano de resgate de 7 dias e rotina mensal", "o que fazer a cada dia e depois, todo mês"],
];

export default function Contents() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <h2 className="h2">58 páginas verticais, feitas para ler no celular, com muitas fotos.</h2>
        </div>
        <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
          {chapters.map(([t, d]) => (
            <li key={t} className="reveal flex gap-3 border-b border-dashed border-folha-800/25 py-3 sm:py-4">
              <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-mostarda-400" />
              <div><h3 className="text-lg font-semibold">{t}</h3><p className="hidden text-muted sm:block">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
