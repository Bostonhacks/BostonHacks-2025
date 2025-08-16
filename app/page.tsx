import Background from "@/components/Background";
import { routes } from "./const";
import Navbar from "@/components/Navbar";
import RetroRemix from "./RetroRemix/RetroRemix";

const Home = () => {
  return (
    <Background>
      <Navbar routes={routes} />
      <main className="flex flex-col p-10">
        {/* background gradient defined in Background component */}
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <RetroRemix />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>

        <div className="absoltue bottom-0">wapeofijawpfeoiawjfpoawijfawpofijawpoefj</div>

      </main>
    </Background>
  )
}

export default Home;
