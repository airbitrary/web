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
  gradient = "from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800",
}: HeroProps) {
  return (
    <section
      className={`bg-gradient-to-br ${gradient} py-20 md:py-28`}
    >
      <div className="mx-auto max-w-4xl px-4 text-center">
        <span className="text-6xl md:text-7xl">{icon}</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 md:text-xl">
          {tagline}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-400">
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
