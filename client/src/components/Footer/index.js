import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row } from "react-bootstrap";

import "./footer.css";

const Footer = () => {

  return (
    <>
      <Row className="footer-row">
        <Col className="footer-container">
          <p className="footerText">2023 &copy; RecipeBuddy</p>
        </Col>
        <Col className="footer-container">        
          <p className="footerText">Created By <a href="https://github.com/pelu-mi">LumiCodes</a></p>
        </Col>
      </Row>
    </>
  );
};

export default Footer;

