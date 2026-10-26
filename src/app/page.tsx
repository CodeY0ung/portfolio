import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { KnowledgeSection } from "@/components/KnowledgeSection";

export default async function Home() {
  return <div className="shell">
    <section className="hero" id="home">
      <p className="hero-meta">이우영 &nbsp;/&nbsp; BACKEND DEVELOPER</p>
      <h1 className="hero-title">서비스를 만드는<br/><span className="secondary">백엔드 개발자.</span></h1>
      <p className="hero-desc">Spring Boot를 중심으로 웹과 모바일 서비스를<br className="desktop-break"/> 개발하고 운영합니다.</p>
      <div className="hero-actions"><a href="#projects" className="button-primary">프로젝트 보기 <span aria-hidden="true">↗</span></a>
      <a className="link-muted" target="_blank" rel="noopener noreferrer" href="https://github.com/CodeY0ung">GitHub ↗</a></div>
    </section>
    <section className="projects" id="projects"><div className="section-header"><h2>프로젝트</h2><span className="section-count">0{projects.length} PROJECTS</span></div>
      <ProjectCard project={projects[0]} featured/><div className="case-grid">{projects.slice(1).map(p => <ProjectCard project={p} key={p.slug}/>)}</div>
    </section>
    <KnowledgeSection />
    <section className="about" id="about"><div className="about-grid"><h2>소개</h2><div className="about-copy">
      <p>요구사항을 코드로 구현하고, 운영 과정에서 발생한 문제까지 해결하는 개발자를 지향합니다.</p>
      <div className="about-stack">{['Java','Spring Boot','REST API','MySQL','Flutter','React'].map(t=><span key={t}>{t}</span>)}</div>
    </div></div></section>
  </div>;
}
