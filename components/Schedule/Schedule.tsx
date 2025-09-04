import React from 'react';
import WindowSection, { ScreenWindowSizes } from './ScheduleWindow';
import WindowsAnimationTrigger from '../RetroRemix/useInViewport';
import Image from 'next/image';

const Schedule = () => {
  return (
    <div className="font-font-mssansserif w-full h-full flex relative overflow-visible">
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

export default Schedule;
