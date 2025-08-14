"use client"
import React from 'react'
import Image from 'next/image'

const LoginButton = () => {
  const handleLogin = () => {
    console.log('Login clicked')
  }

  return (
    <button
      type="button"
      onClick={handleLogin}
      className="group relative w-[518px] h-[103px]"
      aria-label="Login"
    >
      <Image
        src="/login.svg"
        alt="Login"
        fill
        className="pointer-events-none object-fill opacity-100 group-hover:opacity-0 transition-opacity duration-200 ease-out scale-105"
        priority
      />
      <Image
        src="/loginHover.svg"
        alt="Login hover"
        fill
        className="pointer-events-none object-fill opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-out scale-105"
        priority
      />
    </button>
  )
}

export default LoginButton 