import { colors } from './colors';
import { darken, opacify } from 'polished';
const hoverSelector = ':hover:not(:disabled)';

const buttonStyles = {
  cursor: 'pointer',
  transition: 'background-color 200ms',
  px: '1.3em',
  py: '.7em',
  minHeight: ['35px', '50px'],
  outline: 'none',
  fontFamily: 'body',
  fontWeight: 3,
  minWidth: 100,
  color: 'gray300',
};

export const buttons = {
  default: {
    ...buttonStyles,
    background: colors.gray100,
    [hoverSelector]: {
      backgroundColor: opacify(0.05, colors.gray100),
    },
  },
  primary: {
    ...buttonStyles,
    background: `linear-gradient(to right, ${colors.blue200} 0%, ${colors.green500}  50%)`,
    backgroundSize: '200% 100%',
    backgroundPosition: '10% 0%',
    color: 'white',
    [hoverSelector]: {
      backgroundPosition: '100% 0%',
    },
  },
  solid: {
    ...buttonStyles,
    color: 'white',
    backgroundColor: colors.blue500,
    [hoverSelector]: {
      backgroundColor: darken(0.05, colors.blue500),
    },
  },
  clear: {
    ...buttonStyles,
    backgroundColor: 'transparent',
  },
  outline: {
    ...buttonStyles,
    color: 'gray200',
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: colors.gray100,
    [hoverSelector]: {
      backgroundColor: colors.gray100,
    },
  },
};
