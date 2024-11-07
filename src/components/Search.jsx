import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";
import { useState } from "react";
import useRecipes from "../recipes/useRecipes";

function Search({ setQuery, isLoading }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleClick() {
    if (!searchQuery.length) return;

    setQuery(searchQuery);
  }

  return (
    <div className="w-full p-2">
      <div
        className={`mx-auto flex w-3/4 justify-between rounded-full bg-[var(--background-color)] py-1 pl-4 pr-1 shadow-lg sm:w-4/6 sm:py-1 sm:pl-5 sm:pr-2`}
      >
        <input
          type="text"
          disabled={isLoading}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-3/4 bg-transparent text-sm focus:outline-none lg:text-xl ${isLoading ? "text-slate-400" : ""}`}
          placeholder="Search by main ingredients"
        />
        <Button type="search" onClick={handleClick} disabled={isLoading}>
          <HiMagnifyingGlass />
        </Button>
      </div>
    </div>
  );
}

export default Search;
