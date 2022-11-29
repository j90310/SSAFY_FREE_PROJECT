import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import img from "../../img/video.jpg";
import testimonial1 from "../../img/testimonial-author-1.jpg";
import testimonial2 from "../../img/testimonial-author-2.jpg";
import sponsor1 from "../../img/sponsor1.png";
import sponsor2 from "../../img/sponsor2.png";
import sponsor3 from "../../img/sponsor3.png";
import sponsor9 from "../../img/sponsor9.png";
import sponsor8 from "../../img/sponsor8.png";

import "./style.css";

function AboutPage(props) {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = (e) => {
    setModal(true);
    e.preventDefault();
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  const settings = {
    dots: false,
    arrows: false,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="fag-about-area section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="about-top">
                <h2>
                  <span>12 Years</span> in Games Experience
                </h2>
                <p>
                  Pastrami picanha pig filet mignon, hamburger landjaeger
                  sirloin pancetta tenderloin tongue doner. Shoulder venison
                  burgdoggen, doner shank short ribs ball tip cupim tongue.
                  Shankle flank kevin pastrami bresaola pig ham. Pork beef
                  venison landjaeger filet mignon.
                </p>
                <p>
                  Chicken doner salami meatloaf picanha, pastrami short ribs
                  kevin. Venison beef burgdoggen pork loin bacon, cow turkey.
                  Hamburger kevin sirloin chuck, meatloaf pig picanha pancetta
                  ham shank rump.
                </p>
              </div>
            </Col>
            <Col lg={12}>
              <div className="fag-video-inn">
                <img className="zooming" src={img} alt="theater thumb" />
                <Link to="/" onClick={openModal} className="play-video">
                  <span>
                    <FaPlay />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
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
                  src="https://www.youtube.com/embed/3SAuuHCOkyI"
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
      <section className="fag-counter-area section_100">
        <Container>
          <Row>
            <Col lg={3} sm={6} md={3}>
              <div className="counter-box">
                <h3 className="heading_animation">
                  <span className="counter">2356</span>
                </h3>
                <h4>Happy Clients</h4>
              </div>
            </Col>
            <Col lg={3} sm={6} md={3}>
              <div className="counter-box">
                <h3 className="heading_animation">
                  <span className="counter">350</span>
                </h3>
                <h4>Won awards</h4>
              </div>
            </Col>
            <Col lg={3} sm={6} md={3}>
              <div className="counter-box">
                <h3 className="heading_animation">
                  <span className="counter">1245</span>
                </h3>
                <h4>New players</h4>
              </div>
            </Col>
            <Col lg={3} sm={6} md={3}>
              <div className="counter-box">
                <h3 className="heading_animation">
                  <span className="counter">102</span>
                </h3>
                <h4>Countries players</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fag-testimonial-area section_100">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Player's <span>Review</span>
                </h2>
                <p>
                  blanditiis praesentium voluptatum deleniti atque
                  corrupti.accusamus et iusto odio corrupti.accusamus et iusto
                  odioiusto odio dignissimos ducimus qui blanditiis
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Slider className="testimonial-slider" {...settings}>
                <div className="slide">
                  <div className="single-testimonial">
                    <div className="testimonial-meta">
                      <div className="testimonial-thumb">
                        <img src={testimonial1} alt="testimonial" />
                      </div>
                      <div className="testimonial-title">
                        <h3>Stefanie Rashford</h3>
                        <p>Player</p>
                      </div>
                    </div>
                    <div className="testimonial-desc">
                      <p>
                        Nullam orci dui, dictum et magna sollicitudin, tempor
                        blandit erat. Maecenas suscipit tellus sit amet augue
                        placerat fringilla a id lacus. Fusce tincidunt in leo
                        lacinia condimentum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="slide">
                  <div className="single-testimonial">
                    <div className="testimonial-meta">
                      <div className="testimonial-thumb">
                        <img src={testimonial2} alt="testimonial" />
                      </div>
                      <div className="testimonial-title">
                        <h3>Coby Sue</h3>
                        <p>Player</p>
                      </div>
                    </div>
                    <div className="testimonial-desc">
                      <p>
                        Nullam orci dui, dictum et magna sollicitudin, tempor
                        blandit erat. Maecenas suscipit tellus sit amet augue
                        placerat fringilla a id lacus. Fusce tincidunt in leo
                        lacinia condimentum.
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="fag-sponsor-area section_100">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  Our <span>Sponsors</span>
                </h2>
                <p>
                  blanditiis praesentium voluptatum deleniti atque
                  corrupti.accusamus et iusto odio corrupti.accusamus et iusto
                  odioiusto odio dignissimos ducimus qui blanditiis
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="sponsor-box-item">
                <div className="sponsor-heading">
                  <h4>Financial Sponsors</h4>
                </div>
                <div className="sponsor-box">
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={sponsor1} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={sponsor2} alt="sponsor" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="sponsor-box-item">
                <div className="sponsor-heading">
                  <h4>Media Sponsors</h4>
                </div>
                <div className="sponsor-box">
                  <ul>
                    <li>
                      <Link to="/">
                        <img src={sponsor9} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={sponsor3} alt="sponsor" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <img src={sponsor8} alt="sponsor" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutPage;
