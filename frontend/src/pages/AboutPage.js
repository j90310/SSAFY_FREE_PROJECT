import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import About from "../components/AboutPage";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            About <span>Us</span>
          </>
        }
      />
      <About />
      <Footer />
    </>
  );
};
export default AboutPage;
