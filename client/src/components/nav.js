import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div 
      id="navContainer"
    >
      <div id="navHeaderBox">
        <h1 id="navHeader">Gather the Magic</h1>
      </div>
      <div id="navLinksBox">
        {/*  COPY FOR EACH PAGE */}
        <Link 
          id="dashLink"
          to="/" 
        >
          Dashboard
        </Link>
      </div>
    </div>
  ) 
}

export default Nav;
