"use client"
import StyledButton from "@/components/StyledButton";
import MobileNavButton from "@/components/MobileNavButton";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import logo from "@/public/logo-nav.svg"
import mobileNav from "@/public/mobile-nav.svg";

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
  const [, setCurrentHash] = useState('')

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash)
    }

    updateHash()
    window.addEventListener('hashchange', updateHash)

    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const element = document.getElementById(path.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
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
    <nav className=" w-full items-center justify-between px-10 md:py-5 py-10 fixed flex z-100">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:flex gap-[1vw] h-full px-4">
        {routes.map((route, index) => (
          <div key={index}>
            {route.type === 'hash' ? (
                <StyledButton text={route.label} href={route.path} onClick={(e) => handleHashClick(e, route.path)} />
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
  const [, setCurrentHash] = useState('')

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash)
    }

    updateHash()
    window.addEventListener('hashchange', updateHash)

    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const element = document.getElementById(path.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', path)
      setCurrentHash(path)
    }
  }


  return (
      <>
        <div
            className={`flex justify-center fixed w-full h-dvh bg-white/0 z-[99] md:hidden top-0 left-0 overflow-hidden py-10 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <div className="relative m-5 w-[70vw]">
              <Image
                  className="w-full h-auto"
                  src={mobileNav}
                  alt=""
              />

              <nav className="absolute inset-0 flex">
                <ul className="flex flex-col w-full h-full">
                    <li key={0} className={"flex-1 "}>
                    <MobileNavButton
                        text={routes[0].label}
                        href={routes[0].path}
                        onClick={(e) => handleHashClick(e, routes[0].path)}
                    />
                  </li>
                    <li key={1} className={"flex-1 "}>
                      <MobileNavButton
                          text={routes[1].label}
                          href={routes[1].path}
                          onClick={(e) => handleHashClick(e, routes[1].path)}
                      />
                    </li>
                  <li key={2} className={"flex-1 "}>
                    <MobileNavButton
                        text={routes[2].label}
                        href={routes[2].path}
                        onClick={(e) => handleHashClick(e, routes[2].path)}
                    />
                  </li>
                  <li key={3} className={"flex-1"}>
                    <MobileNavButton
                        text={routes[3].label}
                        href={routes[3].path}
                        onClick={(e) => handleHashClick(e, routes[3].path)}
                    />
                  </li>
                  <li key={4} className={"flex-1 "}>
                    <MobileNavButton
                        text={routes[4].label}
                        href={routes[4].path}
                    />
                  </li>

                </ul>
              </nav>
            </div>
          </div>

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

