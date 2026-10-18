import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/site.config";

export const metadata: Metadata = { title: `Termos de Uso | ${site.brand}`, alternates: { canonical: "/termos-de-uso" } };

export default function Termos() {
  return (
    <LegalPage title="Termos de Uso">
      <p>Ao usar este site e adquirir o {site.product}, você concorda com estes termos. O produto é oferecido por {site.brand}.</p>
      <h2>Produto</h2>
      <p>E-book digital em PDF, de caráter informativo. Não substitui a avaliação presencial de um profissional. Os resultados variam conforme a espécie, o ambiente e os cuidados de cada pessoa, e não há garantia de recuperação de qualquer planta.</p>
      <h2>Entrega</h2>
      <p>O acesso é enviado por e-mail após a confirmação do pagamento pela plataforma de checkout.</p>
      <h2>Garantia e reembolso</h2>
      <p>Você pode pedir o reembolso integral em até {site.guaranteeDays} dias corridos após a compra, conforme o art. 49 do Código de Defesa do Consumidor, pela plataforma de checkout em que a compra foi feita.</p>
      <h2>Propriedade intelectual</h2>
      <p>O conteúdo é protegido por direitos autorais. A licença é pessoal e intransferível; é proibido copiar, revender ou compartilhar o material.</p>
      <h2>Alterações e foro</h2>
      <p>Estes termos podem ser atualizados a qualquer momento. Fica eleito o foro do domicílio do consumidor.</p>
    </LegalPage>
  );
}
