"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();
  return (
    <>
      <input
        className="rounded-2xl border border-solid border-gray-300 rounded mt-4 ml-4 px-4"
        value={searchText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchText(event.target.value);
          const newSearchParam = new URLSearchParams({ q: event.target.value });
          router.push(`?${newSearchParam}`);
        }}
      />
    </>
  );
};

export default Search;
