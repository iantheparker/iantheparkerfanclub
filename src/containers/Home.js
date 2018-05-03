import React from 'react'
import { withSiteData, Link } from 'react-static'
import styled from 'styled-components'
import IntroTxt from '../styled-components/IntroTxt'
import colors from '../utils/colors'
import GetName from '../utils/GetName'
import { device } from '../utils/device'

const HomeLink = styled(Link)`
  width: 100%;
  height: 45vh;
  overflow: hidden;
  text-decoration: none;
  &:visited {
    color: black;
  }
  transition: 0.3s ease;
  @media ${device.laptop} {
    width: 50%;
  }
  div {
    width: 100%;
    height: 100%;
    background-color: ${props => (props.playful ? colors.pink : colors.blue)};
    &:hover {
      box-shadow: 0px 0px 0px 0.4rem black inset;
    }
    p {
      display: block;
      font-weight: bold;
      text-align: center;
      position: relative;
      top: 50%;
      -ms-transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      padding: 2.5rem;
      @media ${device.laptop} {
        font-size: 1.5rem;
        padding: 3rem;
      }
    }
  }
`

function Bucket (props) {
  return (
    <HomeLink to={props.to} playful={props.playful}>
      <div>
        <p>{props.title}</p>
      </div>
    </HomeLink>
  )
}

export default withSiteData(() => (
  <div>
    <IntroTxt big>
      <p>
        Hello <GetName />, <br />
        Welcome to the Ian Parker Fan Club. Before you become a member, you should probably check
        out some of my stuff. My stuff is split into two buckets:{' '}
        <span className="problem-solving">user-centered problem-solving</span> and{' '}
        <span className="playful">playful provocations</span>.
      </p>
    </IntroTxt>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      <Bucket to="/thunderclap" title="Thunderclap Amps" />
      <Bucket playful="true" to="/tumbleweed" title="Tumbleweed" />
      <Bucket playful="true" to="/lisztomania" title="Lisztomania" />
      <Bucket to="/knewton" title="Knewton GMAT" />
    </div>
  </div>
))
