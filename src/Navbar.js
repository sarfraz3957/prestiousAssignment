import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
      <div class="nav-item m-2">
        <Link to="/About"> About</Link>
      </div>
      <div class="nav-item active m-2">
        <Link to="/Head_Tail"> Head & Tail</Link>
      </div>
    </nav>
  );
};

export default Navbar;
