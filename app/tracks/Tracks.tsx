"use client"

import { useState } from "react";

import Image from "next/image";
import glass from "@/public/glass.svg";
import cursor from "@/public/cursor.svg";
import leaf from "@/public/leaf.svg";
import orange from "@/public/orange.svg";
import disk from "@/public/disk.svg";
import expandWhiteLeft from "@/public/expand-white.svg";
import expandWhiteRight from "@/public/expand-whitev2.svg";

const Tracks = () => {
  const [expandedTrack, setExpandedTrack] = useState(null);

  return (
    <div>
      {/* Title for the section */}
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

      <div className="grid grid-cols-3 text-white">
        {/* first track */}
        <div className="col-start-1 row-start-1 flex flex-col items-center text-white">
          <span
            className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow"
            style={{ fontSize: "3vw" }}>
            track 1
          </span>
          <Image
            src={leaf}
            alt="Track 1"
            className="w-1/2 h-auto object-cover pointer-events-none select-none"
          />
          <Image
            src={expandWhiteLeft}
            alt="Expand"
            className="w-1/2 h-auto object-cover pointer-events-none select-none"
          />
        </div>

        {/* second track */}
        <div className="col-start-3 row-start-2 flex flex-col items-center text-white">
          <span
            className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow"
            style={{ fontSize: "3vw" }}>
            track 2
          </span>
          <Image
            src={orange}
            alt="Track 2"
            className="w-1/2 h-auto object-cover pointer-events-none select-none"
          />
          <Image
            src={expandWhiteRight}
            alt="Expand"
            className="w-1/2 h-auto object-cover pointer-events-none select-none"
          />
        </div>

        {/* third track */}
        <div className="col-start-1 row-start-3 flex flex-col items-center text-white">
          <span
            className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow"
            style={{ fontSize: "3vw" }}>
            track 3
          </span>
          <Image
            src={disk}
            alt="Track 3"
            className="w-2/5 h-auto object-cover pointer-events-none select-none"
          />
          <Image
            src={expandWhiteLeft}
            alt="Expand"
            className="w-1/2 h-auto object-cover pointer-events-none select-none"
          />
        </div>

      </div>



    </div>
  );
};

export default Tracks;