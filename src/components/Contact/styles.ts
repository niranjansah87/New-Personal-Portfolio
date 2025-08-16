import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;

  header{
    text-align: center;
    h2{
      text-align: center;
      font-size: 4rem;
    }
    p{
      color: var(--green);
      font-weight: 500;
    }
  }

  .contacts{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    place-items: center;
    margin-top: 1.5rem;
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38%;
      max-width: 24rem;
      gap: 0.8rem;
      background-color: var(--green);
      border-radius: 0.8rem;
      padding: 0.8rem 1.2rem;
      transition: background-color 0.25s;
      img{
        width: 2.4rem;
      }
      a{
        color: var(--black);
        font-weight: 600;
        font-size: 1.4rem;
        line-height: 1.2;
      }
      &:hover{
        background-color: var(--pink);
        a{
          color: #FFF;
        }
      }
    }
  }


  @media(max-width: 960px){
    .contacts{
      flex-direction: column;
      div{
        width: 100%;
        max-width: 24rem;
        padding: 0.9rem 1.2rem;
        img{ width: 2.6rem; }
        a{ font-size: 1.3rem; }
        
      }
    }
  }
  
`
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
