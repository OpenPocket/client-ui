import React from 'react';
import { Global, css, SerializedStyles } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const styles = (theme: import('../theme').themeProptypes): SerializedStyles => css`
  ${emotionNormalize};
  @font-face {
    font-family: 'Cerebri Sans';
    src: url('./fonts/cerebri-sans.woff2') format('woff2'),
      url('./fonts/cerebri-sans.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'neuzeit-grotesk';
    src: url('./fonts/l') format('woff2'), url('./fonts/d.woff') format('woff'),
      url('./fonts/a') format('opentype');
    font-display: auto;
    font-weight: 700;
    font-style: normal;
  }
  body,
  html,
  #__next {
    height: 100%;
    font: normal normal normal 1rem ${theme.fonts.body};
    color: ${theme.colors.gray300};
    position: relative;
  }
  .container {
    max-width: 1200px;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transform: translateY(10px);
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ReactModal__Overlay--after-open {
    opacity: 1;
    transform: translateY(0px);
  }
  .ReactModal__Overlay--before-close {
    opacity: 0;
    transform: translateY(10px);
  }
  .show-md {
    display: none !important;
  }
  a {
    color: inherit;
  }
  ${theme.mq[1]} {
    .hide-sm {
      display: none !important;
    }
  }
  ${theme.mq[2]} {
    .hide-md {
      display: none !important;
    }
    .show-md {
      display: inherit !important;
    }
  }
  input,
  textarea,
  select,
  input[type='range'],
  input,
  input:matches([type='password'], [type='search']) {
    -webkit-appearance: none;
    -moz-appearance: none;
    font: normal normal normal 1rem ${theme.fonts.body};
  }
  *:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: currentColor;
    opacity: 0.5;
  }
  ::-moz-placeholder {
    color: currentColor;
    opacity: 0.5;
  }
  :-ms-input-placeholder {
    color: currentColor;
  }
  :-moz-placeholder {
    color: currentColor;
    opacity: 0.5;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
export const GlobalStyles = () => {
  return <Global styles={styles} />;
};
