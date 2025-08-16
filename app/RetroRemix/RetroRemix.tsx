import React from 'react';
import Window from '@/components/Window';
import recycleBin from '@/public/main/RetroRemix/recyclebin.png';
import Image from 'next/image';

const WindowSection = () => {
  return (
    <>
      {/* Largest window (back layer) */}
      <div className="absolute">
        <Window
          title={
            <span className="flex flex-row gap-x-2">
              <Image width={16} height={16} src={recycleBin} alt='' />
              Recycle Bin
            </span>
          }
          initialPosition={{ x: -400, y: 0 }}
          initialSize={{ width: 450, height: 350 }}
          className=""
        >
          <div className="w-full h-full">
            {/* Content for largest window */}
          </div>
        </Window>
      </div >

      {/* Medium window (middle layer) */}
      <div className="absolute">
        <Window
          title="Retro App 2"
          initialPosition={{ x: 200, y: 200 }}
          initialSize={{ width: 400, height: 300 }}
          className="z-10"
        >
          <div className="w-full h-full">
            {/* Content for medium window */}
          </div>
        </Window>
      </div >

      {/* Smallest window (front layer) */}
      <div className="absolute">
        <Window
          title="Retro App 3"
          initialPosition={{ x: -200, y: 500 }}
          initialSize={{ width: 350, height: 250 }}
          className="z-20"
        >
          <div className="w-full h-full">
            {/* Content for smallest window */}
          </div>
        </Window>
      </div >
    </>
  );
}

const RetroRemix = () => {
  return (
    <div className="font-font-mssansserif border-red-600 border-2 w-full h-full flex items-center justify-center">
      <div className="md:hidden">
        {/* mobile */}
      </div>
      <div className="hidden md:block">
        <WindowSection />
      </div>
    </div>
  )
}

export default RetroRemix
