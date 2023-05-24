import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";

function Sidebar() {
  return (
    <nav id="sidebar">
      <div className="p-4">
        <h1>
          <a href="/home" className="logo">
            Welcome
          </a>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="">
            <a href="#">
              <span className="fa fa-user mr-3"></span> User
            </a>
          </li>

          <li>
            <a href="#">
              <span className="fa fa-cogs mr-3"></span>Location
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
