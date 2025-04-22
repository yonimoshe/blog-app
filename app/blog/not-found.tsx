import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h2 className="text-6xl font-bold text-red-500 mb-4">404</h2>
      <p className="text-xl font-medium mb-6 text-center">
        Oops! The post you are looking for doesnt exist.
        <br /> You can return to the homepage by clicking the
        <br /> ⬅ Return Home <br />
        or check out other posts.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        ⬅ Return Home
      </Link>
    </div>
  );
}
