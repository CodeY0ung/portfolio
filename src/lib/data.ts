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
      { src: "/images/projects/aurora/screenshot1.jpg", caption: "로딩 화면." },
      { src: "/images/projects/aurora/screenshot2.jpg", caption: "홈 화면. 대화 상대 성별 선택 및 자원 확인." },
      { src: "/images/projects/aurora/screenshot3.jpg", caption: "대화 상대 선택 상세." },
      { src: "/images/projects/aurora/screenshot4.jpg", caption: "일반, 지역, mbti, 매력 모드 선택 가능. 각 모드마다 글귀가 달라짐." },
      { src: "/images/projects/aurora/screenshot5.jpg", caption: "나이대 선택 가능" },
      { src: "/images/projects/aurora/screenshot6.jpg", caption: "전화 대기 중." },
      { src: "/images/projects/aurora/screenshot7.jpg", caption: "전화 대기 중. 시간에 따라 글귀 달라짐." },
      { src: "/images/projects/aurora/screenshot8.jpg", caption: "기본 통화 화면." },
      { src: "/images/projects/aurora/screenshot9.jpg", caption: "상대 프로필 미리 보기 가능." },
      { src: "/images/projects/aurora/screenshot10.jpg", caption: "통화 시간 연장 가능." },
      { src: "/images/projects/aurora/screenshot11.jpg", caption: "통화 종료 후 후기 작성." },
      { src: "/images/projects/aurora/screenshot12.jpg", caption: "재통화 가능." },
      { src: "/images/projects/aurora/screenshot13.jpg", caption: "통화 종료 후 후기 작성." },
      { src: "/images/projects/aurora/screenshot14.jpg", caption: "" },
      { src: "/images/projects/aurora/screenshot15.jpg", caption: "재통화 후 전화번호부에 남기기 가능." },
      { src: "/images/projects/aurora/screenshot16.jpg", caption: "마이페이지." },
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
      { src: "/videos/projects/trust-edge/trust-edge-1.mp4", caption: "화이트 리스트에 있는 url : 바로 접속" },
      { src: "/videos/projects/trust-edge/trust-edge-2.mp4", caption: "블랙 리스트에 있는 url : 차단" },
      { src: "/videos/projects/trust-edge/trust-edge-3.mp4", caption: "화이트 리스트에 있지만 안전한 url : 검사 후 안전으로 표기" },
      { src: "/videos/projects/trust-edge/trust-edge-4.mp4", caption: "블랙 리스트에 없는 위험한 url : 검사 후 위험으로 표기" },
      { src: "/videos/projects/trust-edge/trust-edge-5.mp4", caption: "실행 파일이있는 위험한 url : 검사 후 위험으로 표기" },
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
      { src: "/videos/projects/fight-cam/fight-cam.mp4", caption: "수동 트래킹 전체 흐름." },
    ],
    tags: ["App", "Flutter", "Firebase", "FFmpeg", "AI"],
    color: "#F72585",
    likes: 0,
  }
];
