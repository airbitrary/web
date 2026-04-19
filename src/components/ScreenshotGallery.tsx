interface Screenshot {
  src: string;
  alt: string;
}

export default function ScreenshotGallery({
  appName,
  screenshots = [],
  total = 4,
}: {
  appName: string;
  screenshots?: Screenshot[];
  total?: number;
}) {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 md:mb-8 text-center text-2xl md:text-3xl font-bold">Screenshots</h2>
        <div className="relative">
          <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {Array.from({ length: total }, (_, i) => {
              const shot = screenshots[i];
              return shot ? (
                <img
                  key={i}
                  src={shot.src}
                  alt={shot.alt}
                  className="h-[380px] md:h-[500px] w-auto shrink-0 snap-center rounded-2xl md:rounded-3xl border-2 border-purple-700 object-cover transition-transform duration-300 hover:scale-[1.03] dark:border-purple-700"
                />
              ) : (
                <div
                  key={i}
                  className="flex h-[380px] md:h-[500px] w-[185px] md:w-[240px] shrink-0 snap-center items-center justify-center rounded-2xl md:rounded-3xl border-2 border-dashed border-purple-700 bg-gradient-to-b from-purple-950/30 to-pink-950/30 transition-transform duration-300 hover:scale-[1.03] dark:border-purple-700 dark:from-purple-950/30 dark:to-pink-950/30"
                >
                  <div className="text-center">
                    <span className="text-4xl">📱</span>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
                      {appName} Screenshot {i + 1}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Scroll hint for mobile */}
          <div className="mt-3 flex justify-center gap-1.5 md:hidden">
            {Array.from({ length: total }, (_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-purple-700 dark:bg-purple-700"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
