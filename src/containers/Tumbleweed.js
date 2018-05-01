import React from 'react'
import NavBar from '../styled-components/NavBar'
import IntroTxt from '../styled-components/IntroTxt'
import YouTubeOpts from '../styled-components/YouTubeOpts'

const ytids = {
  tw: 'YeUt2ji_PAE',
}
const links = {
  greg: 'https://twitter.com/waythingswork',
  luke: 'https://twitter.com/younglucas',
  kletsel: 'http://gregkletsel.com/',
}

export default () => (
  <div>
    <NavBar playful title="Tumbleweed" />
    <IntroTxt>
      <p>
        Tumbleweed was an experiment in location-based content I worked on in 2012. I teamed up with
        UX designers <a href={links.greg}>Greg Kuebler</a> and <a href={links.luke}>Luke Miller</a>{' '}
        to toy with the question of whether a story could be better told by taking into account
        where the audience was currently standing.
        <br />
        <span className="subtitle">Concept</span>
        <span className="subtitle">Director</span>
        <span className="subtitle">Editor</span>
        <span className="subtitle">F/E Development</span>
        <span className="subtitle">B/E Development</span>
      </p>
    </IntroTxt>
    <YouTubeOpts id={ytids.tw} autoplay />
    <IntroTxt>
      <p>
        I had recently co-directed a short film called No Man’s Land, and we came up with the idea
        of transforming it into a location-based game. We used a few different interactions:
        check-in to a nearby venue in Foursquare, so say for instance the next scene takes place at
        a saloon, you'd have to be near a similar category like a bar. Also, some scenes required
        leaving town or a several mile radius, and some scenes just unlocked when enough time had
        passed. Kuebler managed the design assets, I handled the software, and{' '}
        <a href={links.kletsel}>Greg Kletsel</a> illustrated.
      </p>
    </IntroTxt>
  </div>
)
