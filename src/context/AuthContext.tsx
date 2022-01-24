import React, { useState, createContext } from "react";

type Props = {
  children: React.ReactNode;
};

type InitialState = {
  userAuth: boolean;
  setUserAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<InitialState | null>(null);

export const AuthProvider: React.VFC<Props> = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    // アプリ全体で、userAuth,setUserAuthを共有する
    <AuthContext.Provider value={{ userAuth, setUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
