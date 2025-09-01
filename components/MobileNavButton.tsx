"use client"

import { useState } from "react";

type NavBarButtonProps = {
    text: string;
    href?: string;
    onClick?: (e: React.MouseEvent) => void;
};

export default function MobileNavButton({text, href, onClick,}: NavBarButtonProps) {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <a href={href} onClick={onClick} rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
           className={`flex items-center w-full h-full transition-colors duration-300 
           ${
               isHovering ? "bg-[#0A246A] text-white" : "text-black"
            } 
            `}
        >
            <span className="mx-10 font-mssansserif text-2xl">{text}</span>
        </a>
    );
}
