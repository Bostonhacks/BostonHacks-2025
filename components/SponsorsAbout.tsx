import React from "react";
import Image from "next/image";
import bubble from "@/public/bubble.svg";

const PillLabel: React.FC<{ text: string; color?: "blue" | "green" }>= ({ text, color = "blue" }) => {
  const colorClasses =
    color === "green"
      ? "from-[#3FBF3A] to-[#0AA64A] text-white"
      : "from-[#01017D] to-blue-600 text-white";
  return (
    <div className={`inline-block rounded-full px-5 py-2 font-neuropol text-xs sm:text-sm md:text-base bg-gradient-to-r ${colorClasses} shadow-lg`}
         style={{ boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}>
      {text}
    </div>
  );
};

const SponsorsAbout = () => {
  return (
    <section className="relative w-full text-white px-4 md:px-8 py-20 md:py-28">
      {/* Background bubbles */}
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

      {/* WHO ARE WE - right aligned card with pill label */}
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="relative w-full md:w-[560px]">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <PillLabel text="WHO ARE WE?" />
          </div>
          <div className="bg-white/30 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/40 z-0">
            <p className="text-sm md:text-base leading-relaxed text-white/95">
              BostonHacks brings together over 100 students for an exhilarating 36 hours to build awesome projects. In our past events, students had meaningful interactions with mentors, peers, and sponsors.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/95 mt-4">
              A hackathon would be incomplete without new technology, advice, and ideas our sponsors offer, and we’d be eager to have you join us this coming fall. We thrive to provide a comprehensive recruiting and branding experience to our sponsors.
            </p>
          </div>
        </div>
      </div>

      {/* WHY US - wide card with three columns and green pill */}
      <div className="max-w-6xl mx-auto mt-12 md:mt-16 relative">
        <div className="absolute -top-7 left-10 z-10">
          <PillLabel text="WHY US?" color="green" />
        </div>
        <div className="bg-white/30 backdrop-blur-md px-6 md:px-10 py-8 md:py-10 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/40 z-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-2">Connect</h3>
              <p className="text-white/95 text-sm md:text-base leading-relaxed">
                Resumes are two-dimensional (literally). Interviews give only a small snapshot of an individual’s abilities. By watching a project evolve over a hackathon, you can get a much better picture of a candidate. Plus, you’ll have access to a group of students passionate about what they do, and a friendly environment to interact with them in.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Recruit</h3>
              <p className="text-white/95 text-sm md:text-base leading-relaxed">
                Reach out to future customers, leaders and innovators. Test waters and get a sense of emergent technologies. Collaborate with students on a more intimate level at our comfortably mid-sized hackathon. Offer students advice and/or tech to help them through their projects. Whether you’re looking for brand awareness, technical expertise or personal development, you’ll find it here—with 200 motivated hackers and dozens of skilled mentors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">Get Live Feedback</h3>
              <p className="text-white/95 text-sm md:text-base leading-relaxed">
                Give your API or product a test run before sending it out into the world. Show off a great framework or platform before it hits the market. Students are the ideal target for new tech. They will eagerly push your product to its limits, as well as offer suggestions on it and look to you for support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* QUESTIONS - small card aligned to the right */}
      <div className="max-w-6xl mx-auto mt-10 flex justify-end">
        <div className="outline-[0.5px] outline-white bg-white/25 backdrop-blur-sm p-4 md:p-5 rounded-2xl shadow-xl w-[280px]">
          <h4 className="font-semibold text-white mb-2">QUESTIONS?</h4>
          <p className="text-white/95 text-sm leading-relaxed">
            We welcome any questions or special requests. Please email us at
          </p>
          <a href="mailto:contact@bostonhacks.io" className="block text-white underline mt-2">contact@bostonhacks.io</a>
          <div className="mt-4">
            <a href="/#faqs" className="inline-block px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white border border-white/40 rounded-sm transition-colors">
              Go to FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsAbout; 