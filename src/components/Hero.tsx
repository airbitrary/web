import AppStoreButton from "./AppStoreButton";

interface HeroProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  appStoreUrl?: string;
  gradient?: string;
}

export default function Hero({
  icon,
  title,
  tagline,
  description,
  appStoreUrl,
  gradient = "from-gray-900 to-gray-800 dark:from-gray-900 dark:to-gray-800",
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} py-24 md:py-32`}
    >
      {/* Decorative blob */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-pulse-glow dark:bg-white/5" />

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <span className="inline-block text-7xl md:text-8xl animate-float">{icon}</span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
          {title}
        </h1>
        <p className="mt-3 text-xl font-medium text-gray-300 dark:text-gray-300 md:text-2xl">
          {tagline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-gray-400 dark:text-gray-400">
          {description}
        </p>
        {appStoreUrl && (
          <div className="mt-8">
            <AppStoreButton href={appStoreUrl} />
          </div>
        )}
      </div>
    </section>
  );
}
