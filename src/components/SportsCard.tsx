import { IsportType } from "@/data";
import Image from "next/image";
import React from "react";

const SportsCard = ({ matchData }: { matchData: IsportType }) => {
  return (
    <div className="w-full p-3 bg-white rounded-2xl flex-col justify-start items-start gap-1 inline-flex">
      <div className="self-stretch h-60 px-2.5 flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch h-40 py-2.5 rounded-xl flex-col justify-center items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
            <div className="grow shrink basis-0 h-12 justify-start items-center gap-1 flex">
              <Image
                src={matchData.homeIcon}
                alt={matchData.home + "icon"}
                width={40}
                height={40}
              />

              <div className="grow shrink basis-0 text-black  tracking-tight text-base font-semibold leading-normal">
                {matchData.home}
              </div>
            </div>
            <div className="text-black text-xl font-semibold tracking-tighter leading-normal">
              {matchData.homeScore}
            </div>
          </div>
          <div className="pl-4 h-6 text-[#b5b2b2]  tracking-tight text-base font-semibold leading-normal">
            {" "}
           <span className="pr-3">Vs</span> Fulltime
          </div>
          <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
            <div className="grow shrink basis-0 h-12 justify-start items-center gap-1 flex">
              <Image
                src={matchData.awayIcon}
                alt={matchData.home + "icon"}
                width={40}
                height={40}
              />

              <div className="grow shrink basis-0  tracking-tight text-black text-base font-semibold leading-normal">
                {matchData.away}
              </div>
            </div>
            <div className="text-black text-xl font-semibold leading-normal">
              {matchData.awayScore}
            </div>
          </div>
        </div>
        <div className="self-stretch text-[#6f6f6f] text-xs font-medium font-outfit  leading-tight">
         {matchData.matchSummary}
        </div>
      </div>
    </div>
  );
};

export default SportsCard;
