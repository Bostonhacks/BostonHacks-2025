import React from "react";
import backgroundImage from "@/public/background.png"
import waterbead from "@/public/waterbead.svg";
import Image from "next/image";

type BackgroundProps = {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps): React.ReactNode => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb]">
      <Image
        className="absolute right-[200px] top-[30%] z-10 opacity-[0.35]"
        src={waterbead}
        width={500}
        height={500}
        alt="Waterbead"
      />

      <Image
        className="absolute left-[200px] top-[60%] z-10 opacity-[0.5]"
        src={waterbead}
        alt="Waterbead"
      />

      <div className="z-20">
        {children}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={backgroundImage}
          alt="Background image"
          className="w-[120%] h-auto pointer-events-none select-none scale-300 translate-y-[-200px] translate-x-[-500px]"
        />
      </div>
    </div>
  )
}

export default Background
