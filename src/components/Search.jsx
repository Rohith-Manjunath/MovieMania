"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="my-4 space-y-2 sm:space-y-0 sm:flex items-center justify-between p-4 max-w-[80%] mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search..."
        className="p-2 bg-transparent border rounded-md"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className={`mx-2 sm:mx-4 px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-300 ${
          search === ""
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-amber-500 text-white hover:bg-amber-600"
        }`}
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
