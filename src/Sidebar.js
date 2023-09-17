import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarOption title="Apparel" />
      <SidebarOption title="Accessories" />
      <SidebarOption title="Best sellers" />
      <SidebarOption title="50% off" />
    </div>
  );
}

export default Sidebar;
