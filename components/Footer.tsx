import Link from "next/link";
import { site } from "@/site.config";

export default function Footer() {
  return (
    <footer className="bg-creme-200 pb-28 pt-12 text-sm text-muted">
      <div className="container-x space-y-4">
        <p className="font-display text-xl font-semibold text-folha-900">{site.brand}</p>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-6 gap-y-2 font-medium text-folha-900">
          <Link href="/politica-de-privacidade" className="inline-flex min-h-[44px] items-center underline underline-offset-4">Política de Privacidade</Link>
          <Link href="/termos-de-uso" className="inline-flex min-h-[44px] items-center underline underline-offset-4">Termos de Uso</Link>
        </nav>
        <p>
          Este site não é afiliado ao Facebook, ao Instagram nem à Meta Platforms, Inc. Facebook e Instagram são marcas registradas de seus respectivos proprietários.
        </p>
        <p>
          Os resultados dependem da espécie, do ambiente e dos cuidados de cada pessoa; o guia é um material informativo e não garante a recuperação de toda planta.
        </p>
        <p>© {new Date().getFullYear()} {site.brand}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
