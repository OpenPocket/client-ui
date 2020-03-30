import React from 'react';
import { Box } from 'rebass';

export type ListItemProps = {
  name?: string;
  value?: number;
  date: string;
  days: number;
  index: number;
};

const RowProps = {
  fontSize: [1, 2],
  p: [2, 3],
};
export const ListItem = ({ name = 'No Name', value = 0, date, days, index }: ListItemProps) => (
  <Box
    className="item"
    role="button"
    tabIndex={0}
    bg={index % 2 === 0 ? 'gray100' : ''}
    css={{
      display: 'grid',
      gridTemplateColumns: '1fr 5rem 6rem 4rem',
    }}
  >
    <Box {...RowProps}>{name}</Box>
    <Box {...RowProps}>{value}</Box>
    <Box {...RowProps}>{date}</Box>
    <Box {...RowProps}>{days}</Box>
  </Box>
);
