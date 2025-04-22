import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action="/blog"
      scroll={false}
      className="search-form flex items-center justify-center gap-2 w-full max-w-xl mx-auto p-4 rounded-lg"
    >
      <input
        name="query"
        defaultValue={query}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search Post"
      />

      <div className="flex items-center gap-2">
        {query && <SearchFormReset />}

        <button
          type="submit"
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
