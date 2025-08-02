"use client"

import React from 'react'
import Window from '@/components/Window'
import { useRouter, useSearchParams } from 'next/navigation';

type LoginModalProps = {
  onStow?: () => void;
}



const LoginModal = ({ onStow }: LoginModalProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const success = searchParams.get('success');
    const message = searchParams.get('message');
    const userId = searchParams.get('userId');

    if (success === 'true' && message === 'successfulLogin' && !!userId) {
      router.push(`/profile?userId=${userId}`)
    }
  });

  const handleGoogleLogin = async () => {
    try {
      setError(null);
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/google/login?redirect_uri=${encodeURIComponent(window.location.origin)}/login`, {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error("There was an error processing your request. Please try again later.");
      }

      const data = await response.json();

      if (!data?.url) {
        throw new Error("No redirect URL provided");
      }

      router.push(data.url);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error occurred")
    }
  }

  return (
    <Window
      title="Login"
      minWidth="min-w-[500px]"
      minHeight="min-h-[430px]"
      initialSize={{ width: 500, height: 430 }}
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

          {error && (
            <div className="w-full max-w-xs bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
              {error}
            </div>
          )}


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

