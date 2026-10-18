// Disparo de eventos. Só funciona depois do consentimento (os scripts só são carregados após aceite).
type W = Window & { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void };

export function track(name: string, data: Record<string, unknown> = {}) {
  const w = window as W;
  // eventID permite deduplicar com a Conversions API (envie o mesmo ID pelo servidor).
  const eventID = `${name}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  w.fbq?.("track", name, data, { eventID });
  w.gtag?.("event", name, data);
}

/** Repassa UTMs e IDs de clique da LP para o checkout. */
export function withUtm(url: string): string {
  try {
    const u = new URL(url);
    new URLSearchParams(window.location.search).forEach((v, k) => {
      if (/^(utm_|fbclid$|src$|sck$)/.test(k)) u.searchParams.set(k, v);
    });
    return u.toString();
  } catch {
    return url;
  }
}
