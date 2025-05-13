import React from "react";
import UserButton from "../userButton/userButton";
import "./topBar.css";
import Image from "../image/image";
export default function topBar() {
  return (
    <div className="topBar">
      {/* 搜索栏 */}
      <div className="searchBar">
        <Image
          path="/PinterestGeneral/search.svg"
          alt="search"
          className="searchIcon"
          w={24}
          h={24}
        />
        <input type="text" placeholder="Search" />
      </div>
      {/* 用户信息 */}
      <UserButton />
    </div>
  );
}
