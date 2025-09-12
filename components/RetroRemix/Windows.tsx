import Window from '@/components/Window';
import recycleBin from '@/public/main/RetroRemix/recyclebin.png';
import Image from 'next/image';
import WindowsButton from '@/components/WindowsButton';
import LlamaBalloon from '@/public/main/RetroRemix/llama_balloon.png';
import Fish from '@/public/main/RetroRemix/fish.svg';
import SmallFlowers from '@/public/main/RetroRemix/smallflowers.svg';
import Bubble from '@/public/main/RetroRemix/bubble.svg';
import { ArrowLeft, ArrowRight, ArrowDropUp, ArrowDropDown } from '@mui/icons-material';


export enum ScreenWindowSizes {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XLARGE = "XLARGE"
};

const SCREEN_WINDOW_SIZES = {
  // everything is scaled down on small
  SMALL: [
    { width: 300, height: 400, startX: 180, startY: 20 },
    { width: 300, height: 450, startX: 10, startY: 430 },
    { width: 400, height: 700, startX: 70, startY: 850 },
  ],
  MEDIUM: [
    { width: 400, height: 420, startX: 600, startY: 40 },
    { width: 450, height: 450, startX: 100, startY: 100 },
    { width: 550, height: 800, startX: 350, startY: 500 },
  ],
  LARGE: [
    { width: 400, height: 420, startX: 700, startY: 50 },
    { width: 450, height: 450, startX: 200, startY: 150 },
    { width: 550, height: 800, startX: 450, startY: 550 },
  ],
  XLARGE: [
    { width: 400, height: 420, startX: 1300, startY: 50 },
    { width: 450, height: 450, startX: 500, startY: 200 },
    { width: 550, height: 800, startX: 900, startY: 600 },
  ]
};

