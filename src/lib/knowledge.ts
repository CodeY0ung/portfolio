
const OWNER = "CodeY0ung";
const REPO = "dev_knowledge_base";
const BASE = `https://api.github.com/repos/${OWNER}/${REPO}/contents`;

export type KnowledgeDoc = {
  name: string;
  path: string;
  url: string;
};

export type KnowledgeCategory = {
  name: string;
  docs: KnowledgeDoc[];
};

type GitHubItem = {
  name: string;
  path: string;
  type: "file" | "dir";
  html_url: string;
};

async function getContents(path = ""): Promise<GitHubItem[]> {
  const res = await fetch(`${BASE}/${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API: ${res.status}`);
  }

  const data: unknown = await res.json();
  return Array.isArray(data) ? data : [];
}

export async function getKnowledge(): Promise<KnowledgeCategory[]> {
  try {
    const root = await getContents();

    const folders = root.filter(
      (item) => item.type === "dir" && !item.name.startsWith(".")
    );

    const categories = await Promise.all(
      folders.map(async (folder) => {
        try {
          const files = await getContents(
            folder.path.split("/").map(encodeURIComponent).join("/")
          );

          const docs = files
            .filter(
              (file) =>
                file.type === "file" &&
                file.name.endsWith(".md") &&
                file.name.toLowerCase() !== "readme.md"
            )
            .map((file) => ({
              name: file.name.replace(/\.md$/i, ""),
              path: file.path,
              url: file.html_url,
            }));

          return { name: folder.name, docs };
        } catch {
          return { name: folder.name, docs: [] };
        }
      })
    );

    return categories.filter((category) => category.docs.length > 0);
  } catch (error) {
    console.error("Knowledge fetch failed:", error);
    return [];
  }
}
