import Image from "next/image";
import glass from "@/public/trackTitle.svg";

const SectionTitle = ({ title, className='text-[6vw]' }: { title: string; className?: string }) => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={glass}
        alt="Title"
        className="w-full h-auto object-cover pointer-events-none select-none title-shadow"
      />
      <span
        className={`absolute inset-0 flex justify-center items-center font-neuropol text-outline-blue ${className}`}
      >
        {title}
      </span>
    </div>
  );
};

export default SectionTitle;