const Windows = ({ windowSize }: { windowSize: ScreenWindowSizes }) => {
  const windowSizing = SCREEN_WINDOW_SIZES[windowSize] || SCREEN_WINDOW_SIZES.SMALL;
  const isSmall = windowSize === ScreenWindowSizes.SMALL;
  return (
    <div className={`${isSmall ? 'transform scale-75 origin-top-left' : ''}`}>
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
          maximizable={!isSmall}
          className="window-1 window-animate"
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
                  {/* Speech bubble */}
                  <div className="relative bg-white border-2 border-black rounded-lg p-2 text-xs max-w-24">
                    <div className="text-center">Drag or resize my window on desktop!</div>
                    {/* Speech bubble tail pointing right */}
                    <div className="absolute top-7 -right-2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-black"></div>
                    <div className="absolute top-4 -right-1.5 w-0 h-0 border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-white"></div>
                  </div>
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

          {/* Fish */}
          <div className="absolute pointer-events-none -top-40 -right-30 z-50">
            <Image width={300} height={300} className="opacity-15" src={Bubble} alt="Bubble" />
          </div>

        </Window >
      </div>


      <div className="absolute">
        <Window
          title={
            <span className="flex flex-row gap-x-2">
              Untitled - Paint
            </span>
          }
          initialPosition={{ x: windowSizing[2].startX, y: windowSizing[2].startY }}
          initialSize={{ width: windowSizing[2].width, height: windowSizing[2].height }}
          className="window-3 window-animate"
          maximizable={!isSmall}
          menuItems={['File', 'Edit', 'View', 'Image', 'Colors', 'Help']}
        >
          <div className="w-full h-full">
            <div className="w-full h-full flex flex-col text-black">
              {/* Main content area with toolbar and canvas */}
              <div className="flex flex-1 flex-row">
                {/* Left toolbar - 8x2 grid of tools */}
                <div className="flex flex-col flex-shrink-0">
                  <div className="grid grid-cols-2">
                    {Array.from({ length: 16 }, (_, i) => (
                      <WindowsButton key={i} title={`Tool ${i + 1}`} className="bg-none w-10 h-10 text-sm flex items-center justify-center">
                        {i === 0 ? '↖' : i === 1 ? '□' : i === 2 ? '○' : i === 3 ? '✏' :
                          i === 4 ? '🖌' : i === 5 ? '✂' : i === 6 ? '🔍' : i === 7 ? '💧' :
                            i === 8 ? '/' : i === 9 ? '\\' : i === 10 ? '—' : i === 11 ? '│' :
                              i === 12 ? '▭' : i === 13 ? '◯' : i === 14 ? '⬟' : '★'}
                      </WindowsButton>
                    ))}
                  </div>

                  <div className="mt-1 w-full h-full border border-b-white border-r-white border-t-ms-gray-darker border-l-ms-gray-darker" />
                </div>

                {/* Main canvas area with scrollbars */}
                <div className="w-full h-full flex flex-col border-white border-inset border-2">
                  <div className="flex flex-1 flex-row mr-4">
                    {/* Canvas area */}
                    <div className="bg-white flex-1 border-2 border-inset border-t-black border-l-black border-b-white border-r-white">
                      {/* White canvas content */}
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <span className={`${isSmall ? "text-[6rem]" : "text-[8rem]"}`}>Retro</span>
                        <span className={`${isSmall ? "text-[6rem]" : "text-[8rem]"}`}>Remix</span>
                      </div>
                    </div>

                    {/* Vertical scrollbar */}
                    <div className="w-4 border-l-2 border-l-ms-gray grid grid-rows-[auto_1fr_2fr_auto] items-center">
                      <WindowsButton title="Up" className="bg-none border-2 border-outset border-gray-400 text-xs hover:border-inset">
                        <ArrowDropUp />
                      </WindowsButton>
                      <WindowsButton title="Scroll slider" className="bg-none h-full px-0 py-0">
                        <></>
                      </WindowsButton>
                      <div className="bg-none h-full">

                      </div>
                      <WindowsButton title="Down" className="bg-none border-2 border-outset border-gray-400 text-xs hover:border-inset">
                        <ArrowDropDown />
                      </WindowsButton>
                    </div>
                  </div>

                  {/* Horizontal scrollbar */}
                  <div className="h-4 border-t-2 border-t-ms-gray mr-[2px] mb-4 grid grid-cols-[auto_1fr_2fr_auto] items-center">
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
              </div>

              {/* Color palette */}
              <div className="border-2 border-inset border-t-black border-l-black border-b-white border-r-white p-1 mt-1 flex gap-2">
                {/* Main/Secondary color display */}
                <div className="relative w-12 h-12 flex-shrink-0 bg-white border-2 border-t-black border-l-black border-r-white border-b-white">
                  <div className="absolute bottom-1 right-1 h-6 w-6 border-2 border-ms-gray-darker bg-black"></div>
                  <div className="absolute top-1 left-1 h-6 w-6 border-2 border-ms-gray-darker bg-blue-600"></div>
                </div>

                {/* Color grid */}
                <div className="grid grid-cols-14 gap-0.5 flex-1">
                  {[
                    '#000000', '#808080', '#C0C0C0', '#FFFFFF', '#800000', '#FF0000', '#808000', '#FFFF00',
                    '#008000', '#00FF00', '#008080', '#00FFFF', '#000080', '#0000FF', '#800080', '#FF00FF',
                    '#404040', '#A0A0A0', '#E0E0E0', '#F0F0F0', '#400000', '#804040', '#404000', '#808040',
                    '#004000', '#408040', '#004040', '#408080'
                  ].map((color, i) => (
                    <div key={i} className="border-1 border-l-white border-b-white border-t-ms-gray-darker border-r-ms-gray-darker">
                      <div
                        className="w-full h-full border-t-2 border-l-2 border-t-black border-l-black cursor-pointer"
                        style={{ backgroundColor: color }}
                        title={`Color ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom info area */}
              <div className="grid grid-cols-2 gap-1 text-sm mt-1">
                <div className="border-2 border-inset border-t-black border-l-black border-b-white border-r-white px-2 py-1">
                  For Help, click Help Topics on the Help menu.
                </div>
                <div className="border-2 border-inset border-t-black border-l-black border-b-white border-r-white px-2 py-1">
                  {/* Empty info box */}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 -right-40 z-50 -rotate-45 pointer-events-none">
            <Image width={300} height={300} src={SmallFlowers} alt="Flowers" />
          </div>
        </Window >
      </div>

      <div className="relative">
        <Window
          title={
            <span className="flex flex-row gap-x-2">
              Help Topics: Windows Help
            </span>
          }
          maximizable={!isSmall}
          initialPosition={{ x: windowSizing[1].startX, y: windowSizing[1].startY }}
          initialSize={{ width: windowSizing[1].width, height: windowSizing[1].height }}
          className="window-animate window-2"
        >
          <div className="text-black w-full h-full p-1 flex flex-col">
            {/* Tab headers */}
            <div className="flex">
              <div className="border-2 border-ridge rounded-t-md border-white border-r-black px-3 py-1 text-sm font-bold border-b-0 relative -mb-0.5">
                Contents
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ms-gray"></div>

              </div>
              <div className="border-2 border-l-0 border-ridge rounded-t-md border-t-white border-r-black px-3 py-1 text-sm border-b-0">
                Index
              </div>
              <div className="border-2 border-ridge border-l-white border-t-white border-r-black rounded-t-md px-3 py-1 text-sm border-b-0">
                Find
              </div>
            </div>

            {/* Tab body - connects to active tab */}
            <div className="border-2 border-ridge border-white flex-1 mb-2 p-3 flex flex-col">
              {/* Tab content area */}
              <div className="my-3">Click a book, and then click Open. Or click another tab, such as Index.</div>
              <div className="bg-white border-2 border-inset border-black flex-1 p-2 flex flex-col items-center justify-center">
                <div className="text-5xl">This year&apos;s </div>
                <div className="text-5xl">theme...</div>
              </div>
            </div>

            {/* Bottom buttons */}
            <div className="flex gap-2 justify-end">
              <WindowsButton title="Open" className="bg-none px-4 py-1 text-sm">
                Open
              </WindowsButton>
              <WindowsButton title="Print" className="bg-none px-4 py-1 text-sm">
                Print...
              </WindowsButton>
              <WindowsButton title="Cancel" className="bg-none px-4 py-1-xs text-sm">
                Cancel
              </WindowsButton>
            </div>


          </div>

          {/* Fish */}
          <div className="absolute pointer-events-none -bottom-30 -left-30 z-50">
            <Image width={300} height={300} src={Fish} alt="Fish" />
          </div>

        </Window>
      </div>

    </div>
  );
}

export default Windows;
