import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav id="sidebar">
      <div className="p-4">
        <h1>
          <Link to="/user" className="logo">
            Welcome
          </Link>
        </h1>
        <ul className="list-unstyled components mb-5">
          <li className="">
            <Link to="/user">
              <span className="fa fa-user mr-3"></span> User
            </Link>
          </li>

          <li>
            <Link to="/location">
              <span className="fa fa-cogs mr-3"></span>Location
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
