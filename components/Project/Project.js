import { motion } from "framer-motion";
import CloseIcon from "../../public/assets/x.svg";

const Project = ({ setOpenProject, selectedWork }) => {
  const { title, images } = selectedWork;

  return (
    <motion.article
      drag
      layout
      initial={{ opacity: 0, scale: 5, rotate: 360, y: 450 }}
      animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0, rotate: -360, y: 150 }}
      className='bg-white rounded-md absolute left-1/3 top-20 max-w-[380px]'
    >
      <motion.div className='p-4 relative flex items-center justify-between'>
        <h2 className='uppercase text-xl'>{title}</h2>

        <span
          onClick={() => setOpenProject(false)}
          className='w-6 h-6 rounded-md bg-astro-blue text-white flex items-center justify-center'
        >
          <CloseIcon className='p-1' />
        </span>
      </motion.div>

      <div className='px-6 flex gap-4 flex-wrap items-center justify-center w-full h-full mt-10 pb-10 select-none pointer-events-none'>
        {images?.map((image) => {
          return (
            <div key={image.id}>
              <div className='w-[150px] h-[150px] overflow-hidden'>
                <img
                  className='object-cover'
                  src={image.src}
                  alt={image.title}
                />
              </div>
              <div className='uppercase text-xs mt-2'>
                <a
                  href={image.url}
                  className='flex items-center space-x-1 pointer-events-auto'
                  target='_blank'
                >
                  <div className='w-3 h-3'>{image.urlIcon}</div>
                  <p>{image.project}</p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </motion.article>
  );
};

export default Project;
