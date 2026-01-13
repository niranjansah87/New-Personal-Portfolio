import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills {
    margin-left: 0;
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2.4rem 2.4rem;
    justify-content: flex-start;
  }
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 3.4rem;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 0rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size: 3.6rem;
    margin-top: 1rem;
    text-align: center;
    color: var(--green);
    margin-left: 0;
  }

  .skills-title {
    margin-top: 3rem;
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    text-align: justify;
  }

  .about-image {
    text-align: center;
    img {
      margin-top: 2rem;
      width: 75%;
      filter: grayscale(0);
      transition: filter 0.5s;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  h4 {
    margin: 1rem 0 0 0;
    text-align: left;
  }

  @media (max-width: 1200px) {
    .hard-skills {
      gap: 2rem 2rem;
      justify-content: center;
    }
  }

  @media (max-width: 960px) {
    margin-top: 4rem;
    grid-template-columns: 1fr;
    text-align: center;

    h2 {
      margin-left: 0;
      text-align: center;
    }

    h4 {
      margin-left: 0;
      text-align: center;
    }

    .hard-skills {
      justify-content: center;
      margin-left: 0;
      gap: 1.6rem;
    }

    .about-image {
      display: flex;
      max-width: 100%;
      justify-content: center;
      img {
        margin-top: 2rem;
        width: 100%;
        max-width: 420px;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .hard-skills {
      gap: 1.2rem;
    }
    .hability img {
      width: 3.2rem;
    }
  }

  @media only screen and (max-width: 480px) {
    p {
      font-size: 1.6rem;
    }
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img {
        margin-top: 2rem;
        width: 100%;
      }
    }
  }
`;
