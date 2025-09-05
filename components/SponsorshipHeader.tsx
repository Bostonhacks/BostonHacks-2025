"use client"
import {useState} from "react"
import React from 'react'
import Image from 'next/image'
import fishComputer from '@/public/fish-computer.svg'
import splash from '@/public/splashOG.svg'
import waterbead from '@/public/waterbead.svg'
import bubble from '@/public/bubble.svg'
import SponsorButton from "@/public/sponsor_button.png"
import SponsorButtonHover from "@/public/sponsor_button_hover.png"
import Sunflare from "@/public/sunflare_blue.png"
import fish from "@/public/fish.svg"


const buttonStyle = "flex items-center rounded-[45px] shadow-md shadow-[#345068] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] cursor-pointer transition-all duration-50";

const SponsorshipHeader = () => {
  const [sponsorHover, setSponsorHover] = useState(false)
  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-visible">
      {/* Left Background splash effect */}
      <div className="absolute top-[90%] lg:top-[105%] left-[-10] lg:left-[-10%] -translate-y-[40%] -translate-x-[40%] z-0 lg:z-10">
        <Image
          src={splash}
          alt="Water splash background"
          width={1280}
          height={880}
          className="w-[100vw] lg:w-[75vw] max-w-[1200px] h-auto opacity-100 rotate-[-47deg] pointer-events-none"
          priority
        />
      </div>

      {/* Right Background splash effect */}
      <div className="absolute top-[80%] right-[-20] lg:right-[-30%] -translate-y-[40%] lg:-translate-y-[25%] lg:translate-x-[20%] translate-x-[55%] z-0 lg:z-10">
        <Image
          src={splash}
          alt="Water splash background"
          width={1280}
          height={880}
          className="w-[110vw] lg:w-[100%] max-w-[1200px] h-auto opacity-100 rotate-[-60.42deg] lg:rotate-[147.34deg] pointer-events-none"
          priority
        />
      </div>

      {/* Right Top Background splash effect DESKTOP ONLY */}
      <div className="hidden lg:block absolute right-[-20] top-[30%] lg:right-[-30%] lg:translate-x-[20%] translate-x-[55%] z-0 lg:z-10">
        <Image
          src={splash}
          alt="Water splash background"
          width={1280}
          height={880}
          className="w-[110vw] lg:w-[100%] max-w-[1200px] h-auto opacity-100 rotate-[-70.39deg] pointer-events-none"
          priority
        />
      </div>

      {/* Sunflare Background effect */}
      <div className="hidden lg:block absolute z-0 top-1/3 right-0 translate-x-[10%]">
        <Image
          src={Sunflare}
          alt="Water splash background"
          className="opacity-100 pointer-events-none"
          priority
        />
      </div>

      {/* Floating bubbles - mobile hidden, desktop visible */}
      <div className="absolute inset-0 z-10 hidden md:block">
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={100}
          height={100}
          className="absolute top-16 left-16 opacity-60"
          style={{ animation: 'bubble-float 8s ease-in-out infinite' }}
        />
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={60}
          height={60}
          className="absolute top-32 right-24 opacity-40"
          style={{ animation: 'bubble-float 10s ease-in-out infinite 2s' }}
        />
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={80}
          height={80}
          className="absolute bottom-40 left-20 opacity-50"
          style={{ animation: 'float 6s ease-in-out infinite 1s' }}
        />
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={40}
          height={40}
          className="absolute bottom-60 right-16 opacity-70"
          style={{ animation: 'bubble-float 7s ease-in-out infinite 3s' }}
        />
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={50}
          height={50}
          className="absolute top-1/2 left-1/4 opacity-30"
          style={{ animation: 'gentle-sway 12s ease-in-out infinite' }}
        />
      </div>
 
      <div className="absolute lg:left-24 -left-12 top-1/3 lg:top-1/2 -translate-y-2 mt-80 w-[120px] h-[120px] md:w-[360px] md:h-[360px] z-0">
        <Image
          src={fishComputer}
          alt="Fish with computer"
          fill
          className="object-contain pointer-events-none scale-x-[-1]"
          style={{ animation: 'float 8s ease-in-out infinite 1s' }}
        />
      </div>


      <div className="relative z-40 inline-block text-left text-white px-4 mt-32 md:mt-48">
        <div className="mb-8 md:mb-6">
          <p className="font-akshar pl-[10px] text-white-blue-outline"
             style={{ animation: 'pulse-glow 4s ease-in-out infinite 1s', fontSize: '32px', fontWeight: 400, lineHeight: 0.9, letterSpacing: '-0.02em', fontKerning: 'none', textShadow: '0px 9.6px 9.6px rgba(0,0,0,0.25)' }}>
            October <span style={{ letterSpacing: '0.1em' }}>11-12</span>
          </p>
        </div>

        <div className="relative mb-6 md:mb-8">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[480px] h-[480px] md:w-[1600px] md:h-[1600px]">
            <Image
              src={bubble}
              alt="Bubble background"
              fill
              className="object-contain opacity-25"
              priority
            />
          </div>
          <h1 className="inline-block text-center font-neuropol text-white-blue-outline-1 text-[72px] md:text-[153px]"
              style={{ fontWeight: 400, lineHeight: 0.9, textShadow: '9.6px 12px 9.6px rgba(2, 0, 66, 0.25)' }}>
            <span className="block">
              Boston
            </span>
            <span className="block">
              Hacks
            </span>
          </h1>
        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="font-akshar text-white-blue-outline-1 drop-shadow-2xl w-fit mx-auto flex justify-center gap-[24px] md:gap-[125px] text-[32px] md:text-[57px]"
              style={{ animation: 'pulse-glow 5s ease-in-out infinite 0.5s', fontWeight: 600, lineHeight: 0.9 }}>
            <span className="text-white-blue-outline-year">2</span>
            <span className="text-white-blue-outline-year">0</span>
            <span className="text-white-blue-outline-year">2</span>
            <span className="text-white-blue-outline-year">5</span>
          </h2>
        </div>

      </div>

      <div className="absolute inset-0 z-10 md:hidden">
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={60}
          height={60}
          className="absolute top-20 right-8 opacity-50"
          style={{ animation: 'float 6s ease-in-out infinite' }}
        />
        <Image
          src={waterbead}
          alt="Floating bubbles"
          width={40}
          height={40}
          className="absolute bottom-44 left-8 opacity-60"
          style={{ animation: 'bubble-float 8s ease-in-out infinite 2s' }}
        />
      </div>

      <div className="relative mx-auto w-72 sm:w-80 md:w-96 mb-28 lg:mb-36 flex items-center justify-center lg:mt-48">
        <div
          aria-hidden="true"
          className="absolute inset-0 lg:hidden outline-[0.5px] outline-white bg-white/25 backdrop-blur-sm rounded-2xl w-full h-full"
        />
        <h1
          className="relative text-center font-neuropol text-white-blue-outline-sponsors text-[28px] md:text-[36px] z-10 lg:whitespace-nowrap"
          style={{
            fontWeight: 400,
            lineHeight: 1.0,
            textShadow: '1.39px 0.7px 1.46px rgba(18, 93, 199, 0.2)',
          }}
        >
          <span className="block lg:inline">Sponsor</span>{' '}

          <span className="block lg:inline">Information</span>
        </h1>
      </div>


        <div className="relative z-50 mt-8 flex flex-col gap-4 items-center pointer-events-auto"
        >
          <div className="outline-[0.5px] outline-white bg-white/25 backdrop-blur-sm p-8 md:p-10 rounded-2xl flex flex-col gap-7 items-center w-48 sm:w-80 md:w-96 lg:w-[420px] mx-auto z-10">
            {/*Sponsors Button*/}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdQlFTLEDqusB70hEGX4qAxWNX0b-aZGfAhf5druxvrQNRaOA/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button 
                className={buttonStyle}
                onMouseEnter={() => setSponsorHover(true)}
                onMouseLeave={() => setSponsorHover(false)}
              >
                <Image 
                  src={sponsorHover ? SponsorButtonHover : SponsorButton} 
                  alt="Sponsor Us"
                  width={220}
                  height={220}
                  className="w-44 sm:w-52 md:w-64 lg:w-72 transition-transform duration-200"
                />
              </button>
            </a>
          </div>
          <div className="absolute z-0 -right-[40%] -bottom-1/3 z-0">
            <Image
              src={fish}
              alt="Fish"
              className="w-[30vw] lg:w-[189px] lg:h-[162px] object-contain pointer-events-none"
              style={{ animation: 'float 8s ease-in-out infinite 1s' }}
            />
          </div>
        </div>
       

    </header>
  )
}

export default SponsorshipHeader 