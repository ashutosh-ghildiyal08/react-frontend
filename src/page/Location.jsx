import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/content.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Location() {
  const [locationData, setLocationData] = useState([]);
  useEffect(() => {
    const locationListRes = async () => {
      await axios
        .get("http://localhost:8081/location")
        .then((response) => setLocationData(response.data));
    };
    locationListRes();
  }, []);

  const handleDelete = (id) => {
    const url = "http://localhost:8081/location/" + id;
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
            <h2 className="mb-4">Location Details:</h2>
          </div>
          <div>
            <Link to="/location/create" className="btn btn-primary mb-5">
              Add Location
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
                              <th scope="col">Location Name</th>
                              <th scope="col">Location Code</th>
                              <th scope="col">Assigned Users</th>
                              <th scope="col"> Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {locationData.map((location, index) => {
                              return (
                                <tr key={index}>
                                  <td>{location.locName}</td>
                                  <td>{location.locCode}</td>
                                  <td>
                                    <Link
                                      to={"/location/" + location.id + "/users"}
                                    >
                                      Show Users
                                    </Link>
                                  </td>
                                  <td>
                                    <ul className="list-inline m-0">
                                      <li className="list-inline-item">
                                        <Link
                                          to={"/location/update/" + location.id}
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
                                            handleDelete(location.id)
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
                                      <li className="list-inline-item">
                                        <Link
                                          to={"/location/assign/" + location.id}
                                          className="btn btn-success btn-sm rounded-0"
                                          type="button"
                                          data-toggle="tooltip"
                                          data-placement="top"
                                          title="Assign User"
                                        >
                                          <i className="fa fa-plus"></i>
                                        </Link>
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
export default Location;
