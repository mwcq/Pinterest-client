import React from "react";
import "./galleryItem.css";
import { Link } from "react-router";
export default function galleryItem({ item }) {
  return (
    <div
      className="galleryItem"
      style={{
        gridRowEnd: `span ${Math.ceil(item.height / 100)}`,
      }}
    >
      <img src={item.media} alt="" />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">保存</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
