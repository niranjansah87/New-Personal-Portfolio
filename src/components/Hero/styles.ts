import styled from "styled-components";

export const Container = styled.section`
  padding-top: 12%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 3rem;
    }
    h1{
      font-size: 7rem;
      margin-bottom: -2rem;
    }

    h3{
      color: var(--green);
      margin: 3rem 0;
    }
    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 0rem;

    img, span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1rem 3rem;
  }

  .hero-image{
    img{
      max-width: 100%; /* Adjusted to be responsive */
      margin-top: -1rem;
      margin-right: 16rem;
    }
  }

  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    gap: 4rem; /* Adjusted gap for smaller screens */
    
    .hero-text{
      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: relative;
      margin-top: 0rem;
      margin-right: 0rem; /* Remove right margin on smaller screens */
    }
  }

  @media(max-width: 600px){
    margin-top: 25%; /* Adjusted margin-top for smaller screens */
  }
  
  @media(max-width: 480px){
    margin-top: 35%; /* Adjusted margin-top for even smaller screens */
    padding-top: 10%; /* Adjusted padding-top for better spacing */
    
    .hero-text{
      & > p{
        font-size: 2rem; /* Adjusted font size for smaller screens */
      }
    }
    
    .social-media{
      padding-top: 2rem; /* Adjusted padding-top for smaller screens */
    }
  }
`;
