"use client"

import React, { useState } from 'react'
import Window from '@/components/Window'

const Location = () => {

  const [directionsOpen, setDirectionsOpen] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="w-full h-full relative overflow-visible">
      <div className="mb-4 flex gap-2">
        <button onClick={() => setDirectionsOpen(!directionsOpen)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Open Directions
        </button>
      </div>
      {directionsOpen && (
        <Window
          title="📍 Our Location - Interactive Map"
          initialPosition={{ x: 100, y: 50 }}
          initialSize={{ width: 600, height: 450 }}
          menuItems={['View', 'Options', 'Help']}
          contentClassname="p-2"
          initialMaximized={true}
          maximizable={false}
          minimizable={false}
        >
          <div className="w-full h-full bg-white border border-gray-400 flex flex-col">
            {/* Header with print button */}
            <div className="flex justify-between items-center p-2 border-b border-gray-400 bg-gray-100">
              <span className="text-sm font-medium">Interactive Map View</span>
              <button onClick={handlePrint} className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition">
                🖨️ Print
              </button>
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
                📍 123 Main Street, Downtown | Coordinates: 40.7128° N, 74.0060° W
              </div>
            </div>
          </div>
        </Window>
      )}


    </div>
  )
}

export default Location
