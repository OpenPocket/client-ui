import React, { ReactNode } from 'react';
import { ModalProvider } from '../index';

export const Layout = ({
  children,
  onScroll,
}: {
  children: ReactNode;
  onScroll?: (event: React.UIEvent<HTMLDivElement>) => void;
}) => (
  <div className="page" onScroll={onScroll}>
    <ModalProvider>{children}</ModalProvider>
  </div>
);
