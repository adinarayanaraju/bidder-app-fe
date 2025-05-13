import React, { useState } from "react";
import { FaAngleDown, FaHome, FaUsers } from "react-icons/fa";
import { routeConstants } from "../utils/routeConstant";
import { useLocation, useNavigate } from "react-router-dom";
import "./adminSidebar.scss";
export default function AdminSidebar() {
  const [expandedSections, setExpandedSections] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const menItems = [
    {
      id: "home",
      label: "Home",
      icon: <FaHome />,
      path: routeConstants.HOME_PAGE,
    },
    {
      id: "userManagement",
      label: "User Management",
      icon: <FaUsers />,
      children: [
        {
          id: "appUser",
          label: "App User",
          path: "/admin/user/app",
        },
        {
          id: "webUser",
          label: "Web User",
          path: "/admin/user/web",
        },
      ],
    },
  ];
  const handleNavigation = (path) => {
    if (path) {
      navigate(path);
    }
  };
  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };
  return (
    <div className="admin-sidebar-wrapper">
      <ul className="menu-list">
        {menItems?.map((item) => (
          <li className="menu-item" key={item?.id}>
            <div
              className={`menu-link ${
                item?.path === location?.pathname ? "active" : ""
              }`}
              onClick={() =>
                item?.children
                  ? toggleSection(item?.id)
                  : handleNavigation(item?.path)
              }
            >
              <span className="icon">{item?.icon}</span>
              <span>{item?.label}</span>
              {item?.children && (
                <FaAngleDown
                  className={`arrow ${
                    expandedSections[item?.id] ? "open" : ""
                  } `}
                />
              )}
            </div>
            {item?.children && expandedSections[item?.id] && (
              <ul className="submenu">
                {item?.children?.map((subItem) => (
                  <li
                    className={`submenu-item ${
                      item?.path === location?.pathname ? "active" : ""
                    }`}
                    key={item?.id}
                    onClick={() => handleNavigation(subItem?.path)}
                  >
                    {subItem?.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
