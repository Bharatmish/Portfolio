import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bharat Kumar Mishra </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I am currently a third-year BTech student in Computer Science and Engineering (CSE) Core at SRM Institute of Science and Technology.
            <br />
            I have a keen interest in full-stack web development, machine learning, AI and enjoy working on innovative projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bharat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
