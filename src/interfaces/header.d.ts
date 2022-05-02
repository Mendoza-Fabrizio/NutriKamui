import React from 'react';
import {AppRoutes, MainNavigationProp} from '@router/index';

export type HeaderNavProps = MainNavigationProp<AppRoutes.PrincipalRoute>;

export interface HeaderProps {
  customGoBack?: () => void;
  leftComponent?: React.FC;
  haveReturnBtn: boolean;
}
