import Image from "next/image";
import Cog1 from "@/public/temp_landing/cog/cog1.svg";
import Cog2 from "@/public/temp_landing/cog/cog2.svg";
import Cog3 from "@/public/temp_landing/cog/cog3.svg";
import Cog4 from "@/public/temp_landing/cog/cog4.svg";
import React from "react";

const Cog = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 scale-[1.35] animate-spin-slow lg:[animation-play-state:running] lg:group-hover:[animation-play-state:paused]">
        <Image
          src={Cog1}
          alt="Cog Layer 1"
          fill
          className="animate-spin-fast lg:[animation-play-state:paused] lg:group-hover:[animation-play-state:running]"
          style={{ zIndex: 1 }}
          priority
        />
      </div>
      <div className="absolute inset-0 scale-[0.85] animate-spin-slow-reverse lg:[animation-play-state:running] lg:group-hover:[animation-play-state:paused]">
        <Image
          src={Cog2}
          alt="Cog Layer 2"
          fill
          className="animate-spin-fast-reverse lg:[animation-play-state:paused] lg:group-hover:[animation-play-state:running]"
          style={{ zIndex: 2 }}
          priority
        />
      </div>
      <div className="absolute inset-0 scale-[0.8] animate-spin-slow lg:[animation-play-state:running] lg:group-hover:[animation-play-state:paused]">
        <Image
          src={Cog3}
          alt="Cog Layer 3"
          fill
          className="animate-spin-fast lg:[animation-play-state:paused] lg:group-hover:[animation-play-state:running]"
          style={{ zIndex: 3 }}
          priority
        />
      </div>
      <div className="absolute inset-0 scale-[0.72] animate-spin-slow-reverse lg:[animation-play-state:running] lg:group-hover:[animation-play-state:paused]">
        <Image
          src={Cog4}
          alt="Cog Layer 4"
          fill
          className="animate-spin-fast-reverse lg:[animation-play-state:paused] lg:group-hover:[animation-play-state:running]"
          style={{ zIndex: 4 }}
          priority
        />
      </div>
    </div>
  );
};

export default Cog;

