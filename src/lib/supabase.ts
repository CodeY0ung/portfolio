import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getProjectLikes(projectId: string): Promise<number> {
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
}

export async function incrementProjectLikes(
  projectId: string
): Promise<number> {
  const { data, error } = await supabase.rpc("increment_likes", {
    project_id_param: projectId,
  });

  if (error) {
    console.error("Error incrementing likes:", error);
    return 0;
  }

  return data || 0;
}
