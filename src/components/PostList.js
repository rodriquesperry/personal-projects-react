import React from "react";

function PostList({ posts }) {
  return posts.map((post, index) => (
    <React.Fragment key={index}>
      {post.image && (
        <img
          src={URL.createObjectURL(post.image)}
          alt="Post cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{post.content}</p>
      <div>{post.user}</div>
    </React.Fragment>
  ));
}

export default PostList;
