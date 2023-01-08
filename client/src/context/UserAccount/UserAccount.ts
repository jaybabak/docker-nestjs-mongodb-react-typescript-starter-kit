import { createContext } from 'react';
import { UserAccountInterface } from "./UserAccountInterface";

export const UserAccount = createContext<UserAccountInterface>({
  isAuthenticated: false,
  setAuthenticatedStatus: () => {}
});