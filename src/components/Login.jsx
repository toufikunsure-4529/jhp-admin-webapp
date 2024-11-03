import React, { useState } from "react";
import authServiceAppwriteBackend from "../backend/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
    accountType: "admin",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      if (
        loginInfo.email.trim().length === 0 ||
        loginInfo.password.trim().length === 0
      ) {
        setError("Email and password are required");

        return false;
      }

      const session = await authServiceAppwriteBackend.authLoginSession(
        loginInfo
      );
      if (session) {
        navigate("/Home");
        toast.success("Login Successful");
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  return (
    <div className="d-flex vh-100">
      {/* Left Side: Background Image */}
      <div
        className="d-none d-md-flex col-md-6 align-items-center bg-image"
        style={{
          backgroundImage: `url(/login-bg.avif)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right Side: Login Form */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center bg-light">
        <div className="rounded shadow-lg w-75 p-5">
          <form onSubmit={handleSubmit} aria-label="Login form">
            <div className="text-center mb-4">
              <h4 className="text-uppercase fw-bold">Jaman Hp Gas</h4>
              <p className="text-muted mb-1">SAP Code: 41033623</p>
              <p className="text-muted">Please login to continue</p>
            </div>

            {/* Account Type Selection */}
            <div className="text-center mb-4">
              <p className="text-muted">Choose Account Type</p>
              <div className="d-flex justify-content-center gap-3">
                {["admin", "employee"].map((type) => (
                  <label key={type} className="form-check-label">
                    <input
                      name="accountType"
                      type="radio"
                      value={type}
                      checked={loginInfo.accountType === type}
                      onChange={handleOnChange}
                      className="form-check-input me-1"
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={loginInfo.email}
                onChange={handleOnChange}
                placeholder="name@example.com"
                aria-label="Email address"
              />
              <label htmlFor="email">Email address</label>
            </div>

            {/* Password Input */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={loginInfo.password}
                onChange={handleOnChange}
                placeholder="Password"
                aria-label="Password"
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Remember Me Checkbox */}
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            {/* Error Message */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* Submit Button */}
            <button
              className="btn btn-primary w-100 py-2"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                  <span className="ms-2">Signing in...</span>
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
