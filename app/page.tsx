import Background from "@/components/Background";
import { routes } from "./const";
import Navbar from "@/components/Navbar";
import Tracks from "./tracks/Tracks";

const Home = () => {
  return (
    <Background>
      <Navbar routes={routes} />
      <main className="flex flex-col p-10">
        {/* background gradient defined in Background component */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        {/* TODO: move to correct spot -- leaving tracks here for now */}
        <Tracks />
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>

        <div className="absolute bottom-0">wapeofijawpfeoiawjfpoawijfawpofijawpoefj</div>

      </main>
    </Background>
  )
}

export default Home;
