import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

const YouTubeStyles = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  iframe {
    max-width: 90vw;
  }
`

class YouTubeOpts extends React.Component {
  render () {
    const start = this.props.start
    const autoplay = this.props.autoplay ? 1 : 0
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay,
        start,
      },
    }

    return (
      <YouTubeStyles>
        <YouTube videoId={this.props.id} opts={opts} />
      </YouTubeStyles>
    )
  }
}

export default YouTubeOpts
