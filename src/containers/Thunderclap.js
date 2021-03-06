import React from 'react'
import NavBar from '../styled-components/NavBar'
import IntroTxt, { TextBlock } from '../styled-components/IntroTxt'
import LgImg from '../styled-components/LgImg'
import YouTubeOpts from '../styled-components/YouTubeOpts'
import VideoWrapper from '../styled-components/VideoWrapper'

const links = {
  tc_intro: 'n20fcGjeAKM',
  sketch: 'https://www.dropbox.com/s/6d1ywoeqoidsonq/internally-created.jpg?raw=1',
  proof: 'https://www.dropbox.com/s/q7x3y6zpzp950dq/proof.jpg?raw=1',
  artifactused: 'https://www.dropbox.com/s/c6wnrfm2u5f4sto/artifactused.png?raw=1',
  des: 'https://blog.intercom.com/using-job-stories-design-features-ui-ux/',
  map: 'https://www.dropbox.com/s/a4e2ne1h4ftzj17/map.jpg?raw=1',
  mapvid: 'https://www.dropbox.com/s/t60ym3ii8659pe9/map.mp4?raw=1',
  backers: 'https://www.dropbox.com/s/5qc2fi3dvhhju8k/backers_blurred.jpg?raw=1',
  timeline: 'https://www.dropbox.com/s/xn9ndzpljote7h5/timeline.jpg?raw=1',
  timelinevid: 'https://www.dropbox.com/s/8zgnx7kunf4gqto/timeline.mp4?raw=1',
  traffic: 'https://www.dropbox.com/s/k057tvlhay8ye24/traffic.jpg?raw=1',
  engagement: 'https://www.dropbox.com/s/jakesalk95oc6e4/engagementreport.jpg?raw=1',
  sentiment: 'https://github.com/7compass/sentimental',
}

