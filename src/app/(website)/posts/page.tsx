import { getAllPosts } from "@/libs/api";
import Link from "next/link";

export default async function Page() {
  const allPosts = await getAllPosts();
  return (
    <section className="pt-36 md:max-w-screen-sm max-w-[90%] mx-auto min-h-screen">
      <h1 className="text-3xl tracking-wide text-center">POSTS</h1>
      {allPosts.map((post) => (
        <div key={post.id} className="my-12">
          <Link href={`/posts/${post.id}`}>
            <h2 className="sm:text-2xl text-xl hover:underline">
              {post.title}
            </h2>
          </Link>
          <span className="text-sm font-semibold text-gray-400">
            {post.publishedAt}
          </span>
          <p className="text-sm mt-4">{post.description}</p>
        </div>
      ))}
    </section>
  );
}
