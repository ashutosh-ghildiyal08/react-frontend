import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/content.css";

export default function content() {
  return (
    <div id="content" className="p-4 p-md-5 pt-5">
      <h2 className="mb-4">User Details:</h2>

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
                          <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>61</td>
                            <td>Edinburgh</td>
                            <td>Edinburgh</td>
                            <td>Edinburgh</td>
                            <td>Edinburgh</td>
                            <td>
                              <ul class="list-inline m-0">
                                <li class="list-inline-item">
                                  <button
                                    class="btn btn-success btn-sm rounded-0"
                                    type="button"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Edit"
                                  >
                                    <i class="fa fa-edit"></i>
                                  </button>
                                </li>
                                <li class="list-inline-item">
                                  <button
                                    class="btn btn-danger btn-sm rounded-0"
                                    type="button"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Delete"
                                  >
                                    <i class="fa fa-trash"></i>
                                  </button>
                                </li>
                              </ul>
                            </td>
                          </tr>
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
  );
}
