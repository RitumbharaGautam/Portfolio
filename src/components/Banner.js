import { Col, Container, Row } from "react-bootstrap"
import heroImage from "../assets/img/heroImage.png"
import 'animate.css'
import Type from "./Type";
import Banner2 from "./Banner2";
export const Banner = () => {
  return (<>
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
           <span className="tagline"><Type/></span>
            <h1>{`Hi, I'm Ritumbhara `}</h1>
            <p>I am a developer with a strong focus on front-end development. I am currently exploring Node.js to expand my skills. I enjoy building user-friendly and visually appealing web applications, combining creativity with technology.</p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={heroImage} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
     <Banner2/>
     </>
  )
}

export default Banner;