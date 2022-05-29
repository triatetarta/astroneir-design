import Head from "next/head";
import Showcase from "../components/Home/Showcase";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div className='w-full relative'>
      <Head>
        <title>Astroneir Design - Home</title>
        <meta
          name='description'
          content='Official Website of Astroneir Design'
        />
        <meta
          name='keywords'
          content='Graphic Design, Colours, Illustration, Web Design,
Video Editing, Anestis Neiros, Astroneir Design, 
Branding, Music Posters, Movie Posters, Packaging, 
Movie Trailers, T Shirts'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Showcase />
      </Layout>
    </div>
  );
}
