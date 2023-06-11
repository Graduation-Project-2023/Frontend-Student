import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FormButton } from "../../components/buttons/Buttons";
import { Link } from "react-router-dom";
import { BiError } from "react-icons/bi";
import { Alert } from "react-bootstrap";
import bck from "../../shared/images/bck.png";

export const LoginTemplate = (props) => {
  const { t } = useTranslation();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });

  useEffect(() => {
    setUserUX(props.userUX);
  }, [props.userUX]);

  return (
    <div className="loginCont" style={{ backgroundImage: `url(${bck})` }}>
      <div className="loginCont-loginCard">
        <div className="loginCont-loginCard-content">
          <div className="loginCont-loginCard-content-title">
            <h2>{props.title}</h2>
          </div>
          <form
            className="loginCont-loginCard-content-form"
            onSubmit={props.handle}
          >
            <div className="loginCont-loginCard-content-form-input" action="">
              <h6>{props.input1}</h6>
              {props.inputone}
            </div>
            <div className="loginCont-loginCard-content-form-input" action="">
              <h6>{props.input2}</h6>
              {props.inputtwo}
            </div>
            <div className="loginCont-loginCard-content-form-input" action="">
              <h6>{props.input3}</h6>
              {props.inputthree}
            </div>

            {props.forget && <Link to="/forgetpwd">{t(`login.forget`)}</Link>}
            <div className="loginCont-loginCard-content-form-button">
              {userUX.loading ? (
                <FormButton type="loading" />
              ) : (
                <button>{props.button}</button>
              )}
            </div>
            {userUX.error && (
              <Alert
                variant="danger"
                className="d-flex align-items-center"
                style={{ gap: "10px" }}
              >
                <BiError /> {t(userUX.errorMsg)}
              </Alert>
            )}
          </form>
        </div>

        <div className="loginCont-loginCard-logo">
          <h1>{t(`login.title`)}</h1>
          <img src={props.logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
