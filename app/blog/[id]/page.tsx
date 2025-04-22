export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return {
      title: "Post Not Found | Navan Blog",
      description: "The requested post does not exist.",
    };
  }

  return {
    title: `${post.title} | Navan Blog`,
    description: post.content.slice(0, 150) + "...",
  };
}

import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  slug: string;
  thumbnail: string;
  category: string;
};

async function getBlogPost(id: string): Promise<BlogPost | null> {
  const res = await fetch(
    `https://67e9107ebdcaa2b7f5b8781a.mockapi.io/api/blog/${id}`,
    {
      next: { revalidate: 60 }, // ISR - regenerate every 60 seconds
    }
  );

  if (res.status === 404) {
    notFound(); // actviating not-found.tsx
  } else if (!res.ok) {
    throw new Error("Unexpected error"); // actviating error.tsx
  }

  return res.json();
}

export default async function BlogPostPage({
  params,
}: {
  params: { id: string };
}) {
  // await new Promise((resolve) => setTimeout(resolve, 200)); // Simulate a delay
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-2">
        {new Date(post.createdAt).toLocaleDateString("en-us", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}{" "}
        | {post.category}
      </div>
      <div className="relative w-full max-w-[300px] aspect-square rounded-lg overflow-hidden mb-4">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <p className="leading-relaxed whitespace-pre-line">{post.content}</p>
    </main>
  );
}
