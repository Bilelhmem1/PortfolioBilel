import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
        <h1 className="project-heading">
          <strong className="purple">Competences </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Outils </strong> que j'utilise
        </h1>
        <Toolstack />

        
      </Container>
    
  );
}

export default About;
