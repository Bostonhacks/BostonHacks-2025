'use client'
import Image from 'next/image';
import Window from "@/components/Window"
import people from '@/public/apply-image.svg';
import StyledButton from "@/components/StyledButton";
import React from "react";

const ApplyNow = () => {

    return (

        <div className="relative flex flex-col items-center justify-center ">
            <Window
                title="JOIN US"
                initialSize={{ width: 400, height: 200 }}
                closable={true}
            >
                <div className="flex h-full justify-center items-center gap-5 md:gap-10">
                    <div className="relative max-w-[100px]">
                        <Image src={people} alt="People icon" className="w-full h-auto" />
                    </div>

                    <StyledButton text={"APPLY NOW"} href={"/apply"}/>

                </div>
            </Window >



        </div>
    );
};

export default ApplyNow;
