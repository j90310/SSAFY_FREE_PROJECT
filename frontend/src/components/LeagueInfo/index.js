// import React, { useState } from "react";
import React from "react";
// import { Row, Col, Tab } from "react-bootstrap";
// import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
// import { FaCalendarAlt } from "react-icons/fa";
// import { AiFillStar } from "react-icons/ai";
// // import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { Link } from "react-router-dom";
// // import { FaPlay } from "react-icons/fa";
// // import { BiLoaderAlt } from "react-icons/bi";
// // import { MdClose } from "react-icons/md";
// import img from "../../img/game-4.jpg";
// // import game1 from "../../img/games-1.jpg";
// // import game2 from "../../img/game-2.jpg";
// // import game3 from "../../img/game-3.jpg";
// // import game4 from "../../img/game-4.jpg";
// import feature1 from "../../img/feature-1.png";
// import feature2 from "../../img/feature-2.png";
// import feature3 from "../../img/feature-3.png";
// import feature4 from "../../img/feature-4.png";
// import author1 from "../../img/4.jpg";
// import author2 from "../../img/5.jpg";

import "./style.css";

const LeagueInfo = ({ leagueInfo }) => {
  console.log(leagueInfo);
  return (
    <>
      <div className="tab-body">{leagueInfo}</div>
    </>
  );
};

export default LeagueInfo;
