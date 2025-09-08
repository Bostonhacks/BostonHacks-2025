import Navbar from "@/components/Navbar";
import FAQs from "@/components/FAQs";
import { routes } from "./const";
import Background from "@/components/Background";
import Tracks from "./tracks/Tracks";
import Header from "@/components/Header";
import RetroRemix from "@/components/RetroRemix/RetroRemix";
import Schedule from "@/components/Schedule/Schedule";
import Footer from "@/components/Footer";
import OurSponsors from "@/components/OurSponsors";
import IntroSection from "@/components/IntroSection";

const Home = () => {
  return (
    <>
      <Background>
        <main className="flex flex-col">
          <Navbar routes={routes} />
          <div id="header" className="w-full h-screen">
            <Header />
          </div>
          <IntroSection />
          <div id="theme" className="flex flex-col items-center justify-center h-screen text-white">
            <RetroRemix />
          </div>

          <div className="flex flex-col items-center justify-center min-h-screen text-white"></div>
          <div id="tracks" className="my-20 h-auto w-full">
            <Tracks />
          </div>
          <div id="schedule" className="my-20 flex flex-col items-center justify-center min-h-screen text-white mt-[150px]">
            <Schedule />
          </div>
          <div id="faqs" className="my-20 flex flex-col items-center justify-center min-h-screen text-white">
            <FAQs />
          </div>
          <div id="sponsors" className="h-auto w-full">
            <OurSponsors />
          </div>
        </main>
      </Background>
      <Footer />
    </>
  )
}

export default Home;
