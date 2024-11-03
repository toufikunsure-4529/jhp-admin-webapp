import React from "react";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  py-2 shadow-sm headerNav">
        <div className="container-fluid">
          {/* Offcanvas Sidebar Menu Open Button */}
          <button
            className="navbar-toggler border-0 shadow-lg me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-label="Toggle sidebar"
          >
            <i className="bi bi-grid-3x3-gap-fill fs-3"></i>
          </button>

          {/* Logo/Brand */}
          <a className="navbar-brand me-auto fw-medium fs-6" href="#">
            Admin Panel
          </a>

          {/* Toggler for Mobile View */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-3"></i>
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Search Form */}
            <form className="d-flex ms-auto position-relative" role="search">
              <div className="input-group my-3 my-lg-0">
                <input
                  className="form-control me-2 z-0"
                  type="search"
                  placeholder="Search..."
                  aria-label="Search"
                  style={{ maxWidth: "400px" }}
                />
                <button
                  className="btn btn-primary position-absolute top-0 end-0 z-3"
                  type="submit"
                  style={{ height: "100%", width: "50px" }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {/* User Profile Dropdown */}
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown ms-3">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle fs-4"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person"></i> Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear"></i> Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
