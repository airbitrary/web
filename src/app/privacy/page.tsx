import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} apps.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Last updated: April 2026
      </p>

      <div className="prose prose-gray mt-8 dark:prose-invert max-w-none">
        <h2>Overview</h2>
        <p>
          At {SITE.name}, we take your privacy seriously. Our apps are designed
          to work entirely on-device using Apple Intelligence. We do not collect,
          store, or transmit any personal data.
        </p>

        <h2>Spin AI</h2>
        <p>
          Spin AI does not collect any data from users. All processing happens
          on-device. For more details, see the{" "}
          <Link
            href="https://github.com/airbitrary/spinai/blob/main/Privacy.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Spin AI Privacy Policy on GitHub
          </Link>
          .
        </p>

        <h2>Imposter AI</h2>
        <p>
          Imposter AI does not collect any data from users. All AI processing,
          game state, and user preferences remain on your device.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Our apps do not integrate with any third-party analytics, advertising,
          or tracking services.
        </p>

        <h2>In-App Purchases</h2>
        <p>
          In-app purchases are processed by Apple through the App Store. We do
          not have access to your payment information. Apple&apos;s privacy
          policy governs those transactions.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, contact us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
