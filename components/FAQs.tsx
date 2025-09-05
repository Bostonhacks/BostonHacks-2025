"use client";
import { useState } from 'react'; // not letting me import react??
// import Title from './Title'; // need this ifle to be made
import Image from 'next/image';
import opened from '@/public/openedToggle.png';
import closed from '@/public/closedToggle.png';

type faqInfo = {
    question: string,
    answer: string,
}

const faqs : faqInfo[] =[
    {
        question: 'What is BostonHacks',
        answer: 'BostonHacks is a 24-hour event where students from different backgrounds gather together to use technology to create cool projects. Come to BostonHacks to expand your knowledge and skills, make new friends, win prizes and network with recruiters from our corporate sponsors!'
    },
    {
        question: 'When and where is BostonHacks?',
        answer: 'BostonHacks is an in-person 24-hour hackathon on November 2-3rd, 2024. It takes place in the Boston University George Sherman Union (GSU)'
    },
    {
        question: 'Who can attend?',
        answer: 'All college students including undergraduate and graduate students with any background, all across the world are welcome!'
    },
    {
        question: 'Are there any rules?',
    answer: 'We want to ensure a positive experience for all participants. We encourage you to read the <a href="https://mlh.io/code-of-conduct" target="_blank" class="text-blue-500 underline">MLH Code of Conduct</a>.'
    },
    {
        question: 'Do I need experience?',
        answer: 'No experience is necessary. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks!'
    },
    {
        question: 'Does it cost anything?',
        answer: 'BostonHacks is 100% free. You dont have to spend a dime! Unfortunately, we wont be providing any travel reimbursements this year.'
    },
    {
        question: 'Can we form teams?',
        answer: 'Of course you can! We encourage people to work in teams of up to four people. You may opt-in to team formation through our Discord Server which will match you with an ideal team. You can work alone, but it wont be as fun :['
    },
    {
        question: 'When does registration close?',
        answer: 'Registration closes on October 4th. Apply ASAP!'
    },
    {
        question: 'MLH Code of Conduct',
        answer: 'TL\;DR. Be respectful. Harassment and abuse are never tolerated. If you are in a situation that makes you uncomfortable at an MLH Member Event, if the event itself is creating an unsafe or inappropriate environment, or if interacting with a MLH representative or event organizer makes you uncomfortable, please report it using the procedures included in the following link.\nhttps://static.mlh.io/docs/mlh-code-of-conduct.pdf?_gl=1*aykpld*_ga*MTI2NDQwNTA1OS4xNzQ1MjcwNzEw*_ga_E5KT6TC4TK*MTc0NjAwNjIwNy43LjAuMTc0NjAwNjIwNy4wLjAuMA..'
    }
];

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
        <li onClick={handleClick} className="py-5 hover:cursor-pointer group border-b-2 border-gray-300">
            <div className="flex mt-2 justify-between items-center">
                <div className="question flex w-full items-center gap-x-5">
                    <h3 className="text-4xl md:text-3xl">
                        { question }
                    </h3>
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
            <div
                className={`transition-all duration-300 overflow-hidden ${
                toggle ? "max-h-96 mt-4" : "max-h-0"
                }`}
            >
                <p
                className="px-12 pt-2 text-2xl"
                dangerouslySetInnerHTML={{ __html: answer }}
                />
            </div>
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
        <div className="flex items-center justify-center max-h-xl">
            <div className="bg-[var(--popup-gray)] bg-opacity-20 w-[95%] h-auto pt-16">
                {/* <p className="flex flex-col items-center justify-center min-h-screen text-blue-500">FAQs???</p> */}
                <section id="faq" className="font w-full flex flex-col items-center justify-center text-text-primary px-5 my-[10rem] mt-0">
                <h1>FAQs</h1>
                    <div className="'faqs font... mt-[5rem] w-full grid md:grid-cols-2 grid-cols-1 gap-x-[2rem] z-20 lg:gap-x-[3rem] md:px-[2rem]">
                        <FaqColumn column={firstColumn}/>
                        <FaqColumn column={secondColumn}/>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default FAQs;