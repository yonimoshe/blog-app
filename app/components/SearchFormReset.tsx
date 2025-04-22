"use client";

import Link from "next/link";
import { X } from "lucide-react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button
      type="reset"
      onClick={reset}
      className="p-2 bg-red-500 hover:bg-red-600 rounded-md text-white"
    >
      <Link href="/blog">
        <X className="w-5 h-5" />
      </Link>
    </button>
  );
};

export default SearchFormReset;
