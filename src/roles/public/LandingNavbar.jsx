import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const LandingNavbar = () => {
  const { t } = useTranslation();

  const navItems = [
    { id: "1", path: "", name: "landingNav.home" },
    { id: "2", path: "staff", name: "home.staff" },
    { id: "3", path: "undergraduate", name: "home.undergraduate" },
    { id: "4", path: "postgraduate", name: "home.postgraduate" },
    { id: "5", path: "international", name: "home.international" },
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
