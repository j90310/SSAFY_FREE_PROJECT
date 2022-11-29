import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import CreateLeague from "../components/CreateLeague";
import Footer from "../components/Footer";

const CreateLeaguePage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Contact Us</>} />
      <CreateLeague />
      <Footer />
    </>
  );
};
export default CreateLeaguePage;
