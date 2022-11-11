import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../utils/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userPosts, setUserPosts] = useState([]);
  const getPosts = async () => {
    try {
      const res = await axios.get("/blog/user/" + user._id);
      console.log(res.data);
      if (res.data.success) setUserPosts(res.data.data.blogs);
    } catch (error) {
      console.error(error);
    }
  };
  const navigate = useNavigate();

  const handleEdit = (post) =>
    navigate("/dashboard/write-blog", { state: post });
  useEffect(() => {
    getPosts();
  }, []);

  const handleDelete = async ({ _id }) => {
    try {
      if (confirm("Are you sure you want to delete this post")) {
        const res = await axios.delete("/blog/" + _id);
        alert(res.data.message);
        if (res.data.success) getPosts();
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <React.Fragment>
      {userPosts.map((post) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={post.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {post.title}
                
              </h2>
              <p>{post.description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  <FontAwesomeIcon
                    icon="fa-solid fa-pen"
                    onClick={(_) => handleEdit(post)}
                  />
                </div>
                <div className="badge badge-outline">
                  <FontAwesomeIcon
                    icon="fa-solid fa-trash"
                    onClick={(_) => handleDelete(post)}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Card;