export default () => (
  <div>
    <NavBar title="Thunderclap Amps" />
    <IntroTxt>
      <p>
        Thunderclap's users were too often confused about its effectiveness. After some sleuthing, I
        kickstarted a few projects to address the confusion: new KPIs, shareable data viz graphics,
        and a brand new analytics dashboard.
        <br />
        <span className="subtitle">Instigator</span>
        <span className="subtitle">Research + Prototyping</span>
        <span className="subtitle">Backend Development</span>
        <span className="subtitle">Frontend Development</span>
        <br />
        <span className="subtitle2">Rails</span>
        <span className="subtitle2">Postgres</span>
        <span className="subtitle2">Chartjs + d3</span>
      </p>
    </IntroTxt>
    <YouTubeOpts id={links.tc_intro} />
    <TextBlock>
      <p>
        Thunderclap allows anyone to create a campaign that blasts social media messages from many
        users' accounts all at once. We call each blast a “Thunderclap campaign”. Each Thunderclap
        campaign is designed to rally people to the campaign organizer’s target landing page at a
        crucial time. Every week, hundreds of new campaigns are created and hundreds of thousands of
        social media messages are sent to their supporters through Thunderclap.
      </p>
      <p>
        <b>The Problem</b>
        <br />
        For every positive email we got about the success of a user’s campaign, we got a confused or
        angry response questioning whether or not their blast went out at all, like the ones below:
      </p>
    </TextBlock>
    <IntroTxt style={{ maxHeight: '1vh' }}>
      <p style={{ textAlign: 'center' }}>
        "please refund, the campaign did not work. :(" <br />
        <br />"how do I know it's working?"
      </p>
    </IntroTxt>
    <TextBlock>
      <p>
        This was a trivial problem to solve. We created a confirmation email. When speaking to
        users, however, we discovered a related and more fundemental problem: campaign organizers
        had no idea how successful their campaign was. We may as well have been selling snake oil.
      </p>
      <p>
        Doing some research to better understand this problem, we learned that many of our campaign
        organizers, particularly those who used paid campaigns, were being held accountable by their
        organizations to ensure the money they spent was worth it. Brands as well as NGOs were
        becoming increasingly metric- oriented and campaign organizers needed to show quantitative
        results.
      </p>
      <p>
        We broke this problem down into three key components:
        <ul>
          <li>How can we measure the success of our campaigns? </li>
          <li>How can we effectively communicate success to campaign organizers?</li>
          <li>
            {' '}
            How can we make it easy for campaign organizers to share success of their campaigns
            inside their organizations?
          </li>
        </ul>
      </p>
      <br />
      <p>
        <b>How We Solved It</b>
        <br />
        First we had to re-evaluate what success meant. Was success just about the size of a
        campaign? With raw numbers, larger brands would always appear to be more successful, but
        there were plenty of upstarts that had viral campaigns that were massive, relative to their
        size. We had to figure out a way to score success relatively.{' '}
      </p>
      <p>
        Another challenge we faced was figuring out the true scale of a campaign. Up until then we
        had focused on the number of backers who lended their social media accounts to the campaign,
        but what about retweets and shares and all the other ripple effects a campaign could have?
      </p>
      <p>
        In response to these questions we came up with something we called the “Amp Score” (short
        for Amplification Score). The Amp Score is calculated using a campaigns’ page views,
        view-to-supporter conversion rate, and click-throughs from blasted messages to the intended
        landing page. I built a scraper that would search for conversations related to a user
        campaign’s hashtags as well as track the engagement on messages in terms of Facebook likes
        and Twitter favorites.
      </p>
      <p>
        Once we figured out how to measure success, the next step was coming up with a way to
        communicate it. I was inspired by{' '}
        <a href={links.des}>Des Traynor’s Jobs to be Done Framework example</a>, where they built a
        robust, interactive map tool for customer support teams only to discover that marketers were
        taking snapshots of it to show their bosses at the next meeting. I pushed this idea of a
        ‘success artifact’ - an auto-generated dataviz graphic sent to the campaign organizer after
        the blast that can simultaneously congratulate them on a job well done and be shareable to
        their audience. I created a mock-up and we decided to test our theory by manually sending it
        out to a subset of users.
      </p>
    </TextBlock>
    <LgImg src={links.sketch} />
    <TextBlock>
      <p>
        Users loved the success artifact and started sharing it with their supporters and so we
        built a feature that would auto-generate and send the artifact out after every campaign.
      </p>
    </TextBlock>
    <LgImg src={links.artifactused} />
    <TextBlock>
      <p>
        For users who needed more robust metrics, I revamped our campaign stats page to give
        campaign organizers more insight into how their campaign played out. I used Chartjs and d3
        for the front, made some new Postgres tables with fancy queries to better handle all this
        new data, and sat it all on Rails with some clever async loading work.
      </p>
      <p>I added a map that captured new insights on where the campaign was most popular.</p>
    </TextBlock>
    <VideoWrapper src={links.mapvid} poster={links.map} autoPlay loop muted />
    <TextBlock>
      <p>
        I updated the table full of supporters to be sortable across several several attributes:
      </p>
    </TextBlock>
    <LgImg src={links.backers} />
    <TextBlock>
      <p>
        I created an interactive stacked chart showing cumulative campaign growth, per social
        network, with the option to view in terms of total supporters, their social reach, or the
        amount of times they’ve shared their support to their timeline.
      </p>
    </TextBlock>
    <VideoWrapper src={links.timelinevid} poster={links.timeline} autoPlay loop muted />
    <TextBlock>
      <p>
        I created another interactive chart showing where most of their supporter traffic was coming
        from, and breaking down their views/conversion rate.
      </p>
    </TextBlock>
    <LgImg src={links.traffic} />
    <TextBlock>
      <p>
        I added another section called Engagement Report that lists engagement on the messages that
        went out per network. It also now counts the second-wave ripple effect of engagement on your
        supporter’s messages and an analysis of the conversations happening around your hashtag,
        breaking down sentiment, related hashtags, and gender of your audience. Props to this ruby
        gem, <a href={links.sentiment}>sentimental</a>.
      </p>
    </TextBlock>
    <LgImg src={links.engagement} />
    <TextBlock>
      <p>
        Now here is what our email complaints tagged as 'blast confusion' looks like since we rolled
        out the success artiface in the middle of May 2017, and the revamped stats page a month
        later
      </p>
    </TextBlock>
    <LgImg src={links.proof} />
    <TextBlock>
      <p>The effect of all this was a massive drop in confusion.</p>
    </TextBlock>
  </div>
)
