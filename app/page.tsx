import Contents from "@/components/Contents";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Method from "@/components/Method";
import Offer from "@/components/Offer";
import PainPoints from "@/components/PainPoints";
import StickyCTA from "@/components/StickyCTA";
import SymptomPicker from "@/components/SymptomPicker";
import Testimonials from "@/components/Testimonials";
import { faqs } from "@/components/faq-data";
import { site } from "@/site.config";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: site.product,
    description: "E-book em PDF de diagnóstico de plantas de interior.",
    brand: { "@type": "Brand", name: site.brand },
    offers: {
      "@type": "Offer",
      price: site.price.now.toFixed(2),
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
      url: site.url,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <PainPoints />
        <SymptomPicker />
        <Method />
        <Contents />
        <Guide />
        <Testimonials />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
    </>
  );
}
