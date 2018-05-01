import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

const YouTubeStyles = styled.div`
  .ytcontent {
    /*padding: 15rem 0;*/
    display: block;
    position: relative;
  }

  .ytcontent,
  .vid {
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
  }

  .vid iframe {
    max-width: 90vw;
  }

  @media (max-width: 1024px) {
    .ytcontent {
      -webkit-flex-basis: 80%;
      -ms-flex-preferred-size: 80%;
      flex-basis: 80%;
    }
  }

  @media (max-width: 700px) {
    .ytcontent {
      -webkit-flex-basis: 90%;
      -ms-flex-preferred-size: 90%;
      flex-basis: 90%;
    }
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
        <div className="ytcontent">
          <div className="vid">
            <YouTube videoId={this.props.id} opts={opts} />
          </div>
        </div>
      </YouTubeStyles>
    )
  }
}

export default YouTubeOpts
