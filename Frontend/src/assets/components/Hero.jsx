// import axios from "axios";
// import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Hero = () => {
  // const [getData, setGetData] = useState();
  // const getProfile = async () => {
  //   const res = await axios
  //     .get("http://localhost:5000/api/blog/user/:id")
  //     .catch((err) => console.log(err));
  //   const data = await res.data;
  //   return data;
  // };
  // useEffect(() => {
  //   getProfile().then((data) => setGetData(data.blogs));
  // }, []);
  return (
    <>
      <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <p className="text-3xl mb-2">Hi there, welcome to</p>
            <h1 className="text-5xl font-bold">MyBlog</h1>
            <p className="py-6">
              A Place where you can read articles and be Inspired for some
              reason best known to you.
            </p>
            <button className="btn btn-primary">
              <Link to={'/dashboard/write-blog'}>
              Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
