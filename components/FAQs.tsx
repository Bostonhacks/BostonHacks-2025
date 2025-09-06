"use client";
import { useState } from 'react';
import Image from 'next/image';
import closed from '@/public/main/FAQ/closedToggle.png';
import bubble1 from '@/public/main/FAQ/bubble1.svg';
import faqsplash from '@/public/main/FAQ/faqsplash.svg';
import fish from '@/public/main/FAQ/clownfish.svg';
import { FAQ_CONTENT } from "@/app/const";
import parse from "html-react-parser";

const faqs = FAQ_CONTENT;

// pretty much just creating like different "classes"/consts to use in each other and ultimaely build up FAQs
// faqinfo -> faqentry -> faqcolumn -> faqs

// okay use state just lets you like create a variable that tracks the state and sets the stae of that variable, so liek its just creating a variable that chnages based on some action
// but its a state variable so it rmemeebr that type of stuff

const FaqEntry = ({ question, answer }: { question: string, answer: string }) => { // each entry will be passed a { question, answer } to build that one element
  // state variables to track if toggle expanded and to track animation (why do u need to track animation)
  const [toggle, setToggle] = useState(false); // useState returns the toggle bool and also function to set it??
  const [animated, setAnimation] = useState(false);

  const handleClick = () => {
    setToggle(!toggle); // set to opposite of whatever it is
    setAnimation(!animated);
  }

  // each list element in our list of FAQs
  return (
    <li onClick={handleClick} className="py-4 hover:cursor-pointer group border-b-2 border-[#7F90AB]">
      <div className="flex justify-between items-center">
        <div className="question flex w-full items-center gap-x-3">
          <span className="font-ms-sans-serif text-lg md:text-xl">?.</span>
          <span className="font-akshar text-xl md:text-2xl lg:text-3xl">{question}</span>
        </div>
        <div className="answer flex items-center justify-center flex-shrink-0 ml-4">
          <Image
            src={closed}
            alt="icon"
            className={`transition-transform duration-300 ${toggle ? "rotate-180" : ""}`}
            onAnimationEnd={() => {
              setToggle(!toggle);
              setAnimation(false);
            }}
          />
        </div>
      </div>
      {toggle &&
        <div className="border-t-2 border-gray-300 mt-3">
          <p className="px-6 md:px-12 pt-4 text-lg md:text-xl lg:text-2xl text-white">{parse(answer)}</p>
        </div>
      }
    </li>
  );

};

const FaqColumn = ({ column }: { column: Array<{ question: string; answer: string }> }) => {

  return (
    <div className="column">
      <ul className="grid grid-cols-1 auto-rows-auto">
        {column.map((entry, index) => (
          <FaqEntry question={entry.question} answer={entry.answer} key={index} />
        ))}
      </ul>
    </div>
  );
};

const FAQs = () => {
  const firstColumn = faqs.slice(0, Math.ceil(faqs.length / 2));
  const secondColumn = faqs.slice(Math.ceil(faqs.length / 2));
  // console.log('First Column:', firstColumn);
  // console.log('Second Column:', secondColumn);
  return (
    <div className="w-full relative flex items-start justify-center py-2">
      <Image
        src={bubble1}
        alt="bubble"
        className="absolute top-0 -translate-y-1/2 -right-[15%] lg:right-[5%] opacity-30 pointer-events-none w-[70vw] md:w-[40vw] lg:w-[30vw]"
      />
      <Image
        src={fish}
        alt="fish"
        className="absolute bottom-10 -left-60 -z-10 pointer-events-none"
      />
      <Image
        src={faqsplash}
        alt="splash"
        className="absolute left-0 -z-10 scale-120 overflow-visible pointer-events-none"
        priority
      />
      <div className="bg-ms-gray bg-opacity-20 h-auto w-full mx-10 lg:mx-50 xl:mx-70 border-3 border-t-[white] border-l-[white] border-r-[black] border-b-[black]">
        <section id="faq" className="w-full flex flex-col justify-center text-text-primary">
          <div className="bg-[#030087] bg-opacity-20 w-full px-5 py-8">
            <h1 className="font-ms-sans-serif text-white text-4xl md:text-6xl lg:text-7xl px-5">? FAQs</h1>
          </div>
          <div className="faqs font-akshar mt-8 w-full grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 px-8 py-8">
            <FaqColumn column={firstColumn} />
            <FaqColumn column={secondColumn} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default FAQs;
