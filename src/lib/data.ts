export interface MediaItem {
  src: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: MediaItem[];
  videos?: MediaItem[];
  tags: string[];
  color: string;
  likes: number;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "농장스 주문폼",
    description: "Nongjangs order form renewal",
    thumbnail: "/images/projects/nongjangs/thumbnail.png",
    images: [
      { src: "/images/projects/nongjangs/thumbnail.png" },
    ],
    tags: ["Web", "React", "Springboot", "MySQL"],
    color: "#5E6AD2",
    likes: 0,
  },
  {
    id: "2",
    title: "Aurora",
    description: "dating application based on phone calling",
    thumbnail: "/images/projects/aurora/thumbnail.jpg",
    images: [
      { src: "/images/projects/aurora/screenshot1.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot2.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot3.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot4.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot5.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot6.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot7.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot8.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot9.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot10.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot11.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot12.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot13.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot14.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot15.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot16.jpg", caption: "" },
    ],
    tags: ["App", "Flutter", "Springboot", "MySQL"],
    color: "#00D9FF",
    likes: 0,
  },
  {
    id: "3",
    title: "Trust Edge",
    description: "Security application for blocking smishing",
    thumbnail: "/images/projects/trust-edge/thumbnail.jpg",
    images: [
      { src: "/images/projects/trust-edge/thumbnail.jpg" },
    ],
    videos: [
      { src: "/videos/projects/trust-edge/trust-edge-1.mp4", caption: "" },
      { src: "/videos/projects/trust-edge/trust-edge-2.mp4", caption: "" },
      { src: "/videos/projects/trust-edge/trust-edge-3.mp4", caption: "" },
      { src: "/videos/projects/trust-edge/trust-edge-4.mp4", caption: "" },
      { src: "/videos/projects/trust-edge/trust-edge-5.mp4", caption: "" },
    ],
    tags: ["App", "Flutter", "FaspApi", "sandbox"],
    color: "#9D4EDD",
    likes: 0,
  },
  {
    id: "4",
    title: "Fight Cam",
    description: "AI automatic video editor for martial arts",
    thumbnail: "/images/projects/fight-cam/thumbnail.jpg",
    images: [
      { src: "/images/projects/fight-cam/thumbnail.jpg" },
    ],
    videos: [
      { src: "/videos/projects/fight-cam/fight-cam.mp4", caption: "" },
    ],
    tags: ["App", "Flutter", "Firebase", "FFmpeg", "AI"],
    color: "#F72585",
    likes: 0,
  }
];
