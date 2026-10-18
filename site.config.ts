/**
 * CONFIG CENTRAL — edite aqui (ou via variáveis de ambiente) sem mexer nos componentes.
 * Itens em [COLCHETES] são placeholders que você precisa preencher antes de publicar.
 */

export const site = {
  brand: "Folhagem",
  product: "Guia Folhagem — Diagnóstico de Plantas",
  tagline: "O pronto-socorro das suas plantas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt-BR",

  // Checkout externo (Kiwify/Hotmart/Eduzz). Enquanto não for um link http(s), o CTA rola até a oferta.
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || "[LINK_CHECKOUT]",

  price: {
    from: 67,
    now: 27.9,
    // Ex.: { n: 3, value: 9.9 } se o checkout oferecer parcelamento. null = não exibe.
    installments: null as null | { n: number; value: number },
  },
  guaranteeDays: 7,

  // 3 opções de headline para teste A/B. `headline` define a ativa (índice).
  headlines: [
    "Sua planta está definhando e você não sabe por quê? Descubra a causa e o que fazer para salvá‑la, em 10 minutos.",
    "Chega de ver sua planta sofrer e achar que a culpa é sua. Descubra o que ela precisa, em 10 minutos.",
    "Folha amarela, ponta seca, planta murchando? Descubra a causa antes que ela piore.",
  ],
  headline: 0,
  subheadline:
    "Em vez de testar rega, adubo e vaso no escuro, você segue um diagnóstico simples: sintoma, causa provável e o que fazer. Sem jargão, sem julgamento, direto no celular.",

  // Flags de seções
  flags: {
    showTestimonials: false, // só ative com depoimentos REAIS preenchidos abaixo
    showBonusValues: false, // só ative se os valores forem reais e coerentes com o preço de tabela
    showReviewer: false,
  },

  testimonials: [] as { name: string; city?: string; text: string }[],

  bonuses: [
    { title: "Checklist de rega por tipo de planta", desc: "Quanto e quando regar: folhosas, suculentas, samambaias e outras.", value: 19.9 },
    { title: "Receitas de substrato prontas", desc: "Misturas simples com ingredientes fáceis de achar, para cada tipo de planta.", value: 17.9 },
    { title: "Guia visual de pragas", desc: "Compare com as fotos, identifique a praga e veja o tratamento caseiro seguro.", value: 14.9 },
  ],

  reviewer: {
    name: process.env.NEXT_PUBLIC_REVIEWER_NAME || "[NOME DO REVISOR]",
    crea: process.env.NEXT_PUBLIC_REVIEWER_CREA || "[REGISTRO CREA]",
    bio: process.env.NEXT_PUBLIC_REVIEWER_BIO || "[MINIBIO]",
  },

  // Imagens reais: coloque em /public/images e informe o caminho. null = mostra placeholder.
  images: {
    hero: { src: "/images/lia-sacada.webp", w: 819, h: 1024 },
    guia: { src: "/images/lia-jardim.webp", w: 825, h: 1024 },
    final: { src: "/images/lia-cozinha.webp", w: 928, h: 1152 },
    leaf: { src: "/images/guia-folhagem.webp", w: 1122, h: 1402 },
    reviewer: null as string | null,
  },

  // Personagem da marca (ilustrada com IA). NÃO é uma pessoa real nem uma profissional registrada.
  persona: { name: "Lia", role: "a guia do Folhagem" },

  legal: {
    cnpj: process.env.NEXT_PUBLIC_CNPJ || "[CNPJ]",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "trilha.lab1@gmail.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "5511941186232",
  },

  tracking: {
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
  },
};

export const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
export const isUrl = (s: string) => /^https?:\/\//.test(s);
