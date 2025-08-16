import styled from "styled-components";


export const Container = styled.footer`
  background-color: #2b2b2b;
  padding: 1.2rem 8rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid rgba(255,255,255,0.08);
  flex-wrap: nowrap;


  .logo{ font-size: 2.4rem; }

  p{
    letter-spacing: 0.12rem;
    line-height: 1.3;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img{ width: 2.0rem; animation: spinning 5s infinite linear; }
  }
  .social-media{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;

    img,span{ font-size: 2.2rem; width: 2.2rem; }
  }


  @keyframes spinning {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }

  @media(max-width: 800px){
    padding: 1rem 2rem;
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
    .logo{ font-size: 2.2rem; }
    .social-media{ gap: 0.8rem; }
  }
  @media(max-width: 600px){
    padding: 1rem 1.2rem;
    .social-media img{ width: 2.0rem; }
    p{ font-size: 1.3rem; }
  }
`