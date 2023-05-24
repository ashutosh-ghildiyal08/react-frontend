import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
function Dashboard() {
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar />
      <Content />
    </div>
  );
}
export default Dashboard;
