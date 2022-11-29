import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../../img/product-details.png";
import author1 from "../../img/4.jpg";
import author2 from "../../img/5.jpg";

import "./style.css";

function ProductsDetails(props) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="fag-product-details section_100">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="product-details-image">
                <img src={img} alt="product" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="product-details-text">
                <h3>Hand Gloves</h3>
                <div className="tour-rating">
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
                      <AiFillStar />
                    </li>
                  </ul>
                  <p>(23 rating)</p>
                </div>
                <div className="single-pro-page-para">
                  <p>
                    Cursus mal suada faci lisis. Lorem ipsum dolor.ipsum dolor
                    sit amet, cons ectetur elit. Ves tibulum nec odios Suspe
                    ndisse cursus mal suada faci lisis. Lorem ipsum dolor.ipsum
                    dolor sit amet,.Lorem ipsum dolor.ipsum dolor sit amet, cons
                    ectetur elit. Ves tibulum nec odios
                  </p>
                </div>
                <div className="single-shop-price">
                  <p>
                    Price:<span>$18</span>
                  </p>
                  <p>
                    Available:<span>In Stock</span>
                  </p>
                </div>
                <div className="quantity">
                  <p>Quantity: </p>
                  <div className="num-block skin-2">
                    <div className="num-in">
                      <input
                        type="number"
                        className="in-num"
                        defaultValue={1}
                        readOnly=""
                      />
                    </div>
                  </div>
                </div>
                <div className="single-shop-page-btn">
                  <Link to="/cart" className="fag-btn">
                    <FaShoppingBag /> add to cart <span />
                  </Link>
                  <ul>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={onClick}>
                        <FaPinterestP />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="product-panel-list">
                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                  className="product-tab"
                >
                  <Tab eventKey="description" title="description">
                    <div className="tab-gamess-details">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="tab-body">
                            <h3>Product Description</h3>
                            <p>
                              It is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Esse doloremque at eos dolore
                              consequatur aliquam, in sunt doloribus delectus
                              labore quae autem necessitatibus a magni cumque
                              debitis? Et voluptatum tempore provident repellat,
                              non officia dolore praesentium corporis quibusdam
                              odit aperiam ut fuga, illum eius pariatur ad id
                              inventore illo, veritatis dicta.{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* End Row */}
                    </div>
                  </Tab>
                  <Tab eventKey="reviews" title="reviews">
                    <div className="tab-gamess-details">
                      <Row>
                        <Col md={12}>
                          <div className="tab-body">
                            <div className="fag-comment-list">
                              <div className="single-comment-item">
                                <div className="single-comment-box">
                                  <div className="main-comment">
                                    <div className="author-image">
                                      <img src={author1} alt="author" />
                                    </div>
                                    <div className="comment-text">
                                      <div className="comment-info">
                                        <h4>david kamal</h4>
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
                                            <AiFillStar />
                                          </li>
                                        </ul>
                                        <p>4 minitues ago</p>
                                      </div>
                                      <div className="comment-text-inner">
                                        <p>
                                          Ne erat velit invidunt his. Eum in
                                          dicta veniam interesset, harum lupta
                                          definitionem. Vocibus suscipit
                                          prodesset vim ei, equidem perpetua eu
                                          per.
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="single-comment-box comment_reply">
                                  <div className="main-comment">
                                    <div className="author-image">
                                      <img src={author2} alt="author" />
                                    </div>
                                    <div className="comment-text">
                                      <div className="comment-info">
                                        <h4>Jerix Ablin</h4>
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
                                            <AiFillStar />
                                          </li>
                                        </ul>
                                        <p>12 minitues ago</p>
                                      </div>
                                      <div className="comment-text-inner">
                                        <p>
                                          orem ipsum dolor sit amet, consectetur
                                          adipisicing elit. Velit omnis animi et
                                          iure laudantium vitae, praesentium
                                          optio, sapiente distinctio illo?{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /end comment list */}
                            <div className="fag-leave-comment">
                              <form>
                                <Row>
                                  <Col lg={12}>
                                    <div className="comment-field">
                                      <textarea
                                        className="comment"
                                        placeholder="Comment..."
                                        name="comment"
                                        defaultValue={""}
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg={12}>
                                    <div className="comment-field">
                                      <button type="submit" className="fag-btn">
                                        Add Comment <span />
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </form>
                            </div>
                            {/* /end comment form */}
                          </div>
                        </Col>
                      </Row>
                      {/* End Row */}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ProductsDetails;
