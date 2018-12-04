import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";
import NavBar from "../styled-components/NavBar";
import IntroTxt from "../styled-components/IntroTxt";

const links = {
  citec_url: "http://citec.repec.org/",
  pdf: "https://www.dropbox.com/s/e2i2a5vj1f26dhz/citec.pdf?raw=1",
  source: "https://github.com/ahdvnd/citec"
};

export default () => (
  <div>
    <NavBar title="CitEc" />
    <IntroTxt>
      <p>
        <a href={links.citec_url}>CitEc: Citations in Economics</a> lives up to
        its name as a massive database for citations in economics. I'm
        collaborating with a Postdoctoral Fellow at Johns Hopkins University,
        Dr. Aboozar Hadavand, to examine how subconscious bias impacts what
        ideas get spotlighted. Using data from CitEc, we are analyzing citations
        across an economist’s lifetime and seeing how this varies by their
        gender and institution.
        <a href={links.pdf}> You can see our initial proposal here</a>, but plan
        to finish our first paper on the topic before spring 2019.
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
