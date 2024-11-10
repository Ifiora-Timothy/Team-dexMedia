import { InewsType, newsList } from "@/data";
import { Calendar, Eye, MessageCircle, Share2, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const newsCategory = "Todays";

  return (
    <div className="px-3 ">
      <div className="">
        <HeadLineCard />
      </div>
      <div className="">
        <BodyTemplate />
      </div>
    </div>
  );
};

export default Dashboard;

const BodyTemplate = () => {
  return (
    <div className="mt-0 h-96 px-7 justify-center items-center gap-2.5 inline-flex">
      <div className="grow shrink basis-0 text-zinc-600 text-xs font-normal font-outfit leading-tight">
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ...Worem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc vulputate libero et velit interdum, ...Worem ipsum
        dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
        velit interdum, ...Worem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc vulputate libero et velit interdum, ...Worem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ..
        <br />
        <br />
        .Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ...Worem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc vulputate libero et velit interdum, ...Worem ipsum
        dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
        velit interdum, ...Worem ipsum dolor sit amet, consectetur adipiscing
        elit. Nunc vulputate libero et velit interdum
        <br />
        <br />
        ...Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ...Worem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
        ...Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        vulputate libero et velit interdum, ...Worem ipsum dolor sit amet,
        consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
        ...
        <br />
        <br />
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ...Worem ipsum dolor sit amet, consectetur
        adipiscing elit.
        <br />
        <br />
        Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ...Worem ipsum dolor sit amet, consectetur
        adipiscing elit. Nunc vulputate libero et velit interdum, ...Worem ipsum
        dolor sit amet, consectetur adipiscing elit.{" "}
      </div>
    </div>
  );
};

const HeadLineCard = () => {
  return (
    <div className=" w-full bg-white rounded-3xl flex-col justify-end items-start inline-flex">
      <div className="self-stretch h-[300px] relative rounded-2xl border border-[#e7e8ec]">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 65.77%)",
          }}
          className="rounded-2xl absolute z-10   h-full w-full"
        ></div>
        <Image
          alt="headline"
          className="rounded-2xl"
          src="/headline.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="self-stretch   p-5 bg-white rounded-2xl flex-col justify-start items-start gap-3.5 flex">
        <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
          <div className="px-2.5 py-1.5 bg-[#9672ff]/20 rounded-3xl justify-start items-center gap-2.5 flex">
            <div className="text-[#473bf0] text-xs font-semibold font-['Outfit'] leading-tight">
              Fact-Checked
            </div>
          </div>
          <div className="grow shrink text-gray-500 basis-0 h-5 justify-end items-center gap-2.5 flex">
            <div className="justify-start items-center gap-1 flex">
              <TrendingUp size={14} />
              <div className="text-black text-xs font-normal font-outfit leading-tight">
                500k
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <Eye size={14} />
              <div className="text-black text-xs font-normal font-outfit leading-tight">
                200k
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <MessageCircle size={14} />
              <div className="text-black text-xs font-normal font-outfit leading-tight">
                121k
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <Share2 size={14} />
              <div className="text-black text-xs font-normal font-outfit leading-tight">
                200k
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="self-stretch text-black  text-base font-semibold font-poppins leading-loose">
            10 ways to reduce your office work depression.
          </div>
          <div>
            <span className="text-zinc-600 text-[11px] font-normal font-outfit leading-none">
              By{" "}
            </span>
            <span className="text-black text-xs font-normal font-['Outfit'] leading-none">
              JOHN SNOW
            </span>
            <span className="text-zinc-600 text-xs font-normal font-['Outfit'] leading-none">
              {" "}
              and{" "}
            </span>
            <span className="text-black text-xs font-normal font-['Outfit'] leading-none">
              ANDREW JAMES
            </span>
          </div>
          <div className="mt-1 text-zinc-600 text-[11px] font-normal font-outfit leading-none">
            <span className="mr-2">16/10/2024</span> 06;54PM WAT
          </div>
        </div>
      </div>
    </div>
  );
};
