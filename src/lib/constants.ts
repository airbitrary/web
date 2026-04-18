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
    "Spin AI turns every choice into a delightful moment, powered by on-device Apple Intelligence. From \"What should we eat?\" to \"Which game should we play?\", beautiful spinning wheels blend smart tech with stunning visuals to make decisions effortless, playful, and genuinely fun.",
  appStoreUrl: "https://apps.apple.com/us/app/spin-ai/id6753998404",
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
      question: "Is Spin AI free?",
      answer:
        "Yes! Spin AI is free to download with optional in-app purchases for premium features.",
    },
    {
      question: "Does it require an internet connection?",
      answer:
        "No. Spin AI uses on-device Apple Intelligence, so everything works offline.",
    },
    {
      question: "What devices are supported?",
      answer: "Spin AI requires an iPhone running iOS 18.5 or later.",
    },
    {
      question: "Is my data collected?",
      answer:
        "No. The developer does not collect any data from this app. Everything stays on your device.",
    },
  ],
};

export const IMPOSTER_AI = {
  name: "Imposter AI",
  tagline: "Who's bluffing?",
  description:
    "Imposter AI is a social party game powered by Apple Intelligence. One player is secretly the imposter — they don't know the secret word but must bluff their way through. With 10 unique AI agents, 13 categories, and on-device AI, every round is unpredictable and hilarious.",
  appStoreUrl: "#",
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
        "Unlock all categories, agents, and features for just $1.99 / 6 months.",
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
    { name: "Occupations", emoji: "👨‍⚕️", free: true },
    { name: "Household Items", emoji: "🏡", free: true },
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
      question: "How do you play Imposter AI?",
      answer:
        "Players gather and one is secretly assigned as the imposter. Everyone else receives a secret word. Players take turns giving one-word clues, then discuss and vote to find the imposter.",
    },
    {
      question: "Can I play with just AI agents?",
      answer:
        "Yes! AI agents can fill in as players, each with their own personality and clue-giving style.",
    },
    {
      question: "Is Imposter AI free?",
      answer:
        "The app is free with 3 categories and 1 AI agent. Unlock everything for $1.99 / 6 months.",
    },
    {
      question: "Does it need internet?",
      answer:
        "No. Imposter AI runs entirely on-device using Apple Intelligence.",
    },
    {
      question: "When will it be available?",
      answer:
        "Imposter AI is currently in development. Stay tuned for the App Store launch!",
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
