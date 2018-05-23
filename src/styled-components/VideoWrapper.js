import React from 'react'
import styled from 'styled-components'

const VideoWrapperStyle = styled.div`
  width: 100vw;
  /*height: 50vh;*/
  display: block;
  position: relative;
  overflow: hidden;
  left: 50%;
  transform: translate(-50%);
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
  video {
    max-width: 69vw;
    height: 100%;
    cursor: pointer;
  }
  .playpause:hover {
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    opacity: 1;
  }
  .playpause,
  .playpause:hover {
    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  .playpause {
    outline: none;
    cursor: pointer;
    width: 7rem;
    height: 7rem;
    border-radius: 4rem;
    background-color: #fff;
    opacity: 0.97;
    display: block;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.12);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12), 0 10px 10px rgba(0, 0, 0, 0.12);
    font-size: 2.5rem;
    color: rgba(0, 0, 0, 0.9);
    letter-spacing: 0.1rem;
    text-align: center;
    padding-left: 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 7.1rem;
  }
  .hide {
    opacity: 0;
  }
  .show {
    opacity: 1;
  }
`

class VideoWrapper extends React.Component {
  constructor (props) {
    super(props)
    // create a ref to store the textInput DOM element
    this.vid = React.createRef()
    this.playButton = React.createRef()
    this.playing = !this.props.autoPlay
  }
  togglePlay () {
    if (this.playing) {
      this.vid.current.pause()
      this.playButton.current.classList.remove('hide')
      this.playButton.current.classList.add('show')
    } else {
      this.vid.current.play()
      this.playButton.current.classList.remove('show')
      this.playButton.current.classList.add('hide')
    }
    this.playing = !this.playing
  }
  componentDidMount () {
    if (this.props.autoPlay) {
      this.togglePlay()
      this.playButton.current.remove()
    }
  }

  render () {
    return (
      <VideoWrapperStyle>
        <video
          poster={this.props.poster}
          ref={this.vid}
          autoPlay={this.props.autoplay}
          loop={this.props.loop}
          muted={this.props.muted}
        >
          <source src={this.props.src} type="video/mp4" /> Your browser does not support the video
          tag.
        </video>
        <div className="playpause" ref={this.playButton} onClick={this.togglePlay.bind(this)}>
          ▶︎
        </div>
      </VideoWrapperStyle>
    )
  }
}
export default VideoWrapper
