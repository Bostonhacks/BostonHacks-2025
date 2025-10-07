import people from '@/public/apply-image.svg';
import Frame from '@/public/main/OurSponsors/sponsor-frame.svg';
import Redhat from '@/public/main/OurSponsors/Redhat.png';
import CapitalOne from '@/public/main/OurSponsors/CapitalOne.svg';
import Muse from '@/public/main/OurSponsors/Muse.png';
import Coder from '@/public/main/OurSponsors/Coder.svg';
import Seqera from '@/public/main/OurSponsors/Seqera.svg';
import Ignite from '@/public/main/OurSponsors/Ignite.png';
import Spark from '@/public/main/OurSponsors/Spark.png';
import MakerMods from '@/public/main/OurSponsors/MakerMods.png';
import Sargent from '@/public/main/OurSponsors/Sargent.png';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const OurSponsors = () => {
  return (
    <div className='relative w-full mb-[80vw] md:mb-[150vw]'>
      <div className="relative flex justify-center items-center w-3/4 md:w-1/2 mx-auto mb-[10vw]">
        {/* Text */}
        <SectionTitle title={`Our\nSponsors:`} className="text-3xl md:text-[5vw] text-[6vw] whitespace-pre-line leading-tight" />

        {/* Icon */}
        <div className="absolute top-0 right-0 -mt-[3vw] -mr-[3vw]">
          <Image
            src={people}
            alt="Sponsors Icon"
            className="drop-shadow-lg w-[15vw] md:w-[10vw]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full max-w-5xl mx-auto p-4">
        {[
          Redhat,
          CapitalOne,
          Muse,
          Coder,
          Seqera,
          Spark,
          Ignite,
          MakerMods,
          Sargent,
        ].map((src, i, array) => (
          <div
            key={i}
            className={`relative w-full aspect-square flex items ${array.length % 2 === 1 && i === array.length - 1
              ? 'col-span-2 mx-auto max-w-[50%]'
              : ''
              }`}
          >
            {/* Frame */}
            <Image
              src={Frame}
              alt={`Frame ${i + 1}`}
              fill
              className="object-contain pointer-events-none select-none"
            />
            {/* Inner image */}
            <div className="absolute inset-0 flex items-center justify-center z-10 translate-x-[5px]">
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                className="object-contain scale-68 w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurSponsors;
