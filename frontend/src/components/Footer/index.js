import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaCaretRight,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../img/Logo_LeagueRoyale_black.png";

import "./style.css";

function Footer(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <footer className="fag-footer">
        <div className="footer-top-area">
          <Container>
            <Row>
              <Col lg={2} />
              <Col lg={4} sm={6}>
                <div className="single-footer">
                  <h3>About us</h3>
                  <p>
                    리그로얄은 대한민국 최고의 주짓수 대회입니다.
                  </p>
                  <p>
                  The most awaited jiu jitsu events in South Korea.
                  </p>
                </div>
              </Col>
              <Col lg={1} />
              <Col lg={4} sm={6}>
                <div className="single-footer">
                  <h3>Contact Us</h3>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaMapMarkerAlt />
                      Address{" "}
                    </h4>
                    <p>
                    부산광역시 부산진구 서면로 51 지하1층
                    </p>
                  </div>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaEnvelope />
                      Email Address
                    </h4>
                    <p>royale@royale.kr</p>
                  </div>
                  <div className="footer-contact">
                    <h4 className="title">
                      <FaPhoneAlt />
                      Phone{" "}
                    </h4>
                    <p>010-9885-9195</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-bottom">
          <Container>
            <Row>
              <Col sm={12}>
                <div className="footer-bottom-inn">
                  <div className="footer-logo">
                    <a href="/">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <a
                          href="https://ko-kr.facebook.com/leagueroyale/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/jiujitsuroyale/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCeSQZrz7nc-ABi9W7xqSpnA"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaYoutube />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="copyright">
                    <p>&copy; Copyrights Royale - All Rights Reserved</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;
