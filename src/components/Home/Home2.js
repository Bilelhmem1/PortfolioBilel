import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Profil </span> 
            </h1>
            <p className="home-about-body">
        

Je suis étudiant en 3ème année d'Ingénierie des Systèmes Informatiques (Computer Engineering).<br />
              <br /> J'ai des compétences en développement frontend <i>
                <b className="purple"> HTML, CSS, JavaScript </b>
              </i> 
              et backend  
              <i>
                <b className="purple"> PHP, Nest.js, MySQL, MongoDB </b>
              </i>.
              <br />
              <br />
              Je maîtrise la programmation orientée objet ,
               
              <i>
                <b className="purple">en Python, Java et C{" "}</b>
                
                et utilise  <b className="purple">StarUML</b>pour la conception UML.
                 
                
              </i>
              <br />
              <br />
              J'ai également des connaissances en réseaux, notamment avec ."
              <i>
                <b className="purple">
                  {" "}
                  Cisco Packet Tracer
                </b>
              </i>
              
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Bilelhmem1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bilel-hmem-1b9690319"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
