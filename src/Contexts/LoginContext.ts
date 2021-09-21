import { createContext } from "react";

export const LoginContext = createContext({
  jwt: "",
  setJwt: (jwt: string) => {},
});
