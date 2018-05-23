import styled from 'styled-components'
import colors from '../utils/colors'
import { device } from '../utils/device'

const IntroTxt = styled.div`
  -webkit-animation-name: textFade;
  animation-name: textFade;
  -webkit-animation-duration: 1.4s;
  animation-duration: 1.4s;
  -webkit-animation-timing-function: ease;
  animation-timing-function: ease;
  position: relative;
  display: block;
  height: 90vh;
  min-height: 52vh;
  @media ${device.laptop} {
    width: 100vw;
  }
  p {
    font-weight: 700;
    line-height: 1.4;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 90%;
    font-size: 1.2rem;
    span.problem-solving {
      background-color: ${colors.blue};
    }
    span.playful {
      background-color: ${colors.pink};
    }
    .subtitle,
    .subtitle2 {
      display: inline-block;
      opacity: 0.35;
      margin: 0 1rem 0 0;
      font-size: 1rem;
      text-decoration: none;
    }
    .subtitle2 {
      font-size: 0.9rem;
      font-style: italic;
    }
    a.subtitle,
    a.subtitle2 {
      &:hover {
        transition: 0.7s ease;
        opacity: 1;
      }
    }
    @media ${device.laptop} and (min-height: 600px) {
      width: 60rem;
      font-size: ${props => (props.big ? '3rem' : '2rem')};

      .subtitle:nth-child(1) {
        margin: 2rem 1rem 0 0;
      }
    }
    @media ${device.laptop} {
      .subtitle {
        margin: 2rem 1rem 0 0;
        font-size: 1.2rem;
      }
    }
  }
`
export default IntroTxt

const IntroTxtSmall = IntroTxt.extend`
  height: 50vh;
  p {
    font-size: 1.2rem;
  }
`
export { IntroTxtSmall }

const TextBlock = styled.div`
  padding: 8rem 0;
  p {
    padding: 0 1.2rem;
    b {
      font-size: 2rem;
    }

    @media ${device.mobileL} {
      padding: 0 5.2rem;
    }
    @media ${device.laptop} {
      padding: 0 10rem;
    }
  }
`
export { TextBlock }
