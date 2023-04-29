import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { authContext } from "../../../provider/AuthProvider";
import {CgProfile} from "react-icons/cg";
import { Link } from "react-router-dom";


const NavigationBar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut =() =>{
    logOut()
    .then()
    .catch(err => console.error(err))
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="white"
      className="my-4"
    >
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="fw-semibold" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="fw-semibold" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="fw-semibold" href="/career">
              Career
            </Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            {user && (
              <Nav.Link className="fs-3 text-dark" href="#deets">
                <CgProfile />
              </Nav.Link>
            )}
              {user ? (
                <Link onClick={handleLogOut} className="btn btn-dark rounded-0 d-inline px-4" variant="dark">
                  Log Out
                </Link>
              ) : (
                <Link to="/login" className="btn btn-dark    rounded-0 d-inline px-4" variant="dark">
                  Login
                </Link>
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
