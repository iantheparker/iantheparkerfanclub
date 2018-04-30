import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import colors from '../utils/colors'
import backImg from './back.svg'

const NavBarStyles = styled.nav`
  width: 100%;
  display: flex;
  .left,
  .right {
    flex: 1;
  }
  background: ${props => (props.playful ? colors.pink : colors.blue)};

  a {
    color: black;
    padding: 1rem 0 0 0;
    display: inline-block;
    img {
      height: 4rem;
    }
  }
`
class NavBar extends React.Component {
  render () {
    return (
      <NavBarStyles playful={this.props.playful}>
        <div className="left">
          <Link to="/">
            <img src={backImg} alt="" />
          </Link>
        </div>
        <div className="center">
          <h2>{this.props.title}</h2>
        </div>
        <div className="right" />
      </NavBarStyles>
    )
  }
}
export default NavBar
