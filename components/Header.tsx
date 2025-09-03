"use client"
import React from 'react'
import Image from 'next/image'
import fishComputer from '@/public/fish-computer.svg'
import fishFlower from '@/public/fish-flower.svg'
import splash from '@/public/splash.svg'
import waterbead from '@/public/waterbead.svg'
import bubble from '@/public/bubble.svg'
import LoginSponsorButton from "@/components/LoginSponsorButton";

const Header = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-visible">
      {/* Background splash effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={splash}
          alt="Water splash background"
          fill
          className="scale-150 overflow-visible opacity-70 translate-x-10 md:translate-x-60 z-100 pointer-events-none"
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

      <div className="absolute left-[-140px] md:left-[-300px] top-[70%] md:top-[62%] -translate-y-1/2 z-20 w-[320px] h-[320px] md:w-[1020px] md:h-[1020px]">
        <Image
          src={fishFlower}
          alt="Fish with flower"
          fill
          className="object-contain pointer-events-none"
          style={{ animation: 'gentle-sway 10s ease-in-out infinite' }}
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[120px] h-[120px] md:w-[360px] md:h-[360px]">
        <Image
          src={fishComputer}
          alt="Fish with computer"
          fill
          className="object-contain pointer-events-none"
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
            <span className="text-white-blue-outline-1">2</span>
            <span className="text-white-blue-outline-1">0</span>
            <span className="text-white-blue-outline-1">2</span>
            <span className="text-white-blue-outline-1">5</span>
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


      <div className="relative z-50 mt-8 flex flex-col gap-4 items-center pointer-events-auto"
      >
        <LoginSponsorButton></LoginSponsorButton>
      </div>


    </header>
  )
}

export default Header 
