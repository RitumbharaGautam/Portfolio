import { Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import css from "../assets/img/css.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import html from "../assets/img/html.png";
import java from "../assets/img/java.png";
import javascript from "../assets/img/javascript.png";
import sql from "../assets/img/sql.png";
export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className='skills' id='skills'>
      <Container>
        <Row>
          <Col >
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>Technologies I Have Learned During My Web Development Journey</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                <img src={html} alt="html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                <img src={javascript} alt="javacsript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                <img src={java} alt="java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                <img src={react} alt="react" />
                  <h5>React</h5>
                </div>
                <div className="item">
                <img src={sql} alt="sql" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                <img src={node} alt="node.js" />
                  <h5>Node.js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' src={colorSharp} alt='background'/>
    </section>
  )
}

export default Skills;