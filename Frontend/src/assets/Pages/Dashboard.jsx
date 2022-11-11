import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  const viewLinks = () => {};

  return (
    <div className="flex flex-1 w-full min-h-[88vh]">
      <div className="flex-[0.1] px-3 self-center text-end border-r border-base-300"></div>
      <div className="flex-[0.9] flex justify-around">
        <div className="flex-[0.7] border-r border-base-300">
          <h1 className="text-4xl">Dashboard </h1>
          <hr />
          {children}
        </div>
        <div className="w-full flex-[0.2] flex flex-col items-center">
          <h1 className="text-xl mt-6">What would you like to do? </h1>
          <hr />
          <ul className="mt-4 flex flex-col gap-4 w-full">
            {/* Links to Children */}
            <li className="w-full hover:bg-black hover:text-white p-2 rounded-md">
              <Link
                to={"/dashboard/read-blog"}
                className=" flex gap-2 items-center rounded-md"
              >
                {" "}
                Blogs
                <FontAwesomeIcon icon="fa-solid fa-blog" />
              </Link>
            </li>
            <li className="w-full hover:bg-black hover:text-white p-2 rounded-md">
              <Link
                to={"/dashboard/write-blog"}
                className=" flex gap-2 items-center"
              >
                {" "}
                <p>Write a Blog</p>
                <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
              </Link>
            </li>
            <li className="w-full hover:bg-black hover:text-white p-2 rounded-md">
              <Link
                to={"/dashboard/read-blog"}
                className=" flex gap-2 items-center rounded-md"
              >
                {" "}
                <p>Profile</p> <FontAwesomeIcon icon="fa-solid fa-user" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
