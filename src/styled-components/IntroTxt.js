import styled from 'styled-components'
import colors from '../utils/colors'

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
  width: 100vw;
  @media (max-width: 1024px) {
    min-height: 52vh;
  }
  p {
    font-weight: 700;
    font-size: ${props => (props.big ? '3rem' : '2rem')};
    line-height: 1.4;
    width: 60rem;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    span.problem-solving {
      background-color: ${colors.blue};
    }
    span.playful {
      background-color: ${colors.pink};
    }
    @media (max-width: 1024px), (max-height: 600px) {
      width: 90%;
      font-size: 1.2rem;
      span.subtitle:nth-child(1) {
        margin: 2rem 1rem 0 0;
      }
    }
    span.subtitle {
      font-size: 1.2rem;
      display: inline-block;
      opacity: 0.35;
      margin: 2rem 1rem 0 0;
      @media (max-width: 1024px) {
        margin: 0 1rem 0 0;
        font-size: 1rem;
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
  padding: 10rem 0;
  p {
    padding: 0 10rem;

    @media (max-width: 1024px) {
      padding: 0 1.2rem;
    }
  }
`
export { TextBlock }
