import type { Metadata } from "next";
import { SPIN_AI } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Spin AI — A wheel of possibilities",
  description: SPIN_AI.description,
  openGraph: {
    title: "Spin AI — A wheel of possibilities",
    description: SPIN_AI.description,
  },
};

export default function SpinAIPage() {
  return (
    <>
      <Hero
        icon="🎡"
        title={SPIN_AI.name}
        tagline={SPIN_AI.tagline}
        description={SPIN_AI.description}
        appStoreUrl={SPIN_AI.appStoreUrl}
        gradient="from-violet-50 to-purple-100 dark:from-violet-950/30 dark:to-purple-950/30"
      />

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <ScreenshotGallery appName="Spin AI" />

      <FAQAccordion items={SPIN_AI.faq} />
    </>
  );
}
