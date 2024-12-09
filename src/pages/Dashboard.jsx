import React, { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector } from "react-redux";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [msgWiseTime, setMsgWiseTime] = useState("");
  const [userName, setUserName] = useState("");

  // const currentUserData = useSelector((state) => state.auth);
  // useEffect(() => {
  //   setUserName(currentUserData.userData.userInfo.name);
  // }, [currentUserData]);

  const handleButtonClcik = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const date = new Date();
  const currentTime = date.getHours();

  useEffect(() => {
    if (currentTime >= 2 && currentTime < 12) {
      setMsgWiseTime("Good Morning");
    } else if (currentTime >= 12 && currentTime < 17) {
      setMsgWiseTime("Good Afternoon");
    } else {
      setMsgWiseTime("Good Evening");
    }
  }, [currentTime]);

  return (
    <div className="container text-center my-5">
      <h3 className="fw-bold mb-4 text-primary">
        {msgWiseTime}
        <span> {userName}</span>
      </h3>
      <p className="text-muted fs-5 mb-5">Manage your tasks efficiently</p>

      <div className="row mt-4 g-4">
        {[
          {
            title: "Backlog",
            description: "Tasks that need attention",
            icon: "bi-list-task",
            color: "bg-primary",
            btnClass: "btn-primary",
            btnText: "Add Task",
            actionIcon: "bi-plus-circle",
          },
          {
            title: "In Progress",
            description: "Currently being worked on",
            icon: "bi-arrow-repeat",
            color: "bg-warning",
            btnClass: "btn-warning",
            btnText: "View",
            actionIcon: "bi-eye",
          },
          {
            title: "Finished",
            description: "Completed tasks",
            icon: "bi-check-circle",
            color: "bg-success",
            btnClass: "btn-success",
            btnText: "View",
            actionIcon: "bi-eye",
          },
          {
            title: "Important",
            description: "Priority tasks",
            icon: "bi-exclamation-circle",
            color: "bg-danger",
            btnClass: "btn-danger",
            btnText: "View",
            actionIcon: "bi-eye",
          },
        ].map((card, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="card shadow-sm border-0 h-100 bg-light text-dark rounded-4">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className={`icon-circle ${card.color} text-white mb-4 d-flex align-items-center justify-content-center rounded-circle`}
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className={`bi ${card.icon} fs-3`}></i>
                </div>
                <h5 className="card-title fw-semibold mb-3">{card.title}</h5>
                <p className="card-text text-muted">{card.description}</p>
                <button
                  className={`btn ${card.btnClass} rounded-pill mt-auto px-4 shadow-sm`}
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
                      <i className={`bi ${card.actionIcon} me-2`}></i>
                      {card.btnText}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
