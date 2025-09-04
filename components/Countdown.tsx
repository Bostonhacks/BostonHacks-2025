"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import WaterBead from '@/public/Footer/water-bead.svg';

const Countdown = ({ targetDate }: { targetDate: string }) => {

    type TimeLeft = {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft: TimeLeft;

        if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
        } else {
        timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
    const updateTime = () => setTimeLeft(calculateTimeLeft());
    updateTime(); // run immediately once mounted
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
    return null; // or a spinner / placeholder
    }

    return (
        <div className='justify-center items-center flex'>
            <div className="relative w-full"
                style={{ animation: 'float 6s ease-in-out infinite 1s' }}
            >
                <Image
                    src={WaterBead}
                    alt="Water Bead"
                    className="w-[90vw] lg:w-[70vw] z-10 opacity-80"
                />
                <div className="absolute inset-0 flex justify-center items-center z-20">
                    <h2 className="inline-block text-center font-mssansserif text-white"
                        style={{ fontWeight: 400, lineHeight: 1 }}>
                        <div className="flex justify-center items-center gap-[5vw]">
                            {/* Days */}
                            <div className="flex flex-col items-end">
                                <span className="text-white text-[10vw] lg:text-[8vw] font-mssansserif">{timeLeft.days}</span>
                                <span className="text-white text-[3vw] lg:text-[2vw] font-light text-right">Days</span>
                            </div>

                            {/* Hours */}
                            <div className="flex flex-col items-end">
                                <span className="text-white text-[10vw] lg:text-[8vw] font-mssansserif">{timeLeft.hours}</span>
                                <span className="text-white text-[3vw] lg:text-[2vw] font-light text-right">Hours</span>
                            </div>

                            {/* Minutes */}
                            <div className="flex flex-col items-end">
                                <span className="text-white text-[10vw] lg:text-[8vw] font-mssansserif">{timeLeft.minutes}</span>
                                <span className="text-white text-[3vw] lg:text-[2vw] font-light text-right">Minutes</span>
                            </div>

                            {/* Seconds */}
                            <div className="flex flex-col items-end">
                                <span className="text-white text-[10vw] lg:text-[8vw] font-mssansserif">{timeLeft.seconds}</span>
                                <span className="text-white text-[3vw] lg:text-[2vw] font-light text-right">Seconds</span>
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Countdown;
