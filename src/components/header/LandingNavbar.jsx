import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";

export const LandingNavbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authContext = useAuth();

  return (
    <nav className="landing-nav">
      <Link to="/" className="landing-nav-title">
        {t("landingNav.home")}
      </Link>
      <Link to="#" className="landing-nav-title">
        {t("landingNav.colleges")}
      </Link>
      <Link to="#" className="landing-nav-title">
        {t("landingNav.faculties")}
      </Link>
      <Link to="#" className="landing-nav-title">
        {t("landingNav.research")}
      </Link>
      <Link to="#" className="landing-nav-title">
        {t("landingNav.center")}
      </Link>
      <Link to="/admission_info" className="landing-nav-title">
        {t("landingNav.admission_info")}
      </Link>
      <Link
        to={authContext.isLoggedIn ? "/student" : "/login"}
        className="landing-nav-title"
      >
        {t("common.portal")}
      </Link>
    </nav>
  );
};
