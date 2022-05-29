import Head from "next/head";
import config from "./config";
import { useRouter } from "next/router";

const SEO = ({ title, image, description }) => {
  const { pathname } = useRouter();

  const {
    originalTitle,
    originalDescription,
    siteName,
    social: { twitter },
    currentURL,
    originalImage,
    keywords,
  } = config;

  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <title>{originalTitle}</title>
      <meta name='description' content={originalDescription} />
      <meta name='keywords' content={keywords} />
      <link rel='icon' href='/favicon.ico' />
      <meta name='image' content={originalImage} key='ogtitle' />
      <meta property='og:title' content={originalTitle} key='ogtitle' />
      <meta
        property='og:description'
        content={originalDescription}
        key='ogdesc'
      />
      <meta
        property='twitter:card'
        content='summary_large_image'
        key='twcard'
      />
      <meta name='twitter:creator' content={twitter} key='twhandle' />
      <meta name='twitter:title' content={originalTitle} key='twtitle' />
      <meta
        name='twitter:description'
        content={originalDescription}
        key='twdescription'
      />
      <meta name='twitter:image' content={originalImage} key='twimage' />
      <meta
        property='og:url'
        content={`www.astroneir-design.com`}
        key='ogurl'
      />
      <meta property='og:image' content={originalImage} key='ogimage' />
      <meta property='og:site_name' content={siteName} key='ogsitename' />
    </Head>
  );
};

export default SEO;
