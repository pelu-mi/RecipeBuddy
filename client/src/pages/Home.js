/* eslint-disable no-unused-vars */ 
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import RecipeSearch from "../extras/RecipeSearch";
import "./home.css";
import * as Icon from "react-bootstrap-icons";

const Main = () => {
  console.log('home: /')
  return (
    <Col className="home-container">
      <Row>
        <Col className="home-banner">
          <h2>Discover<span></span> recipes to try in seconds!</h2>
          <p>Join now and get access to a new world of recipes!</p>
          <img src="/meals.png" alt="meals"/>
          <button id="get-started-btn">
            <Link to="/search">Explore Recipes</Link>
          </button>
        </Col>
      </Row>
      <Row className="home-inspire inspire-left">
        <Col className="inspire-text inspire-text-left">
          <h2>Find Inspiration!</h2>
          <p>Looking for new culinary adventures? Search <strong>an extensive recipe database</strong> to discover a wide range of dishes from around the world. From quick and easy weeknight meals to impressive gourmet creations, we have recipes to suit every taste and skill level.</p>
        </Col>
        <Col className="inspire-img">
            <img src="/inspire-1.png" alt="Find Inspiration"/>
        </Col>
        <hr/>
      </Row>
      <Row className="home-inspire inspire-right">
        <Col className="inspire-img">
            <img src="/inspire-2.gif" alt="Find Inspiration 2"/>
        </Col>
        <Col className="inspire-text inspire-text-right">
          <h2>Personalize Your Preferences!</h2>
          <p>Customize your recipe recommendations based on your <strong>dietary and culinary preferences</strong>, such as vegetarian, vegan, breakfast, or dessert. We're here to make sure you find the perfect recipe that fits your unique needs.</p>
        </Col>
        <hr/>
      </Row>
      <Row className="home-inspire inspire-left">
        <Col className="inspire-text inspire-text-left">
          <h2>Save and Organize!</h2>
          <p>Save your favorite recipes for future reference. Create <strong>personalized collections</strong> to streamline your cooking routine. With our user-friendly interface, managing and organizing your saved recipes has never been easier.</p>
        </Col>
        <Col className="inspire-img">
            <img src="inspire-3.png" alt="Find Inspiration 3"/>
        </Col>
        <hr/>
      </Row>
      <Row className="home-inspire inspire-right">
        <Col className="inspire-img">
            <img src="inspire-4.gif" alt="Find Inspiration 4"/>
        </Col>
        <Col className="inspire-text inspire-text-right">
          <h2>Join our community!</h2>
          <p>Share your culinary creations, and exchange tips and tricks with our community. Engage in discussions, contribute your own recipes, and get inspired by others' experiences. All you have to do is use the hashtag <strong>#RecipeBuddy</strong> when sharing on your platform and you can connect with fellow RecipeBuddies like you.</p>
        </Col>
        <hr/>
      </Row>
      <Row className="home-inspire inspire-left">
        <Col className="inspire-text inspire-text-left">
          <h2>Get Cooking!</h2>
          <p>Once you've found the perfect recipe, dive into the cooking process with detailed instructions, step-by-step guides, and helpful tips from experienced chefs in our community. Feel confident in your culinary endeavours and create delicious meals that will impress your family and friends.</p>
        </Col>
        <Col className="inspire-img">
            <img src="inspire-5.jpg" alt="Find Inspiration 5"/>
        </Col>
      </Row>
      <Row className="home-description">
      <Col>
        <h2>What can you accomplish with us?</h2>
        <Row className="description-item-container">
          <Col className="description-item">
            <h4>Discover new Recipes</h4>
            <Icon.Search
              style={{ width: "100px", height: "150px", color: "#578D3E" }}
            />
            <p>
              Simply put in an ingredient, meal title or use filters to find new recipes.
            </p>
          </Col>
          <Col className="description-item">
            <h4>Save your favourite Recipes</h4>
            <Icon.Heart
              style={{ width: "100px", height: "150px", color: "#578D3E" }}
            />
            <p>
              As soon as you create your account <a href="/signup">here</a>, you can bookmark recipes to your profile!
            </p>
          </Col>
          <Col className="description-item">
            <h4>Show off</h4>
            <Icon.GlobeAmericas
              style={{ width: "100px", height: "150px", color: "#578D3E" }}
            />
            <p>Express your culinary skills in a new way by trying out different cuisines!</p>
          </Col>
        </Row>
      </Col>
      </Row>
      <Row className="home-cta">
        <h3>Start your culinary adventure today and let <strong>RecipeBuddy</strong> be your trusted companion in the kitchen.</h3>
        <button id="get-started-btn">
            <Link to="/search">Explore Recipes</Link>
          </button>
      </Row>
    </Col>
  );
};

export default Main;