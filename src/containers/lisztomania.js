import React from "react";
import TweetEmbed from "react-tweet-embed";
import NavBar from "../styled-components/NavBar";
import IntroTxt, { TextBlock } from "../styled-components/IntroTxt";
import YouTubeOpts from "../styled-components/YouTubeOpts";

const ytids = {
  original: "XtE-xnPKj28",
  brooklyn: "U1ywFh2AZLg",
  lessig: "FhTUzNKpfio",
  boston: "Qj2Xald7NYQ"
};
const ytlinks = {
  sf: "https://www.youtube.com/watch?v=GCzr7P5gqSI",
  italy: "https://www.youtube.com/watch?v=fTLWHg4O2hI",
  amsterdam: "https://www.youtube.com/watch?v=pLMCd-udRvg",
  colombia: "https://www.youtube.com/watch?v=Hce4KT1y4pI&t=8s",
  versailles: "https://www.youtube.com/watch?v=yYw24wCIcrU",
  taiwan: "https://www.youtube.com/watch?v=iPNSxeQNITQ",
  rio: "https://www.youtube.com/watch?v=lNUcjfXZumo",
  madrid: "https://www.youtube.com/watch?v=zCr1-Goakqs",
  latvia: "https://www.youtube.com/watch?v=kmV3wUJ3rtg",
  israel: "https://www.youtube.com/watch?v=7Hwe-Pt7Fe0",
  sk: "https://www.youtube.com/watch?v=QBwGDCQ3OYc",
  moscow: "https://www.youtube.com/watch?v=nmj4pwMeVfQ",
  kenya: "https://www.youtube.com/watch?v=jxzqiL-7G4g",
  montreal: "https://www.youtube.com/watch?v=cVXosWm0ElU",
  ukraine: "https://www.youtube.com/watch?v=xRaXgnsFIFk&t=209s",
  brisbane: "https://www.youtube.com/watch?v=he03F1vIykk",
  manila: "https://www.youtube.com/watch?v=e5gWpYuHrog",
  siberia: "https://www.youtube.com/watch?v=siij36WTZDs",
  boston: "https://youtu.be/Qj2Xald7NYQ",
  playlist: "https://www.youtube.com/playlist?list=PL783E5C1A34412602",
  aocTime: "http://time.com/5493430/alexandria-ocasio-cortez-dancing-video/",
  aocWaPo:
    "https://www.washingtonpost.com/politics/2019/01/03/video-ocasio-cortez-dancing-college-leaked-internet-finds-it-adorable/?noredirect=on&utm_term=.98e43a50cb6e",
  aocUSAToday:
    "https://www.usatoday.com/story/news/politics/2019/01/03/viral-video-shows-college-era-alexandria-ocasio-cortez-dancing/2477646002/",
  aocVice:
    "https://www.vice.com/en_ca/article/8xppgv/alexandria-ocasio-cortez-dancing-video-college-conservatives-meme-vgtrn",
  aocTeenVogue:
    "https://www.teenvogue.com/story/people-love-rep-alexandria-ocasio-cortez-even-more-after-dance-video-meant-to-shame-her",
  aocWired:
    "https://www.wired.com/story/alexandria-ocasio-cortez-dancing-video/",
  aocTwitterMoment:
    "https://twitter.com/TwitterMoments/status/1080993777857093632",
  aocWiki: "https://en.wikipedia.org/wiki/Alexandria_Ocasio-Cortez"
};

