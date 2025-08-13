"use client"
import React from 'react'
import Image from 'next/image'
import fishComputer from '@/public/fish-computer.svg'
import fishFlower from '@/public/fish-flower.svg' 
import glass from '@/public/glass.svg'
import splash from '@/public/splash.svg'
import waterbead from '@/public/waterbead.svg'
import LoginButton from './LoginButton'
import SponsorButton from './SponsorButton'

const Header = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background splash effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={splash}
          alt="Water splash background"
          fill
          className="object-cover opacity-30"
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

      {/* Fish with flower - positioned on left */}
      <div className="absolute left-4 md:left-12 top-16 md:top-24 z-20">
        <Image
          src={fishFlower}
          alt="Fish with daisy flower"
          width={120}
          height={120}
          className="md:w-[200px] md:h-[200px]"
          style={{ animation: 'gentle-sway 10s ease-in-out infinite' }}
        />
      </div>

      {/* Fish with computer - positioned on right */}
      <div className="absolute right-4 md:right-12 bottom-32 md:bottom-24 z-20">
        <Image
          src={fishComputer}
          alt="Fish with computer monitor"
          width={120}
          height={120}
          className="md:w-[200px] md:h-[200px]"
          style={{ animation: 'float 8s ease-in-out infinite 1s' }}
        />
      </div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 z-30">
        <Image
          src={glass}
          alt="Glass bubble effect"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-40 inline-block text-left text-white px-4">
        <div className="mb-8 md:mb-6">
          <p className="font-akshar pl-[10px] text-white-blue-outline"
             style={{ animation: 'pulse-glow 4s ease-in-out infinite 1s', fontSize: '36px', fontWeight: 400, lineHeight: 0.9, letterSpacing: '-0.02em', fontKerning: 'none', textShadow: '0px 9.6px 9.6px rgba(0,0,0,0.25)' }}>
            November <span style={{ letterSpacing: '0.1em' }}>2-3</span>
          </p>
        </div>

        <div className="mb-6 md:mb-8">
          <h1 className="inline-block text-left font-neuropol text-white-blue-outline-2"
              style={{ animation: 'pulse-glow 6s ease-in-out infinite', fontSize: '153px', fontWeight: 400, lineHeight: 0.9, textShadow: '9.6px 12px 9.6px rgba(2, 0, 66, 0.25)' }}>
            <span className="block">
              Boston
            </span>
            <span className="block">
              Hacks
            </span>
          </h1>
        </div>

        <div className="mb-8 md:mb-12">
          <h2 className="font-akshar text-white-blue-outline-1 drop-shadow-2xl w-fit mx-auto flex justify-center gap-[125px]"
              style={{ animation: 'pulse-glow 5s ease-in-out infinite 0.5s', fontSize: '57px', fontWeight: 600, lineHeight: 0.9 }}>
            <span className="text-white-blue-outline-1">2</span>
            <span className="text-white-blue-outline-1">0</span>
            <span className="text-white-blue-outline-1">2</span>
            <span className="text-white-blue-outline-1">5</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center">
          <LoginButton />
          <SponsorButton />
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
    </header>
  )
}

export default Header 