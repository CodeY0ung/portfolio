export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  color: string;
  likes: number;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Neural Interface",
    description: "A cutting-edge AI-powered interface that adapts to user behavior in real-time.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&q=80",
    ],
    tags: ["AI/ML", "React", "TensorFlow", "WebGL"],
    color: "#5E6AD2",
    likes: 0,
  },
  {
    id: "2",
    title: "Quantum Dashboard",
    description: "Real-time data visualization platform with stunning glassmorphic design.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ],
    tags: ["Next.js", "D3.js", "TypeScript", "PostgreSQL"],
    color: "#00D9FF",
    likes: 0,
  },
  {
    id: "3",
    title: "Ethereal Commerce",
    description: "Next-generation e-commerce platform with seamless checkout experience.",
    thumbnail: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    ],
    tags: ["E-commerce", "Stripe", "React", "Node.js"],
    color: "#9D4EDD",
    likes: 0,
  },
  {
    id: "4",
    title: "Sonic Waves",
    description: "Immersive audio streaming platform with spatial audio technology.",
    thumbnail: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1619983081563-430f63602796?w=1200&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1200&q=80",
    ],
    tags: ["Audio", "WebAudio API", "React", "FFmpeg"],
    color: "#F72585",
    likes: 0,
  },
  {
    id: "5",
    title: "Nebula Design System",
    description: "Comprehensive design system with 200+ components and dark mode support.",
    thumbnail: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=1200&q=80",
    ],
    tags: ["Design System", "Figma", "Storybook", "Tailwind"],
    color: "#06FFA5",
    likes: 0,
  },
  {
    id: "6",
    title: "Cipher Vault",
    description: "End-to-end encrypted password manager with biometric authentication.",
    thumbnail: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&q=80",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
    ],
    tags: ["Security", "Encryption", "React Native", "Keychain"],
    color: "#FFB627",
    likes: 0,
  },
];
