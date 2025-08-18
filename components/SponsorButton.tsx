"use client"
import React from 'react'
import Image from 'next/image'

const SponsorButton = () => {
  const handleSponsor = () => {
    console.log('Sponsor clicked')
  }

  return (
    <button
      type="button"
      onClick={handleSponsor}
      className="group relative w-[518px] h-[103px]"
      aria-label="Sponsor us"
    >
      <Image
        src="/sponsorog.svg"
        alt="Sponsor us"
        fill
        className="absolute inset-0 pointer-events-none object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out"
        priority
      />
      <Image
        src="/sponsorHover.svg"
        alt="Sponsor us hover"
        fill
        className="absolute inset-0 pointer-events-none object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out"
        priority
      />
    </button>
  )
}

export default SponsorButton 