import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import NavBar from "../styled-components/NavBar";
import IntroTxt from "../styled-components/IntroTxt";

const links = {
  frame_url: "https://frame.ai",
  pdf: "https://www.dropbox.com/s/zawftxrzla87fsp/frame.pdf?raw=1",
  source: "https://github.com/frame-technology/transfer-learning-fastai"
};

export default () => (
  <div>
    <NavBar title="Frame.ai" />
    <IntroTxt>
      <p>
        <a href={links.frame_url}>Frame.ai</a> is a startup delivering analytics
        on CRM exchanges. I researched the accuracy of FastAI’s ULMFiT in
        low-data regimes and <a href={links.pdf}> wrote a blog post</a> about it
        with Jesse St. Charles. *Note: should be posted online any day now.
        <br />
        <a className="subtitle" href={links.source} title="Source code">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="subtitle" href={links.pdf} title="Go to site">
          <FontAwesomeIcon icon={faBookmark} />
        </a>
      </p>
    </IntroTxt>
  </div>
);
