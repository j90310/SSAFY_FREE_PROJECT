import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import Rule from "../components/Rule";
import Footer from "../components/Footer";

const RulePage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            Rule
          </>
        }
      />
      <Rule />
      <Footer />
    </>
  );
};
export default RulePage;
