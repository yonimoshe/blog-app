import Link from "next/link";

export default function Header() {
  return (
    <div>
      <header className=" bg-gray-50 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="mx-1 px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-gray-800 cursor-pointer"
          >
            Navan
          </Link>
          <nav className="flex space-x-6">
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors hover:cursor-pointer"
            >
              All posts
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
