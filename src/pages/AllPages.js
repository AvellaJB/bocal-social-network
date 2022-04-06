import React from "react";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Profil from "./Profil";
import { Routes, Route } from "react-router-dom";
import { login } from "../lib";

function AllPages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/createprofile" element={<Register />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default AllPages;
