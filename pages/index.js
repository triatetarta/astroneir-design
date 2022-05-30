import Showcase from "../components/Home/Showcase";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Astroneir Design - Graphic Designer</title>
        <meta
          name='description'
          content='Astroneir Design is a creative Graphic Designer, with passion for developing unique custom artworks. Highly artistic, always
          on task with innovative approach to ideas and concept development.'
        />
      </Head>

      <div className='w-full relative'>
        <Layout>
          <Showcase />
        </Layout>
      </div>
    </>
  );
}
