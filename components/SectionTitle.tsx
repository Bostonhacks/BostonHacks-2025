import Image from "next/image";
import glass from "@/public/trackTitle.svg";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center">
      {/* <div className="relative w-1/2 isolate"> */}
      <Image
        src={glass}
        alt="Title"
        className="w-full h-auto object-cover pointer-events-none select-none title-shadow"
      />
      <span
        className="absolute inset-0 flex justify-center items-center font-neuropol text-outline-blue"
        style={{ fontSize: "6vw" }}
      >
        {title}
      </span>
      {/* </div> */}
    </div>
  );
};

export default SectionTitle;
