import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  token: "",
  role: "",
  id: "",
  isLoggedIn: false,
  login: (token, role, id) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const storageRole = cookies.get("role");
  const storageStudId = cookies.get("stud_id");

  const [token, setToken] = useState(storageToken);
  const [role, setRole] = useState(storageRole);
  const [studId, setStudId] = useState(storageStudId);

  const userIsLoggedIn = !!token;

  const loginHandler = (token, role, id) => {
    cookies.set("token", token);
    cookies.set("role", role);
    cookies.set("stud_id", id);
    setRole(role);
    setToken(token);
    setStudId(id);
  };

  const logoutHandler = () => {
    cookies.remove("token");
    cookies.remove("role");
    cookies.remove("stud_id");
    setStudId(null);
    setToken(null);
    setRole(null);
  };

  const contextValue = {
    token: token,
    role: role,
    id: studId,
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
