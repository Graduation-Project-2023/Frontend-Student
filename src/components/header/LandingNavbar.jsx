import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../../hooks/useAuth";

export const LandingNavbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const authContext = useAuth();

  const navItems = [
    { id: "1", path: "/", name: "landingNav.home" },
    { id: "2", path: "/staff", name: "home.staff" },
    { id: "3", path: "/undergraduate", name: "home.undergraduate" },
    { id: "4", path: "/landing", name: "landingNav.center" },
    { id: "5", path: "/admission_info", name: "landingNav.admission_info" },
    { id: "6", path: "/login", name: "common.portal" },
  ];

  return (
    <nav className="transitionNavParent">
      <ul className="transitionNav">
        {navItems.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "transitionNav-active" : ""
                }
                data-hover={t(item.name)}
              >
                {t(item.name)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
