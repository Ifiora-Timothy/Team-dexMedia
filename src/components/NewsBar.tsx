import { clubMatches } from "@/data";
import clsx from "clsx";
import { Outfit, Poppins } from "next/font/google";
import React from "react";
import SportsCard from "./SportsCard";

const NewsBar = () => {
  const newsCategory = "Sports";
  
  return (
    <div className={clsx( " font-poppins w-full")}>
      <h3 className={` font-medium font-outfit text-2xl`}>
        <span className="font-bold">{newsCategory}</span> News
      </h3>
      {/* all news */}
      <div className="w-full flex mt-3 flex-col gap-3">
        {clubMatches.map((news, index) => (
          <div className="w-full">
            <SportsCard matchData={news} key={news.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBar;
