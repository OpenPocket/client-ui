import { colors } from './colors';
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
      backgroundColor: colors.gray100,
    },
  },
  primary: {
    ...buttonStyles,
    background: colors.blue500,
    color: 'white',
  },
};
