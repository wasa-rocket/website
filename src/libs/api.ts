import { client } from "@/libs/client";
import { PostContent } from "@/libs/types";

export async function getAllPosts() {
  const data = await client.get({ endpoint: "posts" });
  const contents = data.contents as PostContent[];
  return contents as PostContent[];
}

export async function getPostsbyId(id: string) {
  const data = await client.get({ endpoint: "posts", contentId: id });
  return data as PostContent;
}
