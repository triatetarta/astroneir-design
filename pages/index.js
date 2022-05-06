import Head from "next/head";
import Showcase from "../components/Home/Showcase";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div className='w-full relative'>
      <Head>
        <title>Astroneir Design</title>
        <meta
          name='description'
          content='Official Website of Astroneir Design'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <Showcase />
      </Layout>
    </div>
  );
}
