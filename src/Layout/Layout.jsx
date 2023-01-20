import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RightSideNav from "../components/RightSideNav";
import LeftSideNav from "./../components/LeftSideNav";

function Layout() {
  return (
    <>
      <div className="bg-[#F7F8F9]">
        <Navbar />
        <div className=" ">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <LeftSideNav />
            </div>
            <div className="col-span-7">
              <Outlet />
            </div>
            <div className="col-span-2">
              <RightSideNav />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
