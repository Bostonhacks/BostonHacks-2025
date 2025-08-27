import Background from "@/components/Background";
import { routes } from "./const";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import RetroRemix from "./RetroRemix/RetroRemix";
import LoginSponsorButton from "@/components/LoginSponsorButton";

const Home = () => {
  return (
    <Background>
      <Header />
      {/* <Navbar routes={routes} /> */}
      <main className="flex flex-col">
        {/* background gradient defined in Background component */}
        {/* <div className="mt-8 flex flex-col gap-4 items-center" //temporary location (move to header)
        >
            <LoginSponsorButton></LoginSponsorButton>
          </div> */}
        <div className="flex flex-col items-center justify-center h-screen text-white">
          <RetroRemix />
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>

        <div className="absolute bottom-0">wapeofijawpfeoiawjfpoawijfawpofijawpoefj</div>

      </main>
    </Background>
  )
}

export default Home;