import React from "react";

import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import LeagueList from "../components/LeagueList";
import Footer from "../components/Footer";

const LeagueListPage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            League <span>List</span>
          </>
        }
      />
      <LeagueList />
      <Footer />
    </>
  );
};
export default LeagueListPage;
