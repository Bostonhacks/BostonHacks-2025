"use client";
import { useState } from 'react';
import Image from 'next/image';
import closed from '@/public/closedToggle.png';
import bubble1 from '@/public/bubble1.svg';
import faqsplash from '@/public/faqsplash.svg';
import fish from '@/public/clownfish.svg';
import { FAQ_CONTENT } from "@/app/const";

const faqs = FAQ_CONTENT;

// pretty much just creating like different "classes"/consts to use in each other and ultimaely build up FAQs
// faqinfo -> faqentry -> faqcolumn -> faqs

// okay use state just lets you like create a variable that tracks the state and sets the stae of that variable, so liek its just creating a variable that chnages based on some action
// but its a state variable so it rmemeebr that type of stuff

const FaqEntry = ({ question, answer}) => { // each entry will be passed a { question, answer } to build that one element
    // state variables to track if toggle expanded and to track animation (why do u need to track animation)
    const [toggle, setToggle] = useState(false); // useState returns the toggle bool and also function to set it??
    const [animated, setAnimation] = useState(false);

    const handleClick = () => {
        setToggle(!toggle); // set to opposite of whatever it is
        setAnimation(!animated);
    }

    // each list element in our list of FAQs
    return (
        <li onClick={handleClick} className="py-5 hover:cursor-pointer group border-b-2 border-[var(--faq-line)]">
            <div className="flex mt-2 justify-between items-center">
                <div className="question flex w-full items-center gap-x-5">
                    <span className="font-ms-sans-serif text-xl">?.</span>
                    <span className="font-akshar text-3xl">{question}</span>
                </div>
                <div className="answer flex items-center justify-center">
                    <Image
                    src= {closed}
                    alt="icon"
                    className = {toggle ? "rotate-180" : ""}
                    onAnimationEnd={() => {
                        setToggle(!toggle);
                        setAnimation(false); // actual animation when you open the faq is done
                    }}
                    />
                </div>
            </div>
            {toggle && 
                    <div className={`border-t-2 border-gray-300 ${"hidden" && toggle}`}>
                        <p className="px-12 pt-5 text-2xl text-white" dangerouslySetInnerHTML={{ __html: answer }}></p>
                    </div>
                }
        </li>
    );
};

const FaqColumn = ({ column }) => { // each column is passed some faq entries, to create column/list of faqs
    return (
        <div className="column">
            <ul className="grid grid-cols-1 auto-rows-auto">
                { column.map((entry, index) => ( 
                    <FaqEntry question={entry.question} answer ={entry.answer} key={index}/>
                ))}
            </ul>
        </div>
    );
};

const FAQs = () => {
    const firstColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
    const secondColumn = faqs.slice(Math.ceil(faqs.length / 2));
    console.log('First Column:', firstColumn);
    console.log('Second Column:', secondColumn);
    return (
        <div className="relative flex items-center justify-center max-h-xl pb-100 pt-100">
            <Image
                src={bubble1}
                alt="bubble"
                className="absolute top-40 -right-15"
            />
             <Image
                src={fish}
                alt="fish"
                className="absolute bottom-10 -left-60"
            />
             <Image
                src={faqsplash}
                alt="splash"
                className="absolute left-0 -z-10 scale-120 overflow-visible pointer-events-none"
                priority
            />
            <div className="bg-[var(--popup-gray)] bg-opacity-20 w-[95%] h-auto border-3 border-t-[white] border-l-[white] border-r-[black] border-b-[black]">
                {/* <p className="flex flex-col items-center justify-center min-h-screen text-blue-500">FAQs???</p> */}
                <section id="faq" className="w-full flex flex-col justify-center text-text-primary my-[10rem] mt-0">
                <div className="bg-[var(--popup-blue)] bg-opacity-20 w-[99.5%] h-auto px-5 pt-15 pb-15 -mt-4 ml-3 right-0 ">
                    <h1 className="font-ms-sans-serif text-white text-7xl px-5">? FAQs</h1>
                </div>
                <div className="faqs font-akshar mt-[5rem] w-full grid md:grid-cols-2 grid-cols-1 gap-x-[2rem] z-20 lg:gap-x-[3rem] md:px-[4rem]">
                    <FaqColumn column={firstColumn}/>
                    <FaqColumn column={secondColumn}/>
                </div>
                </section>
            </div>
        </div>
    )
}

export default FAQs;