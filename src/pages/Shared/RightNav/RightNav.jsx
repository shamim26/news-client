import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZOne/QZone";

const RightNav = () => {
  return (
    <div>
      <div className="my-3">
        <h5 className="mb-3"> Login With</h5>
        <Button variant="outline-primary" className="w-100 mb-2">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-secondary" className="w-100">
          <FaGithub /> Login with Github
        </Button>
      </div>
      <div className="my-4">
        <h5 className="mb-4">Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="py-3"><FaFacebook /> Facebook</ListGroup.Item>
          <ListGroup.Item className="py-3"><FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item className="py-3"> <FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone/>
    </div>
  );
};

export default RightNav;
