export type ProjectMedia = { type: 'image' | 'video'; src: string; label: string };
export type Project = {slug: string;title: string;short: string;category: string;role: string;tech: string[];overview: string;contributions: string[];architecture: string[];architectureNote: string;issueTitle: string;issue: string;issueFoot: string;image: string;media: ProjectMedia[]};

/** Prototype copy derived from portfolio repository. Validate architecture and outcomes before publishing as confirmed facts. */
export const projects: Project[] = [
  {
    "slug": "nongjangs",
    "title": "농장스 주문 시스템",
    "short": "농산물 주문과 운영 관리를 위한 웹 서비스",
    "category": "실무 프로젝트",
    "role": "단독 개발 · 웹 / 백엔드",
    "tech": [
      "Spring Boot",
      "React",
      "MySQL"
    ],
    "overview": "소규모 농산물 판매를 위한 주문 접수와 관리자 운영 흐름을 구현했습니다. 주문 화면부터 서버 API, 관리자 화면까지 서비스의 주요 흐름을 연결했습니다.",
    "contributions": [
      "React 기반 주문 및 관리자 화면 구현",
      "Spring Boot REST API 개발 및 연동",
      "AWS EC2 배포 환경 운영과 장애 대응"
    ],
    "architecture": [
      "React",
      "Spring Boot",
      "MySQL"
    ],
    "architectureNote": "사용 기술을 기준으로 정리한 개념 구조입니다. 실제 배포·인증 구조는 추후 보완합니다.",
    "issueTitle": "EC2 서비스 접근 장애",
    "issue": "운영 중 서버 접근 문제가 발생했으며, 인스턴스의 메모리 및 접근 환경을 확인하고 스왑 공간과 직렬 콘솔을 활용해 대응했습니다.",
    "issueFoot": "재현 조건, 원인 및 사후 개선 내용은 실제 로그를 바탕으로 추가할 예정입니다.",
    "image": "/images/projects/nongjangs/thumbnail.png",
    "media": [
      {
        "type": "image",
        "src": "/images/projects/nongjangs/screenshot1.png",
        "label": "로그인 화면"
      },
      {
        "type": "image",
        "src": "/images/projects/nongjangs/screenshot2.png",
        "label": "주문 화면"
      },
      {
        "type": "image",
        "src": "/images/projects/nongjangs/screenshot3.png",
        "label": "관리자 화면"
      }
    ]
  },
  {
    "slug": "aurora",
    "title": "Aurora",
    "short": "낯선 사람과의 음성 대화를 연결하는 모바일 앱",
    "category": "개인 프로젝트",
    "role": "모바일 앱 MVP 개발",
    "tech": [
      "Flutter",
      "Spring Boot",
      "MySQL"
    ],
    "overview": "상대 조건을 선택하고 통화 대기, 통화, 후기, 재통화로 이어지는 사용자 경험을 설계한 앱입니다. 서비스의 전체 모바일 화면 흐름을 구현했습니다.",
    "contributions": [
      "조건·모드 선택 화면 및 통화 대기 UI",
      "통화 화면, 후기 및 재통화 사용자 흐름",
      "서비스 화면 구성 및 상태 전환 프로토타이핑"
    ],
    "architecture": [
      "Flutter",
      "Spring Boot",
      "MySQL"
    ],
    "architectureNote": "수정 예정.",
    "issueTitle": "기술적 문제 해결 기록",
    "issue": "실시간 통화 상태 관리나 네트워크 예외 처리의 실제 구현 내용을 확인한 뒤 기록할 예정입니다.",
    "issueFoot": "수정 예정.",
    "image": "/images/projects/aurora/thumbnail.jpg",
    "media": [
      {
        "type": "image",
        "src": "/images/projects/aurora/screenshot2.jpg",
        "label": "홈"
      },
      {
        "type": "image",
        "src": "/images/projects/aurora/screenshot6.jpg",
        "label": "통화 대기"
      },
      {
        "type": "image",
        "src": "/images/projects/aurora/screenshot8.jpg",
        "label": "통화 화면"
      },
      {
        "type": "image",
        "src": "/images/projects/aurora/screenshot11.jpg",
        "label": "후기 화면"
      },
      {
        "type": "image",
        "src": "/images/projects/aurora/screenshot16.jpg",
        "label": "마이페이지"
      }
    ]
  },
  {
    "slug": "trust-edge",
    "title": "Trust Edge",
    "short": "위험한 URL을 검사하고 경고하는 보안 앱",
    "category": "팀 프로젝트",
    "role": "PM · 기획 및 기술 선정",
    "tech": [
      "Flutter",
      "FastAPI",
      "YARA"
    ],
    "overview": "스미싱 URL로부터 사용자를 보호하기 위한 프로젝트입니다. URL 검사의 결과에 따라 안전, 차단 또는 추가 검사 흐름을 제공하도록 기획했습니다.",
    "contributions": [
      "제품 요구사항과 검사 시나리오 기획",
      "Flutter·FastAPI 등 기술 구조 선정",
      "팀 프로젝트 일정·기능 범위 조율"
    ],
    "architecture": [
      "Flutter",
      "FastAPI",
      "URL 검사"
    ],
    "architectureNote": "수정 예정.",
    "issueTitle": "URL 판단 흐름 구분",
    "issue": "화이트리스트, 블랙리스트, 미등록 URL에 따라 다른 검사 및 경고 흐름을 구성했습니다.",
    "issueFoot": "수정 예정",
    "image": "/images/projects/trust-edge/thumbnail.jpg",
    "media": [
      {
        "type": "video",
        "src": "/videos/projects/trust-edge/trust-edge-1.mp4",
        "label": "안전 URL 처리"
      },
      {
        "type": "video",
        "src": "/videos/projects/trust-edge/trust-edge-2.mp4",
        "label": "위험 URL 차단"
      },
      {
        "type": "video",
        "src": "/videos/projects/trust-edge/trust-edge-4.mp4",
        "label": "미등록 URL 검사"
      },
      {
        "type": "video",
        "src": "/videos/projects/trust-edge/trust-edge-5.mp4",
        "label": "실행 파일 URL 검사"
      }
    ]
  },
  {
    "slug": "fight-cam",
    "title": "Fight Cam",
    "short": "움직이는 피사체를 따라가는 영상 편집 앱",
    "category": "개인 프로젝트",
    "role": "Flutter 앱 / 수동 트래킹 MVP",
    "tech": [
      "Flutter",
      "FFmpeg",
      "Firebase"
    ],
    "overview": "격투기 영상에서 피사체를 따라가며 화면의 위치와 확대 비율을 조절하는 편집 도구입니다. 가상 조이스틱 기반의 수동 트래킹 편집 흐름을 먼저 구현했습니다.",
    "contributions": [
      "가상 조이스틱으로 팬·줌을 조절하는 편집 UI",
      "수동 트래킹 MVP 및 편집 흐름 구현",
      "실제 편집 과정을 보여주는 시연 영상 제작"
    ],
    "architecture": [
      "Flutter",
      "편집 제어",
      "영상 처리"
    ],
    "architectureNote": "수정 예정",
    "issueTitle": "영상 트래킹 제어 UX",
    "issue": "이동하는 대상을 사용자가 직관적으로 따라갈 수 있도록 수동 조작 방식을 우선 구현했습니다.",
    "issueFoot": "수정 예정",
    "image": "/images/projects/fight-cam/thumbnail.jpg",
    "media": [
      {
        "type": "video",
        "src": "/videos/projects/fight-cam/fight-cam.mp4",
        "label": "수동 트래킹 시연"
      }
    ]
  }
];

export function findProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
