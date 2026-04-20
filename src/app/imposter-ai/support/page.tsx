import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Imposter AI — Support",
  description:
    "Learn how to play Imposter AI — game setup, AI agents, categories, voting, and more.",
  alternates: {
    canonical: "/imposter-ai/support",
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

export default function ImposterAISupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="text-5xl">🎭</span>
        <h1 className="mt-4 text-3xl font-bold md:text-4xl">Support</h1>
        <p className="mt-1 text-lg text-gray-400">Imposter AI</p>
        <p className="mt-3 text-sm text-gray-500">
          Everything you need to know about playing Imposter AI
        </p>
      </div>

      <div className="space-y-6">
        {/* What is Imposter AI */}
        <Section title="What is Imposter AI?">
          <p>
            Imposter AI is a social deduction party game. One or more players
            are secretly assigned as the{" "}
            <strong className="text-gray-100">imposter</strong> &mdash; they
            don&apos;t know the secret word but must bluff their way through.
            Everyone else gets the word and gives one-word clues to prove they
            know it, without making it too obvious. After the discussion,
            everyone votes on who they think the imposter is.
          </p>
          <p>
            AI agents powered by Apple Intelligence can play alongside human
            players, each with their own personality and clue-giving style.
          </p>
        </Section>

        {/* How to Play */}
        <Section title="How to Play">
          <ol className="list-none space-y-3 pl-0">
            <Step number={1}>
              <strong className="text-gray-100">Set up the game</strong> &mdash;
              add at least 3 players (humans and/or AI agents), pick one or more
              categories, and choose how many imposters there will be.
            </Step>
            <Step number={2}>
              <strong className="text-gray-100">Reveal roles</strong> &mdash;
              pass the phone around. Each player taps to see their role. Non-imposters
              see the secret word. Imposters see only the category (and optionally
              a hint).
            </Step>
            <Step number={3}>
              <strong className="text-gray-100">Give clues</strong> &mdash;
              players take turns saying one word related to the secret word. The
              goal is to prove you know it without giving it away to the imposter.
              Imposters try to blend in.
            </Step>
            <Step number={4}>
              <strong className="text-gray-100">Discuss</strong> &mdash;
              after everyone has spoken, discuss who you think is bluffing.
            </Step>
            <Step number={5}>
              <strong className="text-gray-100">Vote</strong> &mdash;
              each player votes for who they think is the imposter.
            </Step>
            <Step number={6}>
              <strong className="text-gray-100">Reveal</strong> &mdash;
              the imposter is revealed along with the secret word. See who said
              what and why in the detailed breakdown.
            </Step>
          </ol>
        </Section>

        {/* Game Setup */}
        <Section title="Game Setup">
          <SubSection title="Players">
            <BulletList>
              <Bullet>
                Tap the <strong className="text-gray-100">Players</strong> card
                to add, remove, or reorder players.
              </Bullet>
              <Bullet>
                Player names must be 2&ndash;15 characters.
              </Bullet>
              <Bullet>
                You need at least 3 total players (humans + agents) to start.
              </Bullet>
              <Bullet>
                Default players: Alex, Sam, and Twisha.
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="AI Agents">
            <BulletList>
              <Bullet>
                Tap <strong className="text-gray-100">+ Agents</strong> in the
                Players sheet to add AI agents to your game.
              </Bullet>
              <Bullet>
                Each agent has a unique personality that affects how they give
                clues and vote.
              </Bullet>
              <Bullet>
                Agent Quacksworth 🦆 is free. The other 9 agents require the
                full version.
              </Bullet>
              <Bullet>
                AI agents require an iPhone with Apple Intelligence enabled
                running iOS 26.0 or later.
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Categories">
            <BulletList>
              <Bullet>
                Tap the <strong className="text-gray-100">Categories</strong>{" "}
                card to choose which word pools to draw from.
              </Bullet>
              <Bullet>
                Food &amp; Drinks 🥘 is free. The other 12 categories require
                the full version.
              </Bullet>
              <Bullet>
                Words are automatically tracked so you don&apos;t repeat them.
                Use the reset button (↺) on a category to make all its words
                available again.
              </Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Game Options">
            <BulletList>
              <Bullet label="Number of Imposters:">
                Choose how many imposters per round (up to 1/3 of total
                players). Free tier is limited to 1.
              </Bullet>
              <Bullet label="Show Hint to Imposter:">
                When enabled, imposters see an AI-generated hint to help them
                bluff more convincingly.
              </Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* AI Agents */}
        <Section title="AI Agents">
          <p>
            10 unique AI agents can play alongside you. Each has a distinct
            personality that shapes how they give clues and cast votes.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { emoji: "🦆", name: "Agent Quacksworth", style: "Academic, fancy synonyms", free: true },
              { emoji: "🎓", name: "Prof. Bluffington", style: "Expert-level, sneaky" },
              { emoji: "🦸", name: "Captain Obvious", style: "Most direct clues" },
              { emoji: "🔬", name: "Dr. Suspicious", style: "Cautious, safe clues" },
              { emoji: "🗣️", name: "Sir Rambles-a-Lot", style: "Long, roundabout" },
              { emoji: "🫐", name: "Lady Bluffberry", style: "Bold, misleading" },
              { emoji: "🤐", name: "The Mime", style: "Unexpected context" },
              { emoji: "🧛", name: "Count Wordula", style: "Dramatic, poetic" },
              { emoji: "🔍", name: "Inspector Clueless", style: "Barely makes sense" },
              { emoji: "🔮", name: "Madame Mystique", style: "Cryptic, double-meaning" },
            ].map((agent) => (
              <div
                key={agent.name}
                className="rounded-xl border border-gray-700 bg-gray-900 p-3 text-center"
              >
                <span className="text-2xl">{agent.emoji}</span>
                <p className="mt-1 text-xs font-medium text-gray-100">
                  {agent.name}
                </p>
                <p className="mt-0.5 text-[11px] text-gray-400">
                  {agent.style}
                </p>
                {"free" in agent && (
                  <span className="mt-1 inline-block rounded-full bg-green-900/30 px-2 py-0.5 text-[10px] font-medium text-green-400">
                    Free
                  </span>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Categories */}
        <Section title="Categories">
          <p>13 categories with unique word pools:</p>
          <div className="flex flex-wrap gap-2">
            {[
              { emoji: "🥘", name: "Food & Drinks", free: true },
              { emoji: "👨‍⚕️", name: "Occupations" },
              { emoji: "🏡", name: "Household Items" },
              { emoji: "🐸", name: "Animals" },
              { emoji: "🌍", name: "Places" },
              { emoji: "⚽️", name: "Sports" },
              { emoji: "🎬", name: "Movies" },
              { emoji: "🎸", name: "Music Artists" },
              { emoji: "📺", name: "TV Shows" },
              { emoji: "🌎", name: "Countries" },
              { emoji: "🎮", name: "Video Games" },
              { emoji: "🦸", name: "Fictional Characters" },
              { emoji: "🧥", name: "Clothing" },
            ].map((cat) => (
              <span
                key={cat.name}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium"
              >
                <span>{cat.emoji}</span>
                {cat.name}
                {"free" in cat && (
                  <span className="rounded-full bg-green-900/30 px-1.5 py-0.5 text-[10px] font-semibold text-green-400">
                    FREE
                  </span>
                )}
              </span>
            ))}
          </div>
        </Section>

        {/* Gameplay Details */}
        <Section title="Gameplay Details">
          <SubSection title="Pass-the-Phone">
            <p>
              During the reveal phase, the phone is passed from player to
              player. Each person taps to see their role privately. A progress
              bar at the top tracks whose turn it is.
            </p>
          </SubSection>

          <SubSection title="Discussion">
            <p>
              With <strong className="text-gray-100">human-only</strong> games,
              discussion is free-form &mdash; talk it out and use the timer to
              keep things moving.
            </p>
            <p>
              With <strong className="text-gray-100">AI agents</strong>,
              discussion is structured: each player takes a turn typing one
              word, and agents generate their clue using on-device AI.
            </p>
          </SubSection>

          <SubSection title="Voting">
            <p>
              Each player votes for who they think is the imposter. You
              can&apos;t vote for yourself. AI agents vote based on what
              everyone said and their own personality.
            </p>
          </SubSection>

          <SubSection title="After the Reveal">
            <BulletList>
              <Bullet label="Who said what:">
                See every player&apos;s clue, vote, and the AI&apos;s reasoning
                in a detailed breakdown.
              </Bullet>
              <Bullet label="Play Again:">
                Keep the same players and settings but get a new secret word.
              </Bullet>
              <Bullet label="New Game:">
                Start fresh from the setup screen.
              </Bullet>
            </BulletList>
          </SubSection>
        </Section>

        {/* Settings */}
        <Section title="Settings">
          <p>
            Tap the menu icon (☰) on the setup screen to open Settings.
          </p>
          <BulletList>
            <Bullet label="Appearance:">
              Switch between Auto, Light, and Dark mode.
            </Bullet>
            <Bullet label="Haptic Feedback:">
              Toggle vibration feedback on or off.
            </Bullet>
            <Bullet label="Auto-Step Agent Turns:">
              Automatically advance after AI agents act during gameplay.
            </Bullet>
            <Bullet label="Background Music:">
              Toggle ambient music on or off.
            </Bullet>
            <Bullet label="Notifications:">
              Enable or disable weekly game reminders.
            </Bullet>
          </BulletList>
        </Section>

        {/* Free Trial & Premium */}
        <Section title="Free Trial & Premium">
          <SubSection title="14-Day Free Trial">
            <p>
              When you first download Imposter AI, you get a 14-day free trial
              with access to everything &mdash; all agents, categories, and
              features. No payment required.
            </p>
          </SubSection>

          <SubSection title="Free Tier">
            <p>After the trial, the free version includes:</p>
            <BulletList>
              <Bullet>1 category (Food &amp; Drinks)</Bullet>
              <Bullet>1 AI agent (Agent Quacksworth)</Bullet>
              <Bullet>Up to 6 players</Bullet>
              <Bullet>1 imposter per game</Bullet>
            </BulletList>
          </SubSection>

          <SubSection title="Full Version">
            <p>
              Unlock everything with a one-time purchase for 6 months. This is
              not an auto-renewing subscription.
            </p>
            <BulletList>
              <Bullet>All 13 categories</Bullet>
              <Bullet>All 10 AI agents</Bullet>
              <Bullet>Up to 20 players</Bullet>
              <Bullet>Multiple imposters per game</Bullet>
            </BulletList>
            <p>
              You can restore a previous purchase at any time from the purchase
              screen.
            </p>
          </SubSection>
        </Section>

        {/* Troubleshooting */}
        <Section title="Troubleshooting">
          <SubSection title="AI agents are not available">
            <p>
              AI agents require Apple Intelligence, which needs an eligible
              iPhone running iOS 26.0 or later. Check Settings to see the
              current AI status and any specific reason it may be unavailable.
              Without AI, you can still play with human players only using
              free-form discussion.
            </p>
          </SubSection>

          <SubSection title="Running out of words">
            <p>
              Words are tracked so you don&apos;t get repeats. If a category
              runs out, words automatically reset. You can also manually reset
              a category&apos;s words using the ↺ button in the Categories
              sheet.
            </p>
          </SubSection>

          <SubSection title="Purchase not recognized">
            <p>
              Try tapping{" "}
              <strong className="text-gray-100">Restore Purchases</strong> on
              the purchase screen. Make sure you&apos;re signed in with the
              same Apple ID used for the original purchase.
            </p>
          </SubSection>

          <SubSection title="Notifications not working">
            <p>
              Make sure notifications are enabled both in the app settings and
              in iOS Settings &rarr; Imposter AI &rarr; Notifications.
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
                className="text-blue-400 hover:underline"
              >
                {SITE.email}
              </a>
            </Bullet>
          </BulletList>
        </Section>

        {/* Footer links */}
        <div className="flex justify-center gap-6 text-sm text-gray-500">
          <Link href="/imposter-ai/privacy" className="hover:underline">
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
