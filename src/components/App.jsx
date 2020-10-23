import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Content from './Content/Content'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'

const App = () => (
  <BrowserRouter>
    <AppContainer>
      <Header />
      <Navigation />
      <Content />
    </AppContainer>
  </BrowserRouter>
)

const AppContainer = styled.div`
  color: #e7e6dd;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App
