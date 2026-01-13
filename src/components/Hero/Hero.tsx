import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"

import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'

import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'
import kutumbHead from '../../assets/Kutumb_Head-removebg-preview.png'
import Tilt from "react-parallax-tilt";

// Hero component
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <Tilt>
            <p>Hello <img src={Hello} alt="Hello" width="20px" />, I'm</p>
          </Tilt>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <Tilt>
            <h1>
              <span className="typing">Niranjan sah</span>
            </h1>
          </Tilt>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <Tilt>
            <h3>Aspiring Software Developer</h3>
          </Tilt>
        </ScrollAnimation>


        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/niranjan-sah/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/niranjansah87/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href="https://wa.me/9779826753490"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a
              href="https://t.me/Niranjan8790"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="telegram" />
            </a>



            <a
              href="https://www.instagram.com/_niranjan_8790/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>



          </div>
        </ScrollAnimation>

      </div>

      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <Tilt>
            <img src={kutumbHead} alt="Niranjan Sah" />
          </Tilt>
        </ScrollAnimation>
      </div>

    </Container>

  )
}
