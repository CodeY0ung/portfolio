export type ProjectMedia = { type: 'image' | 'video'; src: string; label: string };
export type Project = {slug: string;title: string;short: string;category: string;role: string;tech: string[];overview: string;contributions: string[];architecture: string[];architectureNote: string;issueTitle: string;issue: string;issueFoot: string;image: string;media: ProjectMedia[]};

/** Prototype copy derived from portfolio repository. Validate architecture and outcomes before publishing as confirmed facts. */
export const projects: Project[] = [
  
  {
    slug: "nongjangs",
    title: "농장스 주문 시스템",
    short: "매주 상품 구성이 바뀌는 농산물 주문·관리 웹서비스",
    category: "실무 프로젝트",
    role: "단독 웹 개발 · DB 설계 · 배포 및 운영",
  
    tech: [
      "Java",
      "Spring Boot",
      "Thymeleaf",
      "Spring Data JPA",
      "MySQL",
      "AWS EC2"
    ],
  
    overview:
      "소규모 농가의 농산물을 판매하기 위한 주문 및 관리자 웹서비스입니다. 매주 판매 상품이 변경되는 운영 환경에 맞춰 주문 접수, 상품 관리, 주문 내역 조회 등의 기능을 구현했습니다. 데이터베이스 설계부터 서버 개발, 화면 구현, 배포 및 유지보수까지 담당했습니다.",
  
    contributions: [
      "Thymeleaf 기반 주문 및 관리자 화면 구현",
      "Spring Boot 기반 주문·상품·회원 관리 기능 개발",
      "MySQL 기반 ERD 설계 및 데이터베이스 구축",
      "Spring Data JPA를 활용한 엔티티 및 연관관계 설계",
      "AWS EC2 배포 및 서비스 운영·유지보수"
    ],
  
    architecture: [
      "Thymeleaf",
      "Spring MVC",
      "Service / JPA",
      "MySQL"
    ],
  
    architectureNote:
      "Spring Boot와 Thymeleaf를 활용한 서버 사이드 렌더링(SSR) 구조입니다. Controller에서 요청을 처리하고 Service 계층에서 비즈니스 로직을 수행하며, Spring Data JPA를 통해 MySQL에 데이터를 저장합니다. 애플리케이션은 AWS EC2에 배포하여 운영했습니다.",
  
    issueTitle:
      "EC2 서버 자원 문제 및 주간 상품 변경 대응",
  
    issue:
      "① EC2 서버 운영 중 CPU 사용률이 100%에 도달하고 서비스 접근에 문제가 발생했습니다. 서버 자원 상태를 점검하고 EC2 직렬 콘솔 및 스왑 메모리 설정을 활용해 복구를 시도했습니다. 다만 CPU 사용률 상승의 직접적인 원인은 별도 분석이 필요합니다.\n\n② 매주 판매 상품 구성이 변경되는 환경에서 과거 주문 내역을 유지해야 했습니다. 현재 판매 상품과 주문 당시 상품 정보를 분리하고, OrderedItem에 상품명·가격·수량을 별도로 저장했습니다. 이를 통해 판매 상품 목록이 변경되어도 기존 주문 정보를 보존하도록 설계했습니다.",
  
    issueFoot:
      "개선점: 상품 정보를 삭제하는 대신 판매 상태 및 판매 기간을 관리했다면 과거 상품 정보의 재사용과 운영 이력 관리가 더 용이했을 것입니다. 또한 EC2 장애는 메모리 부족, CPU 사용 프로세스, 로그 등을 구분해 원인을 진단할 필요가 있습니다.",
  
    image: "/images/projects/nongjangs/thumbnail.png",
  
    media: [
      {
        type: "image",
        src: "/images/projects/nongjangs/screenshot1.png",
        label: "로그인 화면"
      },
      {
        type: "image",
        src: "/images/projects/nongjangs/screenshot2.png",
        label: "주문 화면"
      },
      {
        type: "image",
        src: "/images/projects/nongjangs/screenshot3.png",
        label: "관리자 화면"
      }
    ]
  },

  {
    "slug": "aurora",
    "title": "Aurora",
    "short": "무작위 유저와 음성 대화를 연결하는 모바일 앱",
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
    slug: "trust-edge",
    title: "Trust Edge",
    short: "악성 URL 및 스미싱 위험 탐지 모바일 앱",
    category: "팀 프로젝트",
    role: "백엔드 개발 · UX 기획 · 기술 선정",
  
    tech: [
      "Flutter",
      "Dart",
      "Python",
      "FastAPI",
      "YARA"
    ],
  
    overview:
      "스미싱 및 악성 URL로부터 사용자를 보호하기 위한 모바일 보안 서비스입니다. 사용자가 URL에 접근하기 전에 위험 요소를 분석하고, 검사 결과에 따라 안전 여부와 경고 정보를 제공하도록 설계했습니다.",
  
    contributions: [
      "YARA Rule 기반 보조 탐지 및 FastAPI 백엔드 구현",
      "Python 기반 URL 정적 분석과 위험도 평가 로직 구성",
      "모바일 사용자 관점의 URL 검사 및 경고 UX 기획",
      "Flutter와 FastAPI를 연결하는 서비스 구조 설계"
    ],
  
    architecture: [
      "Flutter",
      "FastAPI",
      "Python / YARA",
      "위험도 평가"
    ],
  
    architectureNote:
      "Flutter 앱에서 URL 검사 요청을 전달하면 FastAPI 서버가 검사를 수행하는 구조입니다. Python으로 URL 구조, 도메인, 파일 확장자, 스크립트 패턴 등을 분석하고 YARA Rule을 활용해 추가 악성 패턴을 탐지합니다. 탐지 항목별 가중치를 합산하여 위험도를 분류하며, 심층 분석을 위한 외부 Hybrid Analysis API 연동 코드도 포함되어 있습니다.",
  
    issueTitle:
      "Dart 기반 보안 탐지 구현의 한계",
  
    issue:
      "초기에는 Flutter와 Dart만으로 URL 탐지 기능을 구현하려 했으나, 다양한 악성 패턴 분석과 탐지 규칙을 관리하는 데 어려움이 있었습니다. 이를 해결하기 위해 검사 로직을 Python 기반 FastAPI 서버로 분리했습니다. Python으로 URL 정적 분석을 수행하고, yara-python을 활용해 별도의 YARA 규칙 파일을 로딩하여 추가 위험 패턴을 검사하도록 구성했습니다. 이를 통해 모바일 UI와 보안 분석 로직의 역할을 분리했습니다.",
  
    issueFoot:
      "향후 개선: 현재의 규칙 기반 탐지는 새로운 공격 패턴에 대응하려면 규칙을 지속적으로 관리해야 합니다. 추후 AI 기반 URL 분류 모델을 추가하고 기존 규칙 기반 검사와 결합하여 탐지 정확도를 개선할 계획입니다.",
  
    image: "/images/projects/trust-edge/thumbnail.jpg",
  
    media: [
      {
        type: "video",
        src: "/videos/projects/trust-edge/trust-edge-1.mp4",
        label: "안전 URL 처리"
      },
      {
        type: "video",
        src: "/videos/projects/trust-edge/trust-edge-2.mp4",
        label: "위험 URL 차단"
      },
      {
        type: "video",
        src: "/videos/projects/trust-edge/trust-edge-4.mp4",
        label: "미등록 URL 검사"
      },
      {
        type: "video",
        src: "/videos/projects/trust-edge/trust-edge-5.mp4",
        label: "실행 파일 URL 검사"
      }
    ]
  },

  {
    slug: "fight-cam",
    title: "Fight Cam",
    short: "MMA 스파링 영상을 위한 AI·수동 트래킹 편집 앱",
    category: "개인 프로젝트",
    role: "기술 스택 선정 · UI/UX 설계 · 트래킹 방식 설계",
  
    tech: [
      "Flutter",
      "Dart",
      "Google ML Kit",
      "FFmpeg"
    ],
  
    overview:
      "MMA 스파링 영상에서 원하는 선수를 따라가도록 화면의 위치와 확대 비율을 조절하는 모바일 편집 앱입니다. Google ML Kit을 이용한 자동 추적과 가상 조이스틱을 이용한 수동 팬·줌 편집을 결합했습니다.",
  
    contributions: [
      "Flutter, Google ML Kit, FFmpeg 기반 기술 스택 선정",
      "모바일 편집 화면과 가상 조이스틱 팬·줌 UI/UX 설계",
      "자동 추적 한계 분석 및 수동 편집을 통한 보정 흐름 설계",
      "추적 대상 지정, 궤적 생성, 카메라 이동 및 영상 출력 흐름 구현"
    ],
  
    architecture: [
      "Flutter 편집 UI",
      "ML Kit Object Detection",
      "추적 좌표 보정",
      "FFmpeg 영상 출력"
    ],
  
    architectureNote:
      "FFmpeg로 영상 프레임을 추출하고 ML Kit Object Detection의 trackingId와 거리 기반 매칭으로 대상을 추적합니다. Alpha-Beta-Gamma Filter로 위치를 예측하고 Catmull-Rom 보간으로 15fps 추적 결과를 30fps 경로로 변환합니다. 수동 편집에서는 프레임별 팬·줌 입력을 기록하고 Moving Average로 카메라 이동 경로를 평활화합니다.",
  
    issueTitle:
      "다중 인물 환경에서 트래킹 대상이 바뀌는 문제",
  
    issue:
      "ML Kit Pose Detection 기반 접근은 두 선수가 교차하거나 가려질 때 특정 선수를 일관되게 추적하기 어려웠습니다. 여러 추적 방식을 검토한 뒤 Object Detection의 trackingId 고정, 최근 위치와의 거리 기반 재탐색, 위치 예측을 조합했습니다. 그래도 대상이 바뀌거나 사라질 수 있어 사용자가 영상의 팬·줌 경로를 직접 보정할 수 있는 수동 편집 기능을 제공했습니다.",
  
    issueFoot:
      "향후 ByteTrack, BoT-SORT 및 Person Re-ID를 연구하여 선수 교차·가림 상황에서도 동일 인물을 유지하는 자동 트래킹 정확도를 높일 계획입니다. 현재 추적 성공률은 별도로 검증하지 않았습니다.",
  
    image: "/images/projects/fight-cam/thumbnail.jpg",
  
    media: [
      {
        type: "video",
        src: "/videos/projects/fight-cam/fight-cam.mp4",
        label: "수동 트래킹 시연"
      }
    ]
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}
