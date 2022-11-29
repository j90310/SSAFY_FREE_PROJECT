import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import gamer1 from "../../img/gamer-1.png";
import gamer2 from "../../img/gamer-2.png";
import gamer3 from "../../img/gamer-4.png";
import gamer4 from "../../img/gamer-5.png";
import gamer5 from "../../img/gamer-3.png";
import vs from "../../img/vs_dark.png";
import rank1 from "../../img/rank-1.png";
import rank2 from "../../img/rank-2.png";
import rank3 from "../../img/rank-3.png";
import rank4 from "../../img/rank-4.png";
import rank5 from "../../img/rank-5.png";

import "./style.css";

function Matches(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-match-page section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="match-list-heading">
                <h3>
                  Upcoming <span>Matches</span>
                </h3>
              </div>
              <div className="fag-matchs-list">
                <div className="single-match-list">
                  <div className="match-box-left">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer1} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-middle">
                    <div className="matchcountdown">
                      <h3>Red Dot Invitational</h3>
                    </div>
                    <div className="match-vs">
                      <img src={vs} alt="vs" />
                    </div>
                    <div className="match-action">
                      <p>10th December 2020, 10:30 am</p>
                    </div>
                  </div>
                  <div className="match-box-right">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer2} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-action">
                    <Link to="/match-single" className="fag-btn">
                      participate
                    </Link>
                  </div>
                </div>
                {/*/.end single list*/}
                <div className="single-match-list">
                  <div className="match-box-left">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer3} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-middle">
                    <div className="matchcountdown">
                      <h3>Game Show GEC</h3>
                    </div>
                    <div className="match-vs">
                      <img src={vs} alt="vs" />
                    </div>
                    <div className="match-action">
                      <p>12th December 2020, 10:30 am</p>
                    </div>
                  </div>
                  <div className="match-box-right">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer4} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-action">
                    <Link to="/match-single" className="fag-btn">
                      participate
                    </Link>
                  </div>
                </div>
                {/*/.end single list*/}
                <div className="single-match-list">
                  <div className="match-box-left">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer5} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-middle">
                    <div className="matchcountdown">
                      <h3>The International 2020</h3>
                    </div>
                    <div className="match-vs">
                      <img src={vs} alt="vs" />
                    </div>
                    <div className="match-action">
                      <p>13th December 2020, 10:30 am</p>
                    </div>
                  </div>
                  <div className="match-box-right">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer2} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-action">
                    <Link to="/match-single" className="fag-btn">
                      participate
                    </Link>
                  </div>
                </div>
                {/*/.end single list*/}
                <div className="single-match-list">
                  <div className="match-box-left">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer1} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-middle">
                    <div className="matchcountdown">
                      <h3>Red Dot Invitational</h3>
                    </div>
                    <div className="match-vs">
                      <img src={vs} alt="vs" />
                    </div>
                    <div className="match-action">
                      <p>10th December 2020, 10:30 am</p>
                    </div>
                  </div>
                  <div className="match-box-right">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer2} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-action">
                    <Link to="/match-single" className="fag-btn">
                      participate
                    </Link>
                  </div>
                </div>
                {/*/.end single list*/}
                <div className="single-match-list">
                  <div className="match-box-left">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer3} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-middle">
                    <div className="matchcountdown">
                      <h3>Game Show GEC</h3>
                    </div>
                    <div className="match-vs">
                      <img src={vs} alt="vs" />
                    </div>
                    <div className="match-action">
                      <p>12th December 2020, 10:30 am</p>
                    </div>
                  </div>
                  <div className="match-box-right">
                    <div className="gamer-image">
                      <Link to="/match-single">
                        <img src={gamer4} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                  <div className="match-box-action">
                    <Link to="/match-single" className="fag-btn">
                      participate
                    </Link>
                  </div>
                </div>
                {/*/.end single list*/}
              </div>
              <div className="pagination-box-row">
                <p>Page 1 of 6</p>
                <ul className="paginations">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaAngleRight />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4}>
              <div className="match-page-right">
                <div className="single-match-widget">
                  <h3>Winner of the month</h3>
                  <div className="match-widget-inn">
                    <img src={gamer5} alt="gamer" />
                    <div className="match-score">
                      <h4>
                        Score: <span>12000</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="single-match-widget">
                  <h3>Top Player Ranking</h3>
                  <div className="match-widget-inn table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Rank</th>
                          <th>Player</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>
                            <img src={rank1} alt="img" />
                            <p>Ac milan</p>
                          </td>
                          <td>11050</td>
                        </tr>
                        <tr>
                          <td>02</td>
                          <td>
                            <img src={rank2} alt=" img" />
                            <p>Fc Royal</p>
                          </td>
                          <td>11000</td>
                        </tr>
                        <tr>
                          <td>03</td>
                          <td>
                            <img src={rank3} alt="img" />
                            <p>Ninja King</p>
                          </td>
                          <td>10000</td>
                        </tr>
                        <tr>
                          <td>04</td>
                          <td>
                            <img src={rank4} alt="img" />
                            <p>Soccer club</p>
                          </td>
                          <td>9910</td>
                        </tr>
                        <tr>
                          <td>05</td>
                          <td>
                            <img src={rank5} alt="img" />
                            <p>Xing Foo</p>
                          </td>
                          <td>9700</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Matches;
