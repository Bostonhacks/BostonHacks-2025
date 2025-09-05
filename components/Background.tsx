import React from "react";
import backgroundImage from "@/public/background-cropped.png"
import waterbead from "@/public/waterbead.svg";
import cloud1 from "@/public/cloud1.png";
import cloud2 from "@/public/cloud2.png";
import Image from "next/image";

type BackgroundProps = {
  children: React.ReactNode;
  showCity?: boolean;
  className?: string;
}

const Background = ({ showCity = true, className, children }: BackgroundProps): React.ReactNode => {
  return (
    <div className={`relative w-full ${className}`}>
      {showCity && (
        <div className="absolute bottom-0 left-0 w-full -z-30">
          <Image
            src={backgroundImage}
            alt="Background image"
            className="w-full h-auto object-cover pointer-events-none select-none"
          />
        </div>
      )}

      {/* Gradient overlay */}
      {/* this is defined instead in globals.css for background fixing reasons */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-bg-gradient-stop-1 to-bg-gradient-stop-2 -z-40"></div> */}

      <Image
        className="absolute right-[200px] top-[30%] z-10 opacity-[0.35] pointer-events-none select-none"
        src={waterbead}
        width={500}
        height={500}
        alt="Waterbead"
      />

      <Image
        className="absolute right-[200px] top-[10%] z-10 opacity-[0.35] pointer-events-none select-none"
        src={waterbead}
        width={200}
        height={200}
        alt="Waterbead"
      />

      <Image
        className="absolute left-0 top-[10%] z-10 pointer-events-none select-none"
        src={cloud1}
        alt="cloud 1"
        width={1500}
      />

      <Image
        className="absolute right-0 top-[50%] z-10 pointer-events-none select-none"
        src={cloud2}
        alt="cloud 2"
        width={2000}
      />

      <Image
        className="absolute left-[200px] top-[60%] z-10 opacity-[0.5] pointer-events-none select-none"
        src={waterbead}
        alt="Waterbead"
      />

      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}

export default Background
