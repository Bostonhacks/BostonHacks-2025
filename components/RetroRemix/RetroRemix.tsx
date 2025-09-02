import React from 'react';
import WindowSection, { ScreenWindowSizes } from './Windows';
import WindowsAnimationTrigger from './useInViewport';

const RetroRemix = () => {
  return (
    <div className="font-font-mssansserif w-full h-full flex">
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
