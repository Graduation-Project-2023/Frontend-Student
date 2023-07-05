import { createContext, useState } from "react";
import cookies from "js-cookie";

const AuthContext = createContext({
  token: "",
  role: "",
  id: "",
  student: {},
  rcpts: "false",
  login: (token, role, id) => {},
  logout: () => {},
  studentHandler: (student) => {},
  rcptsHandler: (rcpts) => {},
});

export const AuthContextProvider = (props) => {
  const storageToken = cookies.get("token");
  const storageRole = cookies.get("role");
  const storageStudId = cookies.get("stud_id");
  const storageRcpts = cookies.get("rcpts");
  let storageStudent = {};
  if (cookies.get("student") !== undefined) {
    storageStudent = JSON.parse(cookies.get("student"));
  }
  const [token, setToken] = useState(storageToken);
  const [role, setRole] = useState(storageRole);
  const [studId, setStudId] = useState(storageStudId);
  const [student, setStudent] = useState(storageStudent);
  const [rcpts, setRcpts] = useState(storageRcpts);

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
    cookies.remove("student");
    cookies.remove("rcpts");
    setStudId(null);
    setToken(null);
    setRole(null);
    setRcpts(null);
    setStudent({});
  };

  const studentHandler = (student) => {
    cookies.set("student", JSON.stringify(student));
    setStudent(student);
  };

  const rcptsHandler = (rcpts) => {
    cookies.set("rcpts", rcpts);
    setRcpts(rcpts);
  };

  const contextValue = {
    token: token,
    role: role,
    id: studId,
    student: student,
    rcpts: rcpts,
    login: loginHandler,
    logout: logoutHandler,
    studentHandler: studentHandler,
    rcptsHandler: rcptsHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
