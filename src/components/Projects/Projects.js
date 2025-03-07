import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="eCommerce"
              description="My eCommerce application is a full-stack MERN-based platform with separate admin and user portals. The admin portal allows product and order management, while users can browse, purchase, and track orders seamlessly. It features secure payments, category-based product listings, and a user-friendly interface for an enhanced shopping experience."
              ghLink="https://github.com/Bharatmish/E-Commerce-App_Client.git"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Doctor Appointment Booking"
              description="My doctor appointment booking application is a full-stack platform that enables patients to schedule appointments with doctors effortlessly. It includes features like doctor profile management, real-time availability tracking, and secure booking with reminders. The system ensures a seamless and efficient healthcare appointment experience for both patients and doctors."
              ghLink="https://github.com/Bharatmish/Doctor-Appointment-Booking.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Potato Disease Classification"
              description="My potato disease classification project leverages deep learning to identify and classify potato leaf diseases with high accuracy. Using a CNN model trained on an extensive dataset, it can detect healthy and diseased leaves, helping farmers take timely action. It also uses AI to provide precautionary measures and preventive actions to help mitigate the spread of diseases and improve crop yield."
              ghLink="https://github.com/Bharatmish/Potato-disease-classification.git"             
            />
          </Col>

        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition"
              description="My face detection model utilizes deep learning and computer vision techniques to accurately detect and recognize faces in images and videos. Built using OpenCV and a CNN-based architecture, it ensures real-time face identification with high precision. Additionally, it can be integrated into security systems, attendance tracking, and user authentication applications."
              ghLink="https://github.com/Bharatmish/Real-time-face-detection-using-OpenCV-and-Haar-Cascades.git"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
