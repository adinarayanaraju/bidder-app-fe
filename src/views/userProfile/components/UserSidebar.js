import React, { useState } from "react";
import "./userSidebar.scss";
import { FaHome, FaGavel, FaCog, FaSignOutAlt } from "react-icons/fa";
export default function UserSidebar() {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaHome /> },
    { id: "auctionList", label: "Auction List", icon: <FaGavel /> },
    { id: "bidList", label: "Bid List", icon: <FaGavel /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
    { id: "logout", label: "Logout", icon: <FaSignOutAlt /> },
  ];
  const [activeTab, setActiveTab] = useState("dashboard");
  return (
    <div className="user-sidebar-wrapper p-4 pt-2">
      <div className="sidebar-card">
        <p className="welcome-text">Welcome, Vivek Kumar</p>
        <div className="menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
              }}
              className={`menu-item ${activeTab === item.id ? "active" : ""}`}
            >
              <span className="icon">{item?.icon}</span>
              <span className="label">{item?.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="content">
        {activeTab === "dashboard" && <h1>Dashboard components</h1>}
      </div>
    </div>
  );
}
