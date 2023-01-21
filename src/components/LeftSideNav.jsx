import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function LeftSideNav() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/category").then(function (response) {
      // handle success
      setCategory(response.data);
    });
  }, []);
  // console.log(category);

  return (
    <>
      <div className=" h-screen">
        <h3 className="text-center p-5 text-xl font-semibold">Category</h3>
        <div className="flex justify-center">
          <ul>
            {category?.map((category) => (
              <li
                key={category.id}
                className="my-6 text-lg text-slate-600 hover:bg-slate-800 px-4 rounded-md  hover:text-white transition duration-200 "
              >
                <Link to={`/category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default LeftSideNav;
