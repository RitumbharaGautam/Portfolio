import { Col, Container, Row } from "react-bootstrap"
import heroImage from "../assets/img/heroImage.png"
import 'animate.css'
import TrackVisibility from "react-on-screen";
export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi, I'm Ritumbhara `}</h1>
                  <p>I am a developer with a strong focus on front-end development. I am currently exploring Node.js to expand my skills. I enjoy building user-friendly and visually appealing web applications, combining creativity with technology.</p>
                </div>)}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={heroImage} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;