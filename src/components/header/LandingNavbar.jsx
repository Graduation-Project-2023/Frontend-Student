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
      <Link to="/staff" className="landing-nav-title">
        {t("home.staff")}
      </Link>
      <Link to="/undergraduate" className="landing-nav-title">
        {t("home.undergraduate")}
      </Link>
      <Link to="/landing" className="landing-nav-title">
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
