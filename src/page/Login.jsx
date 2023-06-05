import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const postData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.email;
        // navigate("/" + id + "/user");
        sessionStorage.setItem("token", token);
        navigate("/user");
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setError("Wrong Credentials!");
          navigate("/");
        }
      });
  };
  return (
    <section className=" pt-5">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src={require("../login-img.jpg")}
              className="img-fluid"
              alt={"logo"}
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="text-danger">{error && error}</div>
            <form>
              <h1>Login</h1>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Email address</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label">Password</label>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  onClick={postData}
                  type="button"
                  className="btn btn-primary btn-lg"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
