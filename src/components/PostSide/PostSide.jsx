import React from 'react'
import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
import Home from "../../img/home.png";
import Notification from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

const PostSide = () =>{
    return (
      <div className="Postside">
        <PostShare/>
        <div className="tab-dis">
          <div className="navIcon">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Notification} alt="" />
            <img src={Comment} alt="" />
          </div>
        </div>
        <Posts />
      </div>
    );
}

export default PostSide