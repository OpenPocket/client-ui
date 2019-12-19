import React from 'react';

import { render } from '@testing-library/react';
import Home from './index';

test('renders seamlessly', () => {
  const { container } = render(<Home />);

  expect(container).toBeTruthy();
  expect(container).toMatchSnapshot();
});
