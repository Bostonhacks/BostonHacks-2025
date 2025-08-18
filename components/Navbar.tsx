"use client"
import StyledButton from "@/components/StyledButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import logo from "@/public/logo-nav.svg"

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

const Navbar = ({ routes}: NavbarProps) => {
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
      <>
    <nav className=" w-full items-center justify-between px-10 py-5 fixed flex z-100">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:flex gap-6 h-full px-4">
        {routes.map((route, index) => (
          <div key={index}>
            {route.type === 'hash' ? (
                <StyledButton text={route.label} href={route.path} onClick={(e:any) => handleHashClick(e, route.path)} />
            ) : (
                <StyledButton text={route.label} href={route.path} />
            )}
          </div>
        ))}
      </div>
      <MobileNav routes={routes} />
    </nav>

      </>
  )
}
function MobileNav({ routes}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <div
            className={`flex items-center justify-center fixed w-full h-dvh bg-white z-[99] top-0 left-0 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 text-center">
              {routes.map((route, index) => (
                  <li key={index}>
                    <Link
                        href={route.path}
                        onClick={()=>setIsOpen(false)}
                        className="text-black"
                    >
                      {route.label}
                    </Link>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex md:hidden">
          <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className={`size-8 ${isOpen ? "rotate-90" : ""} transition duration-300`}
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </>
  );
}

export default Navbar

