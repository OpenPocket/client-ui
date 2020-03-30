import React, { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
  <div className="page">{children}</div>
);
