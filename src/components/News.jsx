import React from "react";
import { Link } from "react-router-dom";

function News({ news }) {
  // console.log(news.id);
  return (
    <>
      <Link to={`/news/${news?._id}`}>
        <div className="p-2 my-2 ">
          <div>
            <div className="flex items-center justify-between">
              <h4 className="text-gray-400 my-1 mx-2">{news?.author.name}</h4>
              <div className="flex items-center space-x-2">
                <img
                  src={news?.author.img}
                  className="rounded-full w-6"
                  alt="Avatar"
                />
              </div>
            </div>
            <img
              className=" object-center rounded-lg"
              src={news?.image_url}
              alt=""
            />
            <div className="flex justify-between">
              <span className="text-xs inline-block py-1 px-2.5 leading-none mt-4 text-center whitespace-nowrap align-baseline font-bold bg-[#FAF1F3] text-red-400 rounded">
                {news?.rating.badge}
              </span>
              <span className="text-xs inline-block py-1 px-2.5 leading-none mt-4 text-center whitespace-nowrap align-baseline font-bold bg-[#f1faf6] text-green-400 rounded">
                Total Views : {news?.total_view}
              </span>
            </div>
            <h3 className="my-2 px-2.5 text-xl font-semibold">{news?.title}</h3>
          </div>
        </div>
      </Link>
    </>
  );
}

export default News;
