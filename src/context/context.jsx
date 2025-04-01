import { Children, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={username}></UserContext.Provider>;
};
