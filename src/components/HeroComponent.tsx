import { DexMediaIcon } from "@/components/sidebar";
import clsx from "clsx";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroComponent = () => {
    return (
      <section className="">
        <div className="relative w-full h-svh top-0 left-0">
          <Image
            src="/heroimg.jpg"
            className=""
            alt="hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute top-0 left-0 size-full z-10"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%)",
          }}
        ></div>
        <div className="px-40 absolute inset-0 text-white z-20 py-5">
          <HeroNav />
          <section className="mt-16">
            <h1 className="font-outfit text-[60px] font-bold leading-[76px]">
              Unbiased News <br />
              Community Verified
            </h1>
            <p className="w-[500px] mb-[60px] mt-5 font-outfit font-normal text-2xl">
              Decentralized news platform where readers and creators decide
              what&apos;s trustworthy.
            </p>
            <HeroSearch />
            <div className="mt-[40px] flex gap-4">
              <button className="mt-5 px-7 py-3 bg-[#473BF0] rounded-3xl  justify-center items-center  flex">
                <div className="text-white text-sm font-semibold font-outfit leading-tight">
                  Browse Latest News
                </div>
              </button>
              <button className="border border-white/80 mt-5 px-7 py-3  rounded-3xl  justify-center items-center  flex ">
                Submit Story
              </button>
            </div>
          </section>
        </div>
      </section>
    );
  };
  
  const HeroSearch = () => {
    return (
      <div className="relative   w-[360px]  max-w-full">
        <div className="absolute flex py-[6px]  h-full w-[50px]  right-2 top-1/2 transform -translate-y-1/2">
          <div className="size-full place-content-center place-items-center rounded-3xl bg-[#473BF0]">
            <Search className=" text-white" size={20} />
          </div>
        </div>
        <input
          type="text"
          placeholder="Search News.."
          className="w-full pr-10 pl-4 py-[14px] rounded-3xl outline-none transition-colors bg-transparent duration-200 text-sm font-semibold focus:border-gray-400] border border-gray-400 text-gray-500"
        />
      </div>
    );
  };
  
  const HeroNav = () => {
    return (
      <nav>
        <div className="w-full font-poppins  justify-between items-center flex">
          <div className=" font-outfit Logo flex items-center px-3 justify-start">
            <div className="size-6 py-[6.63px] bg-[#473bf0]/10 rounded-[14px] flex-col justify-center items-center  inline-flex">
              <DexMediaIcon stroke="white" />
            </div>
            <div>
              <span className="text-lg font-medium  leading-tight">Dex</span>
              <span className=" text-lg font-semibold  leading-tight">Media</span>
            </div>
          </div>
          <div className="justify-center items-center gap-5 flex">
            {["Home", "Browse News", "Submit News", "Fact-Hub", "Community"].map(
              (item, index) => (
                <Link
                  className="text-white text-[13px] font-semibold tracking-wide "
                  key={index}
                  href=""
                >
                  {item}
                </Link>
              )
            )}
          </div>
          <div className="   justify-end items-center gap-1 flex">
            <div className="px-7 py-4 bg-zinc-100/5 rounded-3xl border border-white/20 justify-center items-center gap-2.5 flex">
              <div className="text-white text-sm font-semibold font-outfit leading-tight">
                Connect Wallet
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  export default HeroComponent;