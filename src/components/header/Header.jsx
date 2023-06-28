import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../shared/API";
import axios from "axios";
import i18next from "i18next";
import classNames from "classnames";

// Reusable Components
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { BiWorld } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Backdrop } from "../loaders/Backdrop";

const languages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
  },
];

export const Header = () => {
  const authContext = useAuth();
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentLanguage = languages.find(
    (lang) => lang.code === i18next.language
  );

  useEffect(() => {
    setIsLoggedIn(authContext.token);
  }, [authContext.token]);

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("common.app_title");
  }, [currentLanguage, t]);

  const handleLogout = () => {
    setUserUX({
      loading: true,
      error: false,
      errorMsg: "",
    });
    axios
      .post(BASE_URL + "/auth/logout")
      .then((res) => {
        console.log(res);
        setUserUX({ loading: false, error: false, errorMsg: "" });
        authContext.logout();
      })
      .catch((error) => {
        setUserUX({
          loading: false,
          error: true,
          errorMsg: error.response.data.message,
        });
        console.log(error);
      });
  };

  return (
    <>
      {userUX.loading && <Backdrop />}
      <nav className="main-header">
        <div className="main-header-item">
          {isLoggedIn && (
            <Dropdown>
              <Dropdown.Toggle>
                <CgProfile size={30} />
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  textAlign: "center",
                }}
              >
                <DropdownItem
                  onClick={() => {
                    navigate("");
                  }}
                >
                  {t("landingNav.home")}
                </DropdownItem>
                <Dropdown.Divider />
                <DropdownItem
                  onClick={() => {
                    navigate("student");
                  }}
                >
                  {t("common.profile")}
                </DropdownItem>
                <Dropdown.Divider />
                <DropdownItem onClick={handleLogout}>
                  {t("common.logout")}
                </DropdownItem>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
        <div className="main-header-item">
          {t("common.universityName").toUpperCase()}
          {authContext.college?.id && ` - `}
          {i18next.language === "en"
            ? authContext.college?.englishName
            : authContext.college?.arabicName}
        </div>
        <div className="main-header-item">
          <Dropdown>
            <Dropdown.Toggle>
              <BiWorld size={30} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                style={{
                  textAlign: "center",
                }}
              >
                {t("common.language")}
              </Dropdown.Item>
              <Dropdown.Divider />
              {languages.map(({ code, name }) => (
                <Dropdown.Item key={code}>
                  <span
                    className={classNames("dropdown-item", {
                      disabled: i18next.language === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code);
                    }}
                  >
                    {name}
                  </span>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};
