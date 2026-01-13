import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    color: var(--green);
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    gap: 2rem;
    padding: 1rem;
    overflow: visible;

    & > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      & > div {
        height: 100%;
        display: flex;
        flex-direction: column;
      }
    }

    .project {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 3rem 2.5rem;
      background: rgba(25, 25, 25, 0.4);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(35, 206, 107, 0.2);
      border-radius: 2rem;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      color: #fff;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          rgba(35, 206, 107, 0.05) 50%,
          transparent 50%
        );
        background-size: 100% 4px;
        pointer-events: none;
        opacity: 0.3;
      }

      &:hover {
        transform: translateY(-10px);
        background: rgba(25, 25, 25, 0.6);
        border-color: var(--green);
        box-shadow: 0 10px 40px rgba(35, 206, 107, 0.2);

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(35, 206, 107, 0.1),
            transparent
          );
          transform: skewX(-25deg);
          transition: 0.75s;
          left: 125%;
        }
      }

      transform-style: preserve-3d;

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--green);
        margin-bottom: 2.5rem;
        transform: translateZ(30px);

        svg {
          filter: drop-shadow(0 0 5px rgba(35, 206, 107, 0.5));
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        a > img {
          width: 3.5rem;
          filter: drop-shadow(0 0 5px rgba(35, 206, 107, 0.3));
          transition: all 0.3s ease;
          &:hover {
            transform: scale(1.2) rotate(10deg);
            filter: drop-shadow(0 0 10px var(--green));
          }
        }
      }

      h3 {
        font-size: 2.6rem;
        margin-bottom: 1.5rem;
        transform: translateZ(50px);
        color: var(--green);
        font-weight: 600;
        text-shadow: 0 0 10px rgba(35, 206, 107, 0.2);
      }

      p {
        letter-spacing: 0.05rem;
        line-height: 1.7;
        margin-bottom: 2.5rem;
        transform: translateZ(30px);
        flex-grow: 1;
        opacity: 0.85;
        font-size: 1.5rem;

        a {
          color: var(--green);
          font-weight: 500;
          &:hover {
            text-decoration: underline;
          }
        }
      }

      footer {
        margin-top: auto;
        transform: translateZ(20px);
        background: rgba(35, 206, 107, 0.05);
        padding: 1.5rem;
        border-radius: 1rem;

        .tech-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.2rem;
          font-size: 1.4rem;
          color: var(--green);
          font-weight: 600;
          list-style: none;

          li {
            padding: 0.2rem 0.8rem;
            background: rgba(35, 206, 107, 0.1);
            border-radius: 4px;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
    }
  }
`;
