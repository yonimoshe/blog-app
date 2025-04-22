import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <main className="p-8 jastify-center items-center flex flex-col min-h-screen">
        <h1 className="text-5xl text-black-600 text-center mt-15">
          Welcome To Navan Blog Posts App
        </h1>
        <p className="text-2xl text-black-400 text-center mt-4">
          Click below to view all blog posts:
        </p>
        <div className="w-35 text-center px-6 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-15">
          <Link href="/blog" className="text-white-600 cursor-pointer">
            Go to Posts
          </Link>
        </div>
      </main>
      ;
    </>
  );
};

export default Home;
