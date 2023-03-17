import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext({
  userAuthentication: null,
  setUserAuthentication: () => {},
});

export const AuthProvider = ({ children }) => {
  const [userAuthentication, setUserAuthentication] = useState(
    sessionStorage.getItem("status")
  );

  const toggleUserAuthentication = () => {
    setUserAuthentication(
      userAuthentication === "logged-in" ? "logged-in" : ""
    );
  };

  const value = { userAuthentication, toggleUserAuthentication };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
