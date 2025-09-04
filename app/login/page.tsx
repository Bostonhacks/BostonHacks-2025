"use client"

import { Suspense, useState } from "react"
import React from "react"
import Background from "@/components/Background"
import LoginModal from "./LoginModal"
import StowBar from "@/components/StowBar"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/public/logo.svg"
import { LOGO_SIZE } from "../const"
import { useRouter } from "next/navigation"
import WindowsButton from "@/components/WindowsButton"
import { CircularProgress } from "@mui/material"
import Window from "@/components/Window"
import { ShortUser } from "@/types/types"

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [pageLoading, setPageLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [userEmail, setUserEmail] = React.useState<string | null>(null);
  const router = useRouter();

  // window stowing handling
  const [showLoginModal, setShowLoginModal] = useState(true)
  const [stowedWindows, setStowedWindows] = useState<Array<{
    id: string
    title: string
    onRestore: () => void
  }>>([])

  const handleLoginStow = () => {
    setShowLoginModal(false)
    setStowedWindows(prev => [
      ...prev.filter(w => w.id !== 'login'),
      {
        id: 'login',
        title: 'Login',
        onRestore: () => {
          setShowLoginModal(true)
          setStowedWindows(prev => prev.filter(w => w.id !== 'login'))
        }
      }
    ])
  }

  const handleStowRemove = (id: string) => {
    setStowedWindows(prev => prev.filter(w => w.id !== id))
  }

  // page load user check
  React.useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/me`, { credentials: 'include' });
        if (response.ok) {
          const user: ShortUser = await response.json();
          if (!!user && !!user?.id) {
            setLoggedIn(true);
            setUserEmail(user.email);
            return;
          }
        }
        setLoggedIn(false);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Unknown error occurred")
      } finally {
        setPageLoading(false);
      }
    }
    checkUser();

  }, [setPageLoading, setLoggedIn, router]);

  if (pageLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center"><CircularProgress color="primary" /></div>
    );
  }

  if (error) {
    return (
      <div className="w-screen h-screen flex items-center justify-center z-100">
        <Window
          title="Error"
          initialSize={{ width: 300, height: 200 }}
          closable={false}
          onClose={() => setError(null)}
        >
          <div className="flex flex-col p-4">
            <div className="text-red-700 text-sm">
              There was an error loading this page.
              <br />
              <br />
              If you need assistance, please contact us at <a href="mailto:contact@bostonhacks.org">contact@bostonhacks.org</a>
            </div>
            <Link href="/">
              <WindowsButton className="hover:cursor-pointer w-full mt-2">
                Go home
              </WindowsButton>
            </Link>
          </div>
        </Window >
      </div >
    )
  }

  return (
    <Background showCity={false} className="overflow-hidden">
      <div className="w-full h-screen flex items-center justify-center p-4 overflow-hidden">
        <Suspense>
          <div className="absolute top-6 left-6">
            <Link href="/">
              <Image
                src={Logo}
                alt="Logo"
                width={LOGO_SIZE.width}
                height={LOGO_SIZE.height}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {!loggedIn ? (
            showLoginModal && (
              <LoginModal onStow={handleLoginStow} />
            )
          ) : (
            <div className="text-center bg-ms-gray border-2 border-t-white border-l-white border-r-black border-b-black p-8 rounded max-w-md">
              <div className="text-2xl font-bold text-green-800 mb-4 font-mssansserif">Welcome back!</div>
              <div className="text-lg mb-6 font-mssansserif">You are currently logged in with <span className="font-bold text-blue-800">{userEmail}</span>.</div>
              <div className="flex flex-col space-y-2">
                <Link href="/apply">
                  <WindowsButton className="w-full">
                    Apply Now
                  </WindowsButton>
                </Link>
                <Link href="/">
                  <WindowsButton className="w-full">
                    Back to Home
                  </WindowsButton>
                </Link>
                <WindowsButton
                  onClick={async () => {
                    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, { method: 'POST', credentials: 'include' });
                    setLoggedIn(false);
                  }}
                  className="w-full"
                >
                  Logout
                </WindowsButton>
              </div>
            </div>
          )}
        </Suspense>
      </div>

      <StowBar
        stowedWindows={stowedWindows}
        onRemove={handleStowRemove}
      />
    </Background>
  )
}

export default LoginPage

