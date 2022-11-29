import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../img/promo-bg.jpg";

import "./style.css";

function Promo(props) {
  return (
    <>
      <section className="fag-promo-area">
        <div className="promo-iamge">
          <img src={img} alt="promo" />
        </div>
        <div className="promo-info">
          <Container>
            <Row>
              <Col md={7}>
                <div className="promo-box">
                  <h3>Realistic Battles</h3>
                  <p>
                    Eleifend sem ipsum conubia euismod potenti ante ad sem sed,
                    dictumst hymenaeos torquent quis. Class leo. Odio orci velit
                    nulla habitasse conubia tempor eleifend dui suscipit mauris
                    eget mollis
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Promo;
