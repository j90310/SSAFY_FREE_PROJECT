import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatar from "../../img/login-avatar.png";

import { loginApi } from "../../api/api";

import "./style.css";

function Login(props) {
  const onClick = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const UserLoginRequestDto = {
      userEmail,
      userPassword,
    };

    try {
      const { data } = await loginApi(UserLoginRequestDto);
      console.log(data);
  
      sessionStorage.setItem("token", data.userToken);
      sessionStorage.setItem("userEmail", data.userEmail);
      sessionStorage.setItem("userName", data.userName);
      sessionStorage.setItem("userPhone", data.userPhone);
      sessionStorage.setItem("userSeq", data.userSeq);
      sessionStorage.setItem("userRole", data.userRole);
      event.preventDefault();

      navigate(`../`);
    } catch {
      alert("로그인 실패!");
    }
  };

  return (
    <>
      <div className="page-405 section--full-bg">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="page-404__wrap">
                <div className="login-wrapper">
                  {/* <img className="login_user" src={avatar} alt="login user" /> */}
                  <h3>Account Login</h3>
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
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="form-row" />
                    <div className="form-row">
                      <button className="fag-btn" type="submit">
                        Login to your Account!
                      </button>
                    </div>
                  </form>
                  {/* <div className="socials-wrapper">
                    <p>Login with your Social Account</p>
                    <ul>
                      <li>
                        <Link to="/" onClick={onClick} className="facebook">
                          <FaFacebookF />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitch">
                          <FaTwitch />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="twitter">
                          <FaTwitter />
                        </Link>
                      </li>
                      <li>
                        <Link to="/" onClick={onClick} className="youtube">
                          <FaYoutube />
                        </Link>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Login;
