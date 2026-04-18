export default function ScreenshotGallery({ appName }: { appName: string }) {
  const placeholders = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Screenshots</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x">
          {placeholders.map((num) => (
            <div
              key={num}
              className="flex h-[500px] w-[240px] shrink-0 snap-center items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
            >
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {appName} Screenshot {num}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
