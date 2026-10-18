import CTA from "./CTA";

export default function FinalCTA() {
  return (
    <section className="section on-dark bg-folha-900 text-center">
      <div className="container-x reveal max-w-2xl">
        <h2 className="h2 !text-creme-50">Daqui a uma semana, você pode estar olhando para uma folha nova, e não para outra amarelada.</h2>
        <p className="mt-4 text-lg text-creme-200">Os resultados variam com cada planta, mas você deixa de agir no escuro: em 10 minutos sabe o que olhar, o que fazer e em que ordem. E se não ajudar, são 7 dias de garantia.</p>
        <div className="mt-8"><CTA>Quero salvar minhas plantas</CTA></div>
      </div>
    </section>
  );
}
