import React from 'react';
import Window from '@/components/Window';
import recycleBin from '@/public/main/RetroRemix/recyclebin.png';
import Image from 'next/image';
import WindowsButton from '@/components/WindowsButton';
import LlamaBalloon from '@/public/main/RetroRemix/llama_balloon.png';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';

enum ScreenWindowSizes {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
};

const SCREEN_WINDOW_SIZES = {
  SMALL: [
    { width: 350, height: 250, startX: 300, startY: 50 },
    { width: 400, height: 300, startX: 200, startY: 200 },
    { width: 450, height: 350, startX: -400, startY: 0 },
  ],
  MEDIUM: [
    { width: 340, height: 300, startX: 400, startY: 50 },
    { width: 450, height: 350, startX: -400, startY: 0 },
    { width: 350, height: 250, startX: -200, startY: 500 },
  ],
  LARGE: [
    { width: 400, height: 420, startX: 1400, startY: 50 },
    { width: 350, height: 250, startX: -200, startY: 500 },
    { width: 400, height: 300, startX: 200, startY: 200 },
  ],
};

const WindowSection = ({ windowSize }: { windowSize: ScreenWindowSizes }) => {
  const windowSizing = SCREEN_WINDOW_SIZES[windowSize] || SCREEN_WINDOW_SIZES.SMALL;
  return (
    <>
      {/* Largest window (back layer) */}
      <div className="absolute">
        <Window
          title={
            <span className="flex flex-row gap-x-2">
              <Image width={24} height={24} src={recycleBin} alt='' />
              Recycle Bin
            </span>
          }
          menuItems={['File', 'Edit', 'View', 'Help']}
          initialPosition={{ x: windowSizing[0].startX, y: windowSizing[0].startY }}
          initialSize={{ width: windowSizing[0].width, height: windowSizing[0].height }}
          className=""
        >
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col text-black">
              <div className="border-2 border-inset border-t-black border-l-black border-b-white border-r-white mb-1 flex-1 flex flex-col">
                {/* Header fields */}
                <div className="text-xs grid grid-cols-2">
                  <WindowsButton title="Name" className="text-left p-1 pl-2 text-sm bg-none">Name</WindowsButton>
                  <WindowsButton title="Original Location" className="text-left pl-2 p-1 text-sm bg-none">Original Location</WindowsButton>
                </div>

                {/* Main content area */}
                <div className="bg-white flex-1 flex items-center justify-center">
                  <Image className="go here: https://bostonhacks.org" width={150} height={150} src={LlamaBalloon} alt="Recycle Bin" />
                </div>

                {/* Scroll controls */}
                <div className="border-t-2 border-t-ms-gray grid grid-cols-[auto_1fr_2fr_auto] items-center">
                  <WindowsButton title="Left" className="bg-none border-2 border-outset border-gray-400 text-xs hover:border-inset">
                    <ArrowLeft />
                  </WindowsButton>
                  <WindowsButton title="Scroll slider" className="bg-none h-full px-0 py-0">
                    <></>
                  </WindowsButton>
                  <div className="bg-none h-full">

                  </div>
                  <WindowsButton title="Right" className="bg-none border-2 border-outset border-gray-400 text-xs hover:border-inset">
                    <ArrowRight />
                  </WindowsButton>
                </div>
              </div>


              {/* Info boxes */}
              <div className="grid grid-cols-3 gap-1 text-sm">
                <div className="border-2 col-span-2 border-b-white border-inset border-r-white border-ms-gray-darker px-2 py-1">
                  0 object(s)
                </div>
                <div className="border-2 col-span-1 border-b-white border-inset border-r-white border-ms-gray-darker px-2 py-1">
                  0 bytes
                </div>
              </div>
            </div>
          </div>
        </Window >
      </div >

      {/* Medium window (middle layer) */}
      < div className="absolute" >
        <Window
          title={
            <span className="flex flex-row gap-x-2">
              Help Topics: Windows Help
            </span>
          }
          initialPosition={{ x: windowSizing[1].startX, y: windowSizing[1].startY }}
          initialSize={{ width: windowSizing[1].width, height: windowSizing[1].height }}
          className=""
        >
          <div className="w-full h-full p-1 flex flex-col">
            {/* Tab headers */}
            <div className="flex">
              <div className="bg-white border-2 border-outset rounded-l-md rounded-b-none border-white px-3 py-1 text-xs font-bold border-b-0 relative z-10">
                Contents
              </div>
              <div className="bg-gray-200 border-2 border-outset border-white px-3 py-1 text-xs border-b-0">
                Index
              </div>
              <div className="bg-gray-200 border-2 border-outset border-gray-400 px-3 py-1 text-xs border-b-0">
                Find
              </div>
            </div>

            {/* Tab body - connects to active tab */}
            <div className="border-2 border-outset border-white border-t-0 flex-1 mb-2 p-2 flex flex-col">
              {/* Tab content area */}
              <div className="bg-white border-2 border-inset border-black flex-1 p-2">
                <div className="text-sm">Help content would go here...</div>
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="flex gap-2 justify-end">
              <WindowsButton title="Open" className="bg-gray-200 border-2 border-outset border-gray-400 px-4 py-1 text-xs hover:border-inset">
                Open
              </WindowsButton>
              <WindowsButton title="Print" className="bg-gray-200 border-2 border-outset border-gray-400 px-4 py-1 text-xs hover:border-inset">
                Print
              </WindowsButton>
              <WindowsButton title="Cancel" className="bg-gray-200 border-2 border-outset border-gray-400 px-4 py-1 text-xs hover:border-inset">
                Cancel
              </WindowsButton>
            </div>
          </div>
        </Window>
      </div >

      {/* Smallest window (front layer) */}
      < div className="absolute" >
        <Window
          title={
            <span className="flex flex-row gap-x-2">
              <Image width={16} height={16} src={recycleBin} alt='' />
              Recycle Bin
            </span>
          }
          initialPosition={{ x: windowSizing[2].startX, y: windowSizing[2].startY }}
          initialSize={{ width: windowSizing[2].width, height: windowSizing[2].height }}
          className=""
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
    <div className="font-font-mssansserif border-red-600 border-2 w-full h-full flex">
      <div className="md:hidden">
        {/* mobile */}
      </div>
      <div className="hidden lg:hidden md:block">
        <WindowSection windowSize={ScreenWindowSizes.MEDIUM} />
      </div>
      <div className="hidden lg:block">
        <WindowSection windowSize={ScreenWindowSizes.LARGE} />
      </div>
    </div>
  )
}

export default RetroRemix
