import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className="posts-container-wrapper">
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts &&
        posts.map((post) => {
          console.log(post);
          // return "Oh look, a post";
          return <Post {...post} />;
        })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
