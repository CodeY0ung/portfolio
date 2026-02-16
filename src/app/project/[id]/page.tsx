"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const currentIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[currentIndex];

  const [likes, setLikes] = useState(project?.likes || 0);
  const [hasLiked, setHasLiked] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchLikes() {
      setIsLoading(true);

      // Check localStorage for liked status
      const likedProjects = JSON.parse(
        localStorage.getItem("likedProjects") || "{}"
      );
      setHasLiked(!!likedProjects[projectId]);

      // Fetch current likes from Supabase
      try {
        const { data, error } = await supabase
          .from("project_likes")
          .select("likes")
          .eq("project_id", projectId)
          .single();

        if (data && !error) {
          setLikes(data.likes);
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchLikes();
  }, [projectId]);

  const handleLike = async () => {
    if (hasLiked) return;

    // Update localStorage
    const likedProjects = JSON.parse(
      localStorage.getItem("likedProjects") || "{}"
    );
    likedProjects[projectId] = true;
    localStorage.setItem("likedProjects", JSON.stringify(likedProjects));

    // Optimistic UI update
    setLikes((prev) => prev + 1);
    setHasLiked(true);

    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#5E6AD2", "#00D9FF", "#F72585", "#06FFA5"],
    });

    // Update Supabase
    try {
      const { data, error } = await supabase.rpc("increment_likes", {
        project_id_param: projectId,
      });

      if (data && !error) {
        setLikes(data);
      }
    } catch (error) {
      console.error("Error incrementing likes:", error);
      // Revert optimistic update on error
      setLikes((prev) => prev - 1);
      setHasLiked(false);
      const likedProjects = JSON.parse(
        localStorage.getItem("likedProjects") || "{}"
      );
      delete likedProjects[projectId];
      localStorage.setItem("likedProjects", JSON.stringify(likedProjects));
    }
  };

  const navigateToProject = (newDirection: number) => {
    const newIndex =
      (currentIndex + newDirection + projects.length) % projects.length;
    const newProject = projects[newIndex];
    setDirection(newDirection);
    router.push(`/project/${newProject.id}`);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <p className="text-[var(--text-muted)]">Project not found</p>
      </div>
    );
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen bg-[var(--background)] relative">
      <Link
        href="/"
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
      >
        <X className="w-5 h-5" />
        <span className="text-sm font-medium">Close</span>
      </Link>

      <button
        onClick={() => navigateToProject(-1)}
        className="fixed left-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-[var(--surface)] border border-white/10 hover:border-white/20 transition-all hover:scale-110"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={() => navigateToProject(1)}
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 p-4 rounded-full bg-[var(--surface)] border border-white/10 hover:border-white/20 transition-all hover:scale-110"
      >
        <ArrowRight className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={projectId}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="min-h-screen"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24">
            <div className="space-y-8">
              <div className="relative h-[60vh] rounded-3xl overflow-hidden border border-white/10 bg-[var(--surface)]">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-contain"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${project.color}33, transparent)`,
                  }}
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4 flex-1">
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                      {project.title}
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-sm font-medium rounded-xl bg-[var(--surface)] border border-white/10 text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-8">
                  {/* Videos */}
                  {project.videos?.map((video, idx) => (
                    <div
                      key={`video-${idx}`}
                      className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-[var(--surface)] col-span-2"
                    >
                      <video
                        src={video}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}

                  {/* Images */}
                  {project.images.slice(1).map((image, idx) => (
                    <div
                      key={`image-${idx}`}
                      className="relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-[var(--surface)]"
                    >
                      <Image
                        src={image}
                        alt={`${project.title} screenshot ${idx + 2}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <motion.button
        onClick={handleLike}
        disabled={hasLiked}
        className={cn(
          "fixed bottom-8 left-1/2 -translate-x-1/2 z-50",
          "flex items-center gap-3 px-8 py-4 rounded-full",
          "bg-[var(--accent)] text-white font-semibold",
          "transition-all duration-300",
          "hover:scale-110 active:scale-95",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          "shadow-2xl shadow-accent/50"
        )}
        whileHover={{ scale: hasLiked ? 1 : 1.1 }}
        whileTap={{ scale: hasLiked ? 1 : 0.95 }}
      >
        <Heart
          className={cn("w-5 h-5", hasLiked && "fill-current")}
        />
        <span>{likes} Likes</span>
      </motion.button>
    </div>
  );
}
