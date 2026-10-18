import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/site.config";

export const metadata: Metadata = { title: `Política de Privacidade | ${site.brand}`, alternates: { canonical: "/politica-de-privacidade" } };

export default function Privacidade() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>{site.brand} respeita a sua privacidade e trata dados pessoais conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
      <h2>Quais dados coletamos</h2>
      <ul>
        <li>Dados de navegação (páginas visitadas, dispositivo, origem do acesso), por cookies e pixels, somente após o seu consentimento.</li>
        <li>Dados de compra (nome, e-mail, pagamento), coletados e processados pela plataforma de checkout, não por este site.</li>
        <li>Dados que você nos enviar voluntariamente ao pedir suporte.</li>
      </ul>
      <h2>Para que usamos</h2>
      <p>Entregar o produto, prestar suporte, cumprir obrigações legais e medir e melhorar nossos anúncios e a página.</p>
      <h2>Cookies e pixels</h2>
      <p>Usamos Meta Pixel e, opcionalmente, Google Analytics. Eles só são carregados se você clicar em “Aceitar” no aviso de cookies. Você pode recusar e continuar navegando normalmente.</p>
      <h2>Compartilhamento</h2>
      <p>Compartilhamos dados apenas com a plataforma de pagamento, provedores de hospedagem e ferramentas de medição, na medida necessária. Não vendemos seus dados.</p>
      <h2>Seus direitos</h2>
      <p>Você pode pedir acesso, correção, exclusão ou portabilidade dos seus dados e revogar o consentimento a qualquer momento pelo canal de suporte da plataforma de pagamento em que você comprou (o mesmo indicado no e-mail de acesso ao produto).</p>
      <h2>Contato</h2>
      <p>Use o canal de suporte da plataforma de pagamento indicado no seu e-mail de compra.</p>
    </LegalPage>
  );
}
