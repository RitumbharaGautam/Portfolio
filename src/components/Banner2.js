import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../assets/img/aboutImage.png";

function Banner2() {
  return (
    <section className="skill" id="about2">
      <Container>
        <Container>
          <Row className="align-items-center">
            <h2>Let me Introduce myself.</h2>
            <Col xs={12} md={6} xl={5} className="myAvtar">
              <img src={aboutImage} className="img-fluid" alt="avatar" />
            </Col>
            <Col xs={12} md={6} xl={7}>
              <div className="skill-bx"><p>I was introduced to programming in 11th standard, and I immediately found it interesting and fascinating. That spark led me to choose computer science as my career.
                Over the years, I’ve learned various languages like Java, JavaScript, React, C, and Python, which helped me build a strong foundation in my development journey.                         
                My interests are focused on creating innovative web technologies and products. To expand my skill set, I’m currently learning Node.js and Express.js, always aiming to improve my capabilities as a developer.</p></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Banner2;
