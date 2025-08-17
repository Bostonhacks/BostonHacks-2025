"use client"

import Image from "next/image";
import navHover from "@/public/nav-hover.svg";
import navPrimary from "@/public/nav-primary.svg";
import {useState} from "react";

type NavBarButtonProps = {
    text: string
    href?: string
    onClick?: (e: React.MouseEvent) => void
}

export default function NavBarButton({text, href, onClick}: NavBarButtonProps) {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <a href={href} onClick={onClick} rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative  cursor-pointer">
            <Image src={isHovering ? navHover : navPrimary} alt={`${text} nav button`} priority className="w-full h-auto object-cover"/>
            <h1 className="absolute inset-0 flex items-center justify-center font-bold text-lg text-black font-micross">
                {text}
            </h1>
        </a>
    )
}
