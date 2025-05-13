import React, { useState } from "react";
import "./proFilePage.css";
import Image from "../../components/image/image";
import Collections from "../../components/collections/collections";
import Gallery from "../../components/gallery/gallery";
export default function proFilePage() {
  const [active, setActive] = useState("作品");
  return (
    <div className="proFilePage">
      <Image
        className="avatar"
        width={100}
        height={100}
        path="/PinterestGeneral/noAvatar.png"
        alt="avatar"
      />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johndoe</span>
      <div
        className="followCounts
      "
      >
        <span>10关注</span>
        <span>·</span>
        <span>20追随者</span>
      </div>
      <div className="profileInteractions">
        <Image path="/PinterestGeneral/share.svg" alt="share" className="shareIcon" />
        <div className="profileButtons">
          <button className="">关注</button>
          <button className="">私信</button>
        </div>
        <Image path="/PinterestGeneral/more.svg" alt="more" className="moreIcon" />
      </div>
      <div className="profileOptions">
        <span onClick={() => setActive("作品")} className={active === "作品" ? "active" : ""}>
          作品
        </span>
        <span onClick={() => setActive("收藏")} className={active === "收藏" ? "active" : ""}>
          收藏
        </span>
      </div>
      {active === "作品" ? <Gallery /> : <Collections />}
    </div>
  );
}
