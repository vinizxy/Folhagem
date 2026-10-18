import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="container-x max-w-3xl py-12">
      <Link href="/" className="font-semibold text-folha-800 underline underline-offset-4">← Voltar</Link>
      <p role="note" className="mt-6 rounded-xl border-2 border-mostarda-500 bg-mostarda-400/20 p-4 text-sm font-semibold text-folha-900">
        Texto-modelo. Revisar com advogado antes de publicar.
      </p>
      <h1 className="mt-6 text-4xl font-semibold">{title}</h1>
      <div className="mt-6 space-y-4 text-lg [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_ul]:list-disc [&_ul]:pl-6">{children}</div>
    </main>
  );
}
