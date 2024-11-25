import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           Mes travaux  <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="XO "
              description="Jeu XO avec Python : les entrées se font par les doigts via la caméra"
              ghLink="https://github.com/Bilelhmem1/jeux-xo"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Valorant-tracker"
              description="Site statique qui décrit le jeu Valorant et ses personnages avec des statistiques."
              ghLink="https://github.com/Bilelhmem1/valorant-tracker"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="API de gestion des tickets restaurant."
              description="Une API qui gère les fonctionnalités et la vente de tickets restaurant dans une société."
              ghLink="https://github.com/Bilelhmem1/backend_api_ticketrestau_nestjs"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
