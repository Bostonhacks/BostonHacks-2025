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
import expandedBlueLeft from "@/public/expandblue.svg";
import expandedBlueRight from "@/public/expandbluev2.svg";

const Tracks = () => {
  const trackDescriptions = {
    track1: "Description for Track 1",
    track2: "Description for Track 2",
    track3: "Description for Track 3",
  };

  const [expandedTrack1, setExpandedTrack1] = useState(false);
  const [expandedTrack2, setExpandedTrack2] = useState(false);
  const [expandedTrack3, setExpandedTrack3] = useState(false);

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
          {expandedTrack1 ? (
            <Image
              src={expandedBlueLeft}
              alt="Expanded"
              className="w-1/2 h-auto object-cover"
              onClick={() => setExpandedTrack1(false)}
            />
          ) : (
            <Image
              src={expandWhiteLeft}
              alt="Expand"
              className="w-1/2 h-auto object-cover"
              onClick={() => setExpandedTrack1(true)}
            />
          )}
        </div>

        {expandedTrack1 && (
          <div className="col-start-2 row-start-1 flex items-center justify-center text-white text-4xl h-full">
            {trackDescriptions.track1}
          </div>
        )}

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
          {expandedTrack2 ? (
            <Image
              src={expandedBlueRight}
              alt="Expanded"
              className="w-1/2 h-auto object-cover"
              onClick={() => setExpandedTrack2(false)}
            />
          ) : (
            <Image
              src={expandWhiteRight}
              alt="Expand"
              className="w-1/2 h-auto object-cover"
              onClick={() => setExpandedTrack2(true)}
            />
          )}
        </div>

        {expandedTrack2 && (
          <div className="col-start-2 row-start-2 flex items-center justify-center text-white text-4xl h-full">
            {trackDescriptions.track2}
          </div>
        )}

        {/* third track */}
        {expandedTrack3 ? (
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
              src={expandedBlueLeft}
              alt="Expand"
              className="w-1/2 h-auto object-cover"
              onClick={() => setExpandedTrack3(false)}
            />
          </div>
        ) : (
          <div className="col-start-1 col-end-3 row-start-3 flex flex-col items-center text-white">
            <span
              className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow"
              style={{ fontSize: "3vw" }}
            >
              track 3
            </span>

            <div className="w-1/5 flex flex-col items-center">
              <Image
                src={disk}
                alt="Track 3"
                className="w-full h-auto object-cover pointer-events-none select-none"
              />
              <Image
                src={expandWhiteLeft}
                alt="Expand"
                className="w-full h-auto object-cover"
                onClick={() => setExpandedTrack3(true)}
              />
            </div>
          </div>
        )}
        {expandedTrack3 && (
          <div className="col-start-2 row-start-3 flex items-center justify-center text-white text-4xl h-full">
            {trackDescriptions.track3}
          </div>
        )}

      </div>

    </div>
  );
};

export default Tracks;