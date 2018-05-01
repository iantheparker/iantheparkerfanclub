import React from 'react'
import { withSiteData, Link } from 'react-static'
import styled from 'styled-components'
import IntroTxt from '../styled-components/IntroTxt'
import colors from '../utils/colors'
import GetName from '../utils/GetName'

const HomeLink = styled(Link)`
  text-decoration: none;
  &:visited {
    color: black;
  }
  transition: 0.3s ease;
  &:hover {
    box-shadow: inset 0 -0.175em ${colors.black}, inset 0 -0.2em ${colors.white};
  }
`
const Bucket = styled.div`
  width: 50%;
  height: 45vh;
  overflow: hidden;
  background-color: ${props => (props.playful ? colors.pink : colors.blue)};
  &:hover {
    /*box-shadow: 0px 0px 0px 0.4rem black inset;*/
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding: 2.5rem;
  }
  h2 {
    text-align: center;
    position: relative;
    top: 45%;
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 3rem;
    @media (max-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`

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
      <Bucket>
        <h2>
          <HomeLink to="/thunderclap">Thunderclap Amps</HomeLink>
        </h2>
      </Bucket>
      <Bucket playful>
        <h2>
          <HomeLink playful="true" to="/tumbleweed">
            Tumbleweed
          </HomeLink>
        </h2>
      </Bucket>
      <Bucket playful>
        <h2>
          <HomeLink playful="true" to="/lisztomania">
            Lisztomania
          </HomeLink>
        </h2>
      </Bucket>
      <Bucket>
        <h2>
          <HomeLink to="/knewton">Knewton GMAT</HomeLink>
        </h2>
      </Bucket>
    </div>
  </div>
))
