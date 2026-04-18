import type { Metadata } from "next";
import { IMPOSTER_AI } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Imposter AI — Who's bluffing?",
  description: IMPOSTER_AI.description,
  openGraph: {
    title: "Imposter AI — Who's bluffing?",
    description: IMPOSTER_AI.description,
  },
};

export default function ImposterAIPage() {
  return (
    <>
      <Hero
        icon="🔍"
        title={IMPOSTER_AI.name}
        tagline={IMPOSTER_AI.tagline}
        description={IMPOSTER_AI.description}
        appStoreUrl={IMPOSTER_AI.appStoreUrl}
        gradient="from-sky-50 to-blue-100 dark:from-sky-950/30 dark:to-blue-950/30"
      />

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">Features</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMPOSTER_AI.features.map((f) => (
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

      {/* AI Agents */}
      <section className="bg-gray-50 py-16 md:py-20 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Meet the AI Agents
          </h2>
          <p className="mb-10 text-center text-gray-600 dark:text-gray-400">
            10 unique characters, each with their own personality and
            clue-giving style
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {IMPOSTER_AI.agents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-900"
              >
                <span className="text-4xl">{agent.emoji}</span>
                <h3 className="mt-2 text-sm font-semibold">{agent.name}</h3>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {agent.personality}
                </p>
                {agent.free && (
                  <span className="mt-2 inline-block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Free
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">
            13 Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {IMPOSTER_AI.categories.map((cat) => (
              <span
                key={cat.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-gray-900"
              >
                <span>{cat.emoji}</span>
                {cat.name}
                {cat.free && (
                  <span className="ml-1 rounded-full bg-green-100 px-1.5 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    FREE
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ScreenshotGallery appName="Imposter AI" />

      <FAQAccordion items={IMPOSTER_AI.faq} />
    </>
  );
}
