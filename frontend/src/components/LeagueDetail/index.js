import { React, useEffect, useState } from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { FaPlaceOfWorship, FaCalendarAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import LeagueInfo from "../LeagueInfo";
import LeagueApply from "../LeagueApply";
import LeagueStatus from "../LeagueStatus";
import SearchDivision from "../SearchDivision";
import SearchApplicant from "../SearchApplicant";

import "./style.css";
import Daejin from "../Tournament/Tournament";
import { getLeagueApi } from "../../api/api";

import video_img from "../../img/leagueInfo_video.png";
import rank_img from "../../img/leagueInfo_rank.png";
import money_img from "../../img/leagueInfo_money.png";

function LeagueDetail(props) {
  let { leagueSeq } = useParams();

  const [leagueData, setLeagueData] = useState(null);

  const userRole = sessionStorage.getItem("userRole");
  
  useEffect(() => {
    async function getData() {
      const { data } = await getLeagueApi(leagueSeq);
      console.warn(data);
      setLeagueData(data);
    }
    getData();
  }, []);

  return (
    <>
      {leagueData && leagueSeq ? (
        <section className="fag-breadcrumb-area">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="games-details-banner">
                <Row>
                  <Col lg={3} sm={4}>
                    <div className="details-banner-thumb">
                      <img src={leagueData.leaguePoster} alt="games" />
                    </div>
                  </Col>
                  <Col lg={6} sm={8}>
                    <div className="details-banner-info">
                      <h3>
                        {leagueData.leagueName}
                        <span className="single_rating">
                          <AiFillStar />
                          4.5
                        </span>
                      </h3>
                      <div className="single_game_meta">
                        <p className="details-genre">
                          <FaPlaceOfWorship /> PLACE: {leagueData.leaguePlace}
                        </p>
                        <p className="details-time-left">
                          <FaCalendarAlt />
                          DATE:{" "}
                          <span>
                            {leagueData.leagueDate[0]}/
                            {leagueData.leagueDate[1]}/
                            {leagueData.leagueDate[2]}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        
      ) : (
        ""
      )}

      <section className="fag-games-details-page section_100">
        <br/>
        <Container>
          <Row className="justify-content-end">
            <Col lg={12}>
              <div className="games-details-page-box">
                <br />
                <div className="tv-panel-list">
                  <Tabs
                    defaultActiveKey="info"
                    id="uncontrolled-tab-example"
                    className="tv-tab"
                  >
                    <Tab eventKey="info" title="대회 소개">
                      <Row>
                        <Col md={12}>
                          {leagueData ? (
                            <LeagueInfo leagueInfo={leagueData.leagueInfo} />
                          ) : (
                            ""
                          )}
                        </Col>
                      </Row>
                      <br/><br/>
                      <Row>
                        <Col md={4}>
                          <img src={video_img} alt="video" width="30%"/>
                          <p><br />리그로얄의 모든 시합은 4k로 촬영되어 웹사이트에 무료 업로드 됩니다. 참가한 선수들의 개인 프로필에 해당 영상이 태그되며, 본인을 포함한 다른 선수들의 경기 영상을 언제든지 검색, 확인할 수 있습니다.</p>
                        </Col>
                        <Col md={4}>
                        <img src={rank_img} alt="rank" width="30%" />
                        <p><br />리그로얄은 대회에 참가하는 모든 선수들의 승패 프로필을 기록하여 새로운 순위 집계 시스템을 제공합니다.<br /> 각 벨트의 상위권 선수들은 매년  3회 개최되는 상금을 건 “Super Fight” 형식의 대회에 참가하는 자격을 갖게 됩니다.</p>
                        </Col>
                        <Col md={4}>
                        <img src={money_img} alt="money" width="30%" text-align = "center"/>
                        <br />
                        <p><br />어덜트 앱솔루트 우승자에게 상금이 지급됩니다!</p>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="applies" title="대회 신청">
                      <Row>
                        <Col md={12}>
                          <LeagueApply leagueSeq={leagueSeq}/>
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="matches" title="대진표">
                      <Row>
                        <Col md={12}>
                          <SearchDivision/>
                          <br />
                          <br />
                          <Daejin leagueSeq={leagueSeq} />
                        </Col>
                      </Row>
                    </Tab>
                    <Tab eventKey="status" title="대회 현황">
                      <Row>
                        <Col md={12}>
                          <LeagueStatus />
                        </Col>
                      </Row>
                    </Tab>
                    {userRole === "admin" &&
                    <Tab eventKey="search" title="참가자 조회">
                      <Row>
                        <Col md={12}>
                        <SearchApplicant/>
                          {/* <LeagueStatus /> */}
                        </Col>
                      </Row>
                    </Tab>}
                    
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default LeagueDetail;
