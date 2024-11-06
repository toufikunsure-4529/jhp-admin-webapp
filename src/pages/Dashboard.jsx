import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Dashboard() {
  const [loading, setLoading] = useState(false);

  const handleButtonClcik = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [2000]);
  };
  return (
    <div className="container text-center my-5">
      <h3 className="fw-bold mb-3">Good Morning</h3>
      <p className="text-muted fs-5">Manage your tasks efficiently</p>

      <div className="row mt-4 g-4">
        <div className="col-lg-3 col-md-6">
          <div className="card shadow-lg border-0 h-100 bg-light text-dark rounded-4 hover-card ">
            <div className="card-body d-flex flex-column align-items-center ">
              <div className="icon-circle bg-primary text-white mb-3">
                <i className="bi bi-list-task fs-3"></i>
              </div>
              <h5 className="card-title fw-semibold">Backlog</h5>
              <p className="card-text text-muted">Tasks that need attention</p>
              <button
                className="btn btn-outline-primary rounded-pill mt-auto px-4"
                onClick={handleButtonClcik}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      aria-hidden="true"
                    ></span>
                    <span role="status">Loading...</span>
                  </>
                ) : (
                  <>
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Task
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-lg border-0 h-100 bg-light text-dark rounded-4 hover-card">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle bg-warning text-white mb-3">
                <i className="bi bi-arrow-repeat fs-3"></i>
              </div>
              <h5 className="card-title fw-semibold">In Progress</h5>
              <p className="card-text text-muted">Currently being worked on</p>
              <button className="btn btn-outline-warning rounded-pill mt-auto px-4">
                <i className="bi bi-eye me-2"></i>View
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-lg border-0 h-100 bg-light text-dark rounded-4 hover-card">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle bg-success text-white mb-3">
                <i className="bi bi-check-circle fs-3"></i>
              </div>
              <h5 className="card-title fw-semibold">Finished</h5>
              <p className="card-text text-muted">Completed tasks</p>
              <button className="btn btn-outline-success rounded-pill mt-auto px-4">
                <i className="bi bi-eye me-2"></i>View
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow-lg border-0 h-100 bg-light text-dark rounded-4 hover-card">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="icon-circle bg-danger text-white mb-3">
                <i className="bi bi-exclamation-circle fs-3"></i>
              </div>
              <h5 className="card-title fw-semibold">Important</h5>
              <p className="card-text text-muted">Priority tasks</p>
              <button className="btn btn-outline-danger rounded-pill mt-auto px-4">
                <i className="bi bi-eye me-2"></i>View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
