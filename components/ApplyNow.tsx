'use client'
import Image from 'next/image';
import { useState } from 'react';

import section from '@/public/applynow-withoutb.svg';
import people from '@/public/apply-image.svg';
import StyledButton from "@/components/StyledButton";

const ApplyNow = () => {

    return (
        <div className="relative w-full min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">

            <div className="relative w-[60vw] max-w-[700px]">
                <Image src={section} alt="Join us section" className="w-full h-auto" />
            </div>

            <div className="absolute flex justify-center items-center gap-5 md:gap-10">
                <div className="relative w-[20vw] md:max-w-[200px] max-w-[100px]">
                    <Image src={people} alt="People icon" className="w-full h-auto" />
                </div>

                <StyledButton text={"APPLY NOW"} href={"/apply"} className="w-[25vw] md:w-[15vw]" />

            </div>

        </div>
    );
};

export default ApplyNow;
