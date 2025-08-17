"use client"
import NavBarButton from "@/components/NavBarButton";
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type RouteType = 'hash' | 'page'

type Route = {
  label: string
  path: string
  type: RouteType
}

type NavbarProps = {
  routes: Route[]
  className?: string
}

const Navbar = ({ routes, className = '' }: NavbarProps) => {
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash)
    }

    updateHash()
    window.addEventListener('hashchange', updateHash)

    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const handleHashClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    const element = document.getElementById(path.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Update URL without navigation
      window.history.pushState(null, '', path)
      setCurrentHash(path)
    }
  }

  // const isActive = (route: Route) => {
  //   if (route.type === 'hash') {
  //     return currentHash === route.path
  //   }
  //   return pathname === route.path
  // }

  return (
    <nav className={`flex items-center w-[80vw] ${className}`}>
      <div className="flex w-full gap-6 py-[3vh] px-4">
        {routes.map((route, index) => (
          <div key={index}>
            {route.type === 'hash' ? (
                <NavBarButton text={route.label} href={route.path} onClick={(e:any) => handleHashClick(e, route.path)} />
            ) : (
                <NavBarButton text={route.label} href={route.path} />
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navbar

