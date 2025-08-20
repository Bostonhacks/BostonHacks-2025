import Image from "next/image";
import trackTitle from "@/public/trackTitle.svg";
import glass from "@/public/glass.svg";
import cursor from "@/public/cursor.svg";

const TrackTitle = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-1/2">
        <Image
          src={glass}
          alt="Track Title"
          className="w-full h-auto object-cover pointer-events-none select-none"
        />
        <span
          className="absolute inset-0 flex justify-center items-center font-neuropol text-outline-blue"
          style={{ fontSize: "6vw" }}
        >
          TRACKS
        </span>
        <Image
          src={cursor}
          alt="Cursor"
          className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-1/4 w-1/10 h-auto"
        />
      </div>
    </div>
  );
};

export default TrackTitle;