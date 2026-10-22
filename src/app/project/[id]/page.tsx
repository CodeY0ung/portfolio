import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { ProjectVisual } from '@/components/ProjectVisual';
import { MediaGallery } from '@/components/MediaGallery';
import { findProject, projects } from '@/lib/projects';

const legacyIds: Record<string, string> = { '1':'nongjangs', '2':'aurora', '3':'trust-edge', '4':'fight-cam' };
type Props = { params: Promise<{id:string}> };
export function generateStaticParams() { return [...projects.map(p=>({id:p.slug})), ...Object.keys(legacyIds).map(id=>({id}))]; }
export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {id}=await params;
  const p=findProject(legacyIds[id] ?? id);
  return p ? {title:`${p.title} | 이우영`, description:p.short} : {title:'프로젝트를 찾을 수 없습니다'};
}
export default async function ProjectPage({params}: Props) {
  const {id}=await params;
  if (legacyIds[id]) redirect(`/project/${legacyIds[id]}`);
  const project=findProject(id);
  if (!project) notFound();
  return <div className="shell detail">
    <Link className="back-link" href="/#projects"><span aria-hidden="true">←</span> 모든 프로젝트</Link>
    <header className="detail-header"><p className="detail-eyebrow">{project.category}</p><h1>{project.title}</h1><p>{project.short}</p>
      <div className="detail-meta"><div className="detail-meta-item"><span className="detail-meta-label">담당</span><span className="detail-meta-value">{project.role}</span></div>
      <div className="detail-meta-item"><span className="detail-meta-label">기술</span><span className="detail-meta-value">{project.tech.join(' · ')}</span></div></div>
    </header>
    <div className={`detail-preview ${id === 'nongjangs' ? '' : id === 'trust-edge' ? 'trust' : id === 'fight-cam' ? 'fight' : 'aurora'}`}>
      <ProjectVisual slug={id}/>
    </div>
    <div className="detail-sections">
      <section className="detail-section"><h2>프로젝트 개요</h2><p>{project.overview}</p></section>
      <section className="detail-section"><h2>담당한 일</h2><ul className="contributions">{project.contributions.map(x=><li key={x}>{x}</li>)}</ul></section>
      <section className="detail-section"><h2>기술과 구조</h2><div><div className="architecture">{project.architecture.map((t,i)=><span className="arch-group" key={t}>{i>0 && <span className="arch-arrow" aria-hidden="true">→</span>}<span className="arch-node">{t}</span></span>)}</div><p className="small-note">{project.architectureNote}</p></div></section>
      <section className="detail-section"><h2>문제 해결</h2><div><h3 className="issue-title">{project.issueTitle}</h3><p>{project.issue}</p><p className="small-note">{project.issueFoot}</p></div></section>
      <section className="detail-section"><h2>화면과 시연</h2><MediaGallery media={project.media}/></section>
    </div>
    <div className="detail-ending"><Link href="/#projects">다른 프로젝트 보기 →</Link></div>
  </div>;
}
