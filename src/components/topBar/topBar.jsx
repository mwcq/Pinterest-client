import React from "react";
import UserButton from "../userButton/userButton";
import "./topBar.css";
export default function topBar() {
  return (
    <div className="topBar">
      {/* 搜索栏 */}
      <div className="searchBar">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      {/* 用户信息 */}
      <UserButton />
    </div>
  );
}
