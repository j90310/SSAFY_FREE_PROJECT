import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { signUpApi, emailCheck } from "../../api/api";

function Register(props) {

  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [userPhone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    // alert({ userEmail });
    const UserCreateRequest = {
      userEmail,
      userName,
      userPassword,
      userPhone,
    };
    // event.preventDefault();

    event.preventDefault();
    try {
      const can = await emailCheck(userEmail);
      
      console.log(can.data);
      if(can.data === true) {
        alert('중복된 이메일 입니다');
      } else {
        try {
            await signUpApi(UserCreateRequest);
            console.log(UserCreateRequest);
            event.preventDefault(); 
      
            alert('회원가입 성공! 로그인 해 주세요');
            navigate(`../login`);
          } catch {
            alert('회원가입 실패');
          }
      }
    } catch {
      console.error("에러!!");
    }
  };

  return (
    <>
      <div className="page-405 section--full-bg" Style="back">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap" Style="background">
                <div className="login-wrapper">
                  <h3>Create Account</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <input
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        placeholder="PhoneNumber"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Create your Account!
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
