import styled from "styled-components";


export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: clip;
  overflow-y: visible;
  #tsparticles{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  @media (max-width: 740px){
    padding: 0 1.6rem;
  }

  @media(max-width: 360px){
    padding: 0 1.2rem;
  }
`