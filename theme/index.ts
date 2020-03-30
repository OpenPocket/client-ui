import { fonts, lineHeights, fontSizes, fontWeights } from './typography';
import { colors } from './colors';
import { space } from './space';
import { buttons } from './buttons';
import { breakpoints, mq } from './breakpoints';

const theme = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  space,
  buttons,
  breakpoints,
  mq,
};
export type themeProptypes = typeof theme;

export default theme;
