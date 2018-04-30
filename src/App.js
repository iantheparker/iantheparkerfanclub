import React from 'react'
import { Router } from 'react-static'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'

const AppStyles = styled.div`
  a {
    color: black;
  }
`

const App = () => (
  <Router>
    <AppStyles>
      <Routes />
    </AppStyles>
  </Router>
)

export default hot(module)(App)
