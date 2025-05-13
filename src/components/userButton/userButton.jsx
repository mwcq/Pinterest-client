import React, { useState } from "react";
import "./userButton.css";
import Image from "../image/image";
export default function userButton() {
  const [open, setOpen] = useState(false);
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Image
        path="/PinterestGeneral/noAvatar.png"
        alt="noAvatar"
        className="userButtonAvatar"
        w={24}
        h={24}
      />
      <div
        className=""
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Image
          path="/PinterestGeneral/arrow.svg"
          alt="arrow"
          className={`arrow ${open ? "openArrow" : "closeArrow"}`}
          w={24}
          h={24}
        />
      </div>

      {open && (
        <div className="userOptions">
          <div className="userOption">个人资料</div>
          <div className="userOption">设置</div>
          <div className="userOption">退出登录</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/login" className="loginLink">
      登录 / 注册
    </a>
  );
}
