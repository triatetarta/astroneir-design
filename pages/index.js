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

        <meta itemProp='name' content='Astroneir Design' />
        <meta itemProp='description' content='Graphic Designer' />
        <meta itemProp='image' content='https://i.imgur.com/dWXIOhh.png' />

        <meta property='og:url' content='https://www.astroneir-design.com' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Astroneir Design' />
        <meta property='og:description' content='Graphic Designer' />
        <meta property='og:image' content='https://i.imgur.com/dWXIOhh.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Astroneir Design' />
        <meta name='twitter:description' content='Graphic Designer' />
        <meta name='twitter:image' content='https://i.imgur.com/dWXIOhh.png' />
      </Head>

      <div className='w-full relative'>
        <Layout>
          <Showcase />
        </Layout>
      </div>
    </>
  );
}
