import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
function Logout() {
  sessionStorage.clear();

  return (
    <div className="jumbotron text-center">
      <h1 className="display-3">Thank You!</h1>
      <p className="lead">
        <strong>Logout Successful</strong>
      </p>
      <p className="lead">
        <Link
          to="/"
          className="btn btn-primary btn-sm"
          href="user?action=home"
          role="button"
        >
          Login Again
        </Link>
      </p>
    </div>
  );
}
export default Logout;
