import Head from "next/head";

const SEO = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>Astroneir Design - Graphic Designer</title>
      <meta name='description' content='Graphic Designer' />
      <meta
        name='keywords'
        content=' "Graphic Design, Colours, Illustration, Web Design, Video Editing, Anestis Neiros, Astroneir Design, Branding, Music Posters, Movie Posters, Packaging, Movie Trailers, T Shirts"'
      />
      <link rel='icon' href='/favicon.ico' />
      <meta
        name='image'
        content='https://i.imgur.com/dWXIOhh.png'
        key='ogtitle'
      />
      <meta
        property='og:title'
        content='Astroneir Design - Graphic Designer'
        key='ogtitle'
      />
      <meta
        property='og:description'
        content='Creative Graphic Designer, fluent in Illustrator and Photoshop, with talent for developing unique custom artworks. Highly artistic, always on task with innovative approach to ideas and concept development.'
        key='ogdesc'
      />
      <meta
        property='twitter:card'
        content='summary_large_image'
        key='twcard'
      />
      <meta name='twitter:creator' content='Gioumourtzina' key='twhandle' />
      <meta name='twitter:title' content='Astroneir Design' key='twtitle' />
      <meta
        name='twitter:description'
        content='Creative Graphic Designer, fluent in Illustrator and Photoshop, with talent for developing unique custom artworks. Highly artistic, always on task with innovative approach to ideas and concept development.'
        key='twdescription'
      />
      <meta
        name='twitter:image'
        content='https://i.imgur.com/dWXIOhh.png'
        key='twimage'
      />
      <meta property='og:url' content='www.astroneir-design.com' key='ogurl' />
      <meta
        property='og:image'
        content='https://i.imgur.com/dWXIOhh.png'
        key='ogimage'
      />
      <meta
        property='og:site_name'
        content='Astroneir Design'
        key='ogsitename'
      />
    </Head>
  );
};

export default SEO;
