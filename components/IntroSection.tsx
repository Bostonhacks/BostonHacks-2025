import React from "react";
import Image from "next/image";
import bubble from "@/public/bubble.svg";

const IntroSection = () => {
  return (
    <section className="relative w-full text-white px-4 md:px-8 py-16 md:py-24">
      {/* Background bubbles behind boxes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={bubble}
          alt="Decorative bubble"
          width={600}
          height={600}
          className="absolute left-[-60px] top-[10%] opacity-25 scale-100 md:scale-125"
          priority
        />
        <Image
          src={bubble}
          alt="Decorative bubble"
          width={500}
          height={500}
          className="absolute right-[-40px] bottom-[-20px] opacity-20 scale-100 md:scale-110"
          priority
        />
      </div>

      {/* Quote */}
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-akshar text-white-blue-outline-1 text-[28px] md:text-[40px] leading-tight">
          “Dive into innovation with BostonHacks — where students build what’s next.”
        </p>
      </div>

      {/* Boxes */}
      <div className="max-w-6xl mx-auto mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Who are we */}
        <div className="bg-white/85 text-black border-2 border-inset border-t-black border-l-black border-b-white border-r-white shadow-lg rounded-sm">
          <div className="px-4 py-3 border-b-2 border-inset border-t-white border-l-white border-b-black border-r-black bg-gradient-to-r from-[#01017D] to-blue-600 text-white font-semibold">
            Who are we?
          </div>
          <div className="px-4 py-4 text-sm md:text-base leading-relaxed">
            BostonHacks is a student-run hackathon bringing together creators from across the globe to learn, experiment, and build impactful projects in just 24 hours.
          </div>
        </div>

        {/* Why us */}
        <div className="bg-white/85 text-black border-2 border-inset border-t-black border-l-black border-b-white border-r-white shadow-lg rounded-sm">
          <div className="px-4 py-3 border-b-2 border-inset border-t-white border-l-white border-b-black border-r-black bg-gradient-to-r from-[#01017D] to-blue-600 text-white font-semibold">
            Why us?
          </div>
          <div className="px-4 py-4 text-sm md:text-base leading-relaxed">
            - Hands-on workshops and mentorship<br />
            - Prizes and sponsor challenges<br />
            - Beginner-friendly with resources to get started
          </div>
        </div>

        {/* Questions */}
        <div className="bg-white/85 text-black border-2 border-inset border-t-black border-l-black border-b-white border-r-white shadow-lg rounded-sm">
          <div className="px-4 py-3 border-b-2 border-inset border-t-white border-l-white border-b-black border-r-black bg-gradient-to-r from-[#01017D] to-blue-600 text-white font-semibold">
            Questions?
          </div>
          <div className="px-4 py-4 text-sm md:text-base leading-relaxed">
            Have questions about eligibility, schedule, or what to bring? Check out our FAQs for more info.
            <div className="mt-4">
              <a href="#faqs" className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white border border-white/40 rounded-sm transition-colors">
                Go to FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 