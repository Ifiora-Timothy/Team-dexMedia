import Sidebar from "@/components/sidebar";
import TopSearchBar from "@/components/TopSearchBar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DexMedia Dashboard",
  description: "Welcome to DexMedia",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={cn(" font-sans  min-h-screen max-w-screen bg-background")}>
      <div className="grid grid-cols-12 w-full">
        <aside className="col-[1/3]  bg-white px-2 py-6 ">
          <Sidebar />
        </aside>
        <div className="w-full  col-[3/13] grid grid-cols-subgrid  mt-5 pr-[20px]  overflow-hidden place-items-center">
          <div className=" pr-[150px] col-[1/11]  ">
            <TopSearchBar />
          </div>
          <div className="w-full   grid grid-cols-subgrid col-[1/11]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
