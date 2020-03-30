import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../theme';

const AllTheProviders = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: any, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
