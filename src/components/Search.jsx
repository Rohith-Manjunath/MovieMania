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
        className={`  mx-2 sm:mx-4 ${
          search === "" ? "text-grey-400" : "text-amber-400"
        } ${search === "" ? "cursor-not-allowed" : "cursor-pointer"}`}
        disabled={search === ""}
      >
        Search
      </button>
    </form>
  );
};

export default Search;
