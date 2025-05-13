import React, { useState } from "react";
import "./authPage.css";
import Image from "../../components/image/image";
export default function authPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="authPage">
      <div className="authContainer">
        <Image path="/PinterestGeneral/logo.png" w={36} h={36} alt="logo" />
        <h3>{isRegister ? "注册" : "登录"}</h3>

        {isRegister ? (
          <form className="authForm" key="register">
            <div className="formGroup">
              <label htmlFor="username">用户名</label>
              <input type="text" id="username" placeholder="请输入用户名" />
            </div>
            <div className="formGroup">
              <label htmlFor="displayName">显示名称</label>
              <input type="text" id="displayName" placeholder="请输入显示名称" />
            </div>
            <div className="formGroup">
              <label htmlFor="email">邮箱</label>
              <input type="email" id="email" placeholder="请输入邮箱" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">密码</label>
              <input type="password" id="password" placeholder="请输入密码" />
            </div>
            <button type="submit">注册</button>
            <p onClick={() => setIsRegister(!isRegister)}>
              已经有账号？<b>登录</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form className="authForm" key="login">
            <div className="formGroup">
              <label htmlFor="email">邮箱</label>
              <input type="email" id="email" placeholder="请输入邮箱" />
            </div>
            <div className="formGroup">
              <label htmlFor="password">密码</label>
              <input type="password" id="password" placeholder="请输入密码" />
            </div>
            <button type="submit">登录</button>
            <p onClick={() => setIsRegister(!isRegister)}>
              还没有账号？<b>注册</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
