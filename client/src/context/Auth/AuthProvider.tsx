import React from 'react';
import { Auth } from './Auth';

export type AuthProviderProps = {
  defaultAuthenticated?: boolean;
  children?: any;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({
  defaultAuthenticated = false,
  children,
}) => {
  const [authenticated, setAuthenticated] = React.useState(
    defaultAuthenticated
  );

  const contextValue = React.useMemo(
    () => ({
      authenticated,
      setAuthenticated,
    }),
    [authenticated]
  );

  return (
    <Auth.Provider value={contextValue}>{children}</Auth.Provider>
  );
};
