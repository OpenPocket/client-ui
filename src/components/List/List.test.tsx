import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';
import { ListItemProps } from './ListItem';

const createNItems = (n: number): ListItemProps[] =>
  new Array(n).fill(0).map((_, i) => ({
    name: `Name ${i}`,
    value: i * 100,
    date: `1/${i}/20`,
    days: i,
    index: i,
  }));

const createList = (items: ListItemProps[]) => (
  <List>
    {items.map(({ index, ...etc }) => (
      <List.Item key={index} {...etc} index={index} />
    ))}
  </List>
);

test('renders seamlesly', () => {
  const items: ListItemProps[] = createNItems(3);
  const { getByTestId } = render(createList(items));
  const listEl = getByTestId('list');

  expect(listEl).toBeTruthy();
  expect(listEl.childElementCount).toBe(3);
});
