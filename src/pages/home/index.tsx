import React from 'react';
import { List, ListItemProps } from '../../components';

const createNItems = (n: number): ListItemProps[] =>
  new Array(n).fill(0).map((_, i) => ({
    name: `Name ${i}`,
    value: i * 100,
    date: `1/${i}/20`,
    days: i,
    index: i,
  }));

const items: ListItemProps[] = createNItems(3);
const Home = () => (
  <List>
    {items.map(({ index, ...etc }) => (
      <List.Item key={index} {...etc} index={index} />
    ))}
  </List>
);
export default Home;
