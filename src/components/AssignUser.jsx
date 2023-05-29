import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/content.css";
import Sidebar from "../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AssignUser() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const userListRes = async () => {
      await axios
        .get("http://localhost:8081/users")
        .then((response) => setUserData(response.data));
    };
    userListRes();
  }, []);
  const { locationId } = useParams();
  const navigate = useNavigate();
  const handleAssignUser = (userId) => {
    const url = "http://localhost:8081/location/" + locationId + "/" + userId;
    axios
      .post(url)
      .then((res) => {
        if (res.status === 201) {
          alert("Assignment Successfull");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        navigate("/location");
        alert("Something went wrong!");
      });
  };
  const [assignedUserData, setassignedUserData] = useState([]);
  useEffect(() => {
    const userListRes = async () => {
      await axios
        .get("http://localhost:8081/location/" + locationId + "/users")
        .then((response) => setassignedUserData(response.data))
        .catch((error) => {
          navigate("/location");
          alert("Something went wrong!");
        });
    };
    userListRes();
  }, []);
  

  return (
    <div className="wrapper d-flex align-items-stretch">
      <Sidebar />
      <div id="content" className="p-4 p-md-5 pt-5">
        <div className="container">
          <div>
            <h2 className="mb-4">User Details:</h2>
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
                              <th scope="col">id</th>
                              <th scope="col">Email</th>
                            </tr>
                          </thead>
                          <tbody>
                            {userData.map((user, index) => {
                              return (
                                <tr key={index}>
                                  <td>{user.id}</td>
                                  <td>{user.email}</td>

                                  <td>
                                   
                                      <button
                                        onClick={(e) =>
                                          handleAssignUser(user.id)
                                        }
                                        className="btn btn-danger btn-sm rounded-0"
                                        type="button"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Assign User"
                                      >
                                        <i className="fa fa-plus"></i>
                                      </button>
                                  
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
export default AssignUser;
