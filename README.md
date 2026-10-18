# Folhagem — Landing page do Guia Folhagem

Next.js 15 (App Router) + TypeScript + Tailwind 3. Todas as páginas são estáticas (SSG).

## Direção visual (resumo)
- **Conceito: "ficha de triagem"**. O pronto-socorro das plantas vira linguagem visual: papel creme, linhas tracejadas de prontuário, etiquetas de sintoma, mockup do e-book como uma ficha (CSS puro, sem imagem, LCP leve).
- **Paleta:** verde-folha profundo `#13291D`, creme quente `#F6F0E2`, mostarda `#E0A526` como acento (a folha amarelada, o problema; também o CTA). Contraste AA.
- **Fontes:** Fraunces (títulos, serifada com personalidade) + Figtree (texto), via `next/font`, `swap`.
- **Estrutura:** hero → dor ("a culpa nunca foi sua") → Método dos 4 Sinais (seção escura) → benefícios → por dentro do guia (sumário, linha da tabela de sintomas, prévias) → bônus → para quem é/não é → revisor → provas (oculta) → oferta + garantia → FAQ → CTA final → rodapé. CTA fixo só no mobile.
- Evitado: verde-limão, sombras pesadas, cards dentro de cards, escassez falsa.
- Observação honesta: a direção foi definida com base no meu conhecimento de tendências; não rodei pesquisa ao vivo de referências.

## Rodar
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Editar sem mexer em componentes
Tudo em [`site.config.ts`](site.config.ts): preço, parcelamento, 3 headlines (`headline: 0|1|2`), bônus, flags (`showTestimonials`, `showBonusValues`, `showReviewer`), depoimentos, imagens, dados legais. IDs e links vêm de variáveis de ambiente (`.env.example`).

## Deploy na Vercel
1. Suba a pasta para um repositório no GitHub.
2. Vercel → *Add New Project* → importe o repositório (framework Next.js detectado).
3. *Settings → Environment Variables*: preencha as variáveis do `.env.example` (pelo menos `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_CHECKOUT_URL`).
4. *Deploy*. Depois, *Settings → Domains* para o domínio final e atualize `NEXT_PUBLIC_SITE_URL`.
Variáveis `NEXT_PUBLIC_*` são embutidas no build: após alterá-las, faça redeploy.

## O que falta preencher
| Item | Onde |
|---|---|
| `[LINK_CHECKOUT]` | `NEXT_PUBLIC_CHECKOUT_URL` |
| `[PIXEL_ID]` | `NEXT_PUBLIC_META_PIXEL_ID` (vazio = tudo desligado, inclusive o banner) |
| `[NOME DO REVISOR]`, `[REGISTRO CREA]`, `[MINIBIO]` | `NEXT_PUBLIC_REVIEWER_*` |
| `[CNPJ]`, `[WHATSAPP]`, e-mail de contato | `NEXT_PUBLIC_CNPJ`, `_WHATSAPP` (só dígitos), `_CONTACT_EMAIL` |
| Domínio final | `NEXT_PUBLIC_SITE_URL` |
| Imagens reais (prévias, foto do revisor) | `public/images/` + `images` em `site.config.ts` |
| Depoimentos reais | `testimonials` + `flags.showTestimonials = true` |
| Valores dos bônus (só se reais) | `bonuses[].value` + `flags.showBonusValues = true` |
| Parcelamento (se o checkout oferecer) | `price.installments` |

## Checklist de pré-publicação
- [ ] Registro/domínio da marca "Folhagem" verificados (INPI e registro.br).
- [ ] Checkout testado de ponta a ponta (compra de teste, e-mail de entrega, reembolso em 7 dias).
- [ ] Order bump (Calendário R$ 9,90) configurado **no checkout**, não na LP.
- [ ] Página `/obrigado` configurada como URL de pós-compra no checkout.
- [ ] Textos de `/politica-de-privacidade` e `/termos-de-uso` revisados por advogado (hoje são texto-modelo).
- [ ] Todos os `[PLACEHOLDERS]` sumiram da página (busque por `[` no site publicado).
- [ ] Pixel: com `NEXT_PUBLIC_META_PIXEL_ID`, aceite o banner e confira `PageView`, `ViewContent` e `InitiateCheckout` no Meta Events Manager; sem aceite, nada dispara.
- [ ] Conversions API: configurar no servidor/checkout usando o mesmo `eventID` para deduplicar (o evento do navegador já envia `eventID`).
- [ ] UTMs: abra a LP com `?utm_source=teste` e confirme que chegam ao checkout.
- [ ] Teste em celular real (iOS e Android) e nas larguras 360, 390, 768 e 1280.
- [ ] Prévias do e-book e foto do revisor trocadas; anúncios Meta sem antes/depois sensacionalista.
- [ ] Rode o Lighthouse mobile no domínio final.

## Lighthouse mobile (build de produção local, Lighthouse 12)
| Performance | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|
| 97 | 100 | 100 | 100 |

LCP 2,4 s · CLS 0 · TBT ~60-90 ms. Medido em `next start` local; refaça no domínio final (a Vercel serve com CDN e costuma melhorar o LCP).
