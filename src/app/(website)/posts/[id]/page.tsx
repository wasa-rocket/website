import { getPostsbyId } from "@/libs/api";
import Link from "next/link";
import postStyles from "@/components/posts.module.css";

type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  const post = await getPostsbyId(params.id);
  if (!post) {
    return <h1>file not found</h1>;
  }

  return (
    <div className="pt-36 md:max-w-screen-sm max-w-[90%] mx-auto min-h-screen">
      <Link href="/posts" className="underline">記事一覧</Link>
      <h1 className="text-4xl font-semibold mt-6 mb-3">{post.title}</h1>
      <p className="text-gray-400 mb-6">{post.publishedAt}</p>
      <div
        className={postStyles["post"]}
        dangerouslySetInnerHTML={{
          __html: post.body,
        }}
      />
    </div>
  );
}
