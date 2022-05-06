import Image from "next/image";
import { SpinningEmoji } from "../Aesthetics";
import Title from "./Title";
import { stickersData } from "../../constants/data";
import { useState } from "react";

const Showcase = () => {
  const [stickers, setStickers] = useState(stickersData);
  const [title, setTitle] = useState("Bio");
  const [hovered, setHovered] = useState(false);
  const [stickerIndex, setStickerIndex] = useState(0);

  console.log(hovered);

  const handleMouseEnter = (e, index, sticker) => {
    setStickerIndex(index);
    setTitle(sticker.title);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setStickerIndex(0);
    setTitle("Bio");
    setHovered(false);
  };

  return (
    <div className='flex flex-col relative h-[calc(100vh-136px)] overflow-y-hidden'>
      <div className='w-full h-full relative flex flex-row items-center justify-center'>
        {stickers?.map((sticker, index) => {
          return (
            <div
              onMouseEnter={(e) => handleMouseEnter(e, index, sticker)}
              onMouseLeave={handleMouseLeave}
              key={sticker.id}
              className={sticker.cssProps}
            >
              <Image
                priority
                src={sticker.image}
                objectFit='contain'
                layout='responsive'
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
      <div className='flex items-center w-full'>
        <SpinningEmoji />
        <Title title={title} hovered={hovered} />
      </div>
    </div>
  );
};

export default Showcase;
