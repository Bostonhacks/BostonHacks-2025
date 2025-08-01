"use client"

import React from 'react'
import Window from '@/components/Window'

type LoginModalProps = {
  onStow?: () => void;
}


const LoginModal = ({ onStow }: LoginModalProps) => {
  const handleGoogleLogin = async () => {
    // Call your backend endpoint that returns the Google auth URL
    // Example: fetch('/api/auth/google').then(res => res.json()).then(data => window.location.href = data.url)
    console.log('Redirecting to Google auth...')
  }

  return (
    <Window
      title="Login"
      minWidth="min-w-[600px]"
      minHeight="min-h-[400px]"
      initialSize={{ width: 600, height: 400 }}
      onClose={onStow}
      closable={true}
    >
      <div className="p-5">
        <div className="flex flex-col items-center space-y-6">
          <div className="p-2.5">
            <div className="w-12 h-12 bg-blue-600 border-2 border-gray-400 flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-800">Please sign in to continue</h2>

          <button
            className="bg-gray-300 border-2 border-gray-300 hover:border-gray-400 active:border-gray-500 px-6 py-3 text-xs cursor-pointer font-mono font-bold flex items-center space-x-3"
            onClick={handleGoogleLogin}
          >
            <div className="w-6 h-6 bg-white rounded border border-gray-400 flex items-center justify-center">
              <span className="text-xs font-bold text-blue-600">G</span>
            </div>
            <span>Sign in with Google</span>
          </button>

          <div className="w-full h-0.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 my-2.5"></div>

          <p className="text-sm text-gray-600 text-center max-w-xs">
            You will be redirected to Google to complete the authentication process.
          </p>
        </div>
      </div>
    </Window>
  )
}

export default LoginModal

