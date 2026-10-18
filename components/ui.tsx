import Image from "next/image";
import type { ReactNode } from "react";

type P = { className?: string };

export const Leaf = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" /><path d="M5 19c3-5 6-8 10-10" />
  </svg>
);
export const Check = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
const icon = (d: ReactNode) =>
  function Icon({ className = "h-7 w-7" }: P) {
    return <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d}</svg>;
  };
export const Sun = icon(<><circle cx="16" cy="16" r="5" /><path d="M16 4v3M16 25v3M4 16h3M25 16h3M7.5 7.5l2 2M22.5 22.5l2 2M24.5 7.5l-2 2M9.5 22.5l-2 2" /></>);
export const Drop = icon(<path d="M16 4c5 6 8 10 8 14a8 8 0 0 1-16 0c0-4 3-8 8-14Z" />);
export const Root = icon(<><path d="M16 4v10M16 14c-3 2-6 4-6 10M16 14c3 2 6 4 6 10M16 14v14M10 28l-2 0M24 28l2 0" /></>);
export const Bug = icon(<><ellipse cx="16" cy="18" rx="6" ry="8" /><path d="M16 10V6M10 15l-5-2M22 15l5-2M10 22l-5 2M22 22l5 2M12 6l4 4 4-4" /></>);

/** Imagem real quando `src` existe; senão um placeholder claro (substitua em site.config.ts). */
export function Slot({ src, alt, label, className = "", sizes = "(min-width: 768px) 33vw, 70vw" }: { src: string | null; alt: string; label: string; className?: string; sizes?: string }) {
  if (src) return <div className={`relative overflow-hidden ${className}`}><Image src={src} alt={alt} fill sizes={sizes} className="object-cover" loading="lazy" /></div>;
  return (
    <div role="img" aria-label={alt} className={`flex items-center justify-center border-2 border-dashed border-folha-800/30 bg-creme-200 p-4 text-center text-sm font-medium text-muted ${className}`}>
      {label}
    </div>
  );
}
