import Head from "next/head";
import Showcase from "../components/Home/Showcase";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div className='w-full relative'>
      <Layout>
        <Showcase />
      </Layout>
    </div>
  );
}
