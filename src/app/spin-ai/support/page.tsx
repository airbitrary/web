import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SPIN_AI } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Spin AI — Support",
  description:
    "Learn how to use Spin AI — spinning wheels, flash cards, AI-generated collections, themes, and more.",
  alternates: {
    canonical: "/spin-ai/support",
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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 text-base font-medium text-gray-100">{title}</h3>
      {children}
    </div>
  );
}

function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-none space-y-2 pl-0">
      {children}
    </ul>
  );
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
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
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
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function SpinAISupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-5xl">🎡</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Support</h1>
        <p className="mt-1 text-lg text-gray-400">Spin AI</p>
        <p className="mt-3 text-sm text-gray-500">
          Everything you need to know about using Spin AI
        </p>
      </div>

      <div className="space-y-6">
        {/* Getting Started */}
        <Section title="Getting Started">
          <p>
            Spin AI is a decision-making and party game app with two modes:
            a <strong className="text-gray-100">spinning wheel</strong> and{" "}
            <strong className="text-gray-100">flash cards</strong>. Load any
            collection, spin or swipe, and let the app decide for you.
          </p>
          <p>
            When you first open the app, you&apos;ll see a spinning wheel
            loaded with a default collection. From there you can browse 529+
            pre-made collections, create your own, or ask AI to generate one.
          </p>
        </Section>

        {/* Spinning the Wheel */}
        <Section title="Spinning the Wheel">
          <ol className="list-none space-y-3 pl-0">
            <Step number={1}>
              <strong className="text-gray-100">Tap the centre</strong> of the
              wheel to spin it.
            </Step>
            <Step number={2}>
              The wheel spins and gradually slows down, landing on a random
              segment.
            </Step>
            <Step number={3}>
              The result appears below the wheel with a popup &mdash; tap{" "}
              <strong className="text-gray-100">Spin Again</strong> to go
              another round.
            </Step>
          </ol>

          <SubSection title="No-Repeat Mode">
            <p>
              Enabled by default. Each segment can only be selected once until
              every segment has been picked, then the cycle resets. Used
              segments are marked with a subtle border on the wheel. You can
              toggle this in Settings.
            </p>
          </SubSection>

          <SubSection title="Q&A on the Wheel">
            <p>
              If a collection uses Q&A format, the wheel shows only the
              question. When the wheel lands, tap{" "}
              <strong className="text-gray-100">Reveal Answer</strong> to see
              the answer.
            </p>
          </SubSection>
        </Section>

        {/* Flash Cards */}
        <Section title="Flash Cards">
          <p>
            Switch to Flash Cards mode in Settings to view your collection as
            a swipeable card deck instead of a wheel.
          </p>
          <BulletList>
            <Bullet label="Swipe:">
              Swipe left or right to move between cards.
            </Bullet>
            <Bullet label="Q&A Cards:">
              Tap a Q&A card to flip it and reveal the answer.
            </Bullet>
            <Bullet label="Auto-Mark as Read:">
              Cards are automatically marked as viewed. Toggle this off in
              Settings if you prefer manual tracking.
            </Bullet>
            <Bullet label="Timer:">
              Each card has a built-in timer for self-paced study. It resets
              when you move to the next card.
            </Bullet>
            <Bullet label="Progress:">
              A progress bar and counter show how far through the deck you are.
            </Bullet>
          </BulletList>
        </Section>

        {/* Collections */}
        <Section title="Collections">
          <p>
            Tap the <strong className="text-gray-100">pencil icon</strong> to
            open the Collection Editor with three tabs:
          </p>
          <BulletList>
            <Bullet label="Search:">
              Browse and search 529+ pre-made collections. Search is powered by
              full-text search so you can find collections by name, topic, or
              keyword.
            </Bullet>
            <Bullet label="Edit:">
              Create or edit a collection manually. Add entries one at a time,
              paste from your clipboard, or use Ask AI.
            </Bullet>
            <Bullet label="Saved:">
              View, load, edit, or delete your saved custom collections.
            </Bullet>
          </BulletList>

          <SubSection title="Limits">
            <BulletList>
              <Bullet>Collection name: up to 30 characters</Bullet>
              <Bullet>Entries per collection: up to 30</Bullet>
              <Bullet>Entry text: up to 100 characters</Bullet>
              <Bullet>Minimum 2 entries to spin or use flash cards</Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Free vs. Premium">
            <p>
              Many collections are free. Premium collections are marked with a
              lock icon and require a purchase or active trial to access. All
              core features (wheel, cards, custom collections, Ask AI, themes)
              are available to everyone.
            </p>
          </SubSection>
        </Section>

        {/* Ask AI */}
        <Section title="Ask AI">
          <p>
            Spin AI uses Apple Intelligence to generate collection entries
            entirely on your device &mdash; no internet needed.
          </p>
          <ol className="list-none space-y-3 pl-0">
            <Step number={1}>
              Open the Collection Editor and go to the{" "}
              <strong className="text-gray-100">Edit</strong> tab.
            </Step>
            <Step number={2}>
              Tap <strong className="text-gray-100">Ask AI</strong> and type a
              prompt (up to 50 characters), or pick one of the suggested
              prompts.
            </Step>
            <Step number={3}>
              Toggle <strong className="text-gray-100">Q&A Mode</strong> if you
              want question-and-answer pairs instead of simple items.
            </Step>
            <Step number={4}>
              Tap generate and the AI will create entries for your collection.
            </Step>
          </ol>

          <SubSection title="Requirements">
            <p>
              Ask AI requires an iPhone with Apple Intelligence enabled running
              iOS 26.0 or later. You can check availability in Settings.
            </p>
          </SubSection>
        </Section>

        {/* Themes */}
        <Section title="Themes">
          <p>
            Four visual themes are available, each with unique colours,
            animations, and background music. Change your theme in Settings
            under Appearance.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                name: "Summer",
                emoji: "☀️",
                desc: "Soft pastels and warm tones",
              },
              {
                name: "Winter",
                emoji: "❄️",
                desc: "Deep blues and icy whites",
              },
              {
                name: "Arctic",
                emoji: "🌌",
                desc: "Aurora borealis greens and teals",
              },
              {
                name: "Halloween",
                emoji: "🎃",
                desc: "Pumpkin orange and spooky purple",
              },
            ].map((theme) => (
              <div
                key={theme.name}
                className="rounded-xl border border-gray-700 bg-gray-900 p-4 text-center"
              >
                <span className="text-2xl">{theme.emoji}</span>
                <p className="mt-1 text-sm font-medium text-gray-100">
                  {theme.name}
                </p>
                <p className="mt-0.5 text-xs text-gray-400">{theme.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Settings */}
        <Section title="Settings">
          <p>
            Tap the <strong className="text-gray-100">slider icon</strong> in
            the top-left to open Settings.
          </p>
          <BulletList>
            <Bullet label="Experience Mode:">
              Switch between Spin Wheel and Flash Cards.
            </Bullet>
            <Bullet label="No Repeat Mode:">
              Prevent the wheel from landing on the same segment twice
              (wheel mode only).
            </Bullet>
            <Bullet label="Wheel Text Size:">
              Adjust the font size on wheel segments (wheel mode only).
            </Bullet>
            <Bullet label="Auto-Mark as Read:">
              Automatically mark flash cards as viewed (cards mode only).
            </Bullet>
            <Bullet label="Haptic Feedback:">
              Toggle vibration feedback on or off.
            </Bullet>
            <Bullet label="Background Music:">
              Toggle ambient theme music on or off.
            </Bullet>
            <Bullet label="Notifications:">
              Enable or disable local notification reminders.
            </Bullet>
            <Bullet label="Appearance:">
              Choose from four visual themes.
            </Bullet>
            <Bullet label="Reset Collections:">
              Delete all saved collections and restore defaults.
            </Bullet>
          </BulletList>
        </Section>

        {/* Sharing */}
        <Section title="Sharing Collections">
          <p>
            Tap the <strong className="text-gray-100">share icon</strong> in
            the top-right to share the current collection with friends. The
            share includes the collection name and a link to download Spin AI
            from the App Store.
          </p>
        </Section>

        {/* Purchase & Trial */}
        <Section title="Free Trial & Premium">
          <SubSection title="14-Day Free Trial">
            <p>
              When you first download Spin AI, you get a 14-day free trial with
              access to all premium collections. No payment required.
            </p>
          </SubSection>

          <SubSection title="Premium">
            <p>
              After the trial, unlock all premium collections with a one-time
              purchase for 6 months. This is not an auto-renewing subscription.
            </p>
            <BulletList>
              <Bullet>Access to all 529+ collections</Bullet>
              <Bullet>New collections added monthly</Bullet>
              <Bullet>Support ongoing development</Bullet>
            </BulletList>
            <p>
              You can restore a previous purchase at any time from the purchase
              screen.
            </p>
          </SubSection>
        </Section>

        {/* Troubleshooting */}
        <Section title="Troubleshooting">
          <SubSection title="Ask AI is not available">
            <p>
              Ask AI requires Apple Intelligence, which needs an eligible
              iPhone running iOS 26.0 or later. Check Settings to see the
              current status and any specific reason it may be unavailable.
            </p>
          </SubSection>

          <SubSection title="Notifications not working">
            <p>
              Make sure notifications are enabled both in the app settings and
              in iOS Settings &rarr; Spin AI &rarr; Notifications.
            </p>
          </SubSection>

          <SubSection title="Purchase not recognized">
            <p>
              Try tapping <strong className="text-gray-100">Restore
              Purchases</strong> on the purchase screen. If the issue persists,
              make sure you&apos;re signed in with the same Apple ID used for
              the original purchase.
            </p>
          </SubSection>
        </Section>

        {/* Contact */}
        <Section title="Contact Us">
          <p>
            Need more help? Reach out and we&apos;ll get back to you as soon
            as we can.
          </p>
          <BulletList>
            <Bullet label="Email:">
              <a
                href={`mailto:${SITE.email}`}
                className="text-purple-400 hover:underline"
              >
                {SITE.email}
              </a>
            </Bullet>
            <Bullet label="App Store:">
              <a
                href={SPIN_AI.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:underline"
              >
                Spin AI on the App Store
              </a>
            </Bullet>
          </BulletList>
        </Section>

        {/* Footer links */}
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <Link href="/spin-ai/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
