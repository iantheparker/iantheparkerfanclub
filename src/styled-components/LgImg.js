import React from 'react'
import styled from 'styled-components'

const LgImgStyle = styled.div`
  width: 100vw;
  text-align: center;
  display: block;
  padding-top: ${props => (props.double ? '3rem' : '0rem')};
  img {
    display: inline;
    max-width: ${props => (props.big ? '80vw' : '69vw')};
  }
  p {
    opacity: 0.5;
    padding: 1.5rem 1rem;
    font-size: 0.9rem;
  }
`

class LgImg extends React.Component {
  render () {
    return (
      <LgImgStyle double={this.props.double} big={this.props.big}>
        <img src={this.props.src} alt="" />
        <p>{this.props.caption}</p>
      </LgImgStyle>
    )
  }
}
export default LgImg
