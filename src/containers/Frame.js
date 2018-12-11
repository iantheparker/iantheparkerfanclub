import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import TweetEmbed from "react-tweet-embed";

import NavBar from "../styled-components/NavBar";
import IntroTxt, { TextBlock } from "../styled-components/IntroTxt";

const links = {
  frame_url: "https://frame.ai",
  blog: "https://blog.frame.ai/learning-more-with-less-1e618a5aa160",
  source: "https://github.com/frame-technology/transfer-learning-fastai"
};

export default () => (
  <div>
    <NavBar title="Frame.ai" />
    <IntroTxt>
      <p>
        <a href={links.frame_url}>Frame.ai</a> is a startup delivering analytics
        on CRM exchanges. I researched the accuracy of FastAI’s ULMFiT in
        low-data regimes and <a href={links.blog}> wrote a blog post</a> about
        it with Jesse St. Charles at Frame.
        <br />
        <a className="subtitle" href={links.source} title="Source code">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="subtitle" href={links.blog} title="Go to site">
          <FontAwesomeIcon icon={faBookmark} />
        </a>
      </p>
    </IntroTxt>
    <TweetEmbed />
    <blockquote className="twitter-tweet tw-align-center" data-lang="en">
      <p lang="en" dir="ltr">
        Learning More with Less by{" "}
        <a href="https://twitter.com/DataLives?ref_src=twsrc%5Etfw">
          @DataLives
        </a>{" "}
        <a href="https://t.co/hYMQN3DDZ4">https://t.co/hYMQN3DDZ4</a>
        <br />
        <br />
        Great to see folks doing additional ablation experiments beyond those we
        already did in the ULMFiT paper. This work shows that even just a little
        unlabeled data helps a lot!
      </p>
      &mdash; Jeremy Howard (@jeremyphoward){" "}
      <a href="https://twitter.com/jeremyphoward/status/1072254173310152706?ref_src=twsrc%5Etfw">
        December 10, 2018
      </a>
    </blockquote>{" "}
    <TextBlock>
      <p>
        Did you see that? Jeremy Howard from FastAI rewteeted and complemented
        our work! Jesse had the vision and the research experience, I had spent
        more time with FastAI's library and FloydHub's services, so I
        kickstarted the <a href={links.source}>GitHub repo</a> and blog post.
        Jesse perfected it and guaranteed that our science was rigorous!
      </p>
    </TextBlock>
  </div>
);
