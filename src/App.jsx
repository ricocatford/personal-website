import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  )
}