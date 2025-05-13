import React from "react";
import "./postInteractions.css";
import Image from "../image/image";

export default function postInteractions() {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Image path="/PinterestGeneral/react.svg" alt="like" w={24} />
        233
        <Image path="/PinterestGeneral/share.svg" alt="share" w={24} />
        <Image path="/PinterestGeneral/more.svg" alt="more" w={24} />
      </div>
      <button>保存</button>
    </div>
  );
}
