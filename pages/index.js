import Showcase from "../components/Home/Showcase";
import { Layout } from "../components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <title>Astroneir Design</title>
        <meta name='description' content='Graphic Designer' />
      </Head>

      <div className='w-full relative'>
        <Layout>
          <Showcase />
        </Layout>
      </div>
    </>
  );
}
