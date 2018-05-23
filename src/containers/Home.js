import React from 'react'
import { withSiteData, Link } from 'react-static'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub, faTumblr, faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faEnvelope, faListAlt } from '@fortawesome/fontawesome-free-regular'

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
  background-color: ${props => (props.playful ? colors.pink : colors.blue)};
  transition: 0.7s ease;

  @media ${device.laptop} {
    width: 50%;
    background-color: transparent;
    /*box-shadow: 0px 0px 0px 0.4rem black inset;*/
    &:hover {
      background-color: ${props => (props.playful ? colors.pink : colors.blue)};
      span {
        opacity: 0.35;
        transition: 0.7s ease;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
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
      span {
        opacity: 0;
        font-size: 1rem;
      }
      @media ${device.laptop} {
        font-size: 3rem;
        padding: 3rem;
        span {
          font-size: 1.2rem;
        }
      }
    }
  }
`

function Bucket (props) {
  return (
    <HomeLink to={props.to} playful={props.playful}>
      <div>
        <p>
          {props.title}
          <br /> <span>{props.date}</span>
        </p>
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
        <br />
        <a className="subtitle" href="https://iantheparker.tumblr.com">
          <FontAwesomeIcon icon={faTumblr} />
        </a>
        <a className="subtitle" href="https://github.com/iantheparker">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="subtitle" href="https://twitter.com/iantheparker">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="subtitle"
          href="https://www.dropbox.com/s/pc6kxi1l9r3ul9z/IanParkerCodes_2018.pdf?dl=0"
        >
          <FontAwesomeIcon icon={faListAlt} />
        </a>
        <a
          className="subtitle"
          href="mailto:iantheparker@gmail.com?Subject=I%20want%20to%20join%20your%20fan%20club"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
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
      <Bucket playful="true" to="/whack-a-kanji" title="Whack-a-Kanji" date="May, 2018" />
      <Bucket to="/thunderclap" title="Thunderclap Amps" date="Spring, 2017" />
      <Bucket to="/crescendo" title="Crescendo" date="Summer, 2015 - Summer, 2016" />
      <Bucket playful="true" to="/tumbleweed" title="Tumbleweed" date="Fall, 2013" />
      <Bucket to="/knewton" title="Knewton GMAT" date="Winter, 2010" />
      <Bucket playful="true" to="/lisztomania" title="Lisztomania" date="May, 2009" />
    </div>
  </div>
))
