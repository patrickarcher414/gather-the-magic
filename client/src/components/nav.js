import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <h1>Gather the Magic</h1>
      {/*  COPY FOR EACH PAGE */}
      <div className="flex-right">
        <Link to="/">
          <i className="fab fa-solid fa-house fa-2x"></i>
        </Link>
        <Link to="/login">
          <i className="fa-solid fa-person-running fa-2x"></i>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
