import React, { useState, createContext, useContext } from "react";

interface AuthContextType {
  jwt: string;
  setJwt: React.Dispatch<React.SetStateAction<string>>;
<<<<<<< Updated upstream
=======
  userId: number;
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
>>>>>>> Stashed changes
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const AuthContextProvider: React.FC = ({ children }) => {
  const [jwt, setJwt] = useState("");
<<<<<<< Updated upstream
  return (
    <AuthContext.Provider value={{ jwt, setJwt }}>
=======
  const [userId, setUserId] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <AuthContext.Provider
      value={{
        jwt,
        setJwt,
        userId,
        setUserId,
        firstName,
        setFirstName,
        lastName,
        setLastName,
      }}
    >
>>>>>>> Stashed changes
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => useContext(AuthContext);

export default AuthContextProvider;
