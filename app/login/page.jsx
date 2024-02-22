import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="bg-white h-screen flex justify-between items-center px-36 pt-12">
      <div className="flex-col justify-center items-center ">
        <h1 className="text-black font-bold text-[52px] mb-20">Log in</h1>
        <div className="bg-[#000000] opacity-20 w-[565px] h-[60px] rounded-lg p-6 flex items-center mb-5 font-semibold">
          <input className="text-[#ffffff] opacity-80">example@email.com</input>
        </div>
        <div className="bg-[#000000] opacity-20 w-[565px] h-[60px] rounded-lg p-6 flex items-center mb-5 font-semibold">
          <p className="text-[#ffffff] opacity-80">Password</p>
        </div>
        <div className="bg-[#DE483A] w-[565px] h-[60px] cursor-pointer rounded-lg p-6 flex items-center mb-12 text-white justify-center font-semibold">
          Log In
        </div>
        <p className="underline text-black mb-2 font-semibold cursor-pointer">Create Account</p>
        <p className="underline text-black font-semibold cursor-pointer">Forgot Password?</p>
      </div>
      <div className="flex justify-center items-center">
        <Image 
            src="/stairs.png"
            height={250}
            width={250}
        />
      </div>
    </section>
  );
};

export default page;
