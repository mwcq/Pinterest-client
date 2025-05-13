import React from "react";
import "./galleryItem.css";
import Image from "../image/image";
import { Link } from "react-router";
export default function galleryItem({ item }) {
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div
      className="galleryItem"
      style={{
        gridRowEnd: `span ${Math.ceil(item.height / 100)}`,
      }}
    >
      <Image
        path={item.media}
        alt={item.alt}
        className="galleryItemImage"
        w={372}
        h={optimizedHeight}
      />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">保存</button>
      <div className="overlayIcons">
        <button>
          <Image path="/PinterestGeneral/share.svg" alt="share" w={24} h={24} />
        </button>
        <button>
          <Image path="/PinterestGeneral/more.svg" alt="more" w={24} h={24} />
        </button>
      </div>
    </div>
  );
}
