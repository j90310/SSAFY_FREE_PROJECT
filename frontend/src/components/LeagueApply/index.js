import React, { useEffect, userEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

import { createApplyApi, createGameApi, closeApplyApi, getApplyClosedApi } from "../../api/api";
import SelectDivision from "../SelectDivision";
// import SearchTeam from "../SearchTeam";

import { divisionStore } from "../../store";

import "./style.css";


function LeagueApply(props) {

  const userSeq = sessionStorage.getItem("userSeq");
  const userName = sessionStorage.getItem("userName");
  const userRole = sessionStorage.getItem("userRole");

  const [teamSeq, setTeamSeq] = useState(1);
  const [leagueSeq, setLeagueSeq] = useState(null);
  const { divisionSeq } = divisionStore();
  const [closed, setClosed] = useState(false);

  async function getData(CreateApplyRequestDto) {
    const data = await createApplyApi(CreateApplyRequestDto);
  }
  
  useEffect(() => {
    setLeagueSeq(props.leagueSeq);
    console.warn(closed);
    setClosed(getApplyClosedApi(leagueSeq));
    console.warn(closed);
    console.log("userSeq >> ", userSeq, ", teamSeq >> ", teamSeq, ", leagueSeq >> ", leagueSeq, ", divisionSeq >> ", divisionSeq);
  }, [leagueSeq]);
  
  const handleSubmit = (event) => {
    // 리그 생성에 필요한 객체
    const CreateApplyRequestDto = {
      userSeq, 
      teamSeq, 
      leagueSeq, 
      divisionSeq
    };
    getData(CreateApplyRequestDto);
    event.preventDefault();
  };

  return (
    <>
      { closed ? (
      <div>
        <section className="checkout-page-area section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  League <span>Apply</span>
                </h2>
            
              </div>
            </Col>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="checkout-left-box">
                <form onSubmit={handleSubmit}>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder={userName}
                        type="text"
                        disabled
                        />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder="주짓수랜드"
                        type="text"
                        disabled
                        />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <div className="input-box">
                        <SelectDivision/>
                      </div>
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                    {/* <input
                        placeholder="Team 이름을 입력하세요."
                        type="text"
                        /> */}
                      <div className="input-box">
                        {/* <SearchTeam/> */}
                      </div>
                    </Col>
                  </Row>
                  
                  <Row className="checkout-form">
                    <Col md={12}>
                      <textarea
                        placeholder="*<중요> 로얄 대회 규칙 일부 변경 공지*로얄 대회는 IBJJF 규칙을 준수하되 2021년 일부 수정 사항이 적용됨을 알려드립니다. 변경된 규칙은 아래와 같습니다.로얄 노기 경기 규칙 또한 IBJJF 규칙을 따르되 아래 규칙들을 금지하고, 사용할 시 즉시 실격 처리됩니다.1. 니 리핑 (knee reaping) 은 허용되지 않으며, 심각한 니 리핑은 즉시 실격 처리됩니다.2. 힐훅과 무릎을 비틀게 하는 공격은 즉시 실격 처리됩니다.3. 어드가 없는 대회입니다 (홈페이지 규칙 참고해주시기 바랍니다)로얄 도복 + 노기 경기 규칙 변경:동점이 발생할 경우, 경기 퍼포먼스와 관계 없이 가장 늦게 득점한 사람이 우승자로 선언됩니다.경기가 0-0으로 종료될 경우, 심판은 경기 시간 동안 더 우세한 경기력을 보인 선수를 우승자로 선언합니다. 무승부 경기에 대한 심사 기준은 기존과 같으니 아래를 참고해주시기 바랍니다. Changes to Royale's Rules. We follow the IBJJF rules with some modifications as of 2021. Please note the following changes to our ruleset:ROYALE NOGI RULES follow the IBJJF rules except for the following: No knee reaping is allowed and a disqualification may be given for severe knee reaping. No heel hooks or any attacks that twist the knee are allowed and will result in disqualification. There are no advantages in Royale and the victor of a tie match are decided by the criteria listed in the ruleset of the Royale home page. ROYALE GI AND NOGI RULE CHANGE: In case of a tie in points, the last person to score shall be declared the winner regardless of the performance of the match. If a match ends 0-0, the winner will be declared by the referee as based upon the criteria listed on our rules page."
                        name="league-explain"
                        defaultValue={""}
                        // onChange={(e) => setLeagueInfo(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="comment-field form-action">
                        <div>
                        <button
                          // onClick={window.location.reload()}
                          type="submit"
                          className="fag-btn"
                          style={{ backgroundColor: "#ff7a21" }}
                        >
                          <Link to={`/leaguelist`}>Apply</Link>
                          {/* <Link to={`/leaguedetail/${leagueSeq}`}>Apply</Link> */}
                        </button>
                          </div>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col lg={2}/>
            <Col lg={8}>
            {
              userRole === "admin" &&
              <button onClick={ () => {createGameApi(leagueSeq); closeApplyApi(leagueSeq); window.location.reload();} }
              type="submit"
              className="fag-btn"
              style={{ backgroundColor: "#ff7a21" }}>
                대회 마감
                </button>
            }
            </Col>
          </Row>
        </Container>
      </section>
      </div>):(<p>대회가 마감되었습니다.</p>)}
      
    </>
  );
}

export default LeagueApply;
