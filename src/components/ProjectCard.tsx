"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`} className="block">
      <div
        className="relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-white/10 transition-transform duration-300 hover:scale-105"
        style={{
          aspectRatio: index % 5 === 0 || index % 5 === 4 ? "2/1" : "1/1",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        <div className="relative h-full flex flex-col justify-end p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium rounded-lg bg-white/10 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>

            <p className="text-sm text-white/70 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <Heart className="w-4 h-4 text-white/60" />
              <span className="text-sm font-medium text-white/60">
                {project.likes} likes
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
