import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, SideMenu } from "./components";
import "./admin.css";
import authServiceAppwriteBackend from "./backend/auth";
import { useDispatch } from "react-redux";
import { login } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authServiceAppwriteBackend
      .getCurrentUserInfo()
      .then((userInfo) => {
        if (userInfo) {
          dispatch(login({ userInfo }));
          console.log(userInfo);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <SideMenu />
      <div className="main-content">
        <Outlet />
      </div>

      <div className="text-center bg-body-tertiary">
        <p> © 2024 Jaman Enterprise .</p>
        <p>
          Designed and developed by <a href="#">Toufik</a>
        </p>
      </div>
      <div className=" d-flex justify-content-end px-4 pb-2">
        <button className="btn btn-warning ">
          <i className="bi bi-arrow-up"></i>
        </button>
      </div>
    </>
  );
}

export default App;
