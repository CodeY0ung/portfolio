import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { ProjectVisual } from './ProjectVisual';

export function ProjectCard({ project, featured = false }: {project: Project; featured?: boolean}) {
  const href = `/project/${project.slug}`;
  if (featured) return <Link className="case case-featured" href={href} aria-label={`${project.title} 상세 보기`}>
    <div className="featured-copy"><span className="case-label">{project.category}</span><h3 className="case-title">{project.title}</h3>
      <p className="case-subtitle">{project.short}</p><div className="case-tags">{project.tech.map(t => <span key={t}>{t}</span>)}</div>
      <span className="case-arrow">프로젝트 자세히 보기 <span aria-hidden="true">↗</span></span></div>
    <div className="featured-image"><ProjectVisual slug={project.slug}/></div></Link>;
  return <Link className="case case-card" href={href} aria-label={`${project.title} 상세 보기`}>
    <div className="card-copy"><span className="case-label">{project.category}</span><h3 className="case-title">{project.title}</h3><p className="case-subtitle">{project.short}</p></div>
    <div className={`card-visual ${project.slug === 'trust-edge' ? 'trust' : project.slug === 'fight-cam' ? 'fight' : 'aurora'}`}><ProjectVisual slug={project.slug}/></div>
  </Link>;
}
