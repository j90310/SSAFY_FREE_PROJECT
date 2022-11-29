import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
// import img1 from "../../img/gamer-8.png";
import vs from "../../img/poster20221203.jpg";
// import img2 from "../../img/gamer-5.png";

import "./style.css";

function NextLeague(props) {
  const [countdownDate] = useState(new Date("12/04/2022").getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-current-match-area section_100">
        <div className="top-layer" />
        <div className="bottom-layer" />
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  next <span>League</span>
                </h2>
                <h6>
                  ❗중요❗ 리그로얄 서울 KBS88체육관 12월4일 일요일로
                  변경되었습니다❕
                </h6>
                <h6>
                  The League Royal has been changed to Sunday, December 4th at
                  KBS 88 Gym in Seoul!
                </h6>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={4}>
              <div className="match-vs">
                <img src={vs} alt="vs" />
              </div>
            </Col>
            <Col md={4}>
              <div className="match-box-middle">
                <div className="matchcountdown">
                  <ul>
                    <li>
                      <span id="days">{state.days || "0"}</span>
                      days
                    </li>
                    <li>
                      <span id="hours">{state.hours || "00"}</span>
                      Hours
                    </li>
                    <li>
                      <span id="minutes">{state.minutes || "00"}</span>
                      Minutes
                    </li>
                    <li>
                      <span id="seconds">{state.seconds || "00"}</span>
                      Seconds
                    </li>
                  </ul>
                </div>
                <div className="match-action">
                  {/* <Link to="/leagueinfo" onClick={onClick} className="fag-btn"> */}
                  <Link to="/leaguedetail/1" className="fag-btn">
                    Participate
                  </Link>
                </div>
              </div>
            </Col>
            <Col sm={2}></Col>
            {/* <Col sm={12}>
              <div className="match-box-inn">
                <Row>
                  <Col md={4}>
                    <div className="match-box-left">
                      <div className="gamer-image">
                        <Link to="/" onClick={onClick}>
                          <img src={img1} alt="gamer" />
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="match-box-middle">
                      <div className="matchcountdown">
                        <ul>
                          <li>
                            <span id="days">{state.days || "0"}</span>
                            days
                          </li>
                          <li>
                            <span id="hours">{state.hours || "00"}</span>
                            Hours
                          </li>
                          <li>
                            <span id="minutes">{state.minutes || "00"}</span>
                            Minutes
                          </li>
                          <li>
                            <span id="seconds">{state.seconds || "00"}</span>
                            Seconds
                          </li>
                        </ul>
                      </div>
                      <div className="match-vs">
                        <img src={vs} alt="vs" />
                      </div>
                      <div className="match-action">
                        <Link to="/" onClick={onClick} className="fag-btn">
                          participate
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="match-box-right">
                      <div className="gamer-image">
                        <Link to="/" onClick={onClick}>
                          <img src={img2} alt="gamer" />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NextLeague;
