import Image from "next/image"
import GlowingLogo from "@/public/temp_landing/bhacks-glowing-logo.svg"

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Image
        className="md:flex hidden"
        src={GlowingLogo}
        alt="BostonHacks 2025 Logo"
        width={300}
        height={300}
      />

      {/* <div className="flex items-center justify-center min-h-screen text-white"> */}
      {/*   <div className="relative inline-block text-center flex-vertical"> */}
      {/*     <div className="absolute -top-6 left-1 font-presicav md:text-[18px] text-[12px] translate-widest text-white" > */}
      {/*       WELCOME TO */}
      {/*     </div> */}
      {/**/}
      {/*     <h1 className="text-[64px] md:text-[108px] font-semibold text-left leading-none">BOSTON<br/>HACKS</h1> */}
      {/**/}
      {/*     <div className="absolute -bottom-9 right-0 font-presicav text-[36px] md:text-[58px] translate-widest text-white" > */}
      {/*       2025 */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="font-presicav text-[24px] md:text[38px]">October 10th-12th</div> */}
      {/* </div> */}

      <div className="text-left w-fit mx-30 relative">
        <div className="pl-1 font-presicav md:text-[18px] text-[12px] w-full">
          <p>WELCOME TO</p>
        </div>
        <div className="flex justify-left flex-col w-full leading-none">
          <div className="text-[64px] md:text-[108px] font-semibold text-left">
            <p>BOSTON</p>
            <p>HACKS</p>
          </div>
        </div>
        <div className="font-presicav text-[36px] md:text-[58px] text-right w-full leading-none">
          <p>2025</p>
        </div>
        <div className="w-full font-presicav text-[25px] md:text-[42px]">
          <p>October 10th-12th</p>
        </div>
        <div className="w-full font-presicav text-[12px] md:text-[24px] text-center my-3">
          <p>Sign up here to get notified when applications open!</p>
        </div>

      </div>

    </div>
  )
}

export default Header
