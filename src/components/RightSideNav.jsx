import React from "react";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";

export default function RightSideNav() {
  return (
    <div className=" bg-slate-100 h-screen p-4 shadow-md">
      <h3 className="text-center text-2xl">Find Us On</h3>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="text-md my-2 flex items-center bg-blue-600 w-full shadow-md  justify-center text-white space-x-2"
      >
        <CiFacebook /> <span>Facebook</span>
      </button>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="text-md my-2 flex items-center bg-sky-500 w-full shadow-md  justify-center text-white space-x-2"
      >
        <CiTwitter /> <span>Twitter</span>
      </button>
      <button
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
        className="text-md my-2 flex items-center bg-slate-900 w-full shadow-md  justify-center text-white space-x-2"
      >
        <CiLinkedin /> <span>Linkedin</span>
      </button>
    </div>
  );
}
