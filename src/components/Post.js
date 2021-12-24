import React from "react";

function Post({ image, content, user }) {
  return (
    <>
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Post cover"
          style={{ height: 100, width: 200, objectFit: "cover" }}
        />
      )}
      <p>{content}</p>
      <div>{user}</div>
    </>
  );
}

export default Post;
