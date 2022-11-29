import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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

function MatchesDetails(props) {
  return (
    <>
      <section className="fag-match-page section_100">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="fag-matchs-list">
                <div className="single-match-list match-details">
                  <div className="match-box-left">
                    <div className="gamer-image">
                      <Link to="/">
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
                      <Link to="/">
                        <img src={gamer4} alt="gamer" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="match-details-block">
                  <h3>Description</h3>
                  <p>
                    Aliquam euismod at potenti velit risus erat nulla blandit
                    leo. Sagittis cubilia turpis. Taciti gravida litora. Id.
                    Vestibulum. Eu augue augue duis rhoncus sociosqu. Quam nec
                    erat a volutpat eleifend nibh Bibendum malesuada ridiculus.
                    Dapibus vel nascetur. Sollicitudin dictumst, leo donec
                    vivamus potenti cursus cras phasellus ullamcorper.
                  </p>
                  <blockquote>
                    Dui litora suscipit senectus id etiam aliquet gravida
                    adipiscing <strong>dignissim</strong> hac Luctus. Pretium
                    orci nunc est diam lobortis cursus. Faucibus diam ante.
                    Odio. Maecenas. Lacus ornare montes condimentum sit fames
                    torquent quis dignissim scelerisque ullamcorper <em>at</em>{" "}
                    ullamcorper Lacinia iaculis nisi aliquam consectetuer per
                    dolor <strong>porttitor</strong> libero pulvinar sociis elit
                    nam. Turpis, congue mi Nisi ipsum.
                  </blockquote>
                  <p>
                    Ante suspendisse sociosqu facilisis augue Penatibus urna
                    Dapibus volutpat Lacus enim sit Quam posuere vestibulum
                    metus aenean eget imperdiet donec sed eget morbi mus erat
                    platea per mollis semper torquent curae; arcu a sapien.
                    Interdum sollicitudin luctus curabitur vestibulum mus
                    facilisis a ipsum nibh facilisis aenean convallis curabitur
                    tempus.
                  </p>
                  <p>
                    Sit commodo tortor natoque ut donec suscipit imperdiet
                    magna, netus magna aliquet, natoque molestie non mauris
                    pellentesque primis eu non lorem convallis lorem ipsum,
                    habitant augue eros tristique amet vehicula non facilisis a
                    eget aliquet feugiat mollis class enim habitant posuere
                    suspendisse, ridiculus etiam. Ultricies platea ridiculus
                    nostra.
                  </p>
                  <div className="match-box-action">
                    <Link to="/" className="fag-btn">
                      participate
                    </Link>
                  </div>
                </div>
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
                            <img src={rank2} alt="img" />
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

export default MatchesDetails;
