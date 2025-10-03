"use client"

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import expandWhiteLeft from "@/public/expand-white.svg";
import expandWhiteRight from "@/public/expand-whitev2.svg";
import expandedBlueLeft from "@/public/expandblue.svg";
import expandedBlueRight from "@/public/expandbluev2.svg";
import { TRACK_DESCRIPTIONS } from "@/app/const";

type TrackProps = {
  trackNum: number;
  imgSrc: string | StaticImageData;
  alignment: number; // 1 for left, 3 for right
  prizes?: React.ReactNode;
};

const Track = ({ trackNum, imgSrc, alignment, prizes }: TrackProps) => {
  const colClass = alignment === 1 ? "col-start-1" : alignment === 3 ? "col-start-3" : "";
  const rowClass = trackNum ? `row-start-1` : "";

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
            {TRACK_DESCRIPTIONS[trackNum - 1].name}
          </span>
        </span>
        <Image
          src={imgSrc}
          alt={`${TRACK_DESCRIPTIONS[trackNum - 1].name}`}
          className="md:w-1/2 h-auto object-cover track-image"
          onClick={() => setExpandedTrack(!expandedTrack)}
        />

        {prizes && (
          <div className="my-2 text-xl font-ms-sans-serif">
            {prizes}
          </div>
        )}

        {expandedTrack ? (
          <Image
            src={alignment === 1 ? expandedBlueLeft : alignment === 3 ? expandedBlueRight : expandedBlueLeft}
            alt="Expanded"
            className="md:w-1/2 h-auto object-cover track-image img-shadow"
            onClick={() => setExpandedTrack(false)}
          />
        ) : (
          <Image
            src={alignment === 1 ? expandWhiteLeft : alignment === 3 ? expandWhiteRight : expandWhiteLeft}
            alt="Expand"
            className="md:w-1/2 h-auto object-cover track-image img-shadow"
            onClick={() => setExpandedTrack(true)}
          />
        )}
      </div>

      {expandedTrack && (
        <div
          className={`col-start-2 ${rowClass} whitespace-pre-line text-md leading-4 md:leading-8 md:text-3xl flex items-center justify-center text-white font-akshar text-center text-shadow`}
        >
          {TRACK_DESCRIPTIONS[trackNum - 1].description}
        </div>
      )}
    </div>
  );
};

export default Track;
