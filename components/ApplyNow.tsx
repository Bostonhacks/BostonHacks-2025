'use client'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

import section from '@/public/applynow-withoutb.svg';
import primaryApply from '@/public/apply-primary.svg';
import hoverApply from '@/public/apply-hove.svg';
import people from '@/public/apply-image.svg';

const ApplyNow = () => {
    const [isHovering, setIsHovered] = useState(false);

    return (
        <div className="relative w-full  min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">

            <div className="relative w-[80vw] max-w-[800px]">
                <Image src={section} alt="Join us section" className="w-full h-auto" priority/>
            </div>

            <div className="absolute flex justify-center items-center gap-10 md:gap-20">
                <div className="relative w-[30vw] md:max-w-[300px] max-w-[200px]">
                    <Image src={people} alt="People icon" className="w-full h-auto" priority/>
                </div>

                <Link href="/apply" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative w-[30vw] md:max-w-[250px] max-w-[200px] cursor-pointer">
                    <Image src={isHovering ? hoverApply : primaryApply} alt="Apply now button" className="w-full h-auto" priority
                    />
                </Link>
            </div>

        </div>
    );
};

export default ApplyNow;
