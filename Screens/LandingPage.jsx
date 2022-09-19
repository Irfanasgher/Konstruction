import Head from "next/head";
import Navbar from "./../Components/Navbar";
import Footer from "./../Components/Footer";
import VideoSection from "./../Components/VideoSection";
import Quality from "./../Components/Quality_Design";
import WhatWeDo from "./../Components/WhatWeDo";
import FeaturedProjects from "./../Components/FeaturedProjects";
import WhyUs from "./../Components/WhyUs";
import FirstStep from "./../Components/FirstStep";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Konstruction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <VideoSection />
      <Quality />
      <WhatWeDo />
      <FeaturedProjects />
      <WhyUs />
      <FirstStep />
      <Footer />
    </div>
  );
}
