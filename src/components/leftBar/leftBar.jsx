import React from "react";
import { Link } from "react-router";
import "./leftBar.css";
import Image from "../image/image";
export default function leftBar() {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Image path="/PinterestGeneral/logo.png" alt="logo" className="logo" w={24} h={24} />
        </Link>
        <Link to="/" className="menuIcon">
          <Image
            path="/PinterestGeneral/home.svg"
            alt="home"
            className="menuIconImage"
            w={24}
            h={24}
          />
        </Link>
        <Link to="/create" className="menuIcon">
          <Image
            path="/PinterestGeneral/create.svg"
            alt="create"
            className="menuIconImage"
            w={24}
            h={24}
          />
        </Link>
        <Link to="/" className="menuIcon">
          <Image
            path="/PinterestGeneral/updates.svg"
            alt="updates"
            className="menuIconImage"
            w={24}
            h={24}
          />
        </Link>
        <Link to="/" className="menuIcon">
          <Image
            path="/PinterestGeneral/messages.svg"
            alt="messages"
            className="menuIconImage"
            w={24}
            h={24}
          />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <Image
          path="/PinterestGeneral/settings.svg"
          alt="settings"
          className="menuIconImage"
          w={24}
          h={24}
        />
      </Link>
    </div>
  );
}
