import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
// import PersonalRank from "../components/PersonalRank";
import Footer from "../components/Footer";

const PersonalRankPage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            Personal <span>Rank</span>
          </>
        }
      />
      {/* <PersonalRank /> */}
      <Footer />
    </>
  );
};
export default PersonalRankPage;
