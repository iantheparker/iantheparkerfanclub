import React, { Component } from "react";
import { ServerStyleSheet } from "styled-components";

const SITE_URL = "https://iantheparkerfan.club";
const db_favicon =
  "https://www.dropbox.com/s/5omj5x9orknarte/favicon.ico?raw=1";

export default {
  getSiteData: () => ({
    title: "IanTheParker Fan Club"
  }),
  getRoutes: async () => [
    {
      path: "/",
      component: "src/containers/Home"
    },
    {
      path: "/thunderclap",
      component: "src/containers/Thunderclap"
    },
    {
      path: "/tumbleweed",
      component: "src/containers/Tumbleweed"
    },
    {
      path: "/knewton",
      component: "src/containers/Knewton"
    },
    {
      path: "/lisztomania",
      component: "src/containers/Lisztomania"
    },
    {
      path: "/whack-a-kanji",
      component: "src/containers/Whack-a-kanji"
    },
    {
      path: "/crescendo",
      component: "src/containers/Crescendo"
    },
    {
      path: "/frame",
      component: "src/containers/Frame"
    },
    {
      path: "/citec",
      component: "src/containers/Citec"
    },
    {
      is404: true,
      component: "src/containers/404"
    }
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  siteRoot: SITE_URL,
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props;

      return (
        <Html>
          <Head>
            <title>IanTheParker Fan Club</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link type="image/x-icon" rel="shortcut icon" href={db_favicon} />
            <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

            <meta
              name="twitter:card"
              value="IanTheParker Fan Club: wouldn't he make a great dictator!?"
            />
            <meta property="og:site_name" content="IanTheParker Fan Club" />
            <meta property="og:title" content="IanTheParker Fan Club" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:description" content="a place for lovers." />

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      );
    }
  }
};
