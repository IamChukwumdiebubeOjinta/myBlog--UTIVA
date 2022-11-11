import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

export default function Post({ title, description, imageURL, author, time }) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        {/* Category */}
        <small className="text-[11px] ml-4">{author}</small>
        <hr />
        <div className="card-body pb-2 text-center">
          <div className="flex justify-between">
            <h2 className="card-title">{title}</h2>
            <Link to={"/single-post"}>
              <button className="btn btn-outline">Read article</button>
            </Link>
          </div>
          <div className="card-actions text-left mt-1">
            <p>{description}</p>
          </div>
        </div>
        {/* Image */}
        <figure className="px-5 py-5">
          <img src={imageURL} alt="Shoes" className="rounded-xl" />
        </figure>
        <hr />
        {/* Time */}
        <p className="ml-4 mb-2">{dayjs(time).format("MMM DD, YYYY")}</p>
      </div>
    </>
  );
}
