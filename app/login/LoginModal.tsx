"use client"

import React from 'react'
import Window from '@/components/Window'
import { useRouter, useSearchParams } from 'next/navigation';
import CircularProgress from '@mui/material/CircularProgress';
import Image from 'next/image';
import GoogleIcon from "@/public/login/google-old.svg";
import WindowsButton from '@/components/WindowsButton';
import KeysIcon from '@/public/login/keys.png';

type LoginModalProps = {
  onStow?: () => void;
}



const LoginModal = ({ onStow }: LoginModalProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

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
      setLoading(true);


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
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {error && (
        <div className="fixed z-100">
          <Window
            title="Error"
            initialSize={{ width: 300, height: 200 }}
            closable={true}
            onClose={() => setError(null)}
          >
            <div className="flex flex-col p-4">
              <div className="text-red-700 text-sm">
                There was an error processing your request. Please try again later.
                <br />
                <br />
                If you need assistance, please contact us at <a href="mailto:contact@bostonhacks.org">contact@bostonhacks.org</a>
              </div>
              <div className="w-full flex items-center justify-center m-auto">
                <WindowsButton className="text-xs px-2 py-1 mt-2" onClick={() => setError(null)} title="Close">
                  Close
                </WindowsButton>
              </div>
            </div>
          </Window >
        </div >
      )}


      <Window
        title={<span className="flex flex-row gap-x-1"><Image src={KeysIcon} width={16} height={16} alt="Key" /> Login</span>}
        initialSize={{ width: 500, height: 400 }}
        onClose={onStow}
        closable={true}
        menuItems={["File", "Edit", "Search", "Help"]}
      >
        <div className="p-2 w-full h-full">
          <div className="flex flex-col w-full h-full items-center space-y-6 p-5 bg-gray-200 border-black border-1">
            <div className="p-2.5">
              <div className="w-12 h-12 bg-blue-600 border-2 border-gray-400 flex items-center justify-center">
                <span className="text-white font-bold text-xl">U</span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-gray-800">Please sign in to continue</h2>

            <WindowsButton className="flex flex-row justify-center items-center rounded-md py-1 px-3 space-x-2" onClick={handleGoogleLogin} disabled={loading}>
              <Image width={32} height={32} src={GoogleIcon} alt="Google" />
              {loading ?
                (<span>Loading... <CircularProgress size="1rem" color="primary" /></span>) :
                (<span>Sign in with Google</span>)
              }
            </WindowsButton>

            <div className="w-full h-0.5 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-500 my-2.5"></div>

            <p className="text-sm text-gray-600 text-center max-w-xs">
              You will be redirected to Google to complete the authentication process.
            </p>
          </div>
        </div>
      </Window>
    </>
  )
}

export default LoginModal

