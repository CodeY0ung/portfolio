import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export function useLikes(projectIds: string[]) {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAllLikes() {
      // Skip if no Supabase config
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL ||
          process.env.NEXT_PUBLIC_SUPABASE_URL.includes('placeholder')) {
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("project_likes")
          .select("project_id, likes")
          .in("project_id", projectIds);

        if (data && !error) {
          const likesMap: Record<string, number> = {};
          data.forEach((item) => {
            likesMap[item.project_id] = item.likes;
          });
          setLikes(likesMap);
        }
      } catch (error) {
        console.warn("Supabase not configured or table missing:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (projectIds.length > 0) {
      fetchAllLikes();
    }
  }, [projectIds.join(",")]);

  return { likes, isLoading };
}
