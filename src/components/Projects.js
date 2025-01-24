import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils/misc/isVisible";
import {useState} from 'react';
export const Projects = () => {
  const projects = [
    {
      title: "E-Petopia",
      description: "Ecommerce for pets",
      imgUrl: project1,
      desclg:"E-Petopia is an online pet shop offering a variety of pet products and services. Developed as a college project, it features seamless navigation, secure transactions, and an engaging shopping experience for pet lovers.",
      demoUrl:"",
      projectHref: "https://github.com/RitumbharaGautam/E-petopia",
    },
    {
      title: "NewsMonkey",
      description: "News Reading app",
      imgUrl: project2,
      desclg:"NewsMonkey is a news reading app built with React and the News API, delivering real-time news updates. It provides users with easy access to the latest headlines and articles from various sources.",
      demoUrl:"",
      projectHref: "https://github.com/RitumbharaGautam/NewsMonkey",
    },
    {
      title: "BlogSphere",
      description: "Create and share blogs easily.",
      imgUrl: project3,
      desclg:"BlogSphere is a blog writing web application built with Node.js and Express.js. It allows users to create, manage, and share blog posts, providing a seamless and interactive platform for content creation.",
      demoUrl:"",
      projectHref: "https://github.com/RitumbharaGautam/BlogSphere",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Function to handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter projects based on title or description
    const filtered = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query)
    );
    setFilteredProjects(filtered);
  };

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
                   {/* Search Bar */}
                   
                    <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={handleSearch}
                    style={{
                      padding: "10px",
                      width: "100%",
                      border: "1px solid #ddd",
                      borderRadius: "2rem",
                      margin: "1rem auto",
                      display: "block", 
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
            <Tab.Content
              id="slideInUp"
              className={
                isVisible ? "animate__animated animate__slideInUp" : "" }>
              <Row>
                {/* {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })} */}
                 {filteredProjects.length > 0 ? (
                  filteredProjects.map((project, index) => {
                    return <ProjectCard key={index} {...project} />;
                  })
                ) : (
                  <p>No projects found of this name :(</p>
                  
                )}
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
