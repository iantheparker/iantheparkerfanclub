import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/fontawesome-free-regular'
import NavBar from '../styled-components/NavBar'
import IntroTxt, { TextBlock } from '../styled-components/IntroTxt'
import YouTubeOpts from '../styled-components/YouTubeOpts'

const ytids = {
  tw: 'YeUt2ji_PAE',
}
const links = {
  greg: 'https://twitter.com/waythingswork',
  luke: 'https://twitter.com/younglucas',
  kletsel: 'http://gregkletsel.com/',
  appstore: 'https://itunes.apple.com/us/app/no-mans-land-powered-by-tumbleweed/id602227891?mt=8',
}

export default () => (
  <div>
    <NavBar playful title="Tumbleweed" />
    <IntroTxt>
      <p>
        <a href={links.appstore}>Tumbleweed</a> was an experiment in location-based content I worked
        on from 2012-2013. I teamed up with UX designers <a href={links.greg}>Greg Kuebler</a> and{' '}
        <a href={links.luke}>Luke Miller</a> to toy with the question of whether a story could be
        better told by taking into account where the audience was currently standing.
        <br />
        <span className="subtitle">Concept</span>
        <span className="subtitle">Director</span>
        <span className="subtitle">Editor</span>
        <span className="subtitle">Frontend Development</span>
        <span className="subtitle">Backend Development</span>
        <br />
        <span className="subtitle2">iOS</span>
        <span className="subtitle2">Rails</span>
      </p>
    </IntroTxt>
    <YouTubeOpts id={ytids.tw} autoplay />
    <TextBlock>
      <p>
        I had recently co-directed a short film called No Man’s Land, and we came up with the idea
        of transforming it into a location-based game. We used a few different interactions:
        <ul>
          <li>
            check-in to a nearby venue on Foursquare, so say for instance the next scene takes place
            at a saloon, you'd have to be near a similar category like a bar
          </li>
          <li>
            some scenes required you to move several miles from your last known location to simulate
            getting out of town
          </li>
          <li>some scenes just unlocked when enough time had passed</li>
        </ul>{' '}
        Kuebler managed the design assets, <a href={links.kletsel}>Greg Kletsel</a> illustrated, and
        I handled the software.
      </p>
      <p>
        In case you're curious, here were some of the interesting technical challenges I faced. 1) I
        had to become a master of parallax. There were three layers of illustration that moved at
        different speeds, so not only did I need to figure out the best rate of movement for each,
        but I had to guarantee that the appropriate layer responded to each touch event even though
        there were overlapping transparent layers. 2) I needed to keep this app fast and light. Not
        only did I have to explore different means of compressing and displaying the illustrations
        and animations, but I needed to keep the framerate high by efficiently managing processes
        running just outside of the view port. 3) Some of our interactions required background
        triggers, but you have to assume your app will be terminated after some downtime. After
        trying out timed notifications on the client I found it too limiting, so I set up a rails
        server to help unlock states of the game and also send multiple push reminders that added
        color to the story if the user became inactive.
      </p>
      <p>
        So, can a story be better told with location data? Maybe. But I think everyone would rather
        sit on the couch and watch Netflix.
      </p>
    </TextBlock>
  </div>
)
