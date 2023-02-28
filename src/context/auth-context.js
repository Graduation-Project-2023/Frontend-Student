import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const [token, setToken] = useState(storageToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    cookies.set("token", token);
    setToken(token);
  };

  const logoutHandler = () => {
    cookies.remove("token");
    setToken(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
