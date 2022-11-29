import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import games1 from "../../img/poster20111203.jpg";
import games2 from "../../img/poster_reda_seminar.jpg";
import games3 from "../../img/poster20111105.jpg";
import games4 from "../../img/game-4.jpg";
import games5 from "../../img/game-5.jpg";
import games6 from "../../img/game-6.jpg";

import "./style.css";

function LeagueSchedule(props) {
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

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-game-page section_100">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="sidebar-widget">
                <div className="filter">
                  <h4 className="filter_title">
                    Filters <button type="button">Clear all</button>
                  </h4>
                  <div className="filter_group">
                    <label className="filter_label">Keyword:</label>
                    <input
                      type="text"
                      className="filter_input"
                      placeholder="Keyword"
                    />
                  </div>
                  <div className="filter_group">
                    <label htmlFor="sort" className="filter_label">
                      Sort by:
                    </label>
                    <div className="filter_select-wrap">
                      <select name="sort" id="sort" className="filter_select">
                        <option value={0}>Relevance</option>
                        <option value={1}>Newest</option>
                        <option value={2}>Oldest</option>
                      </select>
                    </div>
                  </div>
                  <div className="filter_group">
                    <label className="filter_label">Platforms:</label>
                    <ul className="filter_checkboxes">
                      <li className="custom-checkbox">
                        <input id="type1" type="checkbox" name="type1" />
                        <label htmlFor="type1">Playstation</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type2" type="checkbox" name="type2" />
                        <label htmlFor="type2">XBOX</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type3" type="checkbox" name="type3" />
                        <label htmlFor="type3">Windows</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type4" type="checkbox" name="type4" />
                        <label htmlFor="type4">Mac OS</label>
                        <span className="checkbox" />
                      </li>
                    </ul>
                  </div>
                  <div className="filter_group">
                    <label className="filter_label">Genres:</label>
                    <ul className="filter_checkboxes">
                      <li className="custom-checkbox">
                        <input id="type5" type="checkbox" name="type5" />
                        <label htmlFor="type5">Action</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type6" type="checkbox" name="type6" />
                        <label htmlFor="type6">Adventure</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type7" type="checkbox" name="type7" />
                        <label htmlFor="type7">Fighting</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type8" type="checkbox" name="type8" />
                        <label htmlFor="type8">Flight simulation</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type9" type="checkbox" name="type9" />
                        <label htmlFor="type9">Platform</label>
                        <span className="checkbox" />
                      </li>
                      <li className="custom-checkbox">
                        <input id="type10" type="checkbox" name="type10" />
                        <label htmlFor="type10">Racing</label>
                        <span className="checkbox" />
                      </li>
                    </ul>
                  </div>
                  <div className="filter_group">
                    <button className="fag-btn" type="button">
                      APPLY FILTER
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={9}>
              <div className="games-category">
                <Row>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games1} alt="games" />
                          </Link>
                        </div>
                        <div className="game-overlay">
                          <div onClick={openModal} className="popup-youtube">
                            <span>
                              <FaPlay />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/game-single">Royale Seoul</Link>
                        </h3>
                        <p className="game-meta">
                          Release date:<span> 2022.12.03 </span>
                        </p>
                        <p className="game-meta">place: 서울 KBS 88 체육관</p>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>₩50,000~</h4>
                            <p className="free">10% OFF</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Buy Now!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games2} alt="games" />
                          </Link>
                        </div>
                        <div className="game-overlay">
                          <div onClick={openModal} className="popup-youtube">
                            <span>
                              <FaPlay />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/game-single">Reda Mebtouche Seminar</Link>
                        </h3>
                        <p className="game-meta">
                          date:<span> 2022.11.05 ~ 2022.11.13 </span>
                        </p>
                        <p className="game-meta">palce: 부산, 서면, 인천</p>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>₩50,000</h4>
                            <p className="free">Comming Soon</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Buy Now!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games3} alt="games" />
                          </Link>
                        </div>
                        <div className="game-overlay">
                          <div onClick={openModal} className="popup-youtube">
                            <span>
                              <FaPlay />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/game-single">Royale BUSAN</Link>
                        </h3>
                        <p className="game-meta">
                          date:<span> 2022.11.05 </span>
                        </p>
                        <p className="game-meta">
                          palce: BEXCO 제 2전시장 5B 홀
                        </p>
                        <div className="game-action">
                          <div className="game-price">
                            <h4>₩50,000~</h4>
                            <p className="off">DONE</p>
                          </div>
                          <div className="game-buy">
                            <Link to="/game-single" className="fag-btn-outline">
                              Buy Now!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games4} alt="games" />
                          </Link>
                        </div>
                        <div className="game-overlay">
                          <div onClick={openModal} className="popup-youtube">
                            <span>
                              <FaPlay />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/game-single">Hand of Gilgamech</Link>
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
                            <Link to="/game-single" className="fag-btn-outline">
                              Buy Now!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games5} alt="games" />
                          </Link>
                        </div>
                        <div className="game-overlay">
                          <div onClick={openModal} className="popup-youtube">
                            <span>
                              <FaPlay />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/game-single">SteamWorld Quest Ryndo</Link>
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
                            <Link to="/game-single" className="fag-btn-outline">
                              Download
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={4} sm={6}>
                    <div className="games-single-item img-contain-isotope">
                      <div className="games-thumb">
                        <div className="games-thumb-image">
                          <Link to="/game-single">
                            <img src={games6} alt="games" />
                          </Link>
                        </div>
                        <div className="game-overlay">
                          <div onClick={openModal} className="popup-youtube">
                            <span>
                              <FaPlay />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="games-desc">
                        <h3>
                          <Link to="/game-single">A Puzzle of Flesh</Link>
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
                            <Link to="/game-single" className="fag-btn-outline">
                              Download
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
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

export default LeagueSchedule;
