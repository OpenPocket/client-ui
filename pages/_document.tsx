import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="GLD Funding" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="GLD Funding" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="msapplication-TileImage" content="./images/app-icons/icon-152.png" />
          <link rel="icon" type="image/png" href="./images/favicon.png" />
          <link rel="icon" sizes="192x192" href="./images/app-icons/icon-192.png" />
          <link rel="apple-touch-icon" href="./images/app-icons/icon-144.png" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#2D323D" />
          <meta name="theme-color" content="#2D323D" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
