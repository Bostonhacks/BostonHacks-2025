"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import LoginButton from "@/public/login_button.png"
import LoginButtonHover from "@/public/login_button_hover.png"
import SponsorButton from "@/public/sponsor_button.png"
import SponsorButtonHover from "@/public/sponsor_button_hover.png"
import Location from "@/app/location/Location";


const buttonStyle = "flex items-center rounded-[45px] shadow-md shadow-[#345068] hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] cursor-pointer transition-all duration-50";

const LoginSponsorButton = () => {
  const [loginHover, setLoginHover] = useState(false)
  const [sponsorHover, setSponsorHover] = useState(false)

  return (
    <div className="outline-[0.5px] outline-white bg-white/25 backdrop-blur-sm p-8 md:p-10 rounded-2xl flex flex-col gap-7 items-center w-72 sm:w-80 md:w-96 lg:w-[420px] mx-auto">

      {/*Login Button*/}
      <Link href="/login" //sends to login page
      >
        <button className={buttonStyle}
          onMouseEnter={() => setLoginHover(true)}
          onMouseLeave={() => setLoginHover(false)}
        >
          <Image src={loginHover ? LoginButtonHover : LoginButton} //changes image on hover
            alt="Login"
            width={220}
            height={220}
            className="w-44 sm:w-52 md:w-64 lg:w-72 transition-transform duration-200"
          ></Image>
        </button>
      </Link>

      {/*Sponsors Button*/}
      <Link href="/sponsors" //sends to sponsors page
      >
        <button className={buttonStyle}
          onMouseEnter={() => setSponsorHover(true)}
          onMouseLeave={() => setSponsorHover(false)}
        >
          <Image src={sponsorHover ? SponsorButtonHover : SponsorButton} //changes image on hover
            alt="Sponsor Us"
            width={220}
            height={220}
            className="w-44 sm:w-52 md:w-64 lg:w-72 transition-transform duration-200"
          ></Image>
        </button>
      </Link>

      <Location/>

    </div>
  )

}


export default LoginSponsorButton
