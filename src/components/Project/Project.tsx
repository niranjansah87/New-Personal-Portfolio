import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import Tilt from "react-parallax-tilt";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="http://sunlighttailors.com/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>
                  Sunlight Tailors</h3>
                <p>
                  Sunlight Tailors is a full-stack web application built to help a traditional tailoring business move online. The platform allows customers to explore services and place orders, while an admin dashboard enables efficient management of orders, products, and customers.
                  Built using React, Node.js, Express.js, and MongoDB, the system focuses on usability, scalability, and business efficiency.

                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>Nodejs</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://klsamarthya.pythonanywhere.com/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>
                  KL Samarthya</h3>
                <p>
                  KL Samarthya is the official department fest website developed for KL University for two consecutive years. The platform supports event listings, user authentication, and online registrations while handling high traffic during peak periods.
                  Built using Python, Django, and SQLite, it showcases reliability, scalability, and real-world deployment experience.


                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Django</li>

                  <li>Html</li>
                  <li>css</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://forensixplore.vercel.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Forensixplore</h3>
                <p>
                  ForensiXplore is a full-stack web platform developed for a university cybersecurity club to manage member engagement and activities digitally. The application provides structured content access and user interaction through a centralized system.
                  Built using the MERN stack, this project demonstrates practical experience in building secure, user-focused web applications.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                  <li>Nodejs</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://aonetwocafe.netlify.app/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>A One Cafe</h3>
                <p>
                  A One Café is a web-based venue booking platform developed to digitize event and table reservations for a café. The application allows users to check availability and place bookings online, reducing manual coordination and improving operational efficiency.

                  Built using React (Vite), Node.js, Express.js, and MySQL, the platform focuses on simplicity, responsiveness, and reliable booking management.



                </p>
              </div>
              <footer>
                <ul className="tech-list">

                  <li>React</li>
                  <li>Express</li>
                  <li>MY SQL</li>
                  <li>NODE JS</li>
                  <li>Sequelize ORM</li>

                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://github.com/niranjansah87/Secure-Enviornment-Manager" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Secure Enviornment Manager</h3>
                <p>
                  Secure Environment Manager is a web-based platform for securely managing application environment variables with encryption, versioning, and auditability. It centralizes configuration management while ensuring operational reliability and traceability.

                  Built as an advanced alternative to traditional dotenv solutions, the system includes encryption at rest, version control, environment comparison, audit logging, automated backups, and a CLI tool, demonstrating the design of production-ready, security-focused developer tools.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>FastAPI</li>
                  <li>Python</li>

                  <li>Html</li>
                  <li>css</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://autoz720.pythonanywhere.com/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>AutoZ</h3>
                <p>
                  AutoZ is a web-based rental management system designed to simplify vehicle rental operations. The platform enables users to browse available vehicles and supports basic rental workflow management through a clean interface.
                  Developed using Django, HTML, and CSS, this project highlights backend-driven application development and structured data handling.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Django</li>

                  <li>Html</li>
                  <li>css</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://niranjansah87.com.np" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Personal Portfolio</h3>
                <p>
                  This portfolio website is a personal platform designed to showcase my projects, technical skills, and professional experience as a full-stack software developer. It presents selected real-world projects with a focus on clean design, clarity, and usability.

                  The website is built with modern frontend technologies and optimized for performance and responsiveness, serving as a central place for recruiters and collaborators to explore my work and get in touch.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>React</li>
                  <li>ThreeJS</li>
                  <li>Html</li>
                  <li>css</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>


        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://klsamarthya24.pythonanywhere.com/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>KL Samarthya 2024</h3>
                <p>

                  The Kl Samarthya Department Fest 2024 Website, powered by Django, offers a one-stop destination for everything related to the annual fest. From event details and registration for competitions to dynamic schedules and engaging galleries, the website ensures a seamless fest experience. Users can stay updated with news, participate through forums, and easily reach out to organizers. With its user-friendly interface and robust features, the website serves as the central hub for both organizers and attendees, enhancing the overall fest experience.
                </p>
              </div>
              <footer>
                <ul className="tech-list">
                  <li>Django</li>
                  <li>Python</li>
                  <li>Html</li>
                  <li>css</li>
                  <li>JavaScript</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://niranjansah87.github.io/ICETCAI-2024/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>
                  ICETCAI</h3>
                <p>
                  Website of International Conference on Emerging Trends in Cyber Security and Artificial Intelligence (ICETCAI-2024) 4-6 , April 2024 | Vaddeswaram, Guntur, India organized by Department of Computer Science and Information Technology Koneru Lakshmaiah Education Foundation (Deemed to be University) Vaddeswaram, Guntur, India
                </p>
              </div>
              <footer>
                <ul className="tech-list">

                  <li>Html</li>
                  <li>css</li>
                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>



        <ScrollAnimation animateIn="flipInX">
          <Tilt>
            <div className="project">
              <header>
                <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                <div className="project-links">
                  <a href="https://www.hydrogrid.com.np/" target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="Visit site" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>
                  Hydrogrid Engineering Pvt. Ltd.</h3>
                <p>
                  Developed a responsive business website for Hydrogrid Engineering Pvt. Ltd., a firm providing hydropower plant design, installation, and maintenance services in Nepal. The website highlights company services, expertise, and project information, designed to improve online presence and client engagement.

                  Built with modern web technologies, this project focuses on usability, clear content delivery, and cross-device responsiveness.
                </p>


              </div>
              <footer>
                <ul className="tech-list">

                  <li>React</li>
                  <li>css</li>


                </ul>
              </footer>
            </div>
          </Tilt>
        </ScrollAnimation>

      </div>
    </Container>
  );
}