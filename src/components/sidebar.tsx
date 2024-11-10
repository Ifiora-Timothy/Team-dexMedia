import React from "react";
import { Outfit } from "next/font/google";
import { cn } from "@/lib/utils";
import SideBarSearch from "./SideBarSearch";
import { Hash, LogIn, Minus } from "lucide-react";
import { datas } from "@/data";
import clsx from "clsx";
const outfit = Outfit({
  weight: "600",
  subsets: ["latin"],
});
const Sidebar = () => {
  return (
    <div className="w-full">
      <div className="header font-sans  mb-3">
        <div
          className={cn(
            outfit.className,
            "Logo flex items-center px-3 justify-start"
          )}
        >
          <div className="w-7 h-7 px-[5.89px] py-[6.63px] bg-[#473bf0]/10 rounded-[14px] flex-col justify-center items-center gap-[7.37px] inline-flex">
            <DexMediaIcon />
          </div>
          <div>
            <span className="text-[#b5b0ff] text-2xl font-semibold  leading-tight">
              Dex
            </span>
            <span className="text-[#473bf0] text-2xl font-semibold  leading-tight">
              Media
            </span>
          </div>
        </div>
      </div>
      <div className="search px-3 mb-3">
        <SideBarSearch />
      </div>
      <div className="menu w-full mb-11">
        <Menus />
      </div>
      <div className="Category mb-3">
        <Categories />
      </div>
      <div className="profile/logout">
        <ProfileSummary />
      </div>
    </div>
  );
};

export default Sidebar;

const ProfileSummary = () => {
  return (
    <div className="w-full h-20 py-2 px-1 flex-col justify-end items-end inline-flex">
    <div className="self-stretch px-0 py-3 rounded justify-between items-center inline-flex">
      <div className="justify-start items-center gap-2.5 flex">
        <div className="size-8 relative">
          <img className="size-8 left-0 top-0 absolute rounded-full border border-white" src="https://via.placeholder.com/40x40" />
          <div className="w-2.5 h-2.5 left-[22px] top-[24px] absolute bg-[#037f2d] rounded-lg border border-white"></div>
        </div>
        <div className="flex-col justify-start items-start inline-flex">
          <div className=" text-[#101828] text-xs font-semibold font-inter leading-tight">Alison Eyo</div>
          <div className=" text-[#475267] text-xs font-normal font-inter leading-tight">alison.e@rayna.ui</div>
        </div>
      </div>
      <LogIn className=" shrink-0" size={20} />
    </div>
  </div>
  );
};

const Categories = () => {
  return (
    <div className="w-full   pb-3 flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch pl-3 pr-4 justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-[#98a1b2] text-sm font-medium  leading-tight">
          Category
        </div>
      </div>
      <div className="self-stretch   flex-col justify-start items-start gap-1 flex">
        {datas.categories.map((item, index) => (
          <CategoryTab
            key={index}
            name={item.name}
            waiting={item.waiting}
            isActive={index == 0}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryTab = ({
  name,
  waiting,
  isActive,
}: {
  name: string;
  waiting: number;
  isActive: Boolean;
}) => {
  return (
    <div className="self-stretch   px-4 py-2 rounded justify-start items-center gap-1 inline-flex">
      <div className="grow shrink basis-0  justify-start items-start gap-3 flex">
        <div className="grow shrink basis-0 text-[#344054] text-xs font-normal  leading-tight">
          {name}
        </div>
      </div>
      <div
        className={clsx(
          "px-2  rounded-lg flex-col justify-center items-center gap-2 inline-flex",
          {
            "bg-[#d3251f] text-white": isActive,
            "bg-[#eff1f4] text-[#344054] ": !isActive,
          }
        )}
      >
        <div className="justify-center items-center gap-0.5 inline-flex">
          <div className="text-center text-xs font-medium font-['Inter'] leading-none">
            {waiting}
          </div>
        </div>
      </div>
    </div>
  );
};

const Menus = () => {
  return (
    <div className="w-full    flex-col justify-start items-start gap-3 inline-flex">
      <div className="self-stretch pl-3 pr-4 justify-start items-center gap-2.5 inline-flex">
        <div className="grow shrink basis-0 text-[#98a1b2] text-sm font-medium  leading-tight">
          Menu
        </div>
        <Minus className="text-gray-500" />
      </div>
      <div className="self-stretch  w-full  flex-col justify-start items-center gap-1 flex">
        {datas.nav.map((item, index) => (
          <NavTab isActive={index == 0} key={index} {...item} />
        ))}
      </div>
      <div className="self-stretch h-px bg-[#eff1f4]"></div>
    </div>
  );
};

const NavTab = ({
  name,
  waiting,
  isActive,
}: {
  name: string;
  waiting: number;
  isActive: Boolean;
}) => {
  return (
    <div
      className={clsx(
        "self-stretch h-[38px] font-inter  px-4 py-3 rounded justify-start items-center gap-1 inline-flex",
        {
          "bg-[#e9e7fd]": isActive,
        }
      )}
    >
      <div className="grow shrink basis-0 h-5 justify-start items-start gap-2 flex">
        <Hash strokeWidth={2} size={16} />
        <div className="grow shrink basis-0 text-[#344054] text-xs font-normal  leading-tight">
          {name}
        </div>
      </div>
      <div className="px-2 bg-[#eff1f4] rounded-[10px] flex-col justify-center items-center gap-2 inline-flex">
        <div className="justify-center items-center gap-0.5 inline-flex">
          <div className="text-center text-[#344054] text-xs font-medium  leading-[17.40px]">
            {waiting}
          </div>
        </div>
      </div>
    </div>
  );
};

export const DexMediaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="14"
      fill="none"
      viewBox="0 0 18 14"
    >
      <path
        stroke="#473BF0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1.515 4 .97 8.895h3.858c-1.055-2.705-2.533-8.632 0-10.705C9.509-.401 11.037 5.838 10.6 7.645c-.437 1.806-.4-8.285 3.566-6.273C17.34 2.98 16.58 8.86 15.804 11.599"
      />
    </svg>
  );
};
