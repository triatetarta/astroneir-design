import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCursor } from "../components/Cursor/reducer";
import { Gallery } from "../components/Gallery";
import { Layout } from "../components/Layout";
import Work from "../components/Project/Work";
import { worksData, videoData } from "../constants/data";
import { emojiHappy, emojiSad } from "../constants/data";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [videWorks, setVideoWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState({});
  const [openGallery, setOpenGallery] = useState(false);
  const [images, setImages] = useState([]);
  const [selImageIndex, setSelImageIndex] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [work, setWork] = useState({});

  const dispatch = useDispatch();

  const { images: workImages, videos } = selectedWork;

  useEffect(() => {
    setWorks(worksData);
    setVideoWorks(videoData);
  }, []);

  useEffect(() => {
    if (!selectedWork) return;

    if (filteredMenu.length > 1) return;

    setFilteredMenu([
      "All",
      ...new Set(workImages?.map((image) => image.project)),
    ]);
  }, [selectedWork]);

  const onClickHandler = (work) => {
    if (selectedWork === work) return;

    setFilteredMenu([]);
    setSelectedWork(work);
    setWork(work);
  };

  const filterWork = (item) => {
    if (item === "All") {
      setSelectedWork(work);
      return;
    }

    if (selectedWork.images.length !== work.images.length) {
      setSelectedWork(work);

      const filtered = work.images.filter((image) => image.project === item);

      setSelectedWork({ ...selectedWork, images: filtered });

      return;
    }

    const filtered = workImages.filter((image) => image.project === item);

    setSelectedWork({ ...selectedWork, images: filtered });
  };

  return (
    <>
      <Layout>
        <section className='w-full flex md:flex-row flex-col justify-between h-[calc(100vh-8.5rem)] md:pt-20 pt-8'>
          <aside className='md:shrink-0'>
            <ul className='uppercase text-white  flex md:flex-col flex-row flex-wrap md:space-x-0 items-center md:items-start justify-around'>
              {works?.map((work) => {
                return (
                  <li
                    className='break-normal text-sm md:text-base mr-1 md:mr-0 mt-1 md:mt-0'
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

              {videWorks.map((videoWork) => {
                return (
                  <li
                    className='break-normal text-sm md:text-base mr-1 md:mr-0 mt-1 md:mt-0'
                    onClick={() => onClickHandler(videoWork)}
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
                    key={videoWork.id}
                  >
                    {videoWork.title}
                  </li>
                );
              })}
            </ul>
          </aside>
          <main className='relative flex-grow'>
            {images !== undefined && videos === undefined ? (
              <div className='px-6 flex gap-3 flex-wrap items-center justify-center w-full mt-6 md:mt-4 pb-8 md:pb-10 select-none max-w-[800px] mx-auto'>
                {filteredMenu.length < 2 ? null : (
                  <>
                    {filteredMenu?.map((item, index) => {
                      return (
                        <button
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
                          onClick={() => filterWork(item)}
                          className='bg-white text-xs md:text-sm font-bold px-2 py-1 rounded-md cursor-none capitalize'
                          key={index}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </>
                )}
              </div>
            ) : null}

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
    </>
  );
};

export default Works;
