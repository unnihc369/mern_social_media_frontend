import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileSide/ProfileSide";
import PostSide from "../../components/PostSide/PostSide";
import RightSide from "../../components/RightSide/RightSide";

const Home = () => {
  return (
    <div className="Home">
      <div className="mob-hide">
        <ProfileSide />
      </div>
      <PostSide />
      <div className="tab-hide">
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
