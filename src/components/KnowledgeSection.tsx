
import {
  Coffee,
  Layers,
  Database,
  Globe,
  GitBranch,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  {
    title: "Java",
    description: "OOP · Collection · JVM",
    icon: Coffee,
    folder: "JAVA",
  },
  {
    title: "Spring",
    description: "MVC · JPA · Security",
    icon: Layers,
    folder: "Spring",
  },
  {
    title: "Database",
    description: "SQL · JDBC · Transaction",
    icon: Database,
    folder: "DB",
  },
  {
    title: "Web",
    description: "HTTP · Servlet · JSP",
    icon: Globe,
    folder: "JSP",
  },
  {
    title: "Git",
    description: "Branch · Merge · Workflow",
    icon: GitBranch,
    folder: "git",
  },
  {
    title: "CS",
    description: "OS · Network · Data Structure",
    icon: Cpu,
    folder: "CS",
  },
];

const REPO =
  "https://github.com/CodeY0ung/dev_knowledge_base";

export function KnowledgeSection() {
  return (
    <section className="knowledge" id="knowledge">
      <div className="knowledge-heading">
        <span>PORTFOLIO / KNOWLEDGE</span>
      </div>

      <div className="section-header">
        <h2>Development Notes.</h2>
      </div>

      <p className="knowledge-description">
        개발하면서 학습하고 검증한 기술 지식을 정리합니다.
      </p>

      <div className="knowledge-grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <a
              key={category.title}
              href={`${REPO}/tree/main/${category.folder}`}
              target="_blank"
              rel="noopener noreferrer"
              className="knowledge-card"
            >
              <Icon size={24} strokeWidth={1.7} />

              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </a>
          );
        })}
      </div>

      <a
        href={REPO}
        target="_blank"
        rel="noopener noreferrer"
        className="knowledge-footer"
      >
        <div>
          <strong>Knowledge Base</strong>
          <span>GitHub에서 전체 학습 기록 보기</span>
        </div>
        <ArrowUpRight size={20} />
      </a>
    </section>
  );
}
