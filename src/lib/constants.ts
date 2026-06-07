export const SITE = {
  name: "Airbitrary",
  tagline: "AI-powered apps that make life playful",
  url: "https://airbitrary.com",
  developer: "Suneet Nangia",
  email: "support@airbitrary.com",
  copyright: `© ${new Date().getFullYear()} Suneet Nangia. All rights reserved.`,
};

export const SPIN_AI = {
  name: "Spin AI",
  tagline: "A wheel of possibilities",
  description:
    "Spin AI is a spin the wheel app for iPhone that turns every decision into a delightful moment. Build custom wheels, quizzes, and flash cards — or jump into ready-made collections — all powered by on-device Apple Intelligence. From \"What should we eat?\" to study sessions, it's the smartest random picker and decision wheel on iOS.",
  appStoreUrl: "https://apps.apple.com/us/app/spin-ai/id6753998404",
  appId: "6753998404",
  privacyUrl: "https://github.com/airbitrary/spinai/blob/main/Privacy.md",
  category: "Utilities",
  ageRating: "13+",
  requires: "iOS 18.5",
  features: [
    {
      title: "Apple Intelligence",
      description:
        "Powered by on-device AI for smart, private decision-making.",
      icon: "🧠",
    },
    {
      title: "Quiz Builder",
      description:
        "Create custom quizzes on any topic with AI-generated questions.",
      icon: "❓",
    },
    {
      title: "Flash Cards",
      description:
        "Build and study flash card decks with intelligent suggestions.",
      icon: "📇",
    },
    {
      title: "Ready-Made Collections",
      description:
        "Jump into curated collections on cricket, football, pop culture and more.",
      icon: "🎯",
    },
    {
      title: "Beautiful Wheels",
      description:
        "Stunning visuals and smooth animations make every spin delightful.",
      icon: "🎡",
    },
  ],
  faq: [
    {
      question: "What is Spin AI?",
      answer:
        "Spin AI is a spin the wheel app for iPhone. It helps you make decisions, run quizzes, and study flash cards with beautiful animated wheels — all powered by on-device Apple Intelligence so it works offline and keeps your data private.",
    },
    {
      question: "What can I use Spin AI for?",
      answer:
        "Use Spin AI as a random picker for everyday decisions (\"What should we eat?\", \"Whose turn is it?\"), as a quiz wheel for trivia nights, as a flash card study tool, or to pick teams, chores, gifts, and prize winners.",
    },
    {
      question: "Is Spin AI like a wheel of names?",
      answer:
        "Yes — and more. You can drop names in and spin to pick someone fairly, just like a wheel of names. Spin AI also generates whole wheels for you from any topic using on-device AI, builds quizzes, and stores flash card decks.",
    },
    {
      question: "Does Spin AI need internet?",
      answer:
        "No. Spin AI uses on-device Apple Intelligence, so wheel spinning, AI generation, quizzes, and flash cards all work offline.",
    },
    {
      question: "Is Spin AI free?",
      answer:
        "Yes. Spin AI is free to download with optional in-app purchases for premium features.",
    },
    {
      question: "What devices are supported?",
      answer:
        "Spin AI requires an iPhone running iOS 18.5 or later with Apple Intelligence.",
    },
    {
      question: "Is my data collected?",
      answer:
        "No. The developer does not collect any data from this app. Everything stays on your device.",
    },
    {
      question: "Where can I download Spin AI?",
      answer:
        "Spin AI is available now on the App Store. Tap the download button to get started!",
    },
  ],
};

