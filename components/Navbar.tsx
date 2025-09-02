"use client"
import StyledButton from "@/components/StyledButton";
import MobileNavButton from "@/components/MobileNavButton";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from 'react'
import logo from "@/public/logo.svg"
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

  const handleHashClick = (e: React.MouseEvent, path: string) => {
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
      <div className="hidden md:flex gap-[1vw] px-4">
        {routes.map((route, index) => (
          <div key={index} className={"flex 1"}>
            {route.type === 'hash' ? (
                <StyledButton text={route.label} href={route.path} onClick={(e) => handleHashClick(e, route.path)} className={"min-w-[7vw]"} />
            ) : (
                <StyledButton text={route.label} href={route.path} className={"min-w-[7vw]"}/>
            )}
          </div>
        ))}
      </div>
      <MobileNav routes={routes} />
    </nav>

      </>
  )
}
function MobileNav({ routes }: NavbarProps) {
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

  const handleHashClick = (e: React.MouseEvent, path: string) => {
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
            <div className="relative m-5 w-[70vw] h-[30vh] ">
              <div className="flex flex-col w-full h-auto border border-[#9a9a9a] bg-[#d6d2c8]">
                {routes.map((route, index) =>
                    route.label === "FAQs" ? null : (
                        <div key={index} className="flex-1">
                          {(index === 2 || index === 5) && (
                              <>
                                <div className="border-t border-[#efefef]" />
                                <div className="border-t border-[#9a9a9a]" />
                              </>
                          )}

                          {route.type === "hash" ? (
                              <MobileNavButton
                                  text={route.label}
                                  href={route.path}
                                  onClick={(e) => handleHashClick(e, route.path)}
                              />
                          ) : (
                              <MobileNavButton text={route.label} href={route.path} />
                          )}
                        </div>
                    )
                )}
                <div className="flex-1">
                      <>
                        <div className="border-t border-[#efefef]" />
                        <div className="border-t border-[#9a9a9a]" />
                      </>
                    <p className="mx-10 my-2 font-mssansserif text-2xl">Below are some frequently asked questions!</p>

                </div>
                <div className="flex-1">
                      <>
                        <div className="border-t border-[#efefef]" />
                        <div className="border-t border-[#9a9a9a]" />
                      </>

                      <MobileNavButton
                          text={routes[3].label}
                          href={routes[3].path}
                          onClick={(e) => handleHashClick(e, routes[3].path)}
                      />
                </div>



              </div>
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

