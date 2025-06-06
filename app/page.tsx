import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Header from "./Header";
import SignUp from "./SignUp";
import Cog from "@/components/Cog";

export default function Home() {
  return (
    <main className="max-w-[100vw] w-screen h-screen max-h-[100vh] overflow-hidden">
      {/* background gradient is defined within globals.css */}
      <div className="fixed">
        <Navbar />
      </div>

      <div className="relative flex flex-col items-center justify-center h-screen">
        <Header />
        <div className="flex items-center pb-40 justify-center md:hidden absolute inset-0 -z-10">
          <div className="w-[400px] h-[400px] opacity-30">
            <Cog />
          </div>
        </div>
        <SignUp />
      </div>

      {/* if you need more control over SVG logo, consider using https://react-svgr.com/playground/ */}

      <Link href={"/apply"}>Apply</Link>
      <Link href={"/sponsor"}>Sponsor Us</Link>
    </main>
  )
}
