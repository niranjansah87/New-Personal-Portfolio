import { Container } from "./styles";
import Niranjan from "../../assets/Niranjan ..png";
import CIcon from "../../assets/c.png";
import htmlIcon from "../../assets/html-icon.svg";
import cpp from "../../assets/c++.png";
import java from "../../assets/java.svg";
import cssIcon from "../../assets/css-icon.svg";
import pythonIcon from "../../assets/Python.png";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import django from "../../assets/django.png";
import tailwand from "../../assets/tailwand.png";
// import materialui from "../../assets/materialui.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
// import azure from "../../assets/azure.png";
// import netlify from "../../assets/netlify.png";
// import heroku from "../../assets/heroku.png";
import aws from "../../assets/aws.png";
// import gitpages from "../../assets/githubpages.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import expressjs from "../../assets/expressjs.png";
import github from "../../assets/github.svg";
import canva from "../../assets/canva.png";
import jira from "../../assets/jira.png";
import next from "../../assets/nextjs.png";
import docker from "../../assets/docker.png";
import ScrollAnimation from "react-animate-on-scroll";
// import flutter from "../../assets/flutter.png";
import fastapi from "../../assets/fastapi.svg";
import redis from "../../assets/redis.png";
import postgresql from "../../assets/PostgreSQL.png";
import githubaction from "../../assets/github_actions.png";
import cicd from "../../assets/cicd.png";
import Tilt from "react-parallax-tilt";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            I’m a <strong>Full Stack Software Developer</strong> with hands-on experience building and delivering
            <strong>production-ready web and AI platforms</strong> across frontend, backend, cloud, and DevOps environments.
            I specialize in designing scalable systems using
            <strong>React.js, Next.js, Node.js, Express.js, FastAPI, Django, PostgreSQL, Redis, Docker, and cloud services</strong>,
            with a strong focus on performance, reliability, and clean architecture.
            <br /><br />
            My work goes beyond feature development — I’ve been involved in
            <strong>system design, API architecture, database modeling, CI/CD pipelines, containerized deployments, and cloud-based hosting</strong>,
            often taking ownership from initial idea to production deployment. I enjoy solving real-world problems and building systems that are
            not only functional, but <strong>maintainable and scalable</strong> over time.
            <br /><br />
            I thrive in fast-paced environments where learning and responsibility go hand in hand. Outside of active development, I continuously
            explore new technologies, improve my engineering practices, and stay aligned with modern software development trends.
            I am <strong>open to relocation</strong> and motivated to work with <strong>international teams and global products</strong>,
            where I can contribute meaningfully while growing as a software engineer.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h2 className="skills-title">My Main Skills:</h2>
        </ScrollAnimation>

        <div>
          <h4>Programming Language</h4>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={CIcon} alt="C" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={cpp} alt="C++" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={java} alt="Java" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={pythonIcon} alt="Python" />
              </Tilt>
            </ScrollAnimation>
          </div>
        </div>

        <div>
          <h4>Web Development Language</h4>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={htmlIcon} alt="Html" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={cssIcon} alt="Css" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={jsIcon} alt="JavaScript" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={typescriptIcon} alt="Typescript" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={nodeIcon} alt="Node" />
              </Tilt>
            </ScrollAnimation>
          </div>
        </div>

        <div>
          <h4>Frameworks and libraries</h4>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={reactIcon} alt="React" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={expressjs} alt="Express JS" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={next} alt="Next JS" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={fastapi} alt="FastAPI" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={django} alt="django" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={boostrapIcon} alt="bootstrap" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={tailwand} alt="tailwand" />
              </Tilt>
            </ScrollAnimation>
          </div>
        </div>

        <div>
          <h4> Databases and Cloud</h4>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={mongodb} alt="Mongodb" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={mysql} alt="MySQL" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={aws} alt="AWS" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={redis} alt="Redis" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={postgresql} alt="PostgreSQL" />
              </Tilt>
            </ScrollAnimation>
          </div>
        </div>

        <div>
          <h4> Additional Skill</h4>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={github} alt="Github" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={canva} alt="Canva" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={jira} alt="Jira" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={docker} alt="docker" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={githubaction} alt="githubaction" />
              </Tilt>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <Tilt glareEnable={true} glareMaxOpacity={0.45} glareColor="#ebebeb" glarePosition="all">
                <img src={cicd} alt="cicd" />
              </Tilt>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <Tilt>
            <img src={Niranjan} alt="Niranjan sah" />
          </Tilt>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
