"use client";
import type { MouseEvent, ReactNode } from "react";
import { isUrl, site } from "@/site.config";
import { track, withUtm } from "@/lib/track";

/** Botão de compra: dispara InitiateCheckout, repassa UTMs e vai para o checkout. */
export default function CTA({ children, className = "btn" }: { children: ReactNode; className?: string }) {
  const live = isUrl(site.checkoutUrl);
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track("InitiateCheckout", { content_name: site.product, value: site.price.now, currency: "BRL" });
    if (live) e.currentTarget.href = withUtm(site.checkoutUrl);
  };
  return (
    <a href={live ? site.checkoutUrl : "#oferta"} onClick={onClick} className={className} {...(live ? { rel: "noopener" } : {})}>
      {children}
    </a>
  );
}
