"use client"

import { useState } from "react";
import Image from "next/image";
import expandWhiteLeft from "@/public/expand-white.svg";
import expandWhiteRight from "@/public/expand-whitev2.svg";
import expandedBlueLeft from "@/public/expandblue.svg";
import expandedBlueRight from "@/public/expandbluev2.svg";
import { TRACK_DESCRIPTIONS } from "@/app/const";

type TrackProps = {
  trackNum: number;
  imgSrc: string;
  alignment: number; // 1 for left, 3 for right
};

const Track = ({ trackNum, imgSrc, alignment }: TrackProps) => {
  const colClass = alignment === 1 ? "col-start-1" : alignment === 3 ? "col-start-3" : "";
  const rowClass =
    trackNum === 1 ? "row-start-1" :
      trackNum === 2 ? "row-start-2" :
        trackNum === 3 ? "row-start-3" : "";

  const [expandedTrack, setExpandedTrack] = useState(false);

  return (
    <div className="grid grid-cols-3 text-white">
      <div className={`${colClass} ${rowClass} flex flex-col items-center text-white`}>
        <span
          className="font-bold mb-2 text-center font-ms-sans-serif tracking-widest text-shadow"
          style={{ fontSize: "3vw" }}
          onClick={() => setExpandedTrack(!expandedTrack)}
        >
          <span className="inline-block track-image">
            track {trackNum}
          </span>
        </span>
        <Image
          src={imgSrc}
          alt={`Track ${trackNum}`}
          className="w-1/2 h-auto object-cover track-image"
          onClick={() => setExpandedTrack(!expandedTrack)}
        />
        {expandedTrack ? (
          <Image
            src={alignment === 1 ? expandedBlueLeft : alignment === 3 ? expandedBlueRight : expandedBlueLeft}
            alt="Expanded"
            className="w-1/2 h-auto object-cover track-image img-shadow"
            onClick={() => setExpandedTrack(false)}
          />
        ) : (
          <Image
            src={alignment === 1 ? expandWhiteLeft : alignment === 3 ? expandWhiteRight : expandWhiteLeft}
            alt="Expand"
            className="w-1/2 h-auto object-cover track-image img-shadow"
            onClick={() => setExpandedTrack(true)}
          />
        )}
      </div>

      {expandedTrack && (
        <div
          className={`col-start-2 ${rowClass} flex items-center justify-center text-white font-akshar text-center text-shadow`}
          style={{ fontSize: "2vw" }}>
          {TRACK_DESCRIPTIONS[`track${trackNum}` as keyof typeof TRACK_DESCRIPTIONS]}
        </div>
      )}
    </div>
  );
};

export default Track;
