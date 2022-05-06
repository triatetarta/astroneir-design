import Image from "next/image";
import { SpinningEmoji } from "../Aesthetics";
import Title from "./Title";
import { stickersData } from "../../constants/data";
import { useEffect, useState } from "react";

const Showcase = () => {
  const [stickers, setStickers] = useState(undefined);
  const [title, setTitle] = useState("Bio");
  const [hovered, setHovered] = useState(false);
  const [stickerIndex, setStickerIndex] = useState(0);

  useEffect(() => {
    setStickers(stickersData);
  }, []);

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
          const { id, cssProps, image, priority } = sticker;

          return (
            <div
              onMouseEnter={(e) => handleMouseEnter(e, index, sticker)}
              onMouseLeave={handleMouseLeave}
              key={id}
              className={cssProps}
            >
              <Image
                priority={priority}
                src={image.src}
                objectFit='contain'
                layout='responsive'
                width={image.width}
                height={image.height}
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
