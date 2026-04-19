interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <details
            key={i}
            className="group rounded-xl border border-gray-700 bg-gray-900 dark:border-gray-700 dark:bg-gray-900"
          >
            <summary className="cursor-pointer px-4 py-3 md:px-6 md:py-4 text-sm font-medium select-none list-none flex items-center justify-between gap-3">
              {item.question}
              <svg
                className="h-4 w-4 shrink-0 text-gray-500 transition-transform group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="px-4 pb-3 md:px-6 md:pb-4 text-sm text-gray-400 dark:text-gray-400">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
