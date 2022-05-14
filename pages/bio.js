import { Layout } from "../components/Layout";
import unicorn from "../public/assets/unicorn.png";
import Image from "next/image";

const Bio = () => {
  return (
    <Layout>
      <section className='w-full flex items-center justify-between h-[calc(100vh-8.5rem)] overflow-hidden'>
        <div className='w-2/3'>
          <p className='text-white'>
            Creative Graphic Designer, fluent in Illustrator and Photoshop, with
            talent for developing unique custom artworks. Highly artistic,
            always on task with innovative approach to ideas and concept
            development. Offering 7 years of expertise managing individual
            projects and brand designing. Consistently creates skilled, creative
            and brand-specific designs. Demonstrated success in managing an art
            directing in various projects from inception to completion within
            defined scope, quality, and timeline. Progressing experience in
            Video Editing, GIF animation and After Effects Animation.
            Detail-oriented, organized, enthusiastic team player and used to
            work at fast pace to meet tight deadlines.
          </p>
        </div>
        <div className='flex-1 relative w-1/3 h-full'>
          <Image
            src={unicorn}
            objectFit='contain'
            layout='fill'
            quality={100}
            alt='unicorn'
          />
        </div>
      </section>
    </Layout>
  );
};

export default Bio;
