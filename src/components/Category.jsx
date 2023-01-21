import React from "react";
import { useLoaderData } from "react-router-dom";
import News from "./News";

export default function Category() {
  const newsCategory = useLoaderData();
  // console.log(newsCategory.data);
  return (
    <div className="p-4">
      {newsCategory.data.map((news) => (
        <News key={news._id} news={news} />
      ))}
    </div>
  );
}
