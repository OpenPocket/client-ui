import { rem } from 'polished';

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96].map(n => rem(n));

export const fonts = {
  heading: "'neuzeit-grotesk', sans-serif",
  body: "'Cerebri Sans', sans-serif",
};

export const fontWeights = [400, 500, 600, 700];

export const lineHeights = {
  heading: 1.5,
  body: 1.3,
};
