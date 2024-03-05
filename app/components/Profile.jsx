import React from 'react'

const Profile = () => {
  return (
      <div className="flex gap-4 items-center">
        <div className="w-[40px] h-[40px] rounded-xl bg-[#DE483A] cursor-pointer" />
        <h1 className="font-bold text-black">Joonwoo Park</h1>
        <button className="bg-[#CDCDCD] opacity-80 w-[85px] h-[42px] rounded-xl text-black font-base font-bold">Sign Out</button>
    </div>
  )
}

export default Profile