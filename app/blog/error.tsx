"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
}: Readonly<{
  error: Error;
}>) {
  useEffect(() => {
    console.error(error); // Log the error for the developer
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      <h1 className="text-5xl font-bold text-red-500 mb-4">
        Something went wrong 😢
      </h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        An unexpected error occurred. Please try again or return to the
        homepage.
      </p>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          ⬅ Return Home
        </Link>
      </div>
    </div>
  );
}
