import React from "react";
import { Auth } from "../../../context/Auth/Auth";
import { TokenStorage } from "../../../services";

export const useAuth = (): {authenticated:boolean, setUserAuthenticated: Function, setUserUnauthenticated: Function} => {
  const { authenticated, setAuthenticated } = React.useContext(Auth);

  /**
   * Set the global app state for the user to unathenticated.
   * 
   * @param [accessToken] The access token to set.
   */
  const setUserAuthenticated = (accessToken:string): void => {
    if (accessToken) {
      TokenStorage.getInstance().setAccessToken(accessToken);
      setAuthenticated(true);
    }
  }

  /**
   * Set the global app state for the user to unathenticated.
   */
  const setUserUnauthenticated = (): void => {
    TokenStorage.getInstance().clear();
    setAuthenticated(false);
  }

  return {
    authenticated: authenticated,
    setUserAuthenticated: setUserAuthenticated,
    setUserUnauthenticated: setUserUnauthenticated
  };
};
