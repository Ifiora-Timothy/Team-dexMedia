"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";

const TopSearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative max-w-md w-full">
      <Search
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <input
        type="text"
        placeholder="Search News.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(
          `
          max-w-full
          pr-10
          pl-4
          py-2
          rounded-[20px]
         w-[600px]

          outline-none
          transition-colors
          duration-200
         text-sm
         font-semibold
          focus:border-gray-400
          text-gray-500
        `,
          {
            "border border-gray-400": isFocused,
            "border-none": !isFocused,
          }
        )}
      />
    </div>
  );
};

export default TopSearchBar;
