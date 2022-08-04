import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
<<<<<<< HEAD
    <div className="container flex-between">
      <h1>Gather the Magic</h1>
      {/*  COPY FOR EACH PAGE */}

      <div>
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
=======
    <div 
      className="container"
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
>>>>>>> jenna
