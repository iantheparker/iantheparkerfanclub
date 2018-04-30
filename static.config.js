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
      path: '/tc',
      component: 'src/containers/TC',
    },
    {
      path: '/tw',
      component: 'src/containers/TW',
    },
    {
      path: '/knewton',
      component: 'src/containers/Knewton',
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
  // siteRoot: SITE_URL,
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
            <link type="image/x-icon" rel="shortcut icon" href="favicon.ico" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  },
}
