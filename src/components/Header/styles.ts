import styled from "styled-components";


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 4rem;
  
  background-color: #21212150;
  
  backdrop-filter: blur(6px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  nav{
    display: flex;
    align-items: center;
    gap: 1.8rem;
    a{
      color: #FFFF;
      padding: 0.6rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: filter 0.25s;

      &.button{
        padding: 0.6rem 5rem;
      }

      &:hover{
        filter: brightness(0.6);
      }
    }

  }

  .logo{ font-size: 2.2rem; }

  .menu-container{
    cursor: pointer;
    padding: 0.6rem 0;
  }

  .menu{
    width: 2rem;
    height: 0.2rem;
    background: #FFFF;
    position: relative;
    cursor: pointer;
    display: none;

    &:before{
      bottom: 0.5rem;
    }
    &:after{
      top: 0.5rem;
    }


    &.active:before{
      bottom: 0;
      transform: rotate(45deg);
    }

    &.active:after{
      top: 0;
      transform: rotate(135deg);
    }

    &.active{
      background-color: rgba(0, 0, 0, 0);
    }

  }

  .menu:before, .menu:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background: #FFFF;
    cursor: pointer;
    transition: .6s;
  }


  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 44px;
    height: 24px;
    background: var(--green);
    display: block;
    justify-content: center;
    align-items: center;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
    margin-left: 1rem;
  }

  @media only screen and (max-width: 800px) {
    label {
    position: relative;
   }
  }

  label:after {
    content: '';
    background: #FFF;
    width: 18px;
    height: 18px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
   transition: cubic-bezier(0.68, -0.55, 0.27, 01.55) 320ms;
  }

  input:checked + label {
    background: var(--pink);
  }
  canvas {
    position: fixed;
    top: 0;
    left: inherit;
    right: inherit;
    bottom: 0;
    z-index: -1;
  }

  input:checked + label:after {
    left: calc(100% - 3px);
    -webkit-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }

  @media (max-width: 960px){
    padding: 1.4rem 2rem;
    .logo{ font-size: 2rem; }

    .menu{
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: var(--blue);
      top: 0;
      left: 0;
      transition: opacity 0.25s;
      background-color: var(--green);

      a.button{
        background-color: var(--pink);
      }

      &.active{
        opacity: 1;
        visibility: visible;
      }
    }
  }

  @media (max-width: 600px){
    .logo{ font-size: 1.8rem; }
  }
  
`