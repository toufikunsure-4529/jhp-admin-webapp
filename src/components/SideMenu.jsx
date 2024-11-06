import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../admin.css";

function SideMenu() {
  const menu = [
    {
      name: "Dashboard",
      icon: "bi-speedometer2",
      slug: "/home",
    },
    {
      name: "Create New Task",
      icon: "bi-list-task",
      slug: "/addtask",
    },
    {
      name: "Update Task Status",
      icon: "bi-list-task",
      slug: "/admin/tasks/update",
    },
    {
      name: "View All Tasks",
      icon: "bi-list-task",
      slug: "/admin/tasks/all",
    },
    {
      name: "Pending Tasks",
      icon: "bi-person-workspace",
      slug: "/admin/tasks/pending",
    },
    {
      name: "Team Members Overview",
      icon: "bi-person-add",
      slug: "/admin/team/members",
    },
    {
      name: "Add New Team Member",
      icon: "bi-person-add",
      slug: "/admin/team/add",
    },
    {
      name: "Contact Support",
      icon: "bi-info-circle-fill",
      slug: "/admin/support/contact",
    },
    {
      name: "Logout",
      icon: "bi-box-arrow-right",
      slug: "/admin/logout",
    },
  ];

  return (
    <div
      className="offcanvas offcanvas-start bg-primary text-white sidebar-nav"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-body p-0">
        <nav className="navbar-dark">
          <div className="d-flex justify-content-center align-items-center mt-5">
            <h5>Jaman Hp Gas</h5>
          </div>
          <ul className="navbar-nav pt-4">
            {menu.map((menu, index) => (
              <li className="nav-item mb-3" key={index}>
                <Link to={menu.slug} className="nav-link px-3 py-2 active">
                  <span className="me-2">
                    <i className={`bi ${menu.icon}`}></i>
                  </span>
                  <span className="menu-text">{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
