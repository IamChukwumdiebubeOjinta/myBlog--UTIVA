import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HotPicks = () => {
  return (
    <div className="flex-[2] p-[15px] pb-[15px] rounded-none mx-2 flex items-center flex-col h-min">
      <div className="flex w-full mx-auto container gap-[15px] relative">
        {/* Recent Reads */}
        <div className="flex flex-col items-center sticky top-0">
          <span className="sideBarTitle">Latest Reads</span>
          <div className="sideBarItem mt-2 items-center">
            <div className="card w-96 glass rounded-none bg-white">
              <figure className="">
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body p-[1rem]">
                <h2 className="card-title">Life hack</h2>
                <p className="p-[30px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  fugiat nesciunt! Sunt quia incidunt sed suscipit mollitia
                  corrupti ipsa, natus, nam amet aperiam ducimus hic rem ut
                  praesentium omnis accusamus.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary h-[1.5rem]">
                    Learn now!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="sideBarItem items-center mt-4">
            <div className="card w-96 glass rounded-none bg-white">
              <figure className="">
                <img src="https://placeimg.com/400/225/arch" alt="car!" />
              </figure>
              <div className="card-body p-[1rem]">
                <h2 className="card-title">Life hack</h2>
                <p className="p-[30px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  fugiat nesciunt! Sunt quia incidunt sed suscipit mollitia
                  corrupti ipsa, natus, nam amet aperiam ducimus hic rem ut
                  praesentium omnis accusamus.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary h-[1.5rem]">
                    Learn now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Trending  */}
        <div className="bg-base-100 w-full">
          {/* Heading */}
          <h1 className="text-4xl">Hot Picks</h1>
          <hr />
          {/* Cards */}
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quo culpa corrupti laborum. Vel repudiandae beatae veritatis facere ex minima? Minima, eum commodi incidunt tempore pariatur perspiciatis illo beatae earum.</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero odio numquam sed quas amet, voluptate esse iure, vel, doloremque saepe dolor! Laboriosam cum vero ratione quis facilis sit eaque omnis.</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore error quae rerum, facere quos repudiandae voluptates sit dolorem magnam tempore ducimus quidem obcaecati repellendus cum eum hic, non doloremque. Placeat!</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
          <div className="card flex-wrap w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title">Card title!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                <button className="btn btn-outline">Read</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="sideBarItem items-center w-full mt-5 ml-3">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList self-start">
          {[
            ["Lifestyle", "/lifestyle"],
            ["Sport", "/sport"],
            ["Technology", "/technology"],
            ["Cinema", "/cinema"],
          ].map(([title, url]) => (
            <li key={url} className="sideBarListItem">
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sideBarItem items-center w-full ml-3">
        <span className="sideBarTitle">Follow Us</span>
        <ul className="sideBarList self-center justify-center flex">
          <FontAwesomeIcon
            icon="fa-brands fa-facebook-f"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-twitter"
            className="cursor-pointer"
          />
          <FontAwesomeIcon
            icon="fa-brands fa-instagram"
            className="cursor-pointer"
          />
        </ul>
      </div>
    </div>
  );
};

export default HotPicks;
