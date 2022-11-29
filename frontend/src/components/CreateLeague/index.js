import React, { useEffect, userEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { createLeagueApi, updateLeaguePosterApi } from "../../api/api";

import "./style.css";

function CreateLeague(props) {
  const [leagueName, setLeagueName] = useState("");
  const [leagueDate, setLeagueDate] = useState("");
  const [leagueDeadline, setLeagueDeadline] = useState("");
  const [leaguePlace, setLeaguePlace] = useState("");
  const [leagueInfo, setLeagueInfo] = useState("");
  const [leagueSeq, setLeagueSeq] = useState("");
  const [leaguePoster, setLeaguePoster] = useState(null);

  async function getData(CreateLeagueRequestDto) {
    const data = await createLeagueApi(CreateLeagueRequestDto);
    setLeagueSeq(data.data.leagueSeq);
  }

  useEffect(() => {
    // console.log(leagueSeq);
    // console.log(leaguePoster);
    console.log(typeof leaguePoster);
    console.log(leaguePoster);
    updateLeaguePosterApi(leagueSeq, leaguePoster);
  }, [leagueSeq]);

  const handleSubmit = (event) => {
    // 리그 생성에 필요한 객체
    const CreateLeagueRequestDto = {
      leagueName,
      leagueDate,
      leagueDeadline,
      leaguePlace,
      leagueInfo,
    };

    getData(CreateLeagueRequestDto);
    event.preventDefault();
  };

  return (
    <>
      <section className="checkout-page-area section_100">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="site-heading">
                <h2 className="heading_animation">
                  NEW <span>LEAGUE</span>
                </h2>
                <p>
                  <br/>
              다음 내용을 입력하여 새로운 대회를 생성하세요!
              <br/>
              Enter the following to create a new League!
                </p>
              </div>
            </Col>
            <Col lg={2}></Col>
            <Col lg={8}>
              <div className="checkout-left-box">
                {/* <h3>Billing Details</h3> */}
                <form onSubmit={handleSubmit}>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder="League Title"
                        type="text"
                        onChange={(e) => setLeagueName(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={6}>
                      <DatePicker
                        selected={leagueDate}
                        dateFormat="yyyy-MM-dd"
                        // className="league-date"
                        // id="league-date"
                        openToDate={new Date()}
                        onChange={(date) => setLeagueDate(date)}
                        // onChange={(e) => setLeagueDate(e.target.value)}
                        placeholderText="League Date"
                      />
                    </Col>
                    <Col md={6}>
                      <DatePicker
                        selected={leagueDeadline}
                        dateFormat="yyyy-MM-dd"
                        // className="apply-deadline"
                        // id="apply-deadline"
                        openToDate={new Date()}
                        // onChange={(e) => setLeagueDeadline(e.target.value)}
                        onChange={(date) => setLeagueDeadline(date)}
                        placeholderText="Apply Deadline"
                      />
                    </Col>
                  </Row>

                  <Row className="checkout-form">
                    <Col md={12}>
                      <input
                        placeholder="League Place"
                        type="text"
                        onChange={(e) => setLeaguePlace(e.target.value)}
                        // name="league-place"
                        // id="league-place"
                      />
                    </Col>
                  </Row>
                  <Row className="checkout-form">
                    <Col md={12}>
                      <div className="input-box">
                        <div className="input-left">
                          <input
                            type="file"
                            id="fileUpload"
                            onChange={(e) => {
                              const formData = new FormData();
                              formData.append("data", e.target.files[0]);
                              setLeaguePoster(e.target.files[0]);
                            }}
                          />
                        </div>
                        <div className="input-right">
                          <label className="input-file-button" for="input-file">
                            UPLOAD
                          </label>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row className="checkout-form">
                    <Col md={12}>
                      <textarea
                        placeholder="League explain..."
                        name="league-explain"
                        defaultValue={""}
                        onChange={(e) => setLeagueInfo(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <div className="comment-field form-action">
                        <button
                          type="submit"
                          className="fag-btn"
                          style={{ backgroundColor: "#ff7a21" }}
                        >
                          Send Message
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default CreateLeague;
