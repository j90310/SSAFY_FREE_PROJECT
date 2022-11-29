import React from "react";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import "./style.css";

function PreOrder(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-preorder-area">
        <div className="preorder-inn">
          <Container>
            <Row>
              <div className="col-12 text-center">
                <div className="preorder-box">
                  <p></p>
                  <h3>
                    <span>Heroes are born at </span>
                    league Royale
                  </h3>
                  <Link to="/leaguelist" onClick={onClick} className="fag-btn-outline">
                    Apply Now!
                  </Link>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default PreOrder;
