import { getColor } from './getColor';
import { colors } from '../../theme/colors';

test('should return correct color', () => {
  expect(getColor('white')).toBe(colors.white);
});
