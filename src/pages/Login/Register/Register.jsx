import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../provider/AuthProvider";
import { Form } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const { createUser, updateName } = useContext(authContext);
  const [accept, setAccept] = useState(false);

  const handleCheck = (e) => {
    setAccept(e.target.checked);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateName(name)
          .then("profile updated")
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-25 mx-auto">
      <h2>Please Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            className="form-control rounded-0"
            placeholder="Enter Your Name"
          />
        </label>
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
        <Form.Group
          onClick={handleCheck}
          className="my-1"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <button
          type="submit"
          className="btn btn-primary rounded-0 mt-1 mb-2"
          disabled={!accept}
        >
          Register
        </button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
