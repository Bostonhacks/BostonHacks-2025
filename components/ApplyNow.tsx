import Image from 'next/image';
import Window from "@/components/Window"
import people from '@/public/apply-image.svg';
import React from "react";
import WindowsButton from './WindowsButton';
import Link from 'next/link';

const ApplyNow = () => {
  return (

    <div className="flex flex-col items-center justify-center ">
      <Window
        title="JOIN US"
        initialSize={{ width: 400, height: 200 }}
        className='z-30'
        closable={true}
      >
        <div className="flex h-full justify-center items-center gap-5 md:gap-10">
          <div className="relative max-w-[100px]">
            <Image src={people} alt="People icon" className="w-full h-auto" />
          </div>

          <Link href="/login">
            <WindowsButton className="hover:cursor-pointer p-2" title={"APPLY NOW"}>APPLY NOW</WindowsButton>
          </Link>

        </div>
      </Window >



    </div>
  );
};

export default ApplyNow;
