import { clubMatches } from "@/data";
import clsx from "clsx";
import { Outfit, Poppins } from "next/font/google";
import React from "react";
import SportsCard from "./SportsCard";
import { ImageIcon, MoveDiagonal, Send, Video } from "lucide-react";
import CreateNewsCard from "./NewsCard";

const NewsBar = () => {
  const newsCategory = "Sports";

  return (
    <div className={clsx(" font-poppins w-full")}>
      <h3 className={` font-medium font-outfit text-xl`}>
        <span className="font-bold">{newsCategory}</span> News
      </h3>
      {/* all news */}
      <div className="w-full flex mt-3 mb-3 flex-col gap-3">
        {clubMatches.map((news, index) => (
          <div className="w-full">
            <SportsCard matchData={news} key={news.id} />
          </div>
        ))}
      </div>
      <div className="">
        <CreateNewsCard />
      </div>
    </div>
  );
};

export default NewsBar;


