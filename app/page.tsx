import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BostonHacks 2025",
  description: "BostonHacks 2025 Hackathon, Boston University’s largest, annual student-run hackathon and various beginner friendly workshops!",
  keywords: ["bostonhacks", "hackathon", "bostonhacks 2025", "boston hackathon"],
  openGraph: {
    title: "BostonHacks 2025",
    description: "BostonHacks 2025 Hackathon landing page",
    url: "https://www.bostonhacks.org",
    siteName: "BostonHacks 2025",
    locale: "en_US",
    type: "website",
  }
};

export default function Home() {
  return (
    <main className="w-dvw h-dvh overflow-hidden">
      {/* background gradient is defined within globals.css */}
      <div className="fixed">
        <Navbar />
      </div>

      <div className="2xl:scale-125 lg:scale-80 flex flex-col items-center w-screen justify-center h-screen">
        <Header />
      </div>

      <div className="p-10 fixed bottom-0 w-full">
        <Footer />
      </div>

      {/* if you need more control over SVG logo, consider using https://react-svgr.com/playground/ */}
    </main>
  )
}
