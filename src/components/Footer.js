import { Container, Row, Col } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import colorSharp from "../assets/img/color-sharp2.png";


export const Footer = () => {

  return (
    <section className="footer" id="footer">
      
    <footer >
        <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            Created by Ritumbhara Gautam
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ritumbhara-gautam-14a069228/"
                target="_blank" 
                rel="noopener noreferrer"
              ><img src={navIcon1} alt="LinkedIn icon" /></a>
              <a  href="https://github.com/RitumbharaGautam"
                target="_blank" 
                rel="noopener noreferrer"><img src={navIcon2} alt="Github icon"/></a>
            </div>
            <p>CopyRight 2025. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
     <img className='background-image-left' src={colorSharp} alt="background"/>
    </section>
  )
}