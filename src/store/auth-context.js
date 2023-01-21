import React, { useState, useEffect } from "react";
const AuthContext = React.createContext({
  isloggedIn: false,
  onLogout: () => {},
  onLogin: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("LoggedIn") === "true";
  });

  useEffect(() => {
    if (!isLoggedIn) localStorage.removeItem("LoggedIn");
  }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("LoggedIn", "true");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
