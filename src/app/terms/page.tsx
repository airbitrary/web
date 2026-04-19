import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name} apps.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-2 text-sm text-gray-400 dark:text-gray-400">
        Last updated: April 2026
      </p>

      <div className="prose prose-invert mt-8 dark:prose-invert max-w-none">
        <h2>Acceptance of Terms</h2>
        <p>
          By downloading or using any {SITE.name} application (&quot;Spin
          AI&quot;, &quot;Imposter AI&quot;), you agree to be bound by these
          Terms of Service.
        </p>

        <h2>Use of the Apps</h2>
        <p>
          Our apps are provided &quot;as is&quot; for personal, non-commercial
          use. You may not reverse-engineer, decompile, or attempt to extract
          the source code of any {SITE.name} application.
        </p>

        <h2>In-App Purchases</h2>
        <p>
          Some features require in-app purchases processed through the Apple App
          Store. All purchases are subject to Apple&apos;s terms and refund
          policies.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          All content, design, and code in {SITE.name} apps are the property of{" "}
          {SITE.developer} and are protected by applicable intellectual property
          laws.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          {SITE.name} apps are provided without warranty of any kind, express or
          implied. We do not guarantee that the apps will be error-free or
          uninterrupted.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, {SITE.developer} shall not be
          liable for any indirect, incidental, or consequential damages arising
          from the use of our apps.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Continued use
          of the apps constitutes acceptance of updated terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms? Contact us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-blue-400 hover:underline dark:text-blue-400"
          >
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
