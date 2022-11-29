import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cho from "../../img/cho.gif";
import dave from "../../img/dave.gif";
import "./style.css";

function Hero(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const settings = {
    dots: true,
    arrows: false,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
  };
  return (
    <>
      <section className="slider-area">
        <Slider className="fag-slide" {...settings}>
          <div className="slide">
            <div
              className="fag-main-slide"
              style={{ backgroundImage: `url(${dave})` }}
            >
              <div className="fag-main-caption">
                <div className="fag-caption-cell">
                  <Container>
                    <Row>
                      <Col sm={12}>
                        <div className="slider-text">
                          <h3>Dave Kim</h3>
                          <h2>1% better every single day</h2>
                          <Link
                            to="/"
                            onClick={openModal}
                            className="popup-youtube fag-btn-outline"
                          >
                            <span>
                              <FaPlay />
                            </span>
                            Watch Highlight
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
          <div className="slide">
            <div
              className="fag-main-slide"
              style={{ backgroundImage: `url(${cho})` }}
            >
              <div className="fag-main-caption">
                <div className="fag-caption-cell">
                  <Container>
                    <Row>
                      <Col sm={12}>
                        <div className="slider-text">
                          <h3>There is no losing in jiujitsu</h3>
                          <h2>You either win or you learn</h2>
                          <Link
                            to="/"
                            onClick={openModal}
                            className="popup-youtube fag-btn-outline"
                          >
                            <span>
                              <FaPlay />
                            </span>
                            Watch Highlight
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {modal ? (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <span className="closeVideo" onClick={closeModal}>
                <MdClose />
              </span>
              <div className="modal__video-align">
                {videoLoading ? (
                  <div className="modal__spinner">
                    <BiLoaderAlt className="modal__spinner-style" />
                  </div>
                ) : null}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src="https://www.youtube.com/embed/DH8CwiSW2aU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export default Hero;
