import React from 'react';
import WindowSection, { ScreenWindowSizes } from './Windows';
import WindowsAnimationTrigger from './useInViewport';
import Image from 'next/image';
import BigFlowers from '@/public/main/RetroRemix/flowers.svg';

const RetroRemix = () => {
  return (
    <div className="font-font-mssansserif w-full h-full flex relative overflow-visible">

      <WindowsAnimationTrigger>
        <div className="absolute inset-0 pointer-events-none z-0 window-animate window-3 ">
          <Image className="w-[150vw]" src={BigFlowers} alt="Flowers" />
        </div>
      </WindowsAnimationTrigger>
      <div className="md:hidden">
        {/* we need to wrap with client trigger since the windowsection relies on server rendering for proper placement */}
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.SMALL} />
        </WindowsAnimationTrigger>
      </div>
      <div className="hidden xl:hidden md:block">
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.MEDIUM} />
        </WindowsAnimationTrigger>
      </div>
      <div className="hidden xl:block">
        <WindowsAnimationTrigger>
          <WindowSection windowSize={ScreenWindowSizes.LARGE} />
        </WindowsAnimationTrigger>
      </div>
    </div>
  )
}

export default RetroRemix
