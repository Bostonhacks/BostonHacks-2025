import Navbar from "@/components/Navbar/Navbar";
import { Metadata } from "next";
import { routes } from "./const";

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


const Home = () => {
  return (
    <main className="overflow-x-hidden">
      {/* background gradient defined in Background component */}
      <Navbar routes={routes} />
      <div className="h-screen">
        wow
      </div>

      <div className="h-screen">
        wow
      </div>
      <div className="h-screen">
        wow
      </div>

      {/* examplec component to scroll to, add id tag and set it in the const file */}
      <div id="about" className="h-screen">
        wow
      </div>

    </main>
  )
}

export default Home;
