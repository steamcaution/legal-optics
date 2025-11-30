import { PropsWithChildren } from 'react';

export interface AppPageLayoutProps {
  className?: string;
  isMainSection: boolean;
}

export interface TPageWrapper extends PropsWithChildren, AppPageLayoutProps {}
