import { fonts, fontSizes, fontWeights } from './typography';
import { colors } from './colors';
import { space } from './space';
import { buttons } from './buttons';
import { breakpoints, mq } from './breakpoints';
export * from './globalStyles';
const theme = {
  fonts,
  fontSizes,
  fontWeights,
  colors,
  space,
  buttons,
  breakpoints,
  mq,
};
export type themeProptypes = typeof theme;
export default theme;
