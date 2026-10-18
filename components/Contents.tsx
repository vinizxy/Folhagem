const chapters = [
  ["Método dos 4 Sinais", "luz, água, raiz e praga: diagnóstico em 10 minutos"],
  ["Tabela de sintomas", "12 a 15 problemas: causa, como confirmar e como resolver"],
  ["Rega certa", "teste do dedo e resgate de planta encharcada ou seca"],
  ["Luz no apartamento", "como ler a janela e onde colocar cada planta"],
  ["Vaso e substrato", "escolha e troca de vaso, passo a passo"],
  ["Pragas e doenças", "cochonilha, ácaro, mosquinha-do-fungo e tratamentos caseiros seguros"],
  ["Fichas de plantas populares", "jiboia, zamioculca, espada-de-são-jorge, lírio-da-paz, samambaia, ficus, suculentas e mais"],
  ["Plano de resgate de 7 dias e rotina mensal", "o que fazer a cada dia e depois, todo mês"],
];

export default function Contents() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow mb-3">Por dentro do guia</p>
          <h2 className="h2">40 a 55 páginas verticais, feitas para ler no celular, com muitas fotos.</h2>
        </div>
        <ol className="mt-10 grid gap-x-12 md:grid-cols-2">
          {chapters.map(([t, d], i) => (
            <li key={t} className="reveal flex gap-4 border-b border-dashed border-folha-800/25 py-3 sm:py-4">
              <span className="font-display text-2xl font-semibold text-folha-600">{String(i + 1).padStart(2, "0")}</span>
              <div><h3 className="text-lg font-semibold">{t}</h3><p className="hidden text-muted sm:block">{d}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
