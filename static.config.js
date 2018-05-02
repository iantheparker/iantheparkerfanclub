import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

const SITE_URL = 'https://iantheparkerfan.club'

export default {
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/containers/Home',
    },
    {
      path: '/about',
      component: 'src/containers/About',
    },
    {
      path: '/thunderclap',
      component: 'src/containers/Thunderclap',
    },
    {
      path: '/tumbleweed',
      component: 'src/containers/Tumbleweed',
    },
    {
      path: '/knewton',
      component: 'src/containers/knewton',
    },
    {
      path: '/lisztomania',
      component: 'src/containers/Lisztomania',
    },
    {
      is404: true,
      component: 'src/containers/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  siteRoot: SITE_URL,
  Document: class CustomHtml extends Component {
    render () {
      const {
        Html, Head, Body, children, renderMeta,
      } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
              type="image/x-icon"
              rel="shortcut icon"
              href="https://www.dropbox.com/s/5omj5x9orknarte/favicon.ico?raw=1"
            />
            <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />

            <meta
              name="twitter:card"
              value="IanTheParker Fan Club: wouldn't he make a great dictator!?"
            />

            <meta property="og:title" content="IanTheParker Fan Club " />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={SITE_URL} />
            <meta property="og:description" content="a place for lovers." />

            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
