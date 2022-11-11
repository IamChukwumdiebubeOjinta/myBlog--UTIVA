import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../src/assets/components";
import { ReadBlog, Blog, Edit } from "./assets/components/Dashboard";
import {
  Main,
  Contact,
  Login,
  Register,
  Single,
  About,
  Dashboard,
  ErrorHandler,
  Profile,
} from "./assets/Pages";

function App() {
  // const userLogin = useSelector((state) => state.userLogin);

  return (
    <React.Fragment>
      <Navbar />
      {/* Router */}
      <Routes>
        <Route path="/" element={<Main />} errorElement={<ErrorHandler />} />
        <Route path="*" element={<ErrorHandler />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single-post" element={<Single />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/write-blog" element={<Blog />} />
        <Route path="/dashboard/edit-blog" element={<Edit />} />
        <Route path="/dashboard/read-blog" element={<ReadBlog />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
