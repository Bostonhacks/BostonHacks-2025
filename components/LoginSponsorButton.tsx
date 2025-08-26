"use client"

import Link from "next/link"
import Image from "next/image"  
import {useState} from "react"


const LoginSponsorButton = () => {
    const [loginHover, setLoginHover] = useState(false)
    const [sponsorHover, setSponsorHover] = useState(false)

    return (
        <div className="bg-white/25 backdrop-blur-sm p-4 md:p-4 rounded-2xl flex flex-col gap-4 items-center w-42 sm:w-58 md:w-74 lg:w-[350px] mx-auto">

            {/*Login Button*/}
            <Link href="/login" //sends to login page
            > 
                <button className="flex items-center rounded 2xl cursor-pointer transition-all duration-200"
                onMouseEnter={() => setLoginHover(true)}
                onMouseLeave={() => setLoginHover(false)}
                >
                    <Image src={loginHover ? "/login9.png" : "/loginnew6.png"} //changes image on hover
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
                <button className="flex items-center rounded 2xl cursor-pointer transition-all duration-200"
                onMouseEnter={() => setSponsorHover(true)}
                onMouseLeave={() => setSponsorHover(false)}
                >
                    <Image src={sponsorHover ? "/sponsor4.png" : "/signupnew4.png"} //changes image on hover
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