import { motion } from "framer-motion";
import { useState } from "react";

const Project = ({ setOpenProject, selectedWork }) => {
  const [message, setMessage] = useState("");

  return (
    <motion.section
      layout
      initial={{ opacity: 0, scale: 5, rotate: 360, y: 450 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0, rotate: -360, y: 150 }}
      drag
      whileDrag={() => setMessage("#mitsotaki_gamiesai")}
      onDragEnd={() => setMessage("")}
      className='bg-white rounded-md absolute left-1/3 top-20'
    >
      <motion.div layout className='p-10 relative'>
        <p className='text-7xl'>💩</p>
        <p>Title: {selectedWork.title}</p>

        <p className='font-bold'>{message}</p>

        <span
          onClick={() => setOpenProject(false)}
          className='w-6 h-6 rounded-md bg-astro-blue text-white absolute right-1 top-1 flex items-center justify-center'
        >
          X
        </span>
      </motion.div>
    </motion.section>
  );
};

export default Project;
