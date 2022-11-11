import React from "react";
import { Hero, Posts, HotPicks } from "../components";

const Main = () => {
  return (
    <>
      <Hero />e{/* Content */}
      <div className="w-full flex-col md:flex flex-[10] my-[20px] justify-between">
        <div className="flex flex-wrap container mx-auto mb-5">
          {/* Change the font to something italics */}
          <h1 className="text-3xl font-bold block">
            <i>Here are a few reads!</i>
          </h1>
        </div>
        <Posts />
        <HotPicks />
      </div>
    </>
  );
};

export default Main;
