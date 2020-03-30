import React, { ReactChild } from 'react';
import { Box } from 'rebass';
import { ListItem } from './ListItem';

export type ListProps = {
  children: ReactChild | ReactChild[];
};

export const List = ({ children, ...rest }: ListProps) => {
  return (
    <Box data-testid="list" {...rest}>
      {React.Children.map(children, (child: any, index) => {
        return React.cloneElement(child, {
          ...child.props,
          index,
        });
      })}
    </Box>
  );
};

List.Item = ListItem;
