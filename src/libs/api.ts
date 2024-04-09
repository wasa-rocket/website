import { client } from "@/libs/client";
import { PostContent } from "@/libs/types";

export async function getAllPosts() {
  const data = await client.get({ endpoint: "posts" });
  const contents = data.contents as PostContent[];
  console.log(contents)
  return contents;
}
