import React from 'react';
import WindowSection, { ScreenWindowSizes } from './Windows';
import WindowsAnimationTrigger from './useInViewport';
import Image from 'next/image';
import BigFlowers from '@/public/main/RetroRemix/flowers.svg';
import Sunflare from '@/public/main/RetroRemix/sunflare.svg';
import Splash from '@/public/main/RetroRemix/splash.svg';

const RetroRemix = () => {
  return (
    <div className="font-font-mssansserif w-full h-full flex relative overflow-visible">

      <WindowsAnimationTrigger>
        <div className="absolute w-full h-full pointer-events-none -top-[600px] rotate-45 window-animate window-3">
          <Image className="w-[150%] h-[150%]" src={Sunflare} alt="Sunflare" />
        </div>
        <div className="w-screen h-screen absolute inset-0 pointer-events-none z-0 window-animate window-3 ">
          <Image className="w-[150%] h-[150%]" src={BigFlowers} alt="Flowers" />
        </div>
        <div className="absolute w-full h-full pointer-events-none top-[90%] left-[10%] -rotate-12 window-animate window-3">
          <Image className="opacity-50" src={Splash} alt="Splash" />
        </div>
        <div className="absolute w-full h-full pointer-events-none z-10 top-[10%] left-[50%] -rotate-12 window-animate window-3">
          <Image className="opacity-50" src={Splash} alt="Splash" />
        </div>
      </WindowsAnimationTrigger>
      <div className="md:hidden">
        {/* we need to wrap with client trigger since the windowsection relies on server rendering for proper placement */}
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.SMALL} />
        </WindowsAnimationTrigger>
      </div>
      <div className="hidden 2xl:hidden xl:hidden md:block">
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.MEDIUM} />
        </WindowsAnimationTrigger>
      </div>
      <div className="hidden 2xl:hidden xl:block">
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.LARGE} />
        </WindowsAnimationTrigger>
      </div>

      <div className="hidden 2xl:block">
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.XLARGE} />
        </WindowsAnimationTrigger>
      </div>
    </div>
  )
}

export default RetroRemix
