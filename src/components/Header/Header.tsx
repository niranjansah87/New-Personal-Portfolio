import { Container } from './styles'
import { HashLink } from 'react-router-hash-link'
import { useState } from 'react'
// import ParticleAnimation from '../../assets/ParticleAnimation'
import CV from '../../assets/Niranjan_Resume.pdf'

export function Header() {
  const [isActive, setActive] = useState(false)

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <HashLink smooth to="#home" className="logo">
        <span>{"</>Niranjan "}</span>
        <span>{" Sah"}</span>
      </HashLink>

      {/* <input
        onChange={toggleTheme}
        className="container_toggle"
        type="checkbox"
        id="switch"
        name="mode"
      />
      <label htmlFor="switch">Toggle</label> */}

      <nav className={isActive ? 'active' : ''}>
        <HashLink smooth to="#home" onClick={closeMenu}>
          Home
        </HashLink>
        <HashLink smooth to="#about" onClick={closeMenu}>
          About me
        </HashLink>
        <HashLink smooth to="#project" onClick={closeMenu}>
          Project
        </HashLink>
        <HashLink smooth to="#contact" onClick={closeMenu}>
          Contact
        </HashLink>
        <a href={CV} download className="button">
          CV
        </a>
      </nav>
      <canvas id="canvas"></canvas>
      <div
        aria-expanded={isActive ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
        className={isActive ? 'menu active' : 'menu'}
        onClick={() => {
          setActive(!isActive)
        }}
      ></div>
    </Container>
  )
}
