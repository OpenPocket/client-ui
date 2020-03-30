import React from 'react';
import { Box } from 'rebass';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 5rem 6rem 4rem;
`;
export type ListItemProps = {
  name?: string;
  value?: number;
  date: string;
  days: number;
  index: number;
};

export const ListItem = ({ name = 'No Name', value = 0, date, days, index }: ListItemProps) => (
  <Wrapper
    className="item"
    role="button"
    tabIndex={0}
    // css={{ background: index % 2 === 0 && 'rgba(0, 0, 0, 0.1)' }}
  >
    <Box>{name}</Box>
    <Box>{value}</Box>
    <Box>{date}</Box>
    <Box>{days}</Box>
  </Wrapper>
);
