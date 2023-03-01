import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  token: "",
  role: "",
  isLoggedIn: false,
  login: (token, role) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const storageRole = cookies.get("role");
  const [token, setToken] = useState(storageToken);
  const [role, setRole] = useState(storageRole);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, role) => {
    cookies.set("token", token);
    cookies.set("role", role);
    setRole(role);
    setToken(token);
  };

  const logoutHandler = () => {
    cookies.remove("token");
    cookies.remove("role");
    setToken(null);
    setRole(null);
  };

  const contextValue = {
    token: token,
    role: role,
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
