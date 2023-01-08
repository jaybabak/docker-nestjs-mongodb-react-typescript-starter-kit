export type AuthInterface = {
  authenticated: boolean;
  setAuthenticated: (isAuthenticated: boolean) => void;
};