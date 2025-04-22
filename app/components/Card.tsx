import React from "react";
import { BlogPost } from "../blog/page";
import Link from "next/link";
import Image from "next/image";

export default function Card({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map(({ id, title, createdAt, thumbnail }) => (
        <div
          key={id}
          className=" p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all"
        >
          <Link
            href={`/blog/${id}`}
            className="flex flex-col justify-between h-full text-blue-600 font-semibold hover:text-blue-800"
          >
            <h3 className="text-2xl mb-3 line-clamp-3">{title}</h3>
            <div>
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-gray-500 text-sm mt-1 relative-bottom-2">
                {new Date(createdAt).toLocaleDateString("en-us", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}{" "}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
