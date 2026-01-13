import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;

  header {
    text-align: center;
    h2 {
      text-align: center;
      font-size: 4rem;
    }
    p {
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin: 4rem 0;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 32rem;
      gap: 1.2rem;
      background: rgba(35, 206, 107, 0.05);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(35, 206, 107, 0.2);
      border-radius: 1.2rem;
      padding: 1.5rem 2rem;
      transition: all 0.4s ease;

      img {
        width: 2.8rem;
        filter: drop-shadow(0 0 5px rgba(35, 206, 107, 0.5));
      }
      a {
        color: #fff;
        font-weight: 500;
        font-size: 1.6rem;
        letter-spacing: 0.1rem;
      }

      &:hover {
        background: rgba(35, 206, 107, 0.15);
        border-color: var(--green);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(35, 206, 107, 0.1);

        a {
          color: var(--green);
        }
      }
    }
  }

  @media (max-width: 960px) {
    .contacts {
      flex-direction: column;
      div {
        width: 100%;
        max-width: 40rem;
      }
    }
  }
`;
/* old one - 2/1/2023 - 
@media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        flex-direction: column;
      }
    }

*/
