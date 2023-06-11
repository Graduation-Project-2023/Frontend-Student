import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  token: "",
  role: "",
  id: "",
  student: {},
  isLoggedIn: false,
  login: (token, role, id) => {},
  logout: () => {},
  studentHandler: (student) => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const storageRole = cookies.get("role");
  const storageStudId = cookies.get("stud_id");
  let storageStudent = {};
  if (cookies.get("student") !== undefined) {
    storageStudent = JSON.parse(cookies.get("student"));
  }
  const [token, setToken] = useState(storageToken);
  const [role, setRole] = useState(storageRole);
  const [studId, setStudId] = useState(storageStudId);
  const [student, setStudent] = useState(storageStudent);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (token, role, id) => {
    cookies.set("token", token);
    cookies.set("role", role);
    cookies.set("stud_id", id);
    setRole(role);
    setToken(token);
    setStudId(id);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    cookies.remove("token");
    cookies.remove("role");
    cookies.remove("stud_id");
    cookies.remove("student");
    setStudId(null);
    setToken(null);
    setRole(null);
    setStudent({});
    setIsLoggedIn(false);
  };

  const studentHandler = (student) => {
    cookies.set("student", JSON.stringify(student));
    setStudent(student);
  };

  const contextValue = {
    token: token,
    role: role,
    id: studId,
    student: student,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    studentHandler: studentHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
