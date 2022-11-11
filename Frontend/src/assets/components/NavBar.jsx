import React, { useState, Fragment, useEffect, useRef } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50">
        {/* Navbar Start */}
        <div className="navbar-start">
          <Menu as={`div`} className="dropdown">
            {!toggle ? (
              <Menu.Button
                id="menu-btn"
                className={`hamburger focus:outline-none ${
                  toggle ? "open" : ""
                } z-10`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </Menu.Button>
            ) : (
              <Menu.Button
                id="menu-btn"
                className={`hamburger focus:outline-none fixed ${
                  toggle ? "open" : ""
                } z-10`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </Menu.Button>
            )}

            <Menu.Items
              className={`menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-56  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none origin-top-right divide-y `}
            >
                <React.Fragment>
                  {" "}
                  <Link to={"/"}>Home</Link>
                  <Link to={"/bolgs"}>Blogs</Link>
                  <Link to={"/dashboard/read-blog"}>Dashboard</Link>
                </React.Fragment>
              {/* Menu */}
              <li
                tabIndex={0}
                className={`${toggle ? "block" : "hidden"}`}
                onClick={() => setToggle((prev) => !prev)}
              >
                <a className="flex justify-between">
                  Join Here
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
              </li>

              <ul
                className={`p-2 bg-slate-300 ml-4 ${
                  toggle ? "hidden" : "block"
                }`}
                onChange={() => setToggle((prev) => !prev)}
              >
                <React.Fragment>
                    <Link
                      to={`/login`}
                      className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                    >
                      Login here
                    </Link>
                    <Link
                      to={`/register`}
                      className="group flex w-full items-center rounded-md px-2 py-2 text-sm bg-slate-600"
                    >
                      Get started
                    </Link>
                  </React.Fragment>
              </ul>
            </Menu.Items>
          </Menu>
          <a className="normal-case text-xl ml-3 font-semibold">myBlog</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          {userLogin && (
            <div className="menu menu-horizontal p-0 gap-4">
              <Link to={"/"}>Home</Link>
              <Link to={"/blogs"}>Blogs</Link>
              <Link to={"/dashboard/read-blog"}>Dashboard</Link>
            </div>
          )}
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-4 mr-6">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {/* Indicator for notification */}
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          <Menu
            as={`div`}
            className="menu menu-horizontal p-0 hidden md:flex relative"
          >
            <Menu.Button
              tabIndex={0}
              className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2"
            >
              Join Here
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-black hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="p-2 absolute right-0 top-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  <Link
                    to={`/login`}
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm"
                  >
                    Login here
                  </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link
                    to={`/register`}
                    className="group flex w-full items-center rounded-md px-2 py-2 text-sm bg-slate-600"
                  >
                    Get started
                  </Link>
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Navbar;
