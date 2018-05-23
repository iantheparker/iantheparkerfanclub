import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/fontawesome-free-brands'
import { faBookmark } from '@fortawesome/fontawesome-free-regular'
import NavBar from '../styled-components/NavBar'
import IntroTxt, { TextBlock } from '../styled-components/IntroTxt'
import VideoWrapper from '../styled-components/VideoWrapper'

const links = {
  sketchrnn:
    'http://blog.otoro.net/2015/12/28/recurrent-net-dreams-up-fake-chinese-characters-in-vector-format-with-tensorflow/',
  rhodes: 'https://github.com/RhodesPeter/whack-a-mole-react',
  waj: 'https://whack-a-kanji.fun',
  start: 'https://www.dropbox.com/s/8x2t6fykh0279bi/screencap.mp4?raw=1',
  still: 'https://www.dropbox.com/s/4wynq1p17ear5iv/screencap.jpeg?raw=1',
  sketchrnnfork: 'https://github.com/iantheparker/sketch-rnn',
  kanjivg: 'http://kanjivg.tagaini.net/',
  source: 'https://github.com/iantheparker/whack-a-kanji',
}

export default () => (
  <div>
    <NavBar playful title="Whack-a-Kanji" />
    <IntroTxt>
      <p>
        <a href={links.waj}>Whack-a-Kanji</a> is a quick site I made to prove to my Japanese wife
        that Kanji is impossible to master. I riffed on{' '}
        <a href={links.sketchrnn}>David Ha's SketchRNN</a> to generate fake Kanji +{' '}
        <a href={links.rhodes}>Peter Rhodes' whack-a-mole-react</a> to get the site up in a night
        and had her questioning her Kanji skills by the morning.
        <br />
        <a className="subtitle" href={links.source} title="Source code">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="subtitle" href={links.waj} title="Go to site">
          <FontAwesomeIcon icon={faBookmark} />
        </a>
      </p>
    </IntroTxt>
    <a href={links.waj}>
      <VideoWrapper src={links.start} poster={links.still} autoPlay loop muted />
    </a>
    <TextBlock>
      <p>
        My first pass at getting this up involved reskinning that whack-a-mole game in React to use
        10 real and 10 fake Kanji images I sliced up. I then also added scoring functionality to
        support the notion of a bad whack and a strategic miss - you only earn points by whacking
        the fakes and by letting real ones go unwhacked. The version my wife played in the morning
        had limited samples, so two play-throughs and she saw every fake kanji I could throw at
        her...but she got one wrong! Eureka!
      </p>
      <p>
        For my next pass, I needed an endless amount of samples to trip her up. I{' '}
        <a href={links.sketchrnnfork}>forked SketchRNN</a> and made changes to the drawing functions
        to guarantee that the real stuff from <a href={links.kanjivg}>KanjiVG</a> and the output
        from the model looked stylistically indistinguishable. This is effectively an API endpoint
        to generate either type of character depending on the arguments passed, but instead of
        getting too ahead of myself and throwing it on a server for real-time generation, I just
        cranked out one thousand characters each and put them on S3. As long as characters are shown
        at random, I figured that was more than enough to challenge her. Lastly, I fine-tuned the
        scoring feedback so it was crystal clear when she got something wrong (or right).
      </p>
      <p>
        As of mid-May 2018, her average score is 85%. She's furious and addicted. She got her mother
        and friends (all native speakers) to try it out and they haven't done much better. Yup. I'm
        patting myself on the back. It's impossible to master.
      </p>
    </TextBlock>
  </div>
)
