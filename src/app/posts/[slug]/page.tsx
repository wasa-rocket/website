import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "@/lib/api";

type Params = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Params) {
  const post = getPostBySlug(params.slug);
  console.log(post.content);

  if (!post) {
    return <h1>file not found</h1>;
  }

  return (
    <div className="pt-36 md:max-w-screen-sm max-w-[90%] mx-auto min-h-screen">
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        className="markdown"
      >
        {post.content || "content not found"}
      </Markdown>
    </div>
  );
}
