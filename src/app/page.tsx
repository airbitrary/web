import Link from "next/link";
import { SITE, SPIN_AI, IMPOSTER_AI } from "@/lib/constants";
import AppStoreButton from "@/components/AppStoreButton";

const apps = [
  {
    ...SPIN_AI,
    icon: "🎡",
    href: "/spin-ai",
    gradient:
      "from-violet-50 to-purple-100 dark:from-violet-950/30 dark:to-purple-950/30",
  },
  {
    ...IMPOSTER_AI,
    icon: "🔍",
    href: "/imposter-ai",
    gradient:
      "from-sky-50 to-blue-100 dark:from-sky-950/30 dark:to-blue-950/30",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-28 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-4 text-lg text-gray-600 md:text-xl dark:text-gray-300">
            {SITE.tagline}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-gray-500 dark:text-gray-400">
            We build delightful iOS apps powered by Apple Intelligence. Every
            app stays on-device, respects your privacy, and turns the ordinary
            into something playful.
          </p>
        </div>
      </section>

      {/* App Cards */}
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          {apps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className={`group rounded-3xl bg-gradient-to-br ${app.gradient} border border-gray-200 p-8 transition hover:shadow-xl dark:border-gray-700`}
            >
              <span className="text-5xl">{app.icon}</span>
              <h2 className="mt-4 text-2xl font-bold group-hover:underline">
                {app.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                {app.tagline}
              </p>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                {app.description}
              </p>
              <div className="mt-6">
                <AppStoreButton href={app.appStoreUrl} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
