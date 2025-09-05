"use client"

import Link from "next/link";
import { useState } from "react";

type NavBarButtonProps = {
    text: string;
    href: string;
    onClick?: (e: React.MouseEvent) => void;
};

export default function MobileNavButton({text, href, onClick,}: NavBarButtonProps) {
    const [isHovering, setIsHovered] = useState(false);

    const styling = `flex items-center w-full h-full transition-colors duration-300 ${
        isHovering ? "bg-[#0A246A] text-white" : "text-black"
    }`;
    const content = (
        <span className="mx-10 font-mssansserif text-2xl my-2">{text}</span>
    );

    if (onClick){
        return (
            <Link href={href} className={styling} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {content}
            </Link>
        );
    }
    else{
        return(
                <a href={href} onClick={onClick} rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
                   className={styling}
                >
                    {content}
                </a>
            )

    }

}
