"use client"

import React, { useState } from 'react'
import Window from '@/components/Window'
import DirectionsButton from "@/public/directions_button.png"
import DirectionsButtonHover from "@/public/directions_button_hover.png"
import Image from "next/image"
import { createPortal } from "react-dom"

const Location = () => {

  const [directionsOpen, setDirectionsOpen] = useState(false)
  const [directionsHover, setDirectionsHover] = useState(false)

  const buttonStyle = "flex items-center rounded-[45px] shadow-md shadow-[#345068] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] cursor-pointer transition-all duration-50";

  const windowContent = (
    <Window
      title="Our Location - Interactive Map"
      initialPosition={{ x: 100, y: 50 }}
      initialSize={{ width: 600, height: 450 }}
      menuItems={['View', 'Options', 'Help']}
      contentClassname="p-2"
      initialMaximized={true}
      maximizable={false}
      minimizable={false}
    >
      <div className='flex flex-col lg:flex-row gap-4 items-center justify-center w-full h-full'>
        <div className="w-full h-full bg-white border border-gray-400 flex flex-col">
          {/* Header with print button */}
          <div className="flex justify-between items-center p-2 border-b border-gray-400 bg-gray-100">
            <span className="text-sm font-medium">Interactive Map View</span>
          </div>
          
          {/* Interactive Map iframe */}
          <div className="flex-1 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5904.688594176553!2d-71.11151932345295!3d42.35089287119373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f002ffffff%3A0xb19e76970bb6218a!2sGeorge%20Sherman%20Union!5e0!3m2!1sen!2sus!4v1759774043799!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Status bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gray-200 border-t border-gray-400 px-2 py-1 text-xs">
              123 Main Street, Downtown | Coordinates: 40.7128° N, 74.0060° W
            </div>
          </div>
        </div>
        <div className="w-full h-full border-2 border-gray-300 rounded-2xl overflow-hidden shadow-lg bg-white">
          <iframe
            src="https://drive.google.com/file/d/1WzQseHYQpiuM51TzB8XWdH8n9RqHu0iU/preview"
            width="100%"
            height="100%"
            className="border-0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </Window>
  )

  return (
    <div className="mb-4 flex gap-2 justify-center">
      <button className={buttonStyle}
        onMouseEnter={() => setDirectionsHover(true)}
        onMouseLeave={() => setDirectionsHover(false)}
        onClick={() => setDirectionsOpen(!directionsOpen)} 
      >
        <Image src={directionsHover ? DirectionsButtonHover : DirectionsButton}
          alt="Directions"
          width={220}
          height={220}
          className="w-44 sm:w-52 md:w-64 lg:w-72 transition-transform duration-200"
        ></Image>
      </button>

      {directionsOpen && createPortal(
        windowContent,
        document.body
      )}
    </div>
  )
}

export default Location
