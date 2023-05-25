import React from "react";
import "../css/addUser.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AddUser() {
  return (
    <section className="">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration bg-indigo text-white">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-white">
                  Registration Form
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="email">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="password">
                          Password
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="firstName"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="firstName">
                          First Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="lastName"
                          className="form-control form-control-lg"
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
                        <input
                          type="text"
                          id="addressLine1"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="addressLine1">
                          Address Line 1
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="addressLine2"
                          className="form-control form-control-lg"
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
                        <input
                          type="city"
                          id="city"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="city">
                          City
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="country"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="country">
                          Country
                        </label>
                      </div>
                    </div>
                  </div>
                  <input
                    className="btn btn-primary btn-lg"
                    type="submit"
                    value="Add User"
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
export default AddUser;
