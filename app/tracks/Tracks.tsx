"use client"

import { useState } from "react";

import Image from "next/image";
import sunglare from "@/public/sunflare-removebg.png";
import glass from "@/public/trackTitle.svg";
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
    track1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud est laborum.",
    track2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud est laborum.",
    track3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud est laborum.",
  };

  const [expandedTrack1, setExpandedTrack1] = useState(false);
  const [expandedTrack2, setExpandedTrack2] = useState(false);
  const [expandedTrack3, setExpandedTrack3] = useState(false);

  return (
    <div>
      {/* Title for the section */}
      <div className="flex justify-center items-center">
        <div className="relative w-1/2 isolate">
          <Image
            src={glass}
            alt="Track Title"
            className="w-full h-auto object-cover pointer-events-none select-none"
          />
          <Image
            src={sunglare}
            alt="sunglare"
            className="absolute top-0 left-0 -translate-y-5/8 -translate-x-3/8 pointer-events-none select-none"
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
            style={{ fontSize: "3vw" }}
            onClick={() => setExpandedTrack1(!expandedTrack1)}
            onMouseDown={e => e.preventDefault()} // Prevents text selection on click
          >
            <span className="inline-block track-image">
              track 1
            </span>
          </span>
          <Image
            src={leaf}
            alt="Track 1"
            className="w-1/2 h-auto object-cover track-image"
            onClick={() => setExpandedTrack1(!expandedTrack1)}
          />
          {expandedTrack1 ? (
            <Image
              src={expandedBlueLeft}
              alt="Expanded"
              className="w-1/2 h-auto object-cover track-image"
              onClick={() => setExpandedTrack1(false)}
            />
          ) : (
            <Image
              src={expandWhiteLeft}
              alt="Expand"
              className="w-1/2 h-auto object-cover track-image"
              onClick={() => setExpandedTrack1(true)}
            />
          )}
        </div>

        {expandedTrack1 && (
          <div
            className="col-start-2 row-start-1 flex items-center justify-center text-white font-akshar text-center text-shadow"
            style={{ fontSize: "2vw" }}>
            {trackDescriptions.track1}
          </div>
        )}

        {/* second track */}
        <div className="col-start-3 row-start-2 flex flex-col items-center text-white">
          <span
            className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow track-image"
            style={{ fontSize: "3vw" }}
            onClick={() => setExpandedTrack2(!expandedTrack2)}
          >
            track 2
          </span>
          <Image
            src={orange}
            alt="Track 2"
            className="w-1/2 h-auto object-cover track-image"
            onClick={() => setExpandedTrack2(!expandedTrack2)}
          />
          {expandedTrack2 ? (
            <Image
              src={expandedBlueRight}
              alt="Expanded"
              className="w-1/2 h-auto object-cover track-image"
              onClick={() => setExpandedTrack2(false)}
            />
          ) : (
            <Image
              src={expandWhiteRight}
              alt="Expand"
              className="w-1/2 h-auto object-cover track-image"
              onClick={() => setExpandedTrack2(true)}
            />
          )}
        </div>

        {expandedTrack2 && (
          <div
            className="col-start-2 row-start-2 flex items-center justify-center text-white h-full font-akshar text-center text-shadow"
            style={{ fontSize: "2vw" }}>
            {trackDescriptions.track2}
          </div>
        )}

        {/* third track */}
        <div className="col-start-1 row-start-3 flex flex-col items-center text-white">
          <span
            className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow track-image"
            style={{ fontSize: "3vw" }}
            onClick={() => setExpandedTrack3(!expandedTrack3)}
          >
            track 3
          </span>
          <Image
            src={disk}
            alt="Track 3"
            className="w-1/2 h-auto object-cover track-image"
            onClick={() => setExpandedTrack3(!expandedTrack3)}
          />
          {expandedTrack3 ? (
            <Image
              src={expandedBlueLeft}
              alt="Expanded"
              className="w-1/2 h-auto object-cover track-image"
              onClick={() => setExpandedTrack3(false)}
            />
          ) : (
            <Image
              src={expandWhiteLeft}
              alt="Expand"
              className="w-1/2 h-auto object-cover track-image"
              onClick={() => setExpandedTrack3(true)}
            />
          )}
        </div>

        {expandedTrack3 && (
          <div
            className="col-start-2 row-start-3 flex items-center justify-center text-white h-full font-akshar text-center text-shadow"
            style={{ fontSize: "2vw" }}>
            {trackDescriptions.track3}
          </div>
        )}


      </div>

    </div>
  );
};

export default Tracks;