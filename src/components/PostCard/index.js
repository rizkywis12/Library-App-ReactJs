import React from "react";
import "../../styles/components/Card.css";

const PostCard = (props) => {
  const { id,postid,title,desc } = props;
  return (
    <div className="card-wrapper">
      <p>ID user: {id}</p>
      <p>ID post: {postid}</p>
      <p>Title: {title}</p>
      <p>Desc: {desc}</p>
    </div>
  );
};

export default PostCard;