import React, { useState, createContext, useContext } from "react";

interface AuthContextType {
  jwt: string;
  setJwt: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider: React.FC = ({ children }) => {
  const [jwt, setJwt] = useState("");
  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);

export default AuthContextProvider;
