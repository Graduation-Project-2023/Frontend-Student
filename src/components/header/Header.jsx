import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";
import i18next from "i18next";
import axios from "axios";
import { BASE_URL } from "../../shared/API";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "./logo.png";

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
  const [userUX, setUserUX] = useState({
    loading: false,
    error: false,
    errorMsg: "",
  });
  const { t } = useTranslation();
  const authContext = useAuth();
  const currentLanguage = languages.find(
    (lang) => lang.code === i18next.language
  );

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("common.app_title");
  }, [currentLanguage, t]);

  const handleLogout = () => {
    setUserUX((prev) => ({ ...prev, loading: true }));
    axios
      .post(BASE_URL + "/auth/logout")
      .then((res) => {
        console.log(res);
        authContext.logout();
        setUserUX((prev) => ({ ...prev, loading: false }));
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

  const toggleLang = () => {
    const nextLanguage = languages.find(
      (lang) => lang.code !== i18next.language
    );
    i18next.changeLanguage(nextLanguage.code);
  };

  return (
    <div>
      <header className="hbody">
        <div className="hbody-options">
          <button className="langbtn" onClick={toggleLang}>
            {i18next.language === "en" ? "AR" : "EN"}
          </button>
          <label className="search-icon">
            <AiOutlineSearch />
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              defaultValue=""
              name="s"
              title="Search for:"
            />
          </label>
        </div>
        <div className="hbody-text">Suez Canal University</div>
        <div>
          <img className="hbody-logo" src={logo} alt="/" />
        </div>{" "}
        <div>
          <button
            onClick={() => {
              authContext.logout();
            }}
          >
            log out
          </button>
        </div>
      </header>

      {/* <ForgotPwd icon={""} header={""} /> */}
    </div>
  );
};

export default Header;
