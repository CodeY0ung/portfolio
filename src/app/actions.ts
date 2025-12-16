"use server";

import { supabase } from "@/lib/supabase";

export async function getLikes(projectId: string) {
  try {
    const { data, error } = await supabase
      .from("project_likes")
      .select("likes")
      .eq("project_id", projectId)
      .single();

    if (error) {
      console.error("Error fetching likes:", error);
      return 0;
    }

    return data?.likes || 0;
  } catch (error) {
    console.error("Error in getLikes:", error);
    return 0;
  }
}

export async function incrementLikes(projectId: string) {
  try {
    const { data, error } = await supabase.rpc("increment_likes", {
      project_id_param: projectId,
    });

    if (error) {
      console.error("Error incrementing likes:", error);
      return 0;
    }

    return data || 0;
  } catch (error) {
    console.error("Error in incrementLikes:", error);
    return 0;
  }
}
