import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Head extends Component {
  render () {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Ian Parker Fan Club</title>
          <meta property="og:url" content="https://iantheparkerfan.club" />
          <meta property="og:title" content="Ian Parker" />
          <meta property="og:site_name" content="Ian Parker" />
          <meta property="og:description" content="Welcome to the Ian Parker Fan Club." />
          <meta property="og:image" content="edkf.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />
          <meta property="og:image" content="edkf.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta
            name="google-site-verification"
            content="rH7XmS62Wdkz6HDFmt6I-gRLeUKnOTIDkEPLEuwrOzI"
          />
          <link rel="icon" href="favicon.ico" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          <meta name="theme-color" content="#000000" />
        </Helmet>
      </div>
    )
  }
}

export default Head
