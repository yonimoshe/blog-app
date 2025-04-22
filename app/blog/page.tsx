export const metadata = {
  title: "Navan Blog",
  description: "Read blog posts about anything, insights, and lots of news.",
};

import Card from "../components/Card";
import SearchForm from "../components/SearchForm";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  slug: string;
  thumbnail: string;
};

async function getPosts(): Promise<BlogPost[]> {
  // await new Promise((resolve) => setTimeout(resolve, 200)); // I simulate a delay for demo purposes here and in the dynamic route page
  const res = await fetch(
    "https://67e9107ebdcaa2b7f5b8781a.mockapi.io/api/blog",
    {
      next: { revalidate: 60 }, // Enables ISR (Incremental Static Regeneration)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return res.json();
}

export default async function AllBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const normalizedQuery = query?.toLowerCase() || "";

  const allPosts: BlogPost[] = await getPosts();

  const posts: BlogPost[] = normalizedQuery
    ? allPosts.filter((post) =>
        post.title.toLowerCase().includes(normalizedQuery)
      )
    : allPosts;
  // console.log(allPosts);

  return (
    <main className="p-8">
      <h1 className="text-2xl text-center font-bold mb-4">Blog Posts List</h1>
      <SearchForm query={query} />
      {posts?.length === 0 ? (
        <p className="text-gray-500 text-center italic">No posts available.</p>
      ) : (
        <ul className="space-y-4">{<Card posts={posts} />}</ul>
      )}
    </main>
  );
}
