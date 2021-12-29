import React, { useContext } from "react";
import { UserContext } from "../App";

function Post({ image, content, user }) {
  const currentUser = useContext(UserContext);
  const isCurrentUser = currentUser === user;
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
      <div style={{ color: isCurrentUser && "green" }}>{user}</div>
    </>
  );
}

export default Post;
