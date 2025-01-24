// import { useState, useEffect } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from "react-router-dom";


// function BasicExample() {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, seScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 20) {
//         seScrolled(true);
//       } else {
//         seScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);
//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

 
//   return (
//     <>
//     <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
//       <Container>
//         <Navbar.Brand href="/">
//         <span>RG</span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className="navbar-toggler-icon"></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link
//               as={Link} to="/"
//               className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
//               onClick={() => onUpdateActiveLink("home")} >
//               Home
//             </Nav.Link>
//             <Nav.Link
//             as={Link}
//             to="/skills"
//             className={
//                 activeLink === "skills" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//             to="/project"
//               className={
//                 activeLink === "project" ? "active navbar-link" : "navbar-link"
//               }
//               onClick={() => onUpdateActiveLink("project")}
//             >
//               Projects
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//             to="/resume"
//               className={
//                 activeLink === "resume" ? "active navbar-link" : "navbar-link"}
//               onClick={() => onUpdateActiveLink("skills")}>
//               Resume
//             </Nav.Link>
//             <Nav.Link
//               as={Link}
//             to="/contact"
//               className="navbar-text">
//             <button>Let's Connect</button>
//             </Nav.Link>
//           </Nav>
//           {/* <span className="navbar-text">
//             <button className="vvd">
//               <a href="#connect">Let's Connect</a>
//             </button>
//           </span> */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar></>
//   );
// }

// export default BasicExample;
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";


function BasicExample() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <span className="img-fluid logo">RG</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
               Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/skills"
                onClick={() => updateExpanded(false)}
              >
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                 Resume
              </Nav.Link>
            </Nav.Item>

                
              <Nav.Link
                as={Link}
                to="/contact"
                className="navbar-text"
                onClick={() => updateExpanded(false)}
              >
                 <button>Let's Connect</button>
              </Nav.Link>
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;