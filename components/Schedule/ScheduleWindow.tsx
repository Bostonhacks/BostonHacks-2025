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
    { width: 300, height: 700, startX: 0, startY: 0 }
  ],
  MEDIUM: [
    { width: 600, height: 880, startX: 0, startY: 0 }
  ],
  LARGE: [
    { width: 1252, height: 1100, startX: 0, startY: 0 }
  ],
  XLARGE: [
    { width: 1252, height: 1100, startX: 0, startY: 0 }
  ]
};

const ScheduleWindow = ({ windowSize }: { windowSize: ScreenWindowSizes }) => {
  const windowSizing = SCREEN_WINDOW_SIZES[windowSize] || SCREEN_WINDOW_SIZES.SMALL;
  const isSmall = windowSize === ScreenWindowSizes.SMALL;

  const data = [
    {
      times: [
        { time: "09:00 am. . . . . .", activity: "Check-in starts" },
        { time: "10:00 am. . . . . .", activity: "Opening ceremony" },
        { time: "10:30 am. . . . . .", activity: "Hacking begins & Team Formation" },
        { time: "11:00 am. . . . . .", activity: "Hackathon 101 & Friend-finding @ GSU Backcourt" },
        { time: "11:00 am. . . . . .", activity: "Google AI Studio @ Terrace Lounge" },
        { time: "11:30 am. . . . . .", activity: "GitHub Copilot @ Terrace Lounge" },
        { time: "11:30 am. . . . . .", activity: "Advice for Switching Majors @ GSU Backcourt" },
        { time: "12:00 pm. . . . . .", activity: "Lunch @ Ziskind Lounge (Next to main hall)" },
        { time: "01:00 pm. . . . . .", activity: "BUDSA Intro to Databases @ GSU Backcourt" },
        { time: "01:00 pm. . . . . .", activity: "Web Dev 101 @ Terrace Lounge" },
        { time: "02:00 pm. . . . . .", activity: "Leetcode/Competitive Programming @ Terrace Lounge" },
        { time: "02:00 pm. . . . . .", activity: "Professional Panel @ GSU Backcourt" },
        { time: "03:00 pm. . . . . .", activity: "Screentime: Off @ Ziskind Lounge" },
        { time: "03:00 pm. . . . . .", activity: "Startup Pitch Competition @ GSU Backcourt" },
        { time: "04:00 pm. . . . . .", activity: "Internship Experience Panel @ GSU Backcourt" },
        { time: "04:00 pm. . . . . .", activity: "Chrome Extensions @ Terrace Lounge" },
        { time: "05:00 pm. . . . . .", activity: "Mock Interviews: Spicy Edition @ GSU Backcourt" },
        { time: "05:00 pm. . . . . .", activity: "Origami! @ Ziskind Lounge" },
        { time: "06:30 pm. . . . . .", activity: "Dinner" },
        { time: "08:00 pm. . . . . .", activity: "MS Paint Bob Ross - MLH @ GSU Backcourt" },
        { time: "08:00 pm. . . . . .", activity: "GAME BREAK! @ Ziskind Lounge" },
        { time: "09:30 pm. . . . . .", activity: "Movie Night @ GSU Backcourt" },
        { time: "10:00 pm. . . . . .", activity: "Sleeping spaces open @ GSU Alley (Basement)" },
      ],
    },
    {
      times: [
        { time: "07:45 am. . . . . .", activity: "Breakfast" },
        { time: "09:00 am. . . . . .", activity: "Submissions due to DevPost and preparation for expo presentations" },
        { time: "09:15 am. . . . . .", activity: "Expo presentations begin and judging starts" },
        { time: "11:00 am. . . . . .", activity: "Closing ceremony" },
      ],
    },
  ];

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      {/* Splash */}
      <div className="absolute pointer-events-none -z-10 flex justify-center items-center window-1 window-animate">
        <Image
          src={Splash}
          alt="Splash"
          className="opacity-100 scale-[200%] rotate-[180deg] -translate-x-[20%]"
          priority
        />
      </div>
      {/* Yellow Fish */}
      <div className="absolute pointer-events-none md:z-10 flex -right-[8%] lg:right-[10%] translate-y-[145%] lg:translate-y-[260%] window-1 window-animate">
        <Image
          src={YellowFish}
          alt="Yellow Fish"
          className="opacity-100 scale-[50%] lg:scale-[100%]"
          priority
        />
      </div>
      {/* Bubble */}
      <div className="absolute pointer-events-none z-0 flex right-0 lg:-translate-y-[85%] window-1 window-animate">
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
        className="window-1 window-animate"
        contentClassname="overflow-scroll"
        maximizable={!isSmall}
        menuItems={['File', 'Edit', 'Seach', 'Help']}
      >
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col text-black">
            {/* Main content area with toolbar and canvas */}
            <div className="flex flex-1 flex-row items-center justify-center ">
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
                          <span className="text-[clamp(2rem,4vw,4rem)]">Schedule*</span>
                          <div>*Times and activities subject to change</div>
                          <div>Check the directions at the top of this page or go <a target="_blank" className="text-blue-500 underline" href="https://drive.google.com/file/d/1WzQseHYQpiuM51TzB8XWdH8n9RqHu0iU/view">here</a> to see floor schematics.</div>
                        </div>

                        <div className='flex flex-col overflow-hidden'>
                          {data.map((day, dayIndex) => {
                            // Extract the day title (first entry with "Day X" pattern)
                            const dayEntries = day.times;

                            return (
                              <div key={dayIndex} className="mb-[clamp(1rem,2vw,2rem)]">
                                {/* Day Title */}

                                <div className="mb-[clamp(0.5rem,1vw,1rem)]">
                                  <h2 className="text-[clamp(1.5rem,2.5vw,3rem)] font-bold text-gray-800">
                                    Day {dayIndex + 1}
                                  </h2>
                                </div>

                                {/* Day Entries in Columns */}
                                <div className='flex overflow-hidden space-x-7'>
                                  {Array.from({ length: isSmall ? 1 : 2 }).map((_, colIndex) => (
                                    <div key={colIndex} className="space-y-[clamp(0.25rem,0.75vw,1rem)] flex-1">
                                      {dayEntries
                                        .filter((_, entryIndex) => {
                                          // For mobile (1 column), show all entries
                                          // For desktop (2 columns), distribute vertically first
                                          if (isSmall) return true;

                                          const entriesPerColumn = Math.ceil(dayEntries.length / 2);
                                          return colIndex === 0
                                            ? entryIndex < entriesPerColumn
                                            : entryIndex >= entriesPerColumn;
                                        })
                                        .map((slot, j) => (
                                          <div
                                            key={j}
                                            className="flex 
                                                      px-[clamp(0.25rem,0.75vw,1rem)] 
                                                      py-[clamp(0.125rem,0.5vw,0.5rem)] 
                                                      text-[clamp(1rem,1.5vw,2rem)] 
                                                      leading-[1.6]
                                                      "
                                          >
                                            <span className="whitespace-nowrap min-w-[clamp(6em,15vw,8em)] w-[clamp(6em,15vw,8em)] font-medium text-gray-700 mr-[2rem]">
                                              {slot.time}
                                            </span>
                                            <span className="text-gray-900">{slot.activity}</span>
                                          </div>
                                        ))}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            );
                          })}
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
