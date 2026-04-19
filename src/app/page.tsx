import Link from "next/link";
import { SITE, SPIN_AI, IMPOSTER_AI } from "@/lib/constants";
import AppStoreButton from "@/components/AppStoreButton";

export const metadata = {
  title: "Airbitrary — AI-powered apps that make life playful",
  description:
    "Airbitrary builds delightful iOS apps powered by Apple Intelligence. Discover Spin AI and Imposter AI.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Airbitrary",
  url: "https://airbitrary.com",
  description:
    "Airbitrary builds delightful iOS apps powered by Apple Intelligence.",
  email: "support@airbitrary.com",
};

const apps = [
  {
    ...SPIN_AI,
    icon: "🎡",
    href: "/spin-ai",
    gradient:
      "from-purple-700 via-pink-700 to-orange-600 dark:from-purple-700 dark:via-pink-700 dark:to-orange-600",
    cardBg:
      "from-purple-950/40 via-pink-950/40 to-orange-950/40 dark:from-purple-950/40 dark:via-pink-950/40 dark:to-orange-950/40",
    borderColor: "border-purple-800 dark:border-purple-800",
    hoverShadow: "hover:shadow-purple-800/30 dark:hover:shadow-purple-800/30",
  },
  {
    ...IMPOSTER_AI,
    icon: "🕵️",
    href: "/imposter-ai",
    gradient:
      "from-blue-700 via-cyan-700 to-teal-600 dark:from-blue-700 dark:via-cyan-700 dark:to-teal-600",
    cardBg:
      "from-blue-950/40 via-cyan-950/40 to-teal-950/40 dark:from-blue-950/40 dark:via-cyan-950/40 dark:to-teal-950/40",
    borderColor: "border-blue-800 dark:border-blue-800",
    hoverShadow: "hover:shadow-blue-800/30 dark:hover:shadow-blue-800/30",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950/50 via-purple-950/30 to-pink-950/50 py-24 md:py-32 dark:from-indigo-950/50 dark:via-purple-950/30 dark:to-pink-950/50">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-purple-700/20 blur-3xl animate-pulse-glow dark:bg-purple-700/20" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-pink-700/20 blur-3xl animate-pulse-glow dark:bg-pink-700/20" style={{ animationDelay: "1.5s" }} />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-700/10 blur-3xl animate-pulse-glow dark:bg-orange-700/10" style={{ animationDelay: "0.8s" }} />

        <div className="relative mx-auto max-w-4xl px-4 text-center">
          {/* Floating emojis */}
          <div className="mb-6 flex justify-center gap-3 md:gap-4 text-3xl md:text-5xl">
            <span className="animate-float" style={{ animationDelay: "0s" }}>🎡</span>
            <span className="animate-float" style={{ animationDelay: "0.5s" }}>🎮</span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>🧠</span>
            <span className="animate-float" style={{ animationDelay: "1.5s" }}>🕵️</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
            <span className="fun-gradient-text">AI</span>bitrary
          </h1>
          <p className="mt-2 text-sm font-medium tracking-wider uppercase text-purple-400 dark:text-purple-400">
            Making the Arbitrary Intelligent
          </p>
          <p className="mt-5 text-xl font-medium text-gray-200 md:text-2xl dark:text-gray-200">
            {SITE.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400 dark:text-gray-400">
            We build delightful iOS apps powered by Apple Intelligence. Every
            app stays on-device, respects your privacy, and turns the ordinary
            into something playful.
          </p>
        </div>
      </section>

      {/* App Cards */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-500 uppercase tracking-widest dark:text-gray-500">
            Our Apps
          </h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {apps.map((app) => (
              <div
                key={app.href}
                className={`group relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br ${app.cardBg} border-2 ${app.borderColor} p-5 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${app.hoverShadow}`}
              >
                {/* Invisible overlay link for card click */}
                <Link href={app.href} className="absolute inset-0 z-0" aria-label={`Learn more about ${app.name}`} />

                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r ${app.gradient}`} />

                <span className="inline-block text-5xl md:text-6xl animate-wiggle">{app.icon}</span>
                <h2 className="mt-4 text-2xl font-extrabold">
                  {app.name}
                </h2>
                <p className="mt-1 text-sm font-semibold bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent dark:from-gray-400 dark:to-gray-500">
                  {app.tagline}
                </p>
                <p className="mt-4 text-sm text-gray-400 dark:text-gray-400">
                  {app.description}
                </p>
                <div className="relative z-10 mt-6 flex items-center gap-3">
                  <AppStoreButton href={app.appStoreUrl} />
                  <span className="text-sm font-medium text-gray-400 transition group-hover:translate-x-1 group-hover:text-gray-300 dark:group-hover:text-gray-300">
                    Learn more →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
