import React from 'react'
import { Router } from 'react-static'
import styled from 'styled-components'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import ReactGA from 'react-ga'
import Cookie from 'js-cookie'
import './App.css'

const AppStyles = styled.div`
  a {
    color: black;
  }
`

class App extends React.Component {
  componentDidMount () {
    ReactGA.initialize('UA-118598071-1', {
      gaOptions: {
        greetings: Cookie.get('greetings'),
      },
    })
    ReactGA.pageview(window.location.pathname + window.location.search)
  }
  render () {
    return (
      <Router>
        <AppStyles>
          <Routes />
        </AppStyles>
      </Router>
    )
  }
}

export default hot(module)(App)
