import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Page() {
  const allPosts = getAllPosts();
  return (
    <section className="pt-36 md:max-w-screen-sm max-w-[90%] mx-auto min-h-screen">
      <h1 className="text-3xl tracking-wide text-center">POSTS</h1>
      {allPosts.map((post) => (
        <div key={post.slug} className="my-12">
          <Link href={`/posts/${post.slug}`}>
            <h2 className="sm:text-2xl text-xl">{post.title}</h2>
          </Link>
          <span className="text-sm font-semibold text-gray-400">
            {post.date}
          </span>
          <p className="text-sm mt-4">{post.excerpt}</p>
        </div>
      ))}
    </section>
  );
}
