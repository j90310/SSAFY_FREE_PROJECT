import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import rank1 from "../../img/rank-1.png";
import rank2 from "../../img/rank-2.png";
import rank3 from "../../img/rank-3.png";
import rank4 from "../../img/rank-4.png";
import rank5 from "../../img/rank-5.png";

import "./style.css";

function PersonalRank(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-match-page section_100">
        <Container>
          <div className="match-list-heading">
            <h3>
              Upcoming <span>Matches</span>
            </h3>
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
        </Container>
      </section>
    </>
  );
}

export default PersonalRank;
