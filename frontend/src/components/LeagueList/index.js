import { React, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiLoaderAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import games1 from "../../img/poster20221203.jpg";
import games2 from "../../img/poster_reda_seminar.jpg";
import games3 from "../../img/poster20221203.jpg";
import games4 from "../../img/game-4.jpg";
import games5 from "../../img/game-5.jpg";
import games6 from "../../img/game-6.jpg";

import LeagueComponent from "./LeagueComponent";

import { getLeagueListApi } from "../../api/api";

import "./style.css";

function GamesPage(props) {
  const [page, setpage] = useState(1);

  // const [leagueSeq, setleagueSeq] = useState("");
  // const [leagueName, setleagueName] = useState("");
  // const [leaguePlace, setleaguePlace] = useState("");
  // const [leagueDate, setleagueDate] = useState("");
  // const [leagueDeadline, setleagueDeadline] = useState("");
  // const [leaguePoster, setleaguePoster] = useState("");
  // const [leagueInfo, setleagueInfo] = useState("");

  const [leagueListData, setleagueListData] = useState(null);

  useEffect(() => {
    async function getData() {
      const data = await getLeagueListApi(page);
      // console.warn(data);
      setleagueListData(data);
      // console.log("data", leagueListData);
      // <div>
      //   {data.map((leagueData) => {
      //     console.log("leagueData", leagueData);

      //     <LeagueComponent leagueData={leagueData} />;
      //   })}
      // </div>;
    }

    getData();
    // console.warn(leagueListData);
  }, []);

  // const setLeagueList = async () => {
  //   //Single component
  //   const data = await getLeagueListApi(page);
  //   const listTmp = data.map((leagueData, index) => (
  //     // <div key={leagueData.leagueSeq}>
  //     <LeagueComponent leagueData={leagueData} />
  //     // </div>
  //   ));
  //   return <div id="league-component">{listTmp}</div>;
  // };

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
          <div className="games-category" id="league-component">
            <div>
              <Row>
                {leagueListData
                  ? leagueListData.map(
                      // (leagueData) => console.log("leagueData", leagueData)
                      (leagueData) => (
                        <LeagueComponent leagueData={leagueData} />
                      )
                    )
                  : ""}
              </Row>
            </div>
            {/* <LeagueComponent /> */}
          </div>
          {/* 페이지네이션 */}
          {/* <div className="pagination-box-row">
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
          </div> */}
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

export default GamesPage;
