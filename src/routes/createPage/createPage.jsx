import React from "react";
import "./createPage.css";
import Image from "../../components/image/image";
export default function createPage() {
  return (
    <div className="createPage">
      <div className="createTop">
        <h1>创建作品</h1>
        <button>发布</button>
      </div>
      <div className="createBottom">
        <div className="upload">
          <div className="uploadTitle">
            <Image path="/PinterestGeneral/upload.svg" alt="upload" />
            <span>上传图片</span>
          </div>
          <div className="uploadInfo">
            请上传后缀为.jpg, .png, .gif, .jpeg的图片，大小不超过200MB
          </div>
        </div>
        <form className="createForm">
          <div className="createFormItem">
            <label htmlFor="title">标题</label>
            <input type="text" id="title" placeholder="请输入标题" />
          </div>
          <div className="createFormItem">
            <label htmlFor="description">描述</label>
            <textarea id="description" rows={6} placeholder="请输入描述" />
          </div>
          <div className="createFormItem">
            <label htmlFor="link">链接</label>
            <input type="text" id="link" placeholder="请输入链接" />
          </div>
          <div className="createFormItem">
            <label htmlFor="board">作品集</label>
            <select id="board">
              <option value="">请选择作品集</option>
              <option value="1">作品集1</option>
              <option value="2">作品集2</option>
              <option value="3">作品集3</option>
            </select>
          </div>
          <div className="createFormItem">
            <label htmlFor="tags">标签</label>
            <input type="text" id="tags" placeholder="请输入标签" />
            <small>仅自己可见</small>
          </div>
        </form>
      </div>
    </div>
  );
}
