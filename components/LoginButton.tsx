"use client"
import React from 'react'

const LoginButton = () => {
  const handleLogin = () => {
    console.log('Login clicked')
  }

  return (
    <button
      onClick={handleLogin}
      className="group relative bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3 px-8 md:py-4 md:px-12 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out border-2 border-yellow-300 hover:border-yellow-200"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/40 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <span className="relative z-10 text-lg md:text-xl font-bold tracking-wide">
        LOGIN
      </span>
      
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-110 transition-transform duration-500 ease-out"></div>
    </button>
  )
}

export default LoginButton 