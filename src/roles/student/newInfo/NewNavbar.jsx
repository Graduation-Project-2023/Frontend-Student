import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const NewNavbar = (props) => {
  const navType = props.navType;
  const { t } = useTranslation();
  const navItems = [
    { id: "1", path: "info", name: "student.info" },
    { id: "2", path: "available_courses", name: "student.courses" },
    { id: "3", path: "registeration", name: "student.Registration" },
    { id: "4", path: "fees", name: "student.fees" },
    { id: "5", path: "schedule", name: "student.schedule" },
    { id: "6", path: "grades", name: "student.grades" },
    { id: "7", path: "progress", name: "student.progress" },
    { id: "8", path: "desires", name: "student.desire" },
  ];
  const dropNavItems = [
    { id: "1", path: "info", name: "student.info" },
    {
      id: "2",
      drop: true,
      name: "student.courses",
      items: [
        { id: "1", path: "available_courses", name: "student.courses" },
        { id: "2", path: "registeration", name: "student.Registration" },
      ],
    },
    { id: "3", path: "schedule", name: "student.schedule" },
    { id: "4", path: "grades", name: "student.grades" },
    {
      id: "5",
      drop: true,
      name: "student.fees",
      items: [
        { id: "1", path: "desires", name: "student.desire" },
        { id: "2", path: "fees", name: "student.fees" },
      ],
    },
    { id: "6", path: "progress", name: "student.progress" },
  ];

  // cases: 1-blend effect, 2-transition effect, 3-underline effect, 4-box effect
  switch (navType) {
    case 1:
      return (
        <nav className="blendNavbar">
          <ul>
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink to={item.path}>{t(item.name)}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      );
    case 2:
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
    case 3:
      return (
        <nav className="dropNavbar">
          <ul>
            {dropNavItems.map((item) => {
              if (!item.drop) {
                return (
                  <li key={item.id}>
                    <NavLink to={item.path}>{t(item.name)}</NavLink>
                  </li>
                );
              } else {
                return (
                  <li key={item.id}>
                    <Link to="#">{t(item.name)}</Link>
                    <ul className="submenu">
                      {item.items.map((subItem) => {
                        return (
                          <li key={subItem.id}>
                            <NavLink to={subItem.path}>
                              {t(subItem.name)}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
      );
    case 4:
      return <nav>third</nav>;
    default:
      return <nav>default</nav>;
  }
};
