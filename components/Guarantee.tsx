import { site } from "@/site.config";

export default function Guarantee() {
  return (
    <div className="mt-7 flex items-center gap-4 border-t border-dashed border-folha-800/25 pt-6">
      <div aria-hidden="true" className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-full border-4 border-double border-mostarda-500 bg-mostarda-400/20 text-folha-900">
        <span className="font-display text-3xl font-semibold leading-none">{site.guaranteeDays}</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">dias</span>
      </div>
      <p className="text-sm text-muted">
        <strong className="text-folha-900">Garantia incondicional de {site.guaranteeDays} dias.</strong> Se o guia não for para você, peça o reembolso dentro desse prazo,
        sem perguntas, conforme o direito de arrependimento do Código de Defesa do Consumidor.
      </p>
    </div>
  );
}
