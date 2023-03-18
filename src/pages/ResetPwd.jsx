import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { STUDENT_URL } from "../shared/API";
import { useTranslation } from "react-i18next";
import { BiError } from "react-icons/bi";
import { FormButton } from "../components/buttons/Buttons";
import lock from "../shared/images/lock.png";
import { LoginTemplate } from "../components/other/LoginTemplate";

export const ResetPwd = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { token } = useParams();
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [pwd, setPwd] = useState(false);
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateInput(e);
  };

  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = "Please enter the Password";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match";
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  const handlePwdReset = (e) => {
    e.preventDefault();
    setUserUX((prev) => ({ ...prev, loading: true, error: false }));
    axios
      .post(STUDENT_URL + "api/reset_password/" + token, {
        password: input.password,
        confpassword: input.confirmPassword,
      })
      .then((res) => {
        console.log(res);
        setUserUX((prev) => ({ ...prev, loading: false }));
        setPwd(true);
        setTimeout(() => {
          navigate("/admin/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setUserUX({
          loading: false,
          error: true,
          errorMsg: error.response.data.message,
        });
      });
  };

  return (
    <LoginTemplate
      handle={handlePwdReset}
      input1={t(`reset.new-pswrd`)}
      input2={t(`reset.conf-pswrd`)}
      inputone={
        <input
          type="password"
          name="password"
          id="password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
          required
        />
      }
      inputtwo={
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
          required
        />
      }
      logo={lock}
      forget={false}
      title=" "
      button={t(`reset.button`)}
    />
  );
};
