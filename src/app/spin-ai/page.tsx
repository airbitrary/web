import type { Metadata } from "next";
import Link from "next/link";
import { SPIN_AI, SITE } from "@/lib/constants";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FAQAccordion from "@/components/FAQAccordion";

const PAGE_TITLE =
  "Spin AI — The AI Spin the Wheel App for iPhone";
const PAGE_DESCRIPTION =
  "Spin AI is a spin the wheel app for iPhone. Make decisions, run quizzes, and study flash cards with beautiful wheels powered by on-device Apple Intelligence. Free on the App Store.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "spin the wheel app",
    "spin wheel app",
    "decision wheel app",
    "random picker app",
    "wheel of names",
    "spinner wheel",
    "quiz wheel",
    "flash card app",
    "Apple Intelligence app",
    "iPhone decision maker",
  ],
  alternates: {
    canonical: "/spin-ai",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/spin-ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  itunes: {
    appId: SPIN_AI.appId,
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

const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: SPIN_AI.name,
  description: PAGE_DESCRIPTION,
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Decision Maker",
  operatingSystem: "iOS 18.5",
  url: `${SITE.url}/spin-ai`,
  installUrl: SPIN_AI.appStoreUrl,
  downloadUrl: SPIN_AI.appStoreUrl,
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
      name: "Spin AI",
      item: `${SITE.url}/spin-ai`,
    },
  ],
};

export default function SpinAIPage() {
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
        icon="🎡"
        title={SPIN_AI.name}
        tagline={SPIN_AI.tagline}
        description={SPIN_AI.description}
        appStoreUrl={SPIN_AI.appStoreUrl}
        gradient="from-purple-950/50 via-pink-950/30 to-orange-950/50 dark:from-purple-950/50 dark:via-pink-950/30 dark:to-orange-950/50"
      />

      {/* SEO-friendly subheading */}
      <section className="px-4 pt-10 md:pt-14">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-bold md:text-3xl">
          The spin the wheel app, powered by Apple Intelligence
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-gray-400 dark:text-gray-400">
          A beautiful decision wheel, random picker, quiz builder, and flash
          card studio for iPhone — all on-device, all offline.
        </p>
      </section>

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
          { src: "/screenshots/spin-ai/1.png", alt: "Spin AI spin the wheel app for iPhone showing wheel customization" },
          { src: "/screenshots/spin-ai/2.png", alt: "Spin AI decision wheel spinning in action on iPhone" },
          { src: "/screenshots/spin-ai/3.png", alt: "Spin AI random picker result screen after a spin" },
          { src: "/screenshots/spin-ai/4.png", alt: "Spin AI wheel options, themes, and settings" },
        ]}
      />

      {/* How to use Spin AI */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-4 text-center text-3xl font-bold">
            How to use Spin AI
          </h2>
          <p className="mb-10 text-center text-gray-400 dark:text-gray-400">
            From decision wheel to quiz night to study session in seconds.
          </p>
          <ol className="space-y-4">
            {[
              {
                title: "1. Create or pick a wheel",
                body: "Build a custom wheel with your own options, generate one from any topic with on-device AI, or jump into a ready-made collection like cricket, football, or pop culture.",
              },
              {
                title: "2. Tap to spin",
                body: "Watch the beautiful animated wheel spin and reveal a fair, random result — perfect as a decision maker, random picker, or wheel of names.",
              },
              {
                title: "3. Quiz or study mode",
                body: "Switch to quiz mode for trivia nights with AI-generated questions, or open a flash card deck to study any topic on the go.",
              },
              {
                title: "4. Play offline, stay private",
                body: "Everything runs on-device with Apple Intelligence — no internet required, and none of your data leaves your iPhone.",
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
        items={SPIN_AI.faq.map((item) =>
          item.question === "Where can I download Spin AI?"
            ? {
                question: item.question,
                answer: (
                  <>
                    Spin AI is available now on the{" "}
                    <a
                      href={SPIN_AI.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 underline hover:text-purple-300"
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

      <section className="py-8 text-center">
        <div className="flex justify-center gap-6">
          <Link
            href="/spin-ai/support"
            className="text-sm text-gray-400 hover:underline dark:text-gray-400"
          >
            Support
          </Link>
          <Link
            href="/spin-ai/privacy"
            className="text-sm text-gray-400 hover:underline dark:text-gray-400"
          >
            Privacy Policy
          </Link>
        </div>
      </section>
    </>
  );
}
