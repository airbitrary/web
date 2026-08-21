import type { Metadata } from "next";
import Link from "next/link";
import { IMPOSTER_AI, SITE } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FAQAccordion from "@/components/FAQAccordion";

const PAGE_TITLE =
  "Imposter AI — The AI-Powered Imposter Party Game for iPhone";
const PAGE_DESCRIPTION =
  "Play Imposter AI with friends near or far using Game Center remote play. Find the bluffer with on-device AI agents and 13 word categories.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "imposter game",
    "imposter party game",
    "imposter game app",
    "imposter game iPhone",
    "social deduction game",
    "bluffing party game",
    "Apple Intelligence game",
    "party game for iPhone",
    "Game Center multiplayer game",
    "remote party game",
    "Spyfall alternative",
    "Among Us party game",
  ],
  alternates: {
    canonical: "/imposter-ai",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/imposter-ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  itunes: {
    appId: IMPOSTER_AI.appId,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: IMPOSTER_AI.faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: IMPOSTER_AI.name,
  description: PAGE_DESCRIPTION,
  applicationCategory: "GameApplication",
  applicationSubCategory: "Party Game",
  operatingSystem: "iOS 26.0",
  url: `${SITE.url}/imposter-ai`,
  installUrl: IMPOSTER_AI.appStoreUrl,
  downloadUrl: IMPOSTER_AI.appStoreUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Imposter AI",
      item: `${SITE.url}/imposter-ai`,
    },
  ],
};

export default function ImposterAIPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Hero
        icon="🕵️"
        imageSrc="/imposter-ai-icon.png"
        imageAlt="Imposter AI app icon"
        title={IMPOSTER_AI.name}
        tagline={IMPOSTER_AI.tagline}
        description={IMPOSTER_AI.description}
        appStoreUrl={IMPOSTER_AI.appStoreUrl}
        gradient="from-blue-950/50 via-cyan-950/30 to-teal-950/50 dark:from-blue-950/50 dark:via-cyan-950/30 dark:to-teal-950/50"
      />

      {/* SEO-friendly subheading */}
      <section className="px-4 pt-10 md:pt-14">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold md:text-3xl">
          The imposter party game, powered by Apple Intelligence
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400 dark:text-gray-400">
          Gather around one iPhone or invite friends remotely through Game
          Center. Find the bluffer, defend your suspicious clue, and let
          on-device AI agents fill any empty seats.
        </p>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-bold">Features</h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3">
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
      <section className="bg-gray-900/50 py-16 md:py-20 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Meet the AI Agents
          </h2>
          <p className="mb-10 text-center text-gray-400 dark:text-gray-400">
            10 unique characters, each with their own personality and
            clue-giving style
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {IMPOSTER_AI.agents.map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl md:rounded-2xl border border-gray-700 bg-gray-900 p-3 md:p-5 text-center dark:border-gray-700 dark:bg-gray-900"
              >
                <span className="text-3xl md:text-4xl">{agent.emoji}</span>
                <h3 className="mt-1 md:mt-2 text-xs md:text-sm font-semibold">{agent.name}</h3>
                <p className="mt-0.5 md:mt-1 text-[11px] md:text-xs text-gray-400 dark:text-gray-400">
                  {agent.personality}
                </p>
                {agent.free && (
                  <span className="mt-2 inline-block rounded-full bg-green-900/30 px-2 py-0.5 text-xs font-medium text-green-400 dark:bg-green-900/30 dark:text-green-400">
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
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-900 px-4 py-2 text-sm font-medium dark:border-gray-700 dark:bg-gray-900"
              >
                <span>{cat.emoji}</span>
                {cat.name}
                {cat.free && (
                  <span className="ml-1 rounded-full bg-green-900/30 px-1.5 py-0.5 text-[10px] font-semibold text-green-400 dark:bg-green-900/30 dark:text-green-400">
                    FREE
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <ScreenshotGallery
        appName="Imposter AI"
        total={5}
        screenshots={[
          { src: "/screenshots/imposter-ai/1.png", alt: "Imposter AI imposter party game setup on iPhone with player names, category selection, and AI agent" },
          { src: "/screenshots/imposter-ai/2.png", alt: "Secret word reveal screen in the Imposter AI iPhone game showing 'Neurologist' with Wikipedia definition" },
          { src: "/screenshots/imposter-ai/3.png", alt: "AI Agent Quacksworth reading the secret word before the imposter game discussion begins" },
          { src: "/screenshots/imposter-ai/4.png", alt: "Imposter AI game results screen revealing the imposter with New Game and Play Again options" },
          { src: "/screenshots/imposter-ai/5.png", alt: "Imposter AI game setup screen with human and AI players, multiple categories, hint controls, and imposter count" },
        ]}
      />

      {/* How to play the imposter game */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            How to play the imposter game
          </h2>
          <p className="mb-10 text-center text-gray-400 dark:text-gray-400">
            One room or many time zones. The clues stay short and the
            accusations get loud.
          </p>
          <ol className="space-y-4">
            {[
              {
                title: "1. Pick a category and players",
                body: "Choose from 13 categories, then add local players, invite remote friends through Game Center, or let AI agents join the chaos — 3 players minimum.",
              },
              {
                title: "2. Reveal the secret word",
                body: "Everyone except the imposter sees the secret word. The imposter sees only a hint that they're bluffing this round.",
              },
              {
                title: "3. Take turns giving one-word clues",
                body: "Each player (and AI agent) gives a single-word clue describing the secret word. Too obvious and the imposter guesses it; too vague and you look suspicious.",
              },
              {
                title: "4. Discuss, vote, and reveal",
                body: "Talk it out, then vote on who you think is the imposter. Find them to win the round — or bluff your way to victory if you're the imposter.",
              },
            ].map((step) => (
              <li
                key={step.title}
                className="rounded-xl border border-gray-700 bg-gray-900 p-5 dark:border-gray-700 dark:bg-gray-900"
              >
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm text-gray-400 dark:text-gray-400">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQAccordion
        items={IMPOSTER_AI.faq.map((item) =>
          item.question === "Where can I download Imposter AI?"
            ? {
                question: item.question,
                answer: (
                  <>
                    Imposter AI is available now on the{" "}
                    <a
                      href={IMPOSTER_AI.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300"
                    >
                      App Store
                    </a>
                    . Download it to get started!
                  </>
                ),
              }
            : item,
        )}
      />

      {/* Weekly giveaway */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="rounded-2xl border border-gray-700 bg-gradient-to-r from-purple-950/40 via-pink-950/30 to-orange-950/40 p-8 text-center dark:border-gray-700">
            <span className="text-4xl">🎁</span>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Win free Premium every week
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-400 dark:text-gray-400">
              Follow us on Instagram and enter our free weekly draw for a chance
              to unlock all categories and AI agents.
            </p>
            <Link
              href="/imposter-ai/draws"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <span>📸</span>
              Enter the weekly giveaway
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 text-center">
        <div className="flex justify-center gap-6">
          <Link
            href="/imposter-ai/support"
            className="text-sm text-gray-400 hover:underline dark:text-gray-400"
          >
            Support
          </Link>
          <Link
            href="/imposter-ai/draws"
            className="text-sm text-gray-400 hover:underline dark:text-gray-400"
          >
            Giveaway
          </Link>
          <Link
            href="/imposter-ai/privacy"
            className="text-sm text-gray-400 hover:underline dark:text-gray-400"
          >
            Privacy Policy
          </Link>
        </div>
      </section>
    </>
  );
}
