import type { Metadata } from "next";
import Link from "next/link";
import { SITE, IMPOSTER_AI } from "@/lib/constants";

const PAGE_TITLE = "Imposter AI — Weekly Instagram Premium Giveaway";
const PAGE_DESCRIPTION =
  "Win free Imposter AI Premium every week. Follow @imposter.ai.game on Instagram and enter our free weekly draw for a chance to unlock all categories and AI agents.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "/imposter-ai/draws",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "/imposter-ai/draws",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  itunes: {
    appId: IMPOSTER_AI.appId,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 md:p-8">
      <h2 className="mb-4 text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-gray-300">
        {children}
      </div>
    </section>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return <ul className="list-none space-y-2 pl-0">{children}</ul>;
}

function Bullet({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-2">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
      <span>
        {label && <strong className="text-gray-100">{label} </strong>}
        {children}
      </span>
    </li>
  );
}

function Step({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function ImposterAIDrawsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-5xl">🎁</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          Weekly Premium Giveaway
        </h1>
        <p className="mt-1 text-lg text-gray-400">Imposter AI</p>
        <p className="mt-3 text-sm text-gray-500">
          Win free Imposter AI Premium every single week
        </p>

        <a
          href={IMPOSTER_AI.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <span>📸</span>
          Follow @{IMPOSTER_AI.instagramHandle}
        </a>
      </div>

      <div className="space-y-6">
        {/* What you can win */}
        <Section title="What You Can Win">
          <p>
            Every week we give away{" "}
            <strong className="text-gray-100">free Imposter AI Premium</strong>{" "}
            to lucky followers on Instagram. Winners unlock everything:
          </p>
          <BulletList>
            <Bullet>All 13 word categories</Bullet>
            <Bullet>All 10 AI agents</Bullet>
            <Bullet>Up to 20 players per game</Bullet>
            <Bullet>Multiple imposters per round</Bullet>
          </BulletList>
        </Section>

        {/* How to enter */}
        <Section title="How to Enter">
          <ol className="list-none space-y-3 pl-0">
            <Step number={1}>
              <strong className="text-gray-100">Follow us</strong> &mdash; head
              to{" "}
              <a
                href={IMPOSTER_AI.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                @{IMPOSTER_AI.instagramHandle}
              </a>{" "}
              on Instagram and hit follow.
            </Step>
            <Step number={2}>
              <strong className="text-gray-100">Like &amp; comment</strong>{" "}
              &mdash; like our posts and reels and leave a comment to enter the
              draw.
            </Step>
            <Step number={3}>
              <strong className="text-gray-100">Watch for the winner</strong>{" "}
              &mdash; we announce winners via Instagram Stories and DM the prize
              code.
            </Step>
          </ol>
        </Section>

        {/* Rules */}
        <Section title="Giveaway Rules">
          <BulletList>
            <Bullet label="No purchase necessary.">
              Entry is completely free and no purchase is required to enter or
              win.
            </Bullet>
            <Bullet label="One entry per person, per week.">
              Duplicate or spam entries will be disqualified.
            </Bullet>
            <Bullet label="A new draw runs every week.">
              Each weekly giveaway post has its own entry period, announced in
              the post.
            </Bullet>
            <Bullet label="Winners chosen at random.">
              One or more winners are selected at random from all valid entries.
            </Bullet>
            <Bullet label="You must be following us.">
              Entries from accounts that aren&apos;t following{" "}
              @{IMPOSTER_AI.instagramHandle} won&apos;t qualify.
            </Bullet>
            <Bullet label="Open to App Store users.">
              Prizes are redeemed as Imposter AI Premium and require a
              compatible iPhone with Apple Intelligence.
            </Bullet>
            <Bullet label="Winners are notified by DM.">
              We&apos;ll send your prize code via Instagram direct message. If a
              winner doesn&apos;t respond within 7 days, a new winner may be
              drawn.
            </Bullet>
            <Bullet label="Not affiliated with Instagram.">
              This giveaway is in no way sponsored, endorsed, administered by,
              or associated with Instagram or Apple.
            </Bullet>
          </BulletList>
        </Section>

        {/* CTA */}
        <Section title="Ready to Win?">
          <p>
            Follow us on Instagram and turn on post notifications so you never
            miss a weekly draw.
          </p>
          <a
            href={IMPOSTER_AI.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <span>📸</span>
            Follow @{IMPOSTER_AI.instagramHandle}
          </a>
        </Section>

        {/* Footer links */}
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <Link href="/imposter-ai" className="hover:underline">
            Imposter AI
          </Link>
          <Link href="/imposter-ai/support" className="hover:underline">
            Support
          </Link>
          <Link href="/imposter-ai/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
