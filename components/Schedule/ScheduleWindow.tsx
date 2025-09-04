import Image from 'next/image';
import Window from "@/components/Window"
import React from "react";
import WindowsButton from '../WindowsButton';
import { ArrowLeft, ArrowRight, ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import Splash from '@/public/splashOG.svg';
import YellowFish from '@/public/main/Schedule/yellowFish.svg';
import Bubble from '@/public/main/Schedule/bubble.svg';


export enum ScreenWindowSizes {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XLARGE = "XLARGE"
};

const SCREEN_WINDOW_SIZES = {
  // everything is scaled down on small
  SMALL: [
    { width: 300, height: 600, startX: 0, startY: 0 }
  ],
  MEDIUM: [
    { width: 600, height: 780, startX: 0, startY: 0 }
  ],
  LARGE: [
    { width: 1252, height: 1058, startX: 0, startY: 0 }
  ],
  XLARGE: [
    { width: 1252, height: 1058, startX: 0, startY: 0 }
  ]
};

const ScheduleWindow = ({ windowSize }: { windowSize: ScreenWindowSizes }) => {
  const windowSizing = SCREEN_WINDOW_SIZES[windowSize] || SCREEN_WINDOW_SIZES.SMALL;
  const isSmall = windowSize === ScreenWindowSizes.SMALL;

  const data = [
    {
      times: [
        { time: "Day 1. . . . . .", activity: "Wake up" },
        { time: "10:00 am. . . . . .", activity: "Breakfast" },
        { time: "11:00 am. . . . . .", activity: "Orientation" },
        { time: "12:00 pm. . . . . .", activity: "How 2 code" },
        { time: "1:00pm. . . . . .", activity: "Yay" },
      ],
    },
    {
      times: [
        { time: "Day 2. . . . . .", activity: "Wake up" },
        { time: "10:00 am. . . . . .", activity: "Breakfast" },
        { time: "11:00 am. . . . . .", activity: "Idk" },
        { time: "12:00 pm. . . . . .", activity: "How 2 code" },
        { time: "1:00pm. . . . . .", activity: "Yay" },
      ],
    },
    {
      times: [
        { time: "Day 3. . . . . .", activity: "Wake up" },
        { time: "10:00 am. . . . . .", activity: "Breakfast" },
        { time: "11:00 am. . . . . .", activity: "Design" },
        { time: "12:00 pm. . . . . .", activity: "How 2 code" },
        { time: "1:00pm. . . . . .", activity: "Yay" },
      ],
    },
  ];

  return (
      <div className="absolute inset-0 flex justify-center items-center">
        {/* Splash */}
        <div className="absolute pointer-events-none -z-10 flex justify-center items-center window-4 window-animate">
          <Image
            src={Splash}
            alt="Splash"
            className="opacity-100 scale-[200%] rotate-[180deg] -translate-x-[20%]"
            priority
          />
        </div>
        {/* Yellow Fish */}
        <div className="absolute pointer-events-none z-10 flex -right-[8%] lg:right-[10%] translate-y-[145%] lg:translate-y-[260%] window-4 window-animate">
          <Image
            src={YellowFish}
            alt="Yellow Fish"
            className="opacity-100 scale-[50%] lg:scale-[100%]"
            priority
          />
        </div>
        {/* Bubble */}
        <div className="absolute pointer-events-none z-0 flex right-0 lg:-translate-y-[85%] window-4 window-animate">
          <Image
            src={Bubble}
            alt="Bubble"
            className="opacity-100"
            priority
          />
        </div>
        <Window
          title="Untitled - Notepad"
          initialSize={{ width: windowSizing[0].width, height: windowSizing[0].height }}
          className="window-4 window-animate"
          maximizable={!isSmall}
          menuItems={['File', 'Edit', 'Seach', 'Help']}
        >
          <div className="w-full h-full">
              <div className="w-full h-full flex flex-col text-black">
                {/* Main content area with toolbar and canvas */}
                <div className="flex flex-1 flex-row">
                  {/* Main canvas area with scrollbars */}
                  <div className="w-full h-full flex flex-col border-white border-inset border-2">
                    <div className="flex flex-1 flex-row mr-4">
                      {/* Canvas area */}
                      <div className="bg-white flex-1 border-2 border-inset border-t-black border-l-black border-b-white border-r-white">
                        {/* White canvas content */}
                        <div className="w-full h-full flex items-center justify-center">
                          {/* Schedule */}
                          <div className="max-w-6xl w-full px-[clamp(0.5rem,1vw,2rem)]">
                            <div className='flex justify-center items-center'></div>
                            {/* Title */}
                            <div className="mb-[clamp(0.25rem,0.5vw,1rem)]">
                              <span className="text-[clamp(2rem,4vw,4rem)]">Schedule</span>
                            </div>

                            <div className='flex overflow-hidden'>
                              {Array.from({ length: isSmall ? 1 : 2 }).map((_, colIndex) => (
                              <div key={colIndex} className="space-y-[clamp(0.25rem,0.75vw,1rem)] gap-[clamp(3rem,4vw,4rem)] flex-1">
                              {data.map((day, i) => (
                                <div key={i}>
                                  {day.times.map((slot, j) => (
                                    <div
                                      key={j}
                                      className="flex 
                                                px-[clamp(0.25rem,0.75vw,1rem)] 
                                                py-[clamp(0.125rem,0.5vw,0.5rem)] 
                                                text-[clamp(1rem,1.5vw,2rem)] 
                                                leading-[1.6]
                                                whitespace-nowrap"
                                    >
                                      <span className="min-w-[clamp(6em,15vw,8em)] w-[clamp(6em,15vw,8em)] font-medium text-gray-700 mr-[2rem]">
                                        {slot.time}
                                      </span>
                                      <span className="text-gray-900">{slot.activity}</span>
                                    </div>
                                  ))}
                                </div>
                              ))}
                              </div>
                            ))}
                            </div>
                          </div>
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
              </div>
            </div>
        </Window >
      </div>
  );
};

export default ScheduleWindow;
