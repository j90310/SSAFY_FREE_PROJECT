import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import game1 from "../../img/games-1.jpg";
import game2 from "../../img/game-2.jpg";
import game3 from "../../img/game-3.jpg";
import game4 from "../../img/game-4.jpg";
import game5 from "../../img/game-5.jpg";
import game6 from "../../img/game-6.jpg";
import game7 from "../../img/game-7.jpg";
import game8 from "../../img/game-8.jpg";
import "./style.css";

function Games(props) {
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

  return (
    <>
      <section className="fag-games-area section_140">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  our <span>games</span>
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
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="first"
                className="games-masonary"
              >
                <Nav className="projectFilter project-btn">
                  <Nav.Item>
                    <Nav.Link eventKey="first">show all</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Desktop</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Mobile</Nav.Link>
                  </Nav.Item>
                </Nav>
                <div className="clearfix gamesContainer">
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game1} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Desperados III Digital
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$28.99</h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game2} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Red Dead Redemption 2
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$18.99</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game3} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Baldur's Gate II
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$18.99</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Download
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game4} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Hand of Gilgamech
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$18.99</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game5} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    SteamWorld Quest Ryndo
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$18.99</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Download
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game6} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    A Puzzle of Flesh
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$18.99</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Download
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game7} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    We are the Dwarves
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 12.04.2018</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$10.50</del>
                                    </h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game8} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Blood of the Sacred
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 09.11.2016</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$17.22</del>
                                    </h4>
                                    <p className="off">30% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game8} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Blood of the Sacred
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 09.11.2016</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.1</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$17.22</del>
                                    </h4>
                                    <p className="off">30% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game6} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    A Puzzle of Flesh
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$18.99</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Download
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game1} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Desperados III Digital
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$28.99</h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game2} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Red Dead Redemption 2
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$18.99</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game2} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Red Dead Redemption 2
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$18.99</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item desktop">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game3} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Baldur's Gate II
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>
                                      <del>$18.99</del>
                                    </h4>
                                    <p className="free">FREE</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Download
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game4} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Hand of Gilgamech
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.2</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$18.99</h4>
                                    <p className="off">40% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6}>
                          <div className="games-item mobile">
                            <div className="games-single-item img-contain-isotope">
                              <div className="games-thumb">
                                <div className="games-thumb-image">
                                  <Link to="/">
                                    <img src={game1} alt="games" />
                                  </Link>
                                </div>
                                <div className="game-overlay">
                                  <Link
                                    to="/"
                                    onClick={openModal}
                                    className="popup-youtube"
                                  >
                                    <span>
                                      <FaPlay />
                                    </span>
                                  </Link>
                                </div>
                              </div>
                              <div className="games-desc">
                                <h3>
                                  <Link to="/game-single">
                                    Desperados III Digital
                                  </Link>
                                </h3>
                                <p className="game-meta">Action | Desktop</p>
                                <p className="game-meta">
                                  Release date:<span> 07.12.2015</span>
                                </p>
                                <div className="game-rating">
                                  <h4>4.5</h4>
                                  <ul>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiFillStar />
                                    </li>
                                    <li>
                                      <AiOutlineStar />
                                    </li>
                                  </ul>
                                </div>
                                <div className="game-action">
                                  <div className="game-price">
                                    <h4>$28.99</h4>
                                    <p className="off">50% OFF</p>
                                  </div>
                                  <div className="game-buy">
                                    <Link
                                      to="/game-single"
                                      className="fag-btn-outline"
                                    >
                                      Buy Now!
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Tab.Container>
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
    </>
  );
}

export default Games;
