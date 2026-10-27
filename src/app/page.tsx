
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { KnowledgeSection } from '@/components/KnowledgeSection';

export default async function Home() {
  return (
    <div className="shell">
      {/* 소개 */}
      <section className="hero" id="about">
        <p className="hero-meta">
          이우영 &nbsp;/&nbsp; SOFTWARE DEVELOPER
        </p>

        <h1 className="hero-title">
          기술로 문제를 해결하고,
          <br />
          <span className="secondary">서비스를 만드는 개발자.</span>
        </h1>

        <p className="hero-desc">
          Java와 Spring Boot를 주력으로 웹서비스를 개발하고,
          <br className="desktop-break" />
          Flutter와 JavaScript를 활용해 서비스의 전체 흐름을 구현해 왔습니다.
          <br />
          백엔드 전문성을 기반으로 풀스택 역량을 확장하고,
          <br className="desktop-break" />
          AI·AX 기술을 접목해 실질적인 문제를 해결하는 개발자를 지향합니다.
        </p>

        <div className="about-stack" style={{ marginBottom: 32 }}>
          {[
            'Java',
            'Spring Boot',
            'MySQL',
            'Flutter',
            'JavaScript',
            'Python',
            'FastAPI'
          ].map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            프로젝트 보기 <span aria-hidden="true">↗</span>
          </a>

          <a
            className="link-muted"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CodeY0ung"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* 프로젝트 */}
      <section className="projects" id="projects">
        <div className="section-header">
          <h2>프로젝트</h2>
          <span className="section-count">
            0{projects.length} PROJECTS
          </span>
        </div>

        <ProjectCard project={projects[0]} featured />

        <div className="case-grid">
          {projects.slice(1).map((project) => (
            <ProjectCard
              project={project}
              key={project.slug}
            />
          ))}
        </div>
      </section>

      {/* 기술 기록 */}
      <KnowledgeSection />
    </div>
  );
}
