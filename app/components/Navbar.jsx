import React from "react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="px-36 top-3 w-full absolute bg-white flex justify-between items-center">
      <div className="flex">
        <Link href="/">
          <div className=" text-slate-800 text-base font-extrabold font-['Inter'] uppercase cursor-pointer">
            Daily Circle
          </div>
        </Link>
      </div>

      <div className="flex gap-8 items-center">
        <div className="text-right text-slate-500 text-base font-bold font-['Inter'] leading-7 cursor-pointer">
          Support
        </div>
        <div className="text-right text-slate-500 text-base font-bold font-['Inter'] leading-7 cursor-pointer">
          Blog
        </div>
        <div className="text-right text-slate-500 text-base font-bold font-['Inter'] leading-7 cursor-pointer">
          Product
        </div>
        {/* <div className="w-[117px] h-[39px] bg-red-500 rounded-[10px] flex justify-center items-center cursor-pointer">
          <p className="text-white text-sm font-semibold font-['Inter'] leading-7">
            Start for free
          </p>
        </div> */}
        <Link href='/login'>
          <div className="w-[117px] h-[39px] bg-red-500 rounded-[10px] flex justify-center items-center cursor-pointer">
            <p className="text-white text-sm font-semibold font-['Inter'] leading-7">
              Log In
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
