import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment/moment";
import Button from "react-bootstrap/Button";
import { Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";


const Header = () => {
  

  return (
    <Container>
      <div className="text-center mt-4">
        <img className="mb-2" src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p className="fw-semibold text-secondary">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <div className="d-flex p-2 my-4">
        <Button className="rounded-0 px-3" variant="danger">
          Latest
        </Button>
        <Marquee speed={80} className="fw-semibold">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
