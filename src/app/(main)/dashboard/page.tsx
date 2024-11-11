import NewsBar from "@/components/NewsBar";
import { InewsType, newsList } from "@/data";
import { Calendar, Eye, MessageCircle, Share2, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  const newsCategory = "Todays";

  return (
    <>
     <div className="w-full col-[1/8]  py-0 ">
    <div className="px-3 ">
      <div className="">
        <h3 className={` font-medium font-outfit text-xl  mb-3`}>
          <span className="font-bold">{newsCategory}</span> Headline
        </h3>
        <HeadLineCard />
      </div>
      <div className="">
        <TrendingNews />
      </div>
    </div>
     </div>
    <aside className="max-w-[300px] col-[8/11]  py-0 ">
            <NewsBar />
            
          </aside>
    </>
  );
};

export default Dashboard;

const TrendingNews = () => {
  return (
    <div className="mt-2 bg-white rounded-2xl px-5 py-3">
      <h3 className={` font-medium font-outfit text-xl  mb-3`}>
        <span className="font-bold">Trending</span> News
      </h3>
      <div style={{
        // change the scrollbar width and reduce height
          scrollbarWidth: "thin",

          scrollbarColor: "#d4d6db transparent",
          // dont show the arrows at the top and bottom of scroll bar
          msScrollbarTrackColor: "transparent",
        }} className="w-full overflow-auto ">
        <div className="grid grid-flow-col gap-4 auto-cols-[calc(100%/2.25)]">
        {/* Each card */}
       
      {/* </div> */}
          {newsList.map((news, index) => (
            <NewsCard newsData={news} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({
  newsData,
}: {
  newsData:InewsType
}) => {



  return (
    <div className=" flex-col justify-start items-start gap-1 inline-flex">
      <div className="w-full h-40 relative bg-gradient-to-b from-black to-black rounded-xl">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 65.77%)",
          }}
          className="rounded-xl absolute z-10   h-full w-full"
        ></div>
        <Image
          alt="news"
          className="rounded-xl h-40"
          src={newsData.image}

           layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="h-36 p-2.5 rounded-xl flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
          <div className="px-2.5 shrink-0  py-1.5 bg-blue-500/40 rounded-xl justify-center items-center flex">
            <div className="text-sky-950 shrink-0 text-[10px] font-semibold font-['Outfit'] leading-none">
              {newsData.status}
            </div>
          </div>
          <div className="grow shrink basis-0 h-3 justify-end items-center gap-2 flex">
            <div className="justify-start items-center gap-0.5 flex">
            <TrendingUp size={10}/>
              <div className="text-black text-[10px] font-normal font-['Outfit'] leading-3">
                500k
              </div>
            </div>
            <div className="justify-start items-center gap-0.5 flex">
            <Eye size={10}/>
              <div className="text-black text-[10px] font-normal font-['Outfit'] leading-3">
                200k
              </div>
            </div>
            <div className="justify-start items-center gap-0.5 flex">
              <MessageCircle size={10}/>
              <div className="text-black text-[10px] font-normal font-['Outfit'] leading-3">
                121k
              </div>
            </div>
            <div className="justify-start items-center gap-0.5 flex">
            <Share2 size={10} />
              <div className="text-black text-[10px] font-normal font-['Outfit'] leading-3">
                200k
              </div>
            </div>
          </div>
        </div>
        <div className=" text-black line-clamp-1 text-[11px] font-semibold font-poppins leading-normal">
         {newsData.title}
        </div>
        <div className="self-stretch h-16 flex-col justify-start items-start gap-1.5 flex">
          <div className="self-stretch  text-black text-xs font-normal font-outfit leading-none line-clamp-2 overflow-ellipsis">
         {newsData.details}
          </div>
          <div className="self-stretch justify-start items-center mt-2 gap-3.5 inline-flex">
            <div className="grow shrink basis-0 h-5 justify-start  items-end gap-5 flex">
              <div>
                <span className="text-black text-xs font-light font-['Outfit'] leading-tight">
                  By
                </span>
                <span className="text-black/60 text-xs font-bold font-['Outfit'] leading-tight">
                  {" "}
                </span>
                <span className="text-black text-xs font-bold font-['Outfit'] leading-tight">
                 {newsData.author}
                </span>
              </div>
            </div>
            <div className="justify-end items-end gap-0.5 flex">
            <Calendar size={16} />
              <div className="text-black text-xs font-normal font-['Outfit'] leading-none">
                November 19th, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeadLineCard = () => {
  return (
    <div className="h-96 w-full bg-white rounded-3xl flex-col justify-end items-start inline-flex">
      <Link href={`/dashboard/1w21`} className="self-stretch h-96 relative rounded-2xl border border-[#e7e8ec]">
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
      </Link>
      <div className="self-stretch  h-28 p-5 bg-white rounded-2xl flex-col justify-start items-start gap-3.5 flex">
        <div className="self-stretch justify-start items-center gap-3.5 inline-flex">
          <div className="px-2.5 py-1.5 bg-[#9672ff]/20 rounded-3xl justify-start items-center gap-2.5 flex">
            <div className="text-[#473bf0] text-sm font-semibold font-['Outfit'] leading-tight">
              Fact-Checked
            </div>
          </div>
          <div className="grow shrink text-gray-500 basis-0 h-5 justify-end items-center gap-2.5 flex">
            <div className="justify-start items-center gap-1 flex">
              <TrendingUp size={16} />
              <div className="text-black text-sm font-normal font-['Outfit'] leading-tight">
                500k
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <Eye size={16} />
              <div className="text-black text-sm font-normal font-['Outfit'] leading-tight">
                200k
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <MessageCircle size={16} />
              <div className="text-black text-sm font-normal font-['Outfit'] leading-tight">
                121k
              </div>
            </div>
            <div className="justify-start items-center gap-1 flex">
              <Share2 size={16} />
              <div className="text-black text-sm font-normal font-['Outfit'] leading-tight">
                200k
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch text-black text-lg font-semibold font-poppins leading-loose">
          10 ways to reduce your office work depression.
        </div>
      </div>
    </div>
  );
};
