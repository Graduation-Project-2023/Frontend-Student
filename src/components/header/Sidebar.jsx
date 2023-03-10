import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Sidebar = (props) => {
  const menu = props.menu;

  const { t } = useTranslation();

  return (
    <nav className="sidebar">
      <div className="sidebar-title">
        <div>
          <h1>name</h1>
          <h2>dataaaaa</h2>
        </div>
        <img
          src="https://www.pngmart.com/files/10/User-Account-Person-PNG-File.png"
          alt="logo"
        />
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
                {`${t(item.name)}`}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
