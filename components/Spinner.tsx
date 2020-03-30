import React from 'react';
import { rem } from 'polished';
import { keyframes } from '@emotion/core';

import { styled } from '../utils';
import { getColor } from '../theme/utils';

type SpinnerProps = {
  size?: number;
  color?: string;
};

type SpinnerIconProps = Required<Pick<SpinnerProps, 'size'>>;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.svg<SpinnerIconProps>`
  width: ${props => rem(props.size)};
  height: ${props => rem(props.size)};
  animation: ${spin} 1.5s infinite linear;
`;

export const Spinner = ({ size = 24, color = 'primary' }: SpinnerProps) => {
  return (
    <SpinnerIcon
      data-testid="spinner-icon"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      size={size}
      fill={getColor(color)}
    >
      <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
    </SpinnerIcon>
  );
};
