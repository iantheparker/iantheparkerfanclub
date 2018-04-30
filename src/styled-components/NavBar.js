import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import colors from '../utils/colors'
import backImg from './back.svg'

const NavBarStyles = styled.nav`
  width: 100%;
  background: ${props => (props.playful ? colors.pink : colors.blue)};

  a {
    color: black;
    padding: 1rem;
    display: inline-block;
    img {
      height: 7rem;
    }
  }
`
class NavBar extends React.Component {
  render () {
    return (
      <NavBarStyles playful={this.props.playful}>
        <Link to="/">
          <img src={backImg} alt="" />
        </Link>
        {this.props.title}
      </NavBarStyles>
    )
  }
}
export default NavBar
