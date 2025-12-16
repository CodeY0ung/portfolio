"use client";

import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { useLikes } from "@/hooks/useLikes";

export default function Home() {
  const projectIds = projects.map((p) => p.id);
  const { likes } = useLikes(projectIds);

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            Featured Work
          </h1>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            A curated collection of cutting-edge digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                index % 5 === 0 || index % 5 === 4 ? "md:col-span-2" : ""
              }
            >
              <ProjectCard
                project={{ ...project, likes: likes[project.id] || 0 }}
                index={index}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
