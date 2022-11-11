import axios from "axios";
import React, { useState, useEffect } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState();
  const sendRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRequest().then((data) => setPosts(data.blogs));
  }, []);
  return (
    <div className="flex-[7] flex flex-wrap items-center justify-center gap-[15px] mb-10">
      {posts &&
        posts.map((post, i) => (
          <Post
            key={post._id}
            title={post.title}
            description={post.description}
            imageURL={post.image}
            time={post.updatedAt}
            author={post.user.firstName + post.user.lastName}
          />
        ))}
    </div>
  );
};

export default Posts;
