import ConnectComponent from "@/components/ConnectComponent";
import HeroComponent from "@/components/HeroComponent";
import { HIWs } from "@/data";

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <ViewsComponent />
      <ConnectComponent />
      <TrendingComponent />
      {/*<Testimonials/>
      <WeAreComponent/>
      <FooterComponent/> */}
    </main>
  );
}

const TrendingComponent = () => {
  return (
    <section className="py-20 bg-white">
      <h3 className="font-outfit text-xl text-[#121212] text-center w-full font-medium">
        How it works?
      </h3>
      <div className="flex justify-center gap-[100px]">
        {HIWs.map((hiw, index) => {
          return (
            <div
              key={index}
              className="flex max-w-[220px]  font-outfit flex-col items-center justify-center  gap-1"
            >
              <div className="w-20 h-20 bg-[#F2F2F2] rounded-full flex items-center justify-center">
                {/* <img src={hiw.icon} alt="" /> */}
              </div>
              <div className="text-[#121212] text-base font-medium mt-2">
                {hiw.title}
              </div>
              <div className="text-[#121212] shrink text-xs   font-normal mt-1 text-center">
                {hiw.details}
                <MonitorSvg/>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ViewsComponent = () => {
  return (
    <section className="bg-white  pb-10 px-40">
      <div className=" pt-14 pb-1   justify-center items-center gap-10 flex">
        <div className="justify-start items-center gap-4 flex">
          <div className="text-gray-900 text-4xl font-semibold font-outfit leading-10">
            1M+
          </div>
          <div className="opacity-70 text-gray-900 text-base font-normal font-outfit ">
            Customers visit <br />
            DevMedia every month
          </div>
        </div>
        <div className="justify-start items-center gap-4 flex">
          <div className="text-gray-900 text-4xl font-semibold font-outfit ">
            93%
          </div>
          <div className="opacity-70 text-gray-900 text-base font-normal font-outfit ">
            Active community
            <br />
            members
          </div>
        </div>
        <div className="justify-start items-center gap-4 flex">
          <div className="text-gray-900 text-4xl font-semibold font-outfit leading-10">
            4.9
          </div>
          <div className="w-44 opacity-70 text-gray-900 text-base font-normal font-outfit leading-7">
            Average customer ratings out of 5.00!
          </div>
        </div>
      </div>
    </section>
  );
};


const MonitorSvg=()=><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M17.9687 8.98443C17.9687 9.14619 17.8692 9.29115 17.7183 9.34912L7.56206 13.2554C7.51628 13.2729 7.46878 13.2813 7.42206 13.2813C7.29999 13.2813 7.18194 13.2241 7.10659 13.1215C7.00245 12.9788 7.00663 12.7842 7.1169 12.6465L10.0466 8.98443L7.1169 5.32232C7.00667 5.18463 7.00245 4.99005 7.10659 4.8474C7.21054 4.70548 7.39726 4.65017 7.56206 4.71349L17.7183 8.61974C17.8692 8.67771 17.9687 8.82267 17.9687 8.98443Z" fill="black"/>
  <path d="M23.0469 1.95312H1.95312C1.30691 1.95312 0.78125 2.47879 0.78125 3.125V17.9688C0.78125 18.615 1.30691 19.1406 1.95312 19.1406H8.81074L8.11629 20.7031H16.8837L16.1892 19.1406H23.0469C23.6931 19.1406 24.2188 18.615 24.2188 17.9688V3.125C24.2188 2.47879 23.6931 1.95312 23.0469 1.95312ZM12.8906 17.3828C12.8906 17.4907 12.8032 17.5781 12.6953 17.5781H12.3047C12.1968 17.5781 12.1094 17.4907 12.1094 17.3828V16.9922C12.1094 16.8843 12.1968 16.7969 12.3047 16.7969H12.6953C12.8032 16.7969 12.8906 16.8843 12.8906 16.9922V17.3828ZM23.4375 15.2344H1.5625V3.125C1.5625 2.90965 1.73777 2.73438 1.95312 2.73438H23.0469C23.2622 2.73438 23.4375 2.90965 23.4375 3.125V15.2344ZM17.9688 23.0469H7.03125C6.59977 23.0469 6.25 22.6971 6.25 22.2656C6.25 21.8341 6.59977 21.4844 7.03125 21.4844H17.9688C18.4002 21.4844 18.75 21.8341 18.75 22.2656C18.75 22.6971 18.4002 23.0469 17.9688 23.0469Z" fill="black"/>
</svg>