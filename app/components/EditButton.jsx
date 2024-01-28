import Image from "next/image";
import React from "react";

const EditButton = () => {
  return (
    <div>
      <div className="w-[85px] h-[42px] left-0 top-0 absolute bg-stone-300 bg-opacity-60 rounded-[10px]" />
      <Image
        width={15}
        height={15}
        className="left-[16px] top-[14px] absolute"
        src="/edit.png"
      />
      <div className="w-[45px] h-[15px] left-[30px] top-[13px] absolute text-center text-black text-sm font-bold font-['Inter']">
        Add
      </div>
    </div>
  );
};

export default EditButton;
