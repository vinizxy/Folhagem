"use client";
import Script from "next/script";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/site.config";

const KEY = "folhagem-consent";
type State = "unknown" | "yes" | "no";

/** Banner LGPD + carregamento de Pixel/GA4 somente após aceite. Sem IDs configurados, não renderiza nada. */
export default function Analytics() {
  const { metaPixelId: px, gaId: ga } = site.tracking;
  const [consent, setConsent] = useState<State>("no"); // "no" no SSR evita flash do banner
  useEffect(() => {
    try { setConsent((localStorage.getItem(KEY) as State) ?? "unknown"); } catch { setConsent("unknown"); }
  }, []);
  if (!px && !ga) return null;

  const choose = (v: State) => {
    try { localStorage.setItem(KEY, v); } catch {}
    setConsent(v);
  };

  return (
    <>
      {consent === "yes" && px && (
        <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${px}');fbq('track','PageView');fbq('track','ViewContent',{content_name:${JSON.stringify(site.product)},value:${site.price.now},currency:'BRL'});`}</Script>
      )}
      {consent === "yes" && ga && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga}');`}</Script>
        </>
      )}
      {consent === "unknown" && (
        <div role="dialog" aria-label="Cookies" className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-xl rounded-2xl border-2 border-folha-900 bg-creme-50 p-4 shadow-lg">
          <p className="text-sm">
            Usamos cookies de medição e anúncios (Meta/Google) para entender o que funciona. Você decide.{" "}
            <Link href="/politica-de-privacidade" className="font-semibold underline">Saiba mais</Link>.
          </p>
          <div className="mt-3 flex gap-3">
            <button onClick={() => choose("yes")} className="btn !min-h-[44px] !px-5 !py-2 text-sm">Aceitar</button>
            <button onClick={() => choose("no")} className="min-h-[44px] rounded-full border-2 border-folha-900 px-5 text-sm font-bold text-folha-900">Recusar</button>
          </div>
        </div>
      )}
    </>
  );
}
