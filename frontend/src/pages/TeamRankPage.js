import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
// import TeamRank from "../components/TeamRank";
import Footer from "../components/Footer";

const TeamRankPage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            Team <span>Rank</span>
          </>
        }
      />
      {/* <TeamRank /> */}
      <Footer />
    </>
  );
};
export default TeamRankPage;
