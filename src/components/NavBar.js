import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <Link to={"/login"}>Login</Link>
        <Link to={"/profil"}>Profil</Link>
        <Link to={"/"}>Home</Link>
      </ul>
    </div>
  );
}

export default NavBar;
