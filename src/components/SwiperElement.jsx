import React from "react";

function SwiperElement({ partner }) {
  return (
    <div className="p-2">
        <h3 className="text-center text-xl bg-slate-800 text-white p-2 rounded-md my-2">{partner.name}</h3>
      <div
        className="w-full bg-cover h-[150px] bg-center rounded-lg "
        style={{
          backgroundImage: `url(${partner.bgLink})`,
        }}
      >
        <div className="h-full w-full bg-black bg-opacity-10 flex justify-center items-center">
          {/* <h3 className="text-white font-bold "> {partner.name}</h3> */}
        </div>
      </div>
    </div>
  );
}

export default SwiperElement;
