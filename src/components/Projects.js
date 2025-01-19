import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils/misc/isVisible";

export const Projects = () => {
  const projects = [
    {
      title: "E-Petopia",
      description: "Ecommerce for pets",
      imgUrl: project1,
      projectHref: "https://github.com/RitumbharaGautam/E-petopia",
    },
    {
      title: "NewsMonkey",
      description: "News Reading app",
      imgUrl: project2,
      projectHref: "https://github.com/RitumbharaGautam/NewsMonkey",
    },
    {
      title: "Weather App",
      description: "Weather forecasting app",
      imgUrl: project3,
      projectHref: "https://github.com/RitumbharaGautam/BlogSphere",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""}>
                  <h2>My Recent Works</h2>
                  <p>Here are a few projects I've worked on recently. </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Content
              id="slideInUp"
              className={
                isVisible ? "animate__animated animate__slideInUp" : "" }>
              <Row>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Row>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};

export default Projects;
