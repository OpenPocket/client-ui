import { colors, Color } from '../colors';

export const getColor = (color: string): string => {
  return color in colors ? colors[color as Color] : color;
};
