import NewsBar from "@/components/NewsBar";
import Sidebar from "@/components/sidebar";
import TopSearchBar from "@/components/TopSearchBar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "DexMedia Dashboard",
  description: "Welcome to DexMedia",
};

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});
const poppins = Poppins({
    weight: [ "500", "600"],
  subsets: ["latin"],
  variable: '--font-poppins',
});
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main
      className={cn(
        inter.variable,
        outfit.variable,
        poppins.variable,
        "flex font-sans min-h-screen max-w-screen bg-background"
      )}
    >
      <aside className="w-[272px]  bg-white px-2 py-6 ">
        <Sidebar />
      </aside>
      <div className="w-full mt-5 pr-[20px]  overflow-hidden place-items-center">
        <div className="">
          <TopSearchBar />
        </div>
        <div className="w-full flex">
          <div className="w-full">{children}</div>
          <aside className="max-w-[300px]  py-6 ">
            <NewsBar />
            
          </aside>
        </div>
      </div>
    </main>
  );
}