export const IMPOSTER_AI = {
  name: "Imposter AI",
  tagline: "Who's bluffing?",
  description:
    "Imposter AI is a social deduction party game for iPhone. One player is secretly the imposter — they don't know the secret word and must bluff their way through. Powered entirely on-device by Apple Intelligence, with 10 AI agents and 13 word categories, it turns any gathering into a hilarious imposter party game.",
  appStoreUrl: "https://apps.apple.com/app/imposter-ai/id6762190167",
  appId: "6762190167",
  instagramHandle: "imposter.ai.game",
  instagramUrl: "https://instagram.com/imposter.ai.game",
  category: "Games",
  ageRating: "13+",
  requires: "iOS 26.0 with Apple Intelligence",
  features: [
    {
      title: "On-Device AI Agents",
      description:
        "10 unique AI characters with distinct personalities play alongside you.",
      icon: "🤖",
    },
    {
      title: "13 Categories",
      description:
        "From Food & Drinks to Fictional Characters — endless variety.",
      icon: "📚",
    },
    {
      title: "Multiplayer Party Game",
      description:
        "Gather friends, assign roles, and find the imposter together.",
      icon: "🎉",
    },
    {
      title: "Apple Intelligence",
      description:
        "Powered entirely on-device — no internet needed, fully private.",
      icon: "🧠",
    },
    {
      title: "Light & Dark Mode",
      description:
        "Beautiful Arctic Sky theme with full dark mode support.",
      icon: "🌗",
    },
    {
      title: "Affordable Premium",
      description:
        "Unlock all categories, agents, and features for just $2.99 / 6 months.",
      icon: "💎",
    },
  ],
  agents: [
    { name: "Agent Quacksworth", emoji: "🦆", personality: "Academic, uses fancy synonyms", free: true },
    { name: "Professor Bluffington", emoji: "🎓", personality: "Expert-level, sneaky clues", free: false },
    { name: "Captain Obvious", emoji: "🦸", personality: "Most direct clues possible", free: false },
    { name: "Dr. Suspicious", emoji: "🔬", personality: "Cautious, safe clues", free: false },
    { name: "Sir Rambles-a-Lot", emoji: "🗣️", personality: "Long, roundabout clues", free: false },
    { name: "Lady Bluffberry", emoji: "🫐", personality: "Bold, potentially misleading", free: false },
    { name: "The Mime", emoji: "🤐", personality: "Unexpected, different context", free: false },
    { name: "Count Wordula", emoji: "🧛", personality: "Dramatic, poetic flair", free: false },
    { name: "Inspector Clueless", emoji: "🔍", personality: "Barely-makes-sense but valid", free: false },
    { name: "Madame Mystique", emoji: "🔮", personality: "Cryptic, double-meaning clues", free: false },
  ],
  categories: [
    { name: "Food & Drinks", emoji: "🥘", free: true },
    { name: "Occupations", emoji: "👨‍⚕️", free: false },
    { name: "Household Items", emoji: "🏡", free: false },
    { name: "Animals", emoji: "🐸", free: false },
    { name: "Places", emoji: "🌍", free: false },
    { name: "Sports", emoji: "⚽️", free: false },
    { name: "Movies", emoji: "🎬", free: false },
    { name: "Music Artists", emoji: "🎸", free: false },
    { name: "TV Shows", emoji: "📺", free: false },
    { name: "Countries", emoji: "🌎", free: false },
    { name: "Video Games", emoji: "🎮", free: false },
    { name: "Fictional Characters", emoji: "🦸", free: false },
    { name: "Clothing", emoji: "🧥", free: false },
  ],
  faq: [
    {
      question: "What is the imposter game?",
      answer:
        "The imposter game is a social deduction party game where one secret player — the imposter — doesn't know the word everyone else is describing. Players take turns giving one-word clues and then vote on who they think is bluffing. Imposter AI brings this classic party format to iPhone with on-device AI agents who can play alongside you.",
    },
    {
      question: "How do you play Imposter AI?",
      answer:
        "Pick a category, choose your players (humans, AI agents, or a mix), and start a round. Everyone except the imposter sees the secret word. Each player gives a one-word clue in turn, then the group discusses and votes. Find the imposter to win — or, if you're the imposter, bluff your way to victory.",
    },
    {
      question: "Is Imposter AI like Among Us?",
      answer:
        "They share the same social-deduction DNA, but Imposter AI is played in person around a single iPhone (or with AI agents filling in). It's closer to party classics like Spyfall or Werewords — a quick, talk-and-vote imposter game with no maps or tasks.",
    },
    {
      question: "How many players can play?",
      answer:
        "Imposter AI works with 3 or more players. You can play with just friends, just AI agents, or mix humans and AI agents in the same round.",
    },
    {
      question: "Can I play Imposter AI on iPhone?",
      answer:
        "Yes. Imposter AI is an iPhone app built for iOS 26 with Apple Intelligence. Download it free from the App Store.",
    },
    {
      question: "Do I need internet to play the imposter game?",
      answer:
        "No. Imposter AI runs entirely on-device using Apple Intelligence, so you can play offline at parties, in the car, or anywhere with no signal.",
    },
    {
      question: "Can I play with just AI agents?",
      answer:
        "Yes. The 10 AI agents each have distinct personalities and clue-giving styles, so you can fill any seat at the table without a full group.",
    },
    {
      question: "Is Imposter AI free?",
      answer:
        "The app is free with 1 category (Food & Drinks) and 1 AI agent. Unlock all 13 categories and 10 agents for $2.99 / 6 months.",
    },
    {
      question: "Where can I download Imposter AI?",
      answer:
        "Imposter AI is available now on the App Store. Tap the download button to get started!",
    },
  ],
};

export const NAV_LINKS = [
  { label: "Spin AI", href: "/spin-ai" },
  { label: "Imposter AI", href: "/imposter-ai" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" },
];
