import React from 'react';
import App from 'next/app';
import { Layout } from '../components';

class AppComponent extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default AppComponent;
