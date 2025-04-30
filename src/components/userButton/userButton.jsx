import React, { useState } from "react";
import "./userButton.css";

export default function userButton() {
  const [open, setOpen] = useState(false);
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img
        onClick={() => {
          setOpen(!open);
        }}
        src="/general/arrow.svg"
        alt=""
        className={`arrow ${open ? "openArrow" : "closeArrow"}`}
      />
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
