import {
  PulseSectionCardInfo,
  SessionSectionCardInfo,
  PlatformSectionCardInfo,
  ImageInfo,
} from "@/types/firesight";

export const pulseSectionCardInfo: PulseSectionCardInfo[] = [
  {
    title: "Report",
    content: "Your hub for workflows, insights, and productivity.",
    feature: "",
  },
  {
    title: "News",
    content:
      "AI-filtered media feed—monitor topics, brands, and trends in real time.",
    feature: "",
  },
  {
    title: "Intelligence",
    content:
      "Personalised intelligence compiled from internal and external information.",
    feature: "",
  },
  {
    title: "Signals",
    content:
      "State-of-the-Art keyword, phase and narrative tracking technology.",
    feature: "(coming soon)",
  },
  {
    title: "Spotlight",
    content:
      "Discover what’s trending, loved, or hated - by location, sector, or time period.",
    feature: "(coming soon)",
  },
  {
    title: "Surveillance",
    content:
      "self-guided media intelligence driving deeper comprehension of current events.",
    feature: "(coming soon)",
  },
];

export const sessionSectionCardInfo: SessionSectionCardInfo[] = [
  {
    title: "Agent",
    content:
      "A new medium of collaboration: You and an AI agent working together seamlessly",
  },
  {
    title: "Conference Sessions",
    content:
      "Smarter, more efficient group calls -complete with prompts, summaries & Agents",
  },
  {
    title: "Embedded Agents",
    content: "AI-powered agents that actively participate in your meetings",
  },
  {
    title: "Session Summaries",
    content:
      "Capture decisions and next steps instantly with actionable summaries",
  },
  {
    title: "WorldShare",
    content: "AI agents listen, retrieve (RAG), present and share in real time",
  },
  {
    title: "Embedded Prompts",
    content:
      "Intuitive prompts that guide your meetings and ensure no opportunity is overlooked",
  },
];

export const sessionFeaturedCardInfo: SessionSectionCardInfo[] = [
  {
    title: "Agent Sessions",
    content:
      "A new medium of collaboration: You and an AI agent working together seamlessly",
  },
  {
    title: "Conference Sessions",
    content:
      "Smarter, more efficient group calls -complete with prompts, summaries & Agents",
  },
  {
    title: "Embedded Agents",
    content: "AI-powered agents that actively participate in your meetings",
  },
  {
    title: "Session Summaries",
    content:
      "Capture decisions and next steps instantly with actionable summaries",
  },
  {
    title: "WorldShare",
    content: "AI agents listen, retrieve (RAG), present and share in real time",
  },
  {
    title: "Personalised Prompts",
    content:
      "Intuitive prompts that guide your meetings and ensure no opportunity is overlooked",
  },
  {
    title: "Autonomous Work",
    content:
      "AI Agents perform tasks & duties through 3rd party integrations and tool access.",
  },
  {
    title: "Sessions Library",
    content: "Knowledge Base for call recordings, transcripts & Sessions data. Effortlessly searchable; organised.",
  },
  {
    title: "Sessions Recordings",
    content:
      "High-fidelity video and audio captures preserved for future reference, with intuitive UI navigation.",
  },
];



export const platformSectionCardInfo: PlatformSectionCardInfo[] = [
  {
    title: "Dashboard",
    content: "Your hub for workflows, insights, and productivity",
    icon: "/images/icons/dashboard.svg",
  },
  {
    title: "Chat",
    content: "A multi-modal, multi-agent AI-powered chat region",
    icon: "/images/icons/chat.svg",
  },
  {
    title: "Page",
    content: "AI-assisted writing editor with multi-agent collaboration",
    icon: "/images/icons/page.svg",
  },
  {
    title: "Sessions",
    content:
      "Transform meetings with AI-native conferencing with embedded AI Agents",
    icon: "/images/icons/sessions.svg",
  },
  {
    title: "Graph",
    content: "Interactive knowledge graph for advanced knowledge management",
    icon: "/images/icons/graph.svg",
  },
  {
    title: "Projects",
    content:
      "Effortless organisational control for your workflows and projects",
    icon: "/images/icons/projects.svg",
  },
];

export const subData: ImageInfo[] = [
  {
    image: "/images/icons/green-pin.svg",
    title: "Pin to Toolbar",
  },
  {
    image: "/images/icons/green-pin.svg",
    title: "Pin to Startbar",
  },
  {
    image: "/images/icons/green-download.svg",
    title: "Save as Desktop App",
  },
];

export const slideData: ImageInfo[] = [
  { title: "ai-co-pilot", image: "/images/session/ai-co-pilot.svg" },
  {
    title: "meeting-summaries",
    image: "/images/session/meeting-summaries.svg",
  },
  {
    title: "session-libraries",
    image: "/images/session/session-libraries.svg",
  },
  {
    title: "intelligence-knowledge-base",
    image: "/images/session/intelligence-knowledge-base.svg",
  },
  { title: "meeting-flow", image: "/images/session/meeting-flow.svg" },
  {
    title: "best-in-class-performance",
    image: "/images/session/best-in-class-performance.svg",
  },
];
