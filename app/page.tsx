import Navbar from "@/components/Navbar";
import { routes } from "./const";
import Background from "@/components/Background";
import LoginModal from "./login/LoginModal";
import Sandbox from "./Sandbox";

const Home = () => {
  return (
    <Background>
      <Navbar routes={routes} />
      <main className="flex flex-col p-10">
        <LoginModal />
        <Sandbox id={5} />
        <Sandbox id={6} />
        {/* background gradient defined in Background component */}
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div className="flex flex-col items-center justify-center min-h-screen text-white">section</div>
        <div id="about" className="flex flex-col items-center justify-center min-h-screen text-white">section</div>

        <div className="absoltue bottom-0">wapeofijawpfeoiawjfpoawijfawpofijawpoefj</div>

      </main>
    </Background>
  )
}

export default Home;
