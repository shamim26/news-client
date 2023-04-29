import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../../provider/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/category/0";

  const { signInUser } = useContext(authContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-25 mx-auto">
      <h2>Login your account</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          Email address
          <input
            className="d-block form-control rounded-0"
            type="email"
            name="email"
            placeholder="Enter Your email address"
          />
        </label>{" "}
        <br />
        <label htmlFor="password">
          Password
          <input
            className="d-block form-control rounded-0"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </label>
        <br />
        <button type="submit" className="btn btn-primary rounded-0 my-3">
          Login
        </button>
        <p>
          New to Dragon? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
