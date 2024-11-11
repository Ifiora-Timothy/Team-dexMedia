import { Calendar } from "lucide-react";
import Image from "next/image";
const ConnectComponent = () => {
    return (
      <section className="bg-white px-40">
        <div className="h-12 justify-start  items-center  flex">
          <div className="grow  basis-0 text-slate-900 text-2xl font-semibold font-outfit">
            Top Stories
          </div>
          <div className="grow  basis-0 text-right text-black text-sm font-semibold font-outfit underline uppercase leading-loose">
            All Top Stories
          </div>
        </div>
        <div className=" w-full ">
          <div className="grid  grid-cols-3 grid-rows-2 h-[400px] w-full gap-4">
            <div className="big col-[1/3] row-[1/3]  size-full">
              <div className="w-full h-full flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-full h-full relative bg-gradient-to-b from-black to-black rounded-xl">
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
                    src="/headline.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute w-full flex  z-50 text-white bottom-0 p-4">
                    <div className="   w-full  flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="px-2.5 py-1.5 bg-violet-500 rounded justify-start items-center gap-2.5 inline-flex">
                        <div className="text-white text-xs font-semibold font-outfit leading-tight">
                          Fact-Checked
                        </div>
                      </div>
                      <div className="self-stretch text-white text-lg font-semibold font-poppins ">
                        10 ways to reduce your office work depression.
                      </div>
                      <div className="self-stretch opacity-70 text-white text-sm font-normal font-outfit max-w-full w-[500px]">
                        Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ...
                      </div>
                      <div className="self-stretch  w-full justify-start items-center pt-2 gap-3.5 inline-flex">
                        <div className="grow shrink h-8 justify-start items-center gap-5 flex">
                          <div>
                            <span className="text-white text-sm font-light font-outfit ">
                              By
                            </span>
                            <span className="text-white/60 text-sm font-bold font-['Outfit'] leading-loose">
                              {" "}
                            </span>
                            <span className="text-white text-base font-bold font-['Outfit'] leading-loose">
                              Admin
                            </span>
                          </div>
                        </div>
                        <div className="justify-end items-center gap-0.5 flex">
                          <Calendar size={17}/>
                          <div className="text-white text-sm font-semibold font-outfit">
                            November 19th, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-[3/4] row-[1/2]  size-full ">
            <div className="w-full h-full flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-full h-full relative bg-gradient-to-b from-black to-black rounded-xl">
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
                    src="/newslist/newsList2.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute w-full flex  z-50 text-white bottom-0  px-3">
                    <div className="   w-full  flex-col justify-start items-start gap-0.5 inline-flex">
                      <div className="px-1.5 py-0.5 bg-violet-500 rounded justify-start items-center gap-1 inline-flex">
                        <div className="text-white  text-[10px]  font-semibold font-outfit ">
                          Fact-Checked
                        </div>
                      </div>
                      <div className="self-stretch text-white text-[10px] font-semibold font-poppins ">
                        10 ways to reduce your office work depression.
                      </div>
                      <div className="self-stretch opacity-70 text-white  text-[10px]  font-normal font-outfit max-w-full w-[300px]">
                        Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ...
                      </div>
                      <div className="self-stretch  w-full justify-start items-center  gap-3.5 inline-flex">
                        <div className="grow shrink h-8 justify-start items-center gap-5 flex">
                          <div>
                            <span className="text-white  text-[10px]  font-light font-outfit ">
                              By
                            </span>
                            <span className="text-white/60 text-[10px] font-bold font-['Outfit'] leading-loose">
                              {" "}
                            </span>
                            <span className="text-white  text-[10px]  font-bold font-['Outfit'] leading-loose">
                              Admin
                            </span>
                          </div>
                        </div>
                        <div className="justify-end items-center gap-0.5 flex">
                          <Calendar size={12}/>
                          <div className="text-white  text-[10px]  font-semibold font-outfit">
                            November 19th, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
            <div className="col-[3/4] row-[2/3]  size-full ">
            <div className="w-full h-full flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-full h-full relative bg-gradient-to-b from-black to-black rounded-xl">
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
                    src="/newslist/newsList1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute w-full flex  z-50 text-white bottom-0  px-3">
                    <div className="   w-full  flex-col justify-start items-start gap-0.5 inline-flex">
                      <div className="px-1.5 py-0.5 bg-violet-500 rounded justify-start items-center gap-1 inline-flex">
                        <div className="text-white  text-[10px]  font-semibold font-outfit ">
                          Fact-Checked
                        </div>
                      </div>
                      <div className="self-stretch text-white text-[10px] font-semibold font-poppins ">
                        10 ways to reduce your office work depression.
                      </div>
                      <div className="self-stretch opacity-70 text-white  text-[10px]  font-normal font-outfit max-w-full w-[300px]">
                        Worem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ...
                      </div>
                      <div className="self-stretch  w-full justify-start items-center  gap-3.5 inline-flex">
                        <div className="grow shrink h-8 justify-start items-center gap-5 flex">
                          <div>
                            <span className="text-white  text-[10px]  font-light font-outfit ">
                              By
                            </span>
                            <span className="text-white/60 text-[10px] font-bold font-['Outfit'] leading-loose">
                              {" "}
                            </span>
                            <span className="text-white  text-[10px]  font-bold font-['Outfit'] leading-loose">
                              Admin
                            </span>
                          </div>
                        </div>
                        <div className="justify-end items-center gap-0.5 flex">
                          <Calendar size={12}/>
                          <div className="text-white  text-[10px]  font-semibold font-outfit">
                            November 19th, 2024
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>
          </div>
        </div>
      </section>
    );
  };
  export default   ConnectComponent