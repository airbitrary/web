import type { Metadata } from "next";
import { SPIN_AI } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Spin AI — A wheel of possibilities",
  description: SPIN_AI.description,
  alternates: {
    canonical: "/spin-ai",
  },
  openGraph: {
    title: "Spin AI — A wheel of possibilities",
    description: SPIN_AI.description,
    url: "/spin-ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spin AI — A wheel of possibilities",
    description: SPIN_AI.description,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SPIN_AI.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SpinAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero
        icon="🎡"
        title={SPIN_AI.name}
        tagline={SPIN_AI.tagline}
        description={SPIN_AI.description}
        appStoreUrl={SPIN_AI.appStoreUrl}
        gradient="from-purple-950/50 via-pink-950/30 to-orange-950/50 dark:from-purple-950/50 dark:via-pink-950/30 dark:to-orange-950/50"
      />

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">Features</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
            {SPIN_AI.features.map((f) => (
              <FeatureCard
                key={f.title}
                icon={f.icon}
                title={f.title}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>

      <ScreenshotGallery
        appName="Spin AI"
        screenshots={[
          { src: "/screenshots/spin-ai/1.png", alt: "Spin AI wheel customization screen" },
          { src: "/screenshots/spin-ai/2.png", alt: "Spin AI spinning wheel in action" },
          { src: "/screenshots/spin-ai/3.png", alt: "Spin AI result screen after spin" },
          { src: "/screenshots/spin-ai/4.png", alt: "Spin AI wheel options and settings" },
        ]}
      />

      <FAQAccordion items={SPIN_AI.faq} />
    </>
  );
}
