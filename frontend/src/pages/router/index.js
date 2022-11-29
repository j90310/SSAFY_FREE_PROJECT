import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import AboutPage from "../AboutPage";
import RulePage from "../RulePage";
import LeagueListPage from "../LeagueListPage";
import LeagueDetailPage from "../LeagueDetailPage";
// import PersonalRankPage from "../PersonalRankPage";
// import TeamRankPage from "../TeamRankPage";
import ContactPage from "../ContactPage";
import CreateLeaguePage from "../CreateLeaguePage";
import SearchApplicatnPage from "../SearchApplicantPage";

// 세영
import Competition from "../Competition";
import Match from "../Match";
import Daejin from "../Daejin";
import Scoreboard from "../ScoreboardPage";
import ScrollTop from "../../components/ScrollTop";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <ScrollTop />
        <Routes>
          {/* 메인 페이지 */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/error" element={<ErrorPage />} />

          {/* 로그인 / 회원가입 */}
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />

          {/* 대회 생성 페이지 */}
          <Route exact path="/createLeague" element={<CreateLeaguePage />} />
          {/* 대회 소개 페이지 */}
          <Route exact path="/about" element={<AboutPage />} />
          {/* 대회 리스트 페이지 */}
          <Route exact path="/leaguelist" element={<LeagueListPage />} />
          {/* 대회 정보 페이지 */}
          <Route
            exact
            path="/leaguedetail/:leagueSeq"
            element={<LeagueDetailPage />}
          />
          {/* 대회 규칙 페이지 */}
          <Route exact path="/rule" element={<RulePage />} />

          {/* 랭킹 */}
          {/* <Route exact path="/personalRank" element={<PersonalRankPage />} /> */}
          {/* <Route exact path="/teamRank" element={<TeamRankPage />} /> */}

          {/* Contact */}
          <Route exact path="/contact" element={<ContactPage />} />
          {/* 선수 검색 */}
          <Route
            exact
            path="/searchApplicant"
            element={<SearchApplicatnPage />}
          />

          {/* 세영 */}
          {/* 대회페이지 */}
          {/* 동적으로 페이지를 추가 react-router-dom에서 useParams를 통해서 접근 가능 */}
          <Route path="/competition/:id" element={<Competition />}></Route>
          {/* 대회 마감 후 게임 삽입 */}
          <Route path="/match/finish/:id" element={<Daejin />}></Route>

          {/* 대회 개별 경기 페이지 */}
          <Route path="/match/:id" element={<Match />}></Route>

          {/* 스코어보드 페이지 */}
          <Route path="/scoreboard/:id" element={<Scoreboard />}></Route>

          {/* 나머지 경로는 에러로 던짐 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
