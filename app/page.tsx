import Background from "@/components/Background";
import ApplyNow from "@/components/ApplyNow";
import { routes } from "./const";
import Navbar from "@/components/Navbar";
import Tracks from "./tracks/Tracks";
import Header from "@/components/Header";
import RetroRemix from "@/components/RetroRemix/RetroRemix";
import Schedule from "@/components/Schedule/Schedule";

const Home = () => {
  return (
    <Background>
      <main className="flex flex-col">
        <Navbar routes={routes} />
        <div id="header" className="w-full h-screen">
          <Header />
        </div>
        <div id="theme" className="flex flex-col items-center justify-center h-screen text-white">
          <RetroRemix />
        </div>

        <div className="flex flex-col items-center justify-center min-h-screen text-white"></div>
        <div className="h-auto w-full">
          <Tracks />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white"></div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div id="schedule" className="flex flex-col items-center justify-center min-h-screen text-white mt-[150px]">
          <Schedule />
        </div>
        <div id="faqs" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white"><ApplyNow /></div>


      </main>
    </Background>
  )
}

export default Home;
