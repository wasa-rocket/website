import HeroImage from "@/components/home/heroImage";
import { getAllPosts } from "@/libs/api";
import Link from "next/link";

export default async function Page() {
  const allPosts = await getAllPosts();
  return (
    <main>
      <section className="h-[66vh] relative">
        <HeroImage src="/posts/heroimage.jpg" alt="Posts" />
      </section>
      <section className="pt-12 md:max-w-screen-sm max-w-[90%] mx-auto">
        <h1 className="text-4xl tracking-wider font-semibold">POSTS</h1>
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
    </main>
  );
}
