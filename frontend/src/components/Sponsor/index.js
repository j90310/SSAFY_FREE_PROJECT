import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaSkype } from "react-icons/fa";
import img1 from "../../img/JiujitsuLand.png";
import img2 from "../../img/BjjLibrary.png";
import img3 from "../../img/TapeArmor.png";
import img4 from "../../img/WildCat.png";

import "./style.css";

function Sponsor(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-team-area section_100">
        <div className="top-layer" />
        <div className="bottom-layer" />
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Sponsor<span> & </span>Parter
                </h2>
                <p>League Royale's best Sponsors and Partners</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img1} alt="team-1" />
                </div>
                <div className="team-details">
                  <h3>JIUJITSU LAND</h3>
                  <span>jiujitsu gym</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img2} alt="team-2" />
                </div>
                <div className="team-details">
                  <h3>BJJ LIBRARY</h3>
                  <span>JiuJitsu Technique Video</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img3} alt="team-3" />
                </div>
                <div className="team-details">
                  <h3>TAPE ARMOR</h3>
                  <span>Tape for Injury Prevention</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="team-item">
                <div className="team-image">
                  <img src={img4} alt="team-4" />
                </div>
                <div className="team-details">
                  <h3>WILD CAT</h3>
                  <span>Craft Beer Brewery</span>
                  <div className="team-social">
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick}>
                          <FaSkype />
                        </Link>
                      </li>
                    </ul>
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

export default Sponsor;
