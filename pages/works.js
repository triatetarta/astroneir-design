import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCursor } from "../components/Cursor/reducer";
import { Layout } from "../components/Layout";
import Project from "../components/Project/Project";
import { worksData } from "../constants/data";
import { emojiHappy, emojiSad } from "../constants/data";

const Works = () => {
  const [works, setWorks] = useState([]);
  const [selectedWorks, setSelectedWorks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setWorks(worksData);
  }, []);

  const onClickHandler = (work) => {
    if (selectedWorks.includes(work)) return;
    setSelectedWorks([...selectedWorks, work]);
  };

  return (
    <Layout>
      <section className='w-full flex justify-between h-[calc(100vh-8.5rem)]'>
        <aside className='pt-20'>
          <ul className='uppercase text-white text-xl flex flex-col'>
            {works?.map((work) => {
              return (
                <li
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
        <main className='relative flex-grow overflow-hidden'>
          <AnimatePresence>
            {selectedWorks.map((work, index) => {
              return (
                <Project
                  key={work.id}
                  setSelectedWorks={setSelectedWorks}
                  selectedWorks={selectedWorks}
                  index={index}
                  work={work}
                />
              );
            })}
          </AnimatePresence>
        </main>
      </section>
    </Layout>
  );
};

export default Works;
