import Background from "@/components/Background";
import ApplyNow from "@/components/ApplyNow";
import { routes } from "./const";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import RetroRemix from "@/components/RetroRemix/RetroRemix";
import Schedule from "@/components/Schedule/Schedule";

const Home = () => {
  return (
    <Background>
      <main className="flex flex-col">
        <Navbar routes={routes} />
        <Header />
        <div id="theme" className="flex flex-col items-center justify-center h-screen text-white">
          <RetroRemix />
        </div>
        <div id="schedule" className="flex flex-col items-center justify-center min-h-screen text-white mt-[150px]">
          <Schedule/>
        </div>
        <div id="faqs" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white"><ApplyNow /></div>



      </main>
    </Background>
  )
}

export default Home;
