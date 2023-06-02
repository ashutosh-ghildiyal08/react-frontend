import "../css/addUser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
  const navigate = useNavigate();
  // const { logggedInUserId } = useParams();
  useEffect(() => {
    if (sessionStorage.length === 0) {
      navigate("/");
    }
  });
  const [error, setError] = useState([]);
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8080/users/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .put("http://localhost:8080/users", data)
      .then((res) => {
        navigate("/user");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          console.log(error.response.data);
          setError(error.response.data);
        }
      });
  };

  return (
    <section className="">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration bg-indigo text-white">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-white">
                  Update User Form
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.email}
                        </span>
                        <input
                          type="email"
                          value={data.email}
                          id="email"
                          className="form-control form-control-lg"
                          readonly="readonly"
                        />
                        <label className="form-label" for="email">
                          Email
                        </label>
                      </div>
                    </div>
                    {/* <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          value={data.password}
                          id="password"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                          }
                        />
                        <label className="form-label" for="password">
                          Password
                        </label>
                      </div>
                    </div> */}
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.firstName}
                        </span>
                        <input
                          type="text"
                          value={data.firstName}
                          id="firstName"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({ ...data, firstName: e.target.value })
                          }
                        />
                        <label className="form-label" for="firstName">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.lastName}
                        </span>
                        <input
                          type="text"
                          value={data.lastName}
                          id="lastName"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({ ...data, lastName: e.target.value })
                          }
                        />
                        <label className="form-label" for="lastName">
                          Last Name
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.addressLine1}
                        </span>
                        <input
                          type="text"
                          value={data.addressLine1}
                          id="addressLine1"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({
                              ...data,
                              addressLine1: e.target.value,
                            })
                          }
                        />
                        <label className="form-label" for="addressLine1">
                          Address Line 1
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.addressLine2}
                        </span>
                        <input
                          type="text"
                          value={data.addressLine2}
                          id="addressLine2"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({
                              ...data,
                              addressLine2: e.target.value,
                            })
                          }
                        />
                        <label className="form-label" for="addressLine2">
                          Address Line 2
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.city}
                        </span>
                        <input
                          type="city"
                          value={data.city}
                          id="city"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({ ...data, city: e.target.value })
                          }
                        />
                        <label className="form-label" for="city">
                          City
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <span className="font-weight-bold  text-warning">
                          {error && error.country}
                        </span>
                        <input
                          type="text"
                          value={data.country}
                          id="country"
                          className="form-control form-control-lg"
                          onChange={(e) =>
                            setData({ ...data, country: e.target.value })
                          }
                        />
                        <label className="form-label" for="country">
                          Country
                        </label>
                      </div>
                    </div>
                  </div>
                  <input
                    className="btn btn-light btn-lg"
                    type="submit"
                    value="Update User"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpdateUser;
