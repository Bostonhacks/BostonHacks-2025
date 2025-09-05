"use client"
import {useState} from "react";

type NavBarButtonProps = {
    text: string
    href?: string
    onClick?: (e: React.MouseEvent) => void
    className?: string
}

export default function StyledButton({text, href, onClick, className}: NavBarButtonProps) {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <a href={href} onClick={onClick} rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            className={`font-mssansserif text-black uppercase px-6 py-1  bg-[#c0c0c0] border-2 ${className ?? ""} ${isHovering ? "border-t-[#404040] border-l-[#404040] border-b-white border-r-white" : "border-t-white border-l-white border-b-[#404040] border-r-[#404040]"}`}>
      <span className="flex items-center text-center justify-center text-[min(3vw, 1.5rem)] text-black">
        {text}
      </span>
        </a>
    )
}
