import Image from "next/image";
import sunglare from "@/public/sunflare-removebg.png";
import cursor from "@/public/cursor.svg";
import leaf from "@/public/leaf.svg";
import orange from "@/public/orange.svg";
import disk from "@/public/disk.svg";
import makermods from "@/public/main/OurSponsors/MakerMods.png";
import capone from "@/public/main/OurSponsors/CapitalOne.svg";

import Track from "./components/track";
import SectionTitle from "@/components/SectionTitle";

const Tracks = () => {
  return (
    <div className="mx-5 md:mx-40">
      {/* Title for the section */}
      <div className="flex justify-center items-center">
        <div className="relative w-3/4 md:w-1/2 isolate">
          <Image
            src={sunglare}
            alt="sunglare"
            className="absolute top-0 left-0 -translate-y-5/8 -translate-x-3/8 pointer-events-none select-none"
          />
          <SectionTitle title="TRACKS" />
          <Image
            src={cursor}
            alt="Cursor"
            className="absolute bottom-0 right-0 translate-y-1/2 -translate-x-1/4 w-1/10 h-auto"
          />
        </div>
      </div>

      <div className="mt-10">
        <Track
          trackNum={1}
          imgSrc={leaf}
          alignment={1}
          prizes={
            <>
              $2300 in prizes
            </>
          }
        />
        <Track
          trackNum={2}
          imgSrc={orange}
          alignment={3}
          prizes={
            <>
              $2300 in prizes
            </>
          }
        />
        <Track
          trackNum={3}
          imgSrc={disk}
          alignment={1}
          prizes={
            <>
              $2300 in prizes
            </>
          }
        />
        <Track trackNum={4}
          imgSrc={capone}
          alignment={3}
          prizes={
            <>
              $1000 in Amazon gift cards
            </>
          }
        />
        <Track trackNum={5}
          imgSrc={makermods}
          alignment={1}
          prizes={
            <>
              $2000 from MakerMods
            </>
          }
        />

      </div>

    </div>
  );
};

export default Tracks;
