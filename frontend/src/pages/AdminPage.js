import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const AdminPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Contact Us</>} />
      <Contact />
      <Footer />
    </>
  );
};
export default AdminPage;
