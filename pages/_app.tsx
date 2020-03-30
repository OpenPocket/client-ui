import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { NextSeo } from 'next-seo';

import theme, { GlobalStyles } from '../theme';
import { OrganizationLd, config } from '../seo';
import { ModalProvider } from '../context';

const AppComponent = ({ Component, pageProps }: { Component: any; pageProps: any }) => (
  <ModalProvider>
    <NextSeo {...config} />
    <OrganizationLd />
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </ModalProvider>
);
export default AppComponent;
