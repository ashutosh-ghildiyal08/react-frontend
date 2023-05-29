import React, { useEffect, useState } from "react";
import "../css/addLocation.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateLocation() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:8081/location/" + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    axios.put("http://localhost:8081/location", data).then((res) => {
      navigate("/location");
    });
  };

  function updateLoc(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <section className="">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration bg-indigo text-white">
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 text-white">
                  Update Location Form
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          value={data.locName}
                          id="locName"
                          name="locName"
                          onChange={updateLoc}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Location Name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          value={data.locCode}
                          id="locCode"
                          name="locCode"
                          onChange={updateLoc}
                          className="form-control form-control-lg"
                        />
                        <label className="form-label">Location Code</label>
                      </div>
                    </div>
                  </div>

                  <input
                    className="btn btn-light btn-lg"
                    type="submit"
                    value="Update Location"
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
export default UpdateLocation;
