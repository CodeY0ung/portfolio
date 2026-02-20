"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { useLikes } from "@/hooks/useLikes";

export default function Home() {
  const projectIds = projects.map((p) => p.id);
  const { likes } = useLikes(projectIds);

  const webProjects = projects.filter((p) => p.tags.includes("Web"));
  const appProjects = projects.filter((p) => p.tags.includes("App"));

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            이우영 010-7207-3312
          </p>
        </div>

        {/* Web 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-white/60 mb-6 tracking-widest uppercase">
            Web
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{ ...project, likes: likes[project.id] || 0 }}
              />
            ))}
          </div>
        </section>

        {/* App 섹션 */}
        <section>
          <h2 className="text-2xl font-semibold text-white/60 mb-6 tracking-widest uppercase">
            App
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {appProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{ ...project, likes: likes[project.id] || 0 }}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
