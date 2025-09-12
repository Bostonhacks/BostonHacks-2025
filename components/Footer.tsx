"use client"
import React from 'react'
import Image from 'next/image'
import Water from '@/public/Footer/water.svg'
import Splash from '@/public/Footer/footer_splash.svg';
import Fishbowl from '@/public/Footer/fishbowl.svg';
import Grass from '@/public/Footer/grass.svg'
import Instagram from '@/public/Footer/instagram.svg';
import Twitter from '@/public/Footer/twitter.svg';
import Facebook from '@/public/Footer/facebook.svg';
import ApplyNow from "@/components/ApplyNow";
import Countdown from "@/components/Countdown";
import LinkedIn from '@/public/Footer/linkedin.svg';

const Footer = () => {
  return (
    <footer className="relative w-full h-[200vw] flex flex-col items-center justify-center overflow-visible">
      <div className='absolute inset-0'>
        <Image
          src={Water}
          alt="Water"
          className="w-full h-full object-cover opacity-90"
          priority
        />
      </div>
      <div className='absolute w-full -z-10 -translate-y-[100%]'>
        <Image
          src={Grass}
          alt="Grass"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className='absolute -translate-y-1/2 w-full'>
        <div className='relative w-full'>
          <Image src={Splash} alt="Splash" className="w-full z-20 relative" />
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-[10%] -translate-y-[112%] w-full">
            <Image
              src={Fishbowl}
              alt="Fishbowl"
              className="w-[60vw] z-10"
              style={{ animation: 'float 2s ease-in-out infinite 1s' }}
            />
          </div>
        </div>
      </div>
      <div className="scale-90 md:scale-100 my-[40vw] flex w-full flex-col text-white">
        <ApplyNow />
      </div>
      <h1 className="inline-block text-center font-neuropol text-white-blue-outline-1 text-[10vw] z-10"
        style={{ fontWeight: 400, lineHeight: 1 }}>
        Coming In
      </h1>
      <Countdown targetDate="2025-10-11T09:00:00-04:00" />

      <div className='flex flex-col justify-center items-center gap-4 mt-8 z-20 w-full my-36 scale-90 lg:scale-120'>
        <div className='flex justify-center items-center gap-8'>
          <a
            href="https://instagram.com/bostonhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto"
          >
            <Image src={Instagram} alt="Instagram" className="w-8 h-8 hover:scale-120 transition-transform duration-200" />
          </a>

          <a
            href="https://www.linkedin.com/company/bostonhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto"
          >
            <Image src={LinkedIn} alt="LinkedIn" className="w-8 h-8 hover:scale-120 transition-transform duration-200" />
          </a>

          <a
            href="https://twitter.com/boston_hacks"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto"
          >
            <Image src={Twitter} alt="Twitter" className="w-6.5 h-6.5 hover:scale-120 transition-transform duration-200" />
          </a>

          <a
            href="https://facebook.com/bostonhacks"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto"
          >
            <Image src={Facebook} alt="Facebook" className="w-8 h-8 hover:scale-120 transition-transform duration-200" />
          </a>

        </div>

        <a href="mailto:contact@bostonhacks.org" className="font-ms-sans-serif text-white text-sm font-medium">
          contact@bostonhacks.org
        </a>
      </div>

    </footer>
  );
};



export default Footer;
