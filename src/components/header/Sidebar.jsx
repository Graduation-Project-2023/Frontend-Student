import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import i18next from "i18next";
import profile from "../../shared/images/profile.png";

export const Sidebar = (props) => {
  const menu = props.menu;
  const authContext = useAuth();
  const { t } = useTranslation();

  return (
    <nav className="sidebar">
      <div className="sidebar-title">
        <img src={profile} alt="logo" />
        <div>
          <h1>
            {i18next.language === "en"
              ? authContext.student.englishName || ""
              : authContext.student.arabicName || ""}
          </h1>
        </div>
      </div>

      <ul className="sidebar-list">
        {menu.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "sidebar-list-active" : ""
                }
              >
                <span className="sidebar-list-icon">{item.icon}</span>
                <span className="sidebar-list-text">{`${t(item.name)}`}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
