import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";

export const metadata: Metadata = { title: `Obrigado | ${site.brand}`, robots: { index: false, follow: false } };

export default function Obrigado() {
  return (
    <main className="container-x max-w-2xl py-20 text-center">
      <h1 className="text-4xl font-semibold">Pronto! Seu Guia Folhagem está a caminho.</h1>
      <p className="mt-4 text-lg text-muted">Enviamos o acesso para o e-mail usado na compra. Se não chegar em alguns minutos, olhe a caixa de spam ou promoções.</p>
      <p className="mt-2 text-muted">Dúvidas? Fale com a gente: {site.legal.email}</p>
      <Link href="/" className="btn mt-8">Voltar ao início</Link>
    </main>
  );
}
