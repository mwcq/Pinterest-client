import React, { useState } from "react";
import "./comments.css";
import Image from "../image/image";
import EmojiPicker from "emoji-picker-react";

export default function comments() {
  const [open, setOpen] = useState(false);

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">4条评论</span>
        <div className="comment">
          <Image path="/PinterestGeneral/noAvatar.png" alt="avatar" className="avatar" />
          <div className="commentContent">
            <span className="commentUsername">John Doe</span>
            <p className="commentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <span className="commentTime">2021-01-01</span>
          </div>
        </div>
      </div>
      <form className="commentForm">
        <input className="commentInput" placeholder="发表你的看法" />
        <div className="emoji">
          <span className="emojiIcon" onClick={() => setOpen(!open)}>
            👍
          </span>
          {open && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
        {/* <button className="commentButton">发表</button> */}
      </form>
    </div>
  );
}
