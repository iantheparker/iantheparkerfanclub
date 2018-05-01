import React from 'react'
import styled from 'styled-components'

const LgImgStyle = styled.div`
  width: 100vw;
  text-align: center;
  display: block;
  img {
    display: inline;
    /*padding: 15rem 0 0;*/
    max-width: 69vw;
  }
`

class LgImg extends React.Component {
  render () {
    return (
      <LgImgStyle>
        <img src={this.props.src} alt="" />
      </LgImgStyle>
    )
  }
}
export default LgImg
