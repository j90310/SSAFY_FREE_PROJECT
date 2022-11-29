import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
// import Video from "../components/Video";
import Games from "../components/Games";
import NextLeague from "../components/NextLeague";
// import Promo from "../components/Promo";
import Sponsor from "../components/Sponsor";
import PreOrder from "../components/PreOrder";
// import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <Video /> */}
      <NextLeague />
      <PreOrder />
      {/* <Games /> */}
      {/* <Promo /> */}
      <Sponsor />
      {/* <LatestNews /> */}
      <Footer />
    </>
  );
};
export default HomePage;
