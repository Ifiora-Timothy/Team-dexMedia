"use client";
import { InewsType, newsList } from "@/data";
import clsx from "clsx";
import { Calendar, Eye, MessageCircle, Share2, TrendingUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Dashboard = () => {
  const newsCategory = "Todays";
  const firstColumnRef = useRef<HTMLDivElement>(null);
  const secondColumnRef = useRef<HTMLDivElement>(null);
  const [firstColumnHeight, setFirstColumnHeight] = useState<number | null>(
    null
  );

  useEffect(() => {
    const updateHeight = () => {
      if (firstColumnRef.current && secondColumnRef.current) {
        const height = firstColumnRef.current.offsetHeight;
        setFirstColumnHeight(height - 60);
        secondColumnRef.current.style.maxHeight = `${height}px`;
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      <div
        ref={firstColumnRef}
        className="w-full col-[1/8] h-fit overflow-hidden py-0 mt-5 "
      >
        <div className="px-3 h-fit">
          <div className="">
            <HeadLineCard />
          </div>
          <div className="">
            <BodyTemplate />
          </div>
        </div>
      </div>
      <aside
        ref={secondColumnRef}
        className="max-w-[300px]    col-[8/11] overflow-hidden mt-4 py-0 "
      >
        <NewsBar firstColumnHeight={firstColumnHeight} ref={secondColumnRef} />
      </aside>
    </>
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

const NewsBar = ({
  ref,
  firstColumnHeight,
}: {
  ref: React.RefObject<HTMLDivElement>;
  firstColumnHeight: number | null;
}) => {
  const newsCategory = "Related";

  return (
    <div className={clsx(" font-poppins w-full")}>
      <h3 className={` font-medium font-outfit text-xl`}>
        <span className="font-bold">{newsCategory}</span> News
      </h3>

      <div
        ref={ref}
        style={{
          maxHeight: firstColumnHeight ? `${firstColumnHeight}px` : "100%",
          // change the scrollbar width and reduce height
          scrollbarWidth: "thin",

          scrollbarColor: "#d4d6db transparent",
          // dont show the arrows at the top and bottom of scroll bar
          msScrollbarTrackColor: "transparent",
        }}
        className="w-full overflow-y-auto pr-1  flex mt-3 mb-3 flex-col gap-3"
      >
        {newsList.map((news, index) => (
          <div key={news.id} className="w-full">
            <RelatedNewsCard newsData={news} />
          </div>
        ))}
      </div>
    </div>
  );
};

const RelatedNewsCard = ({ newsData }: { newsData: InewsType }) => {
  return (
    <div className="px-3 py-3.5 bg-white rounded-2xl flex-col justify-start items-start gap-1 inline-flex">
      <div className="self-stretch flex-col justify-center items-start gap-5 flex">
        <div className="self-stretch h-[120px] relative rounded-2xl border border-[#e7e8ec]">
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
            src="/newslist/newsList1.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="self-stretch h-20 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
            <div className="px-2.5 py-1.5 bg-violet-500/20 rounded-3xl justify-start items-center gap-2.5 flex">
              <div className="text-indigo-600 text-xs font-semibold font-['Outfit'] leading-tight">
                {newsData.category}
              </div>
            </div>
            <div className="grow shrink basis-0 h-5 justify-end items-center gap-2.5 flex">
              <div className="justify-start items-center gap-1 flex">
                <div className="w-5 h-5 relative" />
                <div className="text-black text-xs font-normal font-['Outfit'] leading-tight">
                  200k
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch text-black text-sm font-semibold font-poppins leading-tight">
            {newsData.title}
          </div>
        </div>
      </div>
    </div>
  );
};
