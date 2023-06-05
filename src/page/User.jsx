import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/content.css";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function User() {
  const navigate = useNavigate();
  // const { logggedInUserId } = useParams();
  useEffect(() => {
    if (sessionStorage.length === 0) {
      navigate("/");
    }
  });
  const logggedInUserEmail = sessionStorage.getItem("token");
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const userListRes = async () => {
      await axios
        .get("http://localhost:8080/users")
        .then((response) => setUserData(response.data));
    };
    userListRes();
  }, []);

  const handleDelete = (id) => {
    const url = "http://localhost:8080/users/" + id;
    axios.delete(url).then((res) => {
      if (res.status === 200) {
        window.location.reload(true);
      }
    });
  };
  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar />
      <div id="content" className="p-4 p-md-5 pt-5">
        <div className="container">
          <div>
            <h2 className="mb-4">User Details:</h2>
          </div>
          <div>
            <Link to="/user/create" className="btn btn-primary mb-5">
              Add User
            </Link>
          </div>
        </div>

        <div className="bg-image">
          <div className="mask d-flex align-items-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="card shadow-2-strong">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Email</th>
                              <th scope="col">First Name</th>
                              <th scope="col">Last Name</th>
                              <th scope="col">Address Line 1</th>
                              <th scope="col">Address Line 2</th>
                              <th scope="col">City</th>
                              <th scope="col">Country</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {userData
                              .filter((e) => e.email != logggedInUserEmail)
                              .map((user, index) => {
                                return (
                                  <tr key={index}>
                                    <td>{user.email}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.addressLine1}</td>
                                    <td>{user.addressLine2}</td>
                                    <td>{user.city}</td>
                                    <td>{user.country}</td>

                                    <td>
                                      <ul className="list-inline m-0">
                                        <li className="list-inline-item">
                                          <Link
                                            to={"/user/update/" + user.id}
                                            className="btn btn-success btn-sm rounded-0"
                                            type="button"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Edit"
                                          >
                                            <i className="fa fa-edit"></i>
                                          </Link>
                                        </li>
                                        <li className="list-inline-item">
                                          <button
                                            onClick={(e) =>
                                              handleDelete(user.id)
                                            }
                                            className="btn btn-danger btn-sm rounded-0"
                                            type="button"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="Delete"
                                          >
                                            <i className="fa fa-trash"></i>
                                          </button>
                                        </li>
                                      </ul>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;
