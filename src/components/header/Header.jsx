import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import { BASE_URL } from "../../shared/API";
import axios from "axios";
import i18next from "i18next";
import classNames from "classnames";

// Reusable Components
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { BiWorld } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

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
  const { t } = useTranslation();
  const currentLanguage = languages.find(
    (lang) => lang.code === i18next.language
  );

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
        authContext.logout();
        setUserUX({ loading: false, error: false, errorMsg: "" });
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
    <nav className="main-header">
      <div className="main-header-item">
        {authContext.isLoggedIn && (
          <Dropdown>
            <Dropdown.Toggle>
              <CgProfile size={30} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <DropdownItem>{t("landingNav.home")}</DropdownItem>
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
        {authContext.isLoggedIn && (
          <Dropdown>
            <Dropdown.Toggle>
              <BiWorld size={30} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>{t("common.language")}</Dropdown.Item>
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
        )}
      </div>
    </nav>
  );
};
