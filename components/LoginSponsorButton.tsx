"use client"

import Link from "next/link"
import Image from "next/image"  
import {useState} from "react"


const LoginSponsorButton = () => {
    const [loginHover, setLoginHover] = useState(false)
    const [sponsorHover, setSponsorHover] = useState(false)

    return (
        <div className="bg-white/25 p-6 md:p-8 rounded-2xl flex flex-col gap-4 items-center w-50 sm:w-66 md:w-82 lg:w-[400px] mx-auto">

            {/*Login Button*/}
            <Link href="/login" //sends to login page
            > 
                <button className="flex items-center gap-2 px-4 py-2 rounded 2x1 text-white transition-all duration-200"
                onMouseEnter={() => setLoginHover(true)}
                onMouseLeave={() => setLoginHover(false)}
                >
                    <Image src={loginHover ? "/login.svg" : "/loginnew.svg"} //changes image on hover
                    alt = "Login"
                    width = {220}
                    height = {220}
                    className = "w-32 sm:w-36 md:w-44 lg:w-52 transition-transform duration-200"
                    ></Image>
                </button>
            </Link>

            {/*Sponsors Button*/}
            <Link href="/sponsors" //sends to sponsors page
            >
                <button className="flex items-center gap-2 px-4 py-2 rounded 2x1 text-white transition-all duration-200"
                onMouseEnter={() => setSponsorHover(true)}
                onMouseLeave={() => setSponsorHover(false)}
                >
                    <Image src={sponsorHover ? "/sponsor.svg" : "/signupnew.svg"} //changes image on hover
                    alt = "Sponsor Us"
                    width = {220}
                    height = {220}
                    className = "w-32 sm:w-36 md:w-44 lg:w-52 transition-transform duration-200"
                    ></Image>
                </button>
            </Link>

        </div>
    )

}


export default LoginSponsorButton