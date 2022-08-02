import { useState } from "react";
import { Link } from "react-router-dom";



const Nav = () => {



  return (
    <div className="container">
      <h1>Gather the Magic</h1>
      {/*  COPY FOR EACH PAGE */}
      <Link to="/" >Dashboard</Link>
    </div>
  )
   
  
}



export default Nav;