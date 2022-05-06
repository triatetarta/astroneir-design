import Image from "next/image";
import { SpinningEmoji } from "../Aesthetics";
import apple from "../../public/assets/apple.png";
import bottle from "../../public/assets/bottle.png";
import rainbow from "../../public/assets/rainbow.png";
import paper from "../../public/assets/paper.png";
import Title from "./Title";

const Showcase = () => {
  return (
    <div className='flex flex-col relative h-[calc(100vh-136px)] overflow-y-hidden'>
      <div className='w-full h-full flex items-center justify-between'>
        <div className='w-full mb-52'>
          <Image
            src={apple}
            objectFit='contain'
            layout='responsive'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full mt-12'>
          <Image
            src={bottle}
            objectFit='contain'
            layout='responsive'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full mb-80'>
          <Image
            src={rainbow}
            objectFit='contain'
            layout='responsive'
            width={100}
            height={100}
          />
        </div>
        <div className='w-full mt-4'>
          <Image
            src={paper}
            objectFit='contain'
            layout='responsive'
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className='flex items-center w-full'>
        <SpinningEmoji />
        <Title />
      </div>
    </div>
  );
};

export default Showcase;
