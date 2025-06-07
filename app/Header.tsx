import Image from "next/image"
import GlowingLogo from "@/public/temp_landing/bhacks-glowing-logo.svg"
import Signup from "@/components/Signup";
import Cog from "@/components/Cog";
import LinesTopLeft from "@/public/temp_landing/lines-topleft.svg";
import LinesBottomRight from "@/public/temp_landing/lines-bottomright.svg";

const WelcomeSection = () => {
  return (
    <div className="flex-1 grow-0 justify-left text-left w-full lg:mr-10">

      {/* hidden when mobile */}
      <div className="w-full lg:flex hidden justify-start items-start">
        <Image
          width={400}
          height={100}
          src={LinesTopLeft}
          alt="Top Left Lines"
          className="" />
      </div>

      <div className="lg:mx-15">
        <div className="pl-1 font-presicav lg:text-[1.5em] text-[0.75em] w-full">
          <p>WELCOME TO</p>
        </div>
        <div className="leading-none">
          <div className="text-[64px] lg:text-[108px] font-bold text-left">
            <p>BOSTON</p>
            <p>HACKS</p>
          </div>
        </div>
        <div className="font-36days text-[1.5em] lg:text-[4em] text-right w-full leading-none">
          <p>2025</p>
        </div>
        <div className="w-full font-presicav text-[1.5em] lg:text-[2.5em]">
          <p>October 11th-12th</p>
        </div>
        <div className="w-full font-presicav text-[0.75em] lg:text-[1.25em] text-left leading-[1em] mt-3">
          <p>Sign up here to get notified when applications open!</p>
        </div>
        <div className="mt-7 w-full">
          <Signup />
        </div>
      </div>

      {/* hidden when mobile */}
      <div className="w-full hidden lg:flex justify-end items-end">
        <Image
          width={400}
          height={100}
          src={LinesBottomRight}
          alt="Bottom Right Lines"
          className="" />
      </div>
    </div>
  );
}

/* 
 * Adjust the size of the logo by adjusting the parent div first and setting the cog to be the same size.
 */
const LogoSection = () => {
  return (
    <div className="lg:flex hidden relative w-[600px] h-[600px] items-center justify-center grow-0 shrink-0">
      <Image
        className="animate-pulse-glow"
        src={GlowingLogo}
        alt="BostonHacks 2025 Logo"
        width={250}
        height={250}
      />
      <div className="items-center justify-center absolute inset-0 -z-10">
        <div className="w-[600px] h-[600px]">
          <Cog />
        </div>
      </div>
    </div>
  );
}


const Header = () => {
  return (
    <div className="relative flex flex-row items-center justify-center">
      <WelcomeSection />
      <div className="flex items-center pb-40 justify-center lg:hidden absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] opacity-30">
          <Cog />
        </div>
      </div>
      <LogoSection />
    </div>

  )
}

export default Header
