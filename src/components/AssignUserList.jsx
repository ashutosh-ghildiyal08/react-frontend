import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/content.css";
import Sidebar from "../components/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function AssignUserList() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const userListRes = async () => {
      await axios
        .get("http://localhost:8081/location/" + locationId + "/users")
        .then((response) => setUserData(response.data))
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
            <h2 className="mb-4">Assigned User Details:</h2>
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

export default AssignUserList;
