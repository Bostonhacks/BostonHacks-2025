import Navbar from "@/components/Navbar";
import { routes } from "./const";
import Background from "@/components/Background";
import ApplyNow from "@/components/ApplyNow";

const Home = () => {
  return (
    <Background>
      <Navbar routes={routes} />
      <main className="flex flex-col p-10">
        {/* background gradient defined in Background component */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>

        <div className="absoltue bottom-0">wapeofijawpfeoiawjfpoawijfawpofijawpoefj</div>
        <ApplyNow />
      </main>
    </Background>
  )
}

export default Home;
