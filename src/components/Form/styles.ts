import styled from "styled-components";

export const Container = styled.div`
  background: rgba(25, 25, 25, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(35, 206, 107, 0.2);
  border-radius: 2rem;
  padding: 4rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    font-size: 2.8rem;
    font-weight: 600;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    input,
    textarea {
      width: 100%;
      padding: 1.5rem 2rem;
      border-radius: 1.2rem;
      outline: none;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(35, 206, 107, 0.3);
      color: #fff;
      font-size: 1.6rem;
      transition: all 0.3s ease;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }

      &:focus {
        border-color: var(--green);
        background: rgba(35, 206, 107, 0.05);
        box-shadow: 0 0 20px rgba(35, 206, 107, 0.1);
      }
    }

    textarea {
      height: 18rem;
      resize: vertical;
    }

    button {
      padding: 1.5rem 4rem;
      background: var(--green);
      color: var(--black);
      border: none;
      border-radius: 50px;
      font-weight: 700;
      font-size: 1.6rem;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 0 20px rgba(35, 206, 107, 0.2);
      align-self: center;

      &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 5px 25px var(--green);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }

  @media (max-width: 740px) {
    padding: 2rem;
    h2 {
      font-size: 2.2rem;
    }
    form button {
      width: 100%;
    }
  }
`;

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;

  button {
    border-radius: 0.6rem;
    padding: 1rem;
    margin-top: 0.8rem;
    text-transform: uppercase;
    text-align: center;
    color: #fbfbfb;
  }
`;
