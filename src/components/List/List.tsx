import React, { ReactChild } from 'react';
import { Box } from 'rebass';
import styled from '@emotion/styled';
import { ListItem } from './ListItem';

export type ListProps = {
  children: ReactChild | ReactChild[];
};

const Wrapper = styled(Box)`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  font-size: 0.9rem;
`;

export const List = ({ children, ...rest }: ListProps) => {
  return (
    <Wrapper data-testid="list" {...rest}>
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, {
          ...child.props,
          index,
        });
      })}
    </Wrapper>
  );
};

List.Item = ListItem;
