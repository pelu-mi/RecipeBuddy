// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Row, Col } from "react-bootstrap";

import "./header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="navbar-container">
        <Row className="title-links">
          <Col className="search-col">
            <Link className="search-link" to="/search">
              Explore Recipes
            </Link>
          </Col>
          <Col>
            <a href="/"><img src="/RecipeBuddy-logo-1.svg" alt="RecipeBuddy"/></a>
          </Col>
          <Col>
            <Navbar>
              {/* <Nav> */}
              <Nav.Item className="navbar-links">
                {Auth.loggedIn() ? (
                  <Row>
                    <Col>
                      <Link to="/me" className="link">
                        {Auth.getProfile().data.username}'s profile
                      </Link>
                    </Col>
                    <Col>
                      <Link onClick={logout} className="link">
                        Logout
                      </Link>
                    </Col>
                  </Row>
                ) : (
                  <Row>
                    <Col>
                      <Link to="/login" className="link">
                        Login
                      </Link>
                    </Col>
                    <Col>
                      <Link to="/signup" className="link">
                        Signup
                      </Link>
                    </Col>
                  </Row>
                )}
              </Nav.Item>
              {/* </Nav> */}
            </Navbar>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
