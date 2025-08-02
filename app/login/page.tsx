"use client"

import { Suspense, useState } from "react"
import Background from "@/components/Background"
import LoginModal from "./LoginModal"
import StowBar from "@/components/StowBar"

const LoginPage = () => {
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

  return (
    <Background showCity={false} className="overflow-y-hidden">
      <div className="w-full h-screen flex items-center justify-center p-4">
        <Suspense>
          {showLoginModal && (
            <LoginModal onStow={handleLoginStow} />
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

