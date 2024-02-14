import { Container } from "./styles";
import Niranjan from "../../assets/Niranjan.png";
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
import materialui from "../../assets/materialui.png";
import mongodb from "../../assets/mongodb.png";
import mysql from "../../assets/mysql.png";
import azure from "../../assets/azure.png";
import netlify from "../../assets/netlify.png";
import heroku from "../../assets/heroku.png";
import aws from "../../assets/aws.png";
import gitpages from "../../assets/githubpages.png";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import expressjs from "../../assets/expressjs.png";
import github from "../../assets/github.svg";
import canva from "../../assets/canva.png";
import ScrollAnimation from "react-animate-on-scroll";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi there! I'm Niranjan, I am a passionate and dedicated computer science and information technology professional with expertise in C, C++, Java, Python, and Full Stack Development. With an interest in Cyber Security and Web Development, I am committed to staying up-to-date with the latest industry trends and technologies. Let's connect and explore how I can help drive success for your organization
          </p>
        </ScrollAnimation>
        
        

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h2>My Main Skills:</h2>
        </ScrollAnimation>
        <div>
        <h4>Programming Language</h4>
        </div>
        <div className="hard-skills">
          
          <br />
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={CIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cpp} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={java} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={pythonIcon} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          </div>
          <div>


        <h4>Web Development Language</h4>
        </div>
          <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={expressjs} alt="Express JS" />
            </ScrollAnimation>
          </div>

          </div>
          <div>
        <h4>Frameworks and libraries</h4>
        </div>
          <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
         
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={django} alt="django" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={tailwand} alt="tailwand" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={materialui} alt="Material UI" />
            </ScrollAnimation>
          </div>

          </div>
          <div>
        <h4> Databases and cloud hosting</h4>
        </div>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mongodb} alt="Mongodb" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={mysql} alt="MySQL" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={aws} alt="AWS" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={azure} alt="Azure" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={netlify} alt="netlify" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={heroku} alt="Heroku" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={gitpages} alt="Git Pages" />
            </ScrollAnimation>
          </div>
          </div>
          <div>
        <h4> Additional Skill</h4>
        </div>
        <div className="hard-skills">
        <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={github} alt="Github" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={canva} alt="Canva" />
            </ScrollAnimation>
         

        </div>
         
    
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={Niranjan} alt="Niranjan sah" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
