import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Support",
  description: `Get in touch with the ${SITE.name} team.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Contact & Support</h1>
      <p className="mt-4 text-gray-600 dark:text-gray-400">
        Have a question, found a bug, or just want to say hi? We&apos;d love to
        hear from you.
      </p>

      <div className="mt-10 space-y-8">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            The quickest way to reach us:
          </p>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {SITE.email}
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-lg font-semibold">App Support</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            For issues with a specific app, please include the app name, your
            iOS version, and a description of the problem in your email.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-900">
          <h2 className="text-lg font-semibold">Developer</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {SITE.name} apps are developed by{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              {SITE.developer}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
