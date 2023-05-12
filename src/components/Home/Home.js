import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Medani.jpeg";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Medani Tripathi</strong>
                <h4>( Front End Developer )</h4>
              </h1>
                <br/>
              <p className="heading-description blockquote">
              My name's Medani Tripathi. I am from the beetle nut toy city of India "Rewa". <br/>
              I am currently pursuing a B.Tech in Computer Science from Jaypee University of Engineering and Technology, Guna.
              Additionally, I am exploring Frontend Web Development and consider myself a quick learner and problem solver.
              I am eager to seize the opportunity to intern at your company .
             </p>

            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
                <br/>
                <br/>
                <strong>Contact : +91 7828735813</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
