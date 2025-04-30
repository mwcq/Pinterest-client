import React from "react";
import LeftBar from "../components/leftBar/leftBar";
import TopBar from "../components/topBar/topBar";
import { Outlet } from "react-router";
import "./mainLayout.css";

export default function mainLayout() {
  return (
    <div className="app">
      <LeftBar />
      <div className="container">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}
