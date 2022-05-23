import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCursor } from "../components/Cursor/reducer";
import { Gallery } from "../components/Gallery";
import { Layout } from "../components/Layout";
import Work from "../components/Project/Work";
import { worksData } from "../constants/data";
import { emojiHappy, emojiSad } from "../constants/data";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState({});
  const [openGallery, setOpenGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [selImageIndex, setSelImageIndex] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setWorks(worksData);
  }, []);

  const onClickHandler = (work) => {
    setSelectedWork(work);
  };

  return (
    <Layout>
      <section className='w-full flex justify-between h-[calc(100vh-8.5rem)]  pt-20'>
        <aside className='shrink-0'>
          <ul className='uppercase text-white text-xl flex flex-col space-y-1'>
            {works?.map((work) => {
              return (
                <li
                  className='break-normal'
                  onClick={() => onClickHandler(work)}
                  onMouseEnter={() =>
                    dispatch(
                      setCursor({
                        cursorContent: emojiHappy,
                        cursorVariant: "smile",
                      })
                    )
                  }
                  onMouseLeave={() =>
                    dispatch(
                      setCursor({
                        cursorContent: emojiSad,
                        cursorVariant: "default",
                      })
                    )
                  }
                  key={work.id}
                >
                  {work.title}
                </li>
              );
            })}
          </ul>
        </aside>
        <main className='relative flex-grow'>
          <AnimatePresence>
            <Work
              key={selectedWork.id}
              selectedWork={selectedWork}
              setOpenGallery={setOpenGallery}
              setImages={setImages}
              setSelImageIndex={setSelImageIndex}
            />
          </AnimatePresence>

          <AnimatePresence>
            {openGallery && (
              <Gallery
                images={images}
                selImageIndex={selImageIndex}
                setSelImageIndex={setSelImageIndex}
                setOpenGallery={setOpenGallery}
              />
            )}
          </AnimatePresence>
        </main>
      </section>
    </Layout>
  );
};

export default Works;
