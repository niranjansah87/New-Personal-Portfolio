import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { useEffect } from 'react'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { GlobalStyle } from './styles/global'
// import {Skills} from './components/Skills/index'

import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>

      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
