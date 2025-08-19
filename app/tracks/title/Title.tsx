import Image from "next/image";
import trackTitle from "@/public/trackTitle.svg";

const TrackTitle = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-1/2">
        <Image
          src={trackTitle}
          alt="Track Title"
          className="w-full h-auto object-cover pointer-events-none select-none"
        />
        <span className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-neuropol-x text-white">
          TRACKS
        </span>
      </div>
    </div>
  );
};

export default TrackTitle;