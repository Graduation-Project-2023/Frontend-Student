import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  token: "",
  role: "",
  id: "",
  isLoggedIn: false,
  setId: (id) => {},
  login: (token, role) => {},
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

  const loginHandler = (token, role) => {
    cookies.set("token", token);
    cookies.set("role", role);
    setRole(role);
    setToken(token);
  };

  const logoutHandler = () => {
    cookies.remove("token");
    cookies.remove("role");
    cookies.remove("stud_id");
    setStudId(null);
    setToken(null);
    setRole(null);
  };

  const studentIdSetter = (id) => {
    cookies.set("stud_id", id);
    setStudId(id);
  };

  const contextValue = {
    token: token,
    role: role,
    id: studId,
    isLoggedIn: userIsLoggedIn,
    setId: studentIdSetter,
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
