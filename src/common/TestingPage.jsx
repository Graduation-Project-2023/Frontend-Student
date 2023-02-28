import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../shared/API";
import { ForgotPwd } from "../components/popups/ForgotPwd";

export const TestingPage = () => {
  const [userUX, setUserUX] = useState({
    form: {
      delete: false,
      loading: false,
      error: false,
      errorMsg: "",
    },
    formData: {
      loading: false,
      error: false,
      errorMsg: "",
    },
  });

  const handleDelete = () => {
    setUserUX((prev) => ({
      ...prev,
      form: { ...prev.form, loading: true },
    }));
    axios
      .put(BASE_URL + "/auth/student_login", {
        email: "asdasd",
        password: "asdasd",
      })
      .then((res) => {
        console.log("hello");
      })
      .catch((err) => {
        console.log("hello");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({
      ...prev,
      form: { delete: true, loading: false, error: true, errorMsg: "asdas" },
    }));

    return (
      <div>
        <ForgotPwd icon={""} header={""} />
      </div>
    );
  };
};
