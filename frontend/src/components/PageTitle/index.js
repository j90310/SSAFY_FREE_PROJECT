import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaHome, FaChevronRight } from "react-icons/fa";

import "./style.css";

function PageTitle(props) {
  return (
    <>
      <section className="fag-breadcrumb-area">
        <Container>
          <Row>
            <Col sm={12}>
              <div className="breadcromb-box">
                <h3>{props.Title}</h3>
                <ul>
                  <li>
                    <FaHome />
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <FaChevronRight />
                  </li>
                  <li>{props.Title}</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default PageTitle;
