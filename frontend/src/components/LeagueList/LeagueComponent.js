import { React, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { leagueStore } from "../../store";

import games2 from "../../img/poster_reda_seminar.jpg";

const LeagueComponent = ({ leagueData }) => {

  function checkDate() {
    const currentTime = new Date();

    if (
      currentTime.getFullYear() * 10000 +
        (currentTime.getMonth() + 1) * 100 +
        currentTime.getDate() <
      leagueData.leagueDate[0] * 10000 +
        leagueData.leagueDate[1] * 100 +
        leagueData.leagueDate[2]
    ) {
      return <p className="free">Comming Soon</p>;
    } else {
      return <p className="off">END</p>;
    }
  }

  // // 벨트 선택 함수
  // function selectBelt() {
  //   if (divisionAge === "HighSchool" || divisionAge === "Adult") {
  //     return <BeltSelectBox />;
  //   } else if (divisionAge === "Elementary" || divisionAge === "MiddleSchool") {
  //     return <ElementaryMiddleSchoolBeltSelectBox />;
  //   } else {
  //     return <NoBeginnerBeltSelectBox />;
  //   }
  // }

  return (
    <>
      {/* <div> {leagueData.leagueSeq} </div> */}
      <Col lg={4} sm={6}>
        <div className="games-single-item img-contain-isotope">
          <div className="games-thumb">
            <div className="games-thumb-image">
              <Link to="/leaguedetail">
                <img src={leagueData.leaguePoster} alt="games" />
              </Link>
            </div>
            <div className="game-overlay">
              {/* <div onClick={openModal} className="popup-youtube">
              <span>
                <FaPlay />
              </span>
            </div> */}
            </div>
          </div>
          <div className="games-desc">
            <h3>
              <Link to="/leaguedetail">{leagueData.leagueName}</Link>
            </h3>
            <p className="game-meta">
              date:<span> {leagueData.leagueDate} </span>
            </p>
            <p className="game-meta">{leagueData.leaguePlace}</p>
            <div className="game-action">
              <div className="game-price">
                <h4>₩50,000 ~ </h4>
                {checkDate()}
                {/* <p className="free">Comming Soon</p> */}
                {/* <p className="off">Comming Soon</p> */}
              </div>
              <div className="game-buy">
                <Link
                  to={`/leaguedetail/${leagueData.leagueSeq}`}
                  className="fag-btn-outline"
                >
                  Participate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default LeagueComponent;
