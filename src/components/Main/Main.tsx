import Particles from "react-tsparticles"
import { Container } from "./styles"
import { Hero } from "../Hero/Hero"
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { RecentWork } from "../Recent Work/Recent Work";



import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import pythonIcon from "../../assets/Python.png";
import djangoIcon from "../../assets/django.png";
import nextjsIcon from "../../assets/nextjs.png";
import dockerIcon from "../../assets/docker.png";
import awsIcon from "../../assets/aws.png";
import mongodbIcon from "../../assets/mongodb.png";
import mysqlIcon from "../../assets/mysql-icon.svg";
import postgresqlIcon from "../../assets/PostgreSQL.png";
import redisIcon from "../../assets/redis.png";
import githubIcon from "../../assets/github.svg";
import azureIcon from "../../assets/azure.png";
import herokuIcon from "../../assets/heroku.png";
import netlifyIcon from "../../assets/netlify.png";
import fastapiIcon from "../../assets/fastapi.svg";
import flutterIcon from "../../assets/flutter.png";
import tailwindIcon from "../../assets/tailwand.png";
import materialuiIcon from "../../assets/materialui.png";
import vscodeIcon from "../../assets/vscode-icon.svg";
import cIcon from "../../assets/c.png";
import cppIcon from "../../assets/c++.png";
import javaIcon from "../../assets/java.svg";





export function Main() {
  return (

    <Container>
      <Particles
        id="tech-tsparticles"
        options={{
          "fullScreen": {
            "enable": true,
            "zIndex": 0
          },
          "detectRetina": true,
          "fpsLimit": 60,
          "interactivity": {
            "events": {
              "onClick": {
                "enable": true,
                "mode": "push"
              },
              "onHover": {
                "enable": true,
                "mode": "bubble",
                "parallax": {
                  "enable": true,
                  "force": 60,
                  "smooth": 10
                }
              },
              "resize": true
            },
            "modes": {
              "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 0.8,
                "size": 40,
              },
              "push": {
                "quantity": 2
              }
            }
          },
          "particles": {
            "color": {
              "value": "#ffffff"
            },
            "move": {
              "enable": true,
              "outMode": "out",
              "random": true,
              "speed": 1,
              "straight": false
            },
            "number": {
              "density": {
                "enable": true,
                "area": 800
              },
              "value": 35,
            },
            "opacity": {
              "animation": {
                "enable": true,
                "minimumValue": 0.2,
                "speed": 1,
                "sync": false
              },
              "random": true,
              "value": 0.7
            },
            "shape": {
              "image": [
                { "src": boostrapIcon, "width": 20, "height": 20 },
                { "src": cssIcon, "width": 20, "height": 20 },
                { "src": htmlIcon, "width": 20, "height": 20 },
                { "src": jsIcon, "width": 20, "height": 20 },
                { "src": nodeIcon, "width": 20, "height": 20 },
                { "src": reactIcon, "width": 20, "height": 20 },
                { "src": sassIcon, "width": 20, "height": 20 },
                { "src": typescriptIcon, "width": 20, "height": 20 },
                { "src": pythonIcon, "width": 20, "height": 20 },
                { "src": djangoIcon, "width": 20, "height": 20 },
                { "src": nextjsIcon, "width": 20, "height": 20 },
                { "src": dockerIcon, "width": 20, "height": 20 },
                { "src": awsIcon, "width": 20, "height": 20 },
                { "src": mongodbIcon, "width": 20, "height": 20 },
                { "src": mysqlIcon, "width": 20, "height": 20 },
                { "src": postgresqlIcon, "width": 20, "height": 20 },
                { "src": redisIcon, "width": 20, "height": 20 },
                { "src": githubIcon, "width": 20, "height": 20 },
                { "src": azureIcon, "width": 20, "height": 20 },
                { "src": herokuIcon, "width": 20, "height": 20 },
                { "src": netlifyIcon, "width": 20, "height": 20 },
                { "src": fastapiIcon, "width": 20, "height": 20 },
                { "src": flutterIcon, "width": 20, "height": 20 },
                { "src": tailwindIcon, "width": 20, "height": 20 },
                { "src": materialuiIcon, "width": 20, "height": 20 },
                { "src": vscodeIcon, "width": 20, "height": 20 },
                { "src": cIcon, "width": 20, "height": 20 },
                { "src": cppIcon, "width": 20, "height": 20 },
                { "src": javaIcon, "width": 20, "height": 20 },
              ],
              "type": "image"
            },
            "size": {
              "value": 15
            }
          },
          "background": {
            "color": "transparent"
          }
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <RecentWork></RecentWork>
      <Contact></Contact>
    </Container>
  );
}