export default () => (
  <div>
    <NavBar playful title="Lisztomania" />
    <IntroTxt>
      <p>
        I’ve always loved remix culture and in early 2009 it was having a
        moment. The Internet was appropriating and mashing up every piece of pop
        culture they could find in the hopes that something interesting would
        come of it. I made something that kinda blew up and became a meme.
        <br />
        <span className="subtitle">Concept</span>
        <span className="subtitle">Director</span>
        <span className="subtitle">Editor</span>
      </p>
    </IntroTxt>
    <TextBlock>
      <p>
        I saw this on YouTube, which cut 1980’s Brat pack movie scenes to
        Phoenix’s catchy new song, Lisztomania.
      </p>
    </TextBlock>
    <YouTubeOpts id={ytids.original} />
    <TextBlock>
      <p>
        I was mesmerized. It was totally trivial, yet a surpisingly touching
        tribute to the 80s. I couldn’t get it out of my head and I must have
        watched it 50 times within the first two days. By the third day I was
        convinced I needed to make a tribute video to this tribute video to keep
        this meta-joke going. On the fourth day, I grabbed some friends, gave
        them a case of wine, put them on a Brooklyn rooftop during an epic
        sunset, and pressed record. I edited it all down, put it online the next
        day, and titled it the Brooklyn Bratpack Mashup.
      </p>
    </TextBlock>
    <YouTubeOpts id={ytids.brooklyn} />
    <TextBlock>
      <p>
        Shortly after posting it we started getting video replies on YouTube.
        The first one said{" "}
        <a href={ytlinks.manila}>Manila, Philippines Brat Pack Mashup</a>. It
        was a group of high school kids making a tribute video to our tribute
        video of a tribute video. It blew our minds. It felt amazing. Shortly
        after that, we had one from <a href={ytlinks.sf}>San Francisco</a>
        ...then <a href={ytlinks.amsterdam}>Amsterdam</a>,{" "}
        <a href={ytlinks.versailles}>France</a>,{" "}
        <a href={ytlinks.latvia}>Latvia</a>, <a href={ytlinks.rio}>Brazil</a>,{" "}
        <a href={ytlinks.israel}>Israel</a>, <a href={ytlinks.italy}>Italy</a>,{" "}
        <a href={ytlinks.madrid}>Spain</a>,{" "}
        <a href={ytlinks.colombia}>Colombia</a>,{" "}
        <a href={ytlinks.brisbane}>Australia</a>,{" "}
        <a href={ytlinks.montreal}>Canada</a>,{" "}
        <a href={ytlinks.moscow}>Moscow</a>,{" "}
        <a href={ytlinks.siberia}>Siberia</a>, <a href={ytlinks.kenya}>Kenya</a>
        , <a href={ytlinks.taiwan}>Taiwan</a>,{" "}
        <a href={ytlinks.sk}>South Korea</a>,{" "}
        <a href={ytlinks.ukraine}>Ukraine</a> and{" "}
        <a href={ytlinks.playlist}>and many more</a>. To this day, there are new
        remixes appearing.
      </p>
    </TextBlock>
    <YouTubeOpts id={ytids.lessig} start={293} />
    <TextBlock>
      <p>
        Then, the cherry on top: Professor Larry Lessig, the father of Creative
        Commons and champion of remix culture, highlighted us in a TED talk
        called “Re-examining the remix”. Thanks Lessig. I feel internet famous
        now.
      </p>
      <p>
        <b>Update 1/3/2019:</b>
      </p>
      <p>
        This meme just became hot again after alt-right trolls discovered that
        NY Congressional Representative{" "}
        <a href={ytlinks.aocWiki}>Alexandria Ocasio-Cortez</a> was in the Boston
        University remix and tried to use footage of her happy dancing to shame
        her. I totally endorse your dance moves AOC.
      </p>
    </TextBlock>
    <YouTubeOpts id={ytids.boston} />
    <TextBlock>
      <TweetEmbed />
      <blockquote className="twitter-tweet tw-align-center" data-lang="en">
        <p lang="en" dir="ltr">
          After a video of Representative{" "}
          <a href="https://twitter.com/AOC?ref_src=twsrc%5Etfw">@AOC</a>{" "}
          recreating the Breakfast Club dance began circulating online, Parker
          Higgins (
          <a href="https://twitter.com/xor?ref_src=twsrc%5Etfw">@xor</a>)
          explained how it came to be.{" "}
          <a href="https://t.co/ZY1SbnIv8K">https://t.co/ZY1SbnIv8K</a>
        </p>
        &mdash; Twitter Moments (@TwitterMoments){" "}
        <a href="https://twitter.com/TwitterMoments/status/1080993777857093632?ref_src=twsrc%5Etfw">
          January 4, 2019
        </a>
      </blockquote>
    </TextBlock>
    <TextBlock>
      <p>
        Wired sums it up pretty well with its article{" "}
        <a href={ytlinks.aocWired}>
          That Viral Video of Alexandria Ocasio-Cortez Dancing Is a Meta-Meme
        </a>
        . Check out additional media coverage in{" "}
        <a href={ytlinks.aocTime}>Time</a>, <a href={ytlinks.aocWaPo}>WaPo</a>,{" "}
        <a href={ytlinks.aocUSAToday}>USAToday</a>, and{" "}
        <a href={ytlinks.aocVice}>Vice</a>.
      </p>
    </TextBlock>
  </div>
);
