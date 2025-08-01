import React from "react";
import backgroundImage from "@/public/background.png"
import waterbead from "@/public/waterbead.svg";
import cloud1 from "@/public/cloud1.png";
import cloud2 from "@/public/cloud2.png";
import Image from "next/image";

type BackgroundProps = {
  children: React.ReactNode;
}

const Background = ({ children }: BackgroundProps): React.ReactNode => {
  return (
    <div className={`relative w-full bg-gradient-to-b from-bg-gradient-stop-1 to-bg-gradient-stop-2`}>
      <Image
        className="absolute right-[200px] top-[30%] z-10 opacity-[0.35]"
        src={waterbead}
        width={500}
        height={500}
        alt="Waterbead"
      />

      <Image
        className="absolute right-[200px] top-[10%] z-10 opacity-[0.35]"
        src={waterbead}
        width={200}
        height={200}
        alt="Waterbead"
      />

      <Image
        className="absolute left-0 top-[10%] z-10"
        src={cloud1}
        alt="cloud 1"
        width={1500}
      />


      <Image
        className="absolute right-0 top-[50%] z-10"
        src={cloud2}
        alt="cloud 2"
        width={2000}
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
