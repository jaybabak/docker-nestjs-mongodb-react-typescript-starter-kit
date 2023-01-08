import React from 'react';
import { AuthInterface } from './AuthtInterface';

/* istanbul ignore next */
const noop = () => {};

export const Auth = React.createContext<AuthInterface>({
  authenticated: false,
  setAuthenticated: noop,
});
