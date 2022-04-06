import React from "react";
import CreateProfile from "./CreateProfile";
import Home from "./Home";
import Login from "./Login";
import Profil from "./Profil";
import { Routes, Route } from "react-router-dom";

function AllPages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/createprofile" element={<CreateProfile />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AllPages;
