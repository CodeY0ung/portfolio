export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  videos?: string[];
  tags: string[];
  color: string;
  likes: number;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "농장스 주문폼",
    description: "Nongjangs order form renewal",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      "https://images.unsplash.com/photo-1676299081847-824916de030a?w=1200&q=80",
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
      "/images/projects/aurora/screenshot1.jpg",
      "/images/projects/aurora/screenshot2.jpg",
      "/images/projects/aurora/screenshot3.jpg",
      "/images/projects/aurora/screenshot4.jpg",
      "/images/projects/aurora/screenshot5.jpg",
      "/images/projects/aurora/screenshot6.jpg",
      "/images/projects/aurora/screenshot7.jpg",
      "/images/projects/aurora/screenshot8.jpg",
      "/images/projects/aurora/screenshot9.jpg",
      "/images/projects/aurora/screenshot10.jpg",
      "/images/projects/aurora/screenshot11.jpg",
      "/images/projects/aurora/screenshot12.jpg",
      "/images/projects/aurora/screenshot13.jpg",
      "/images/projects/aurora/screenshot14.jpg",
      "/images/projects/aurora/screenshot15.jpg",
      "/images/projects/aurora/screenshot16.jpg",
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
      "/images/projects/trust-edge/thumbnail.jpg",
    ],
    videos: [
      "/videos/projects/trust-edge/trust-edge-1.mp4",
      "/videos/projects/trust-edge/trust-edge-2.mp4",
      "/videos/projects/trust-edge/trust-edge-3.mp4",
      "/videos/projects/trust-edge/trust-edge-4.mp4",
      "/videos/projects/trust-edge/trust-edge-5.mp4",
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
      "/images/projects/fight-cam/thumbnail.jpg",
    ],
    videos: [
      "/videos/projects/fight-cam/fight-cam.mp4",
    ],
    tags: ["App", "Flutter", "Firebase", "FFmpeg", "AI"],
    color: "#F72585",
    likes: 0,
  }
];
