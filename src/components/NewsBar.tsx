import { clubMatches } from "@/data";
import clsx from "clsx";
import { Outfit, Poppins } from "next/font/google";
import React from "react";
import SportsCard from "./SportsCard";
import { ImageIcon, MoveDiagonal, Send, Video } from "lucide-react";

const NewsBar = () => {
  const newsCategory = "Sports";
  
  return (
    <div className={clsx( " font-poppins w-full")}>
      <h3 className={` font-medium font-outfit text-2xl`}>
        <span className="font-bold">{newsCategory}</span> News
      </h3>
      {/* all news */}
      <div className="w-full flex mt-3 mb-5 flex-col gap-3">
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

const CreateNewsCard = () => {
  return (
    <div className="w-full h-80 px-3 py-4 bg-white rounded-2xl flex-col justify-start items-start gap-2 inline-flex">
  <div className="self-stretch h-64 flex-col justify-start items-start gap-1 flex">
    <div className="self-stretch justify-start items-center gap-1 inline-flex">
      <div className="grow shrink basis-0 text-black text-base font-semibold font-['Poppins'] leading-normal">Submit News</div>
      <MoveDiagonal size={20} className="text-black"/>
    </div>
    <div className="h-56 w-full relative bg-[#eaeaea] rounded-xl"></div>
  </div>
  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
    <div className="grow shrink basis-0 h-3 justify-start items-center gap-1.5 flex">
      <div className="justify-start items-center gap-0.5 flex">
      <ImageIcon size={14} className="text-black"/>
        <div className="text-black text-xs font-normal font-['Outfit'] leading-3">Image</div>
      </div>
      <div className="justify-start items-center gap-0.5 flex">
       <Video size={14} className="text-black"/>
        <div className="text-black text-xs font-normal font-['Outfit'] leading-3">Video</div>
      </div>
    </div>
    <div className="px-4 py-1.5 bg-[#473bf0]/50 rounded-3xl justify-start items-center gap-1 flex">
      <Send size={20} className="text-white"/>
      <div className="text-white text-xs font-semibold font-['Outfit'] leading-tight">Publish</div>
    </div>
  </div>
</div>
  )
}
