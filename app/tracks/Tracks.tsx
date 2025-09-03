import Image from "next/image";
import sunglare from "@/public/sunflare-removebg.png";
import glass from "@/public/trackTitle.svg";
import cursor from "@/public/cursor.svg";
import leaf from "@/public/leaf.svg";
import orange from "@/public/orange.svg";
import disk from "@/public/disk.svg";

import Track from "./components/track";
import SectionTitle from "@/components/SectionTitle";

const Tracks = () => {
  return (
    <div>
      {/* Title for the section */}
      <div className="flex justify-center items-center">
        <div className="relative w-1/2 isolate">
          {/* <Image
            src={glass}
            alt="Track Title"
            className="w-full h-auto object-cover pointer-events-none select-none title-shadow"
          /> */}
          <Image
            src={sunglare}
            alt="sunglare"
            className="absolute top-0 left-0 -translate-y-5/8 -translate-x-3/8 pointer-events-none select-none"
          />
          {/* <span
            className="absolute inset-0 flex justify-center items-center font-neuropol text-outline-blue"
            style={{ fontSize: "6vw" }}
          >
            TRACKS
          </span> */}
          <SectionTitle title="TRACKS" />
          <Image
            src={cursor}
            alt="Cursor"
            className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-1/4 w-1/10 h-auto"
          />
        </div>
      </div>

      <div>
        <Track trackNum={1} imgSrc={leaf} alignment={1} />
        <Track trackNum={2} imgSrc={orange} alignment={3} />
        <Track trackNum={3} imgSrc={disk} alignment={1} />
      </div>

    </div>
  );
};

export default Tracks;