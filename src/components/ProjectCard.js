import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, desclg, demoUrl, projectHref }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="projCard">
      <div className="proj-imgbx">
        <img className="proj-imgbx-img" src={imgUrl} alt="Projects" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <div>
        <div className="projdesc">{desclg} <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
            </a></div>
        <span className="navbar-text project-btn">
          <button className="vvd">
            <a href={projectHref} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </button>
        </span>
      </div></div>
    </Col>
  );
};
