import Head from "next/head";

const SEO = () => {
  return (
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
  );
};

export default SEO;
