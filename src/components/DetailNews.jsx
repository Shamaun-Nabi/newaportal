import React from "react";
import { useLoaderData } from "react-router-dom";

export default function DetailNews() {
  const { data } = useLoaderData();
//   console.log(data);
  return <>
  <div>
    <h3 className="text-xl mt-3 font-bold">{data.title}</h3>
    <img src={data.image_url} alt=""  />
    <p className="text-justify mt-2">{data.details}</p>
  </div>
  </>;
}
