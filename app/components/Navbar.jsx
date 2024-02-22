import React from "react";

const Navbar = () => {
  return (
    <div className="px-36 top-3 w-full absolute bg-white flex justify-between items-center">
      <div className="flex">
        <div className=" text-slate-800 text-base font-extrabold font-['Inter'] uppercase">
          Daily Circle
        </div>
      </div>

      <div className="flex gap-8 items-center">
        <div className="text-right text-slate-500 text-base font-bold font-['Inter'] leading-7">
          Support
        </div>
        <div className="text-right text-slate-500 text-base font-bold font-['Inter'] leading-7">
          Blog
        </div>
        <div className="text-right text-slate-500 text-base font-bold font-['Inter'] leading-7">
          Product
        </div>
        <div className="w-[117px] h-[39px] bg-red-500 rounded-[10px] flex justify-center items-center">
          <p className="text-white text-sm font-semibold font-['Inter'] leading-7">Start for free</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
