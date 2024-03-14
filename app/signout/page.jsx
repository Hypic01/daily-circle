"use client";

import Image from "next/image";
import React, { useState } from "react";

const signout = () => {

  const handleClick = async (e) => {
    e.preventDefault();

    const data = await signoutApi();

    window.alert(data.message);
  };

  async function signoutApi() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      data = await response.json();
      console.log('data:', data);
      return data;

    } catch (e) {
      console.error(e);
      return { message: 'Failed to sign out. Please try again.' };
    }

  }

  return (
    <section className="bg-white h-screen flex justify-between items-center px-36 pt-12">
      <div className="flex-col justify-center items-center ">
        <h1 className="text-black font-bold text-[52px] mb-12">Sign out</h1>

        <form onSubmit={handleClick}>
          <button
            type="submit"
            className="bg-[#DE483A] w-[565px] h-[60px] cursor-pointer rounded-lg p-6 flex items-center mb-10 text-white justify-center font-semibold"
          >
            Sign Out
          </button>
        </form>

      </div>
      <div className="flex justify-center items-center mr-24">
        <Image src="/stairs.png" alt="stairs" height={250} width={250} />
      </div>
    </section>
  );
};

export default signout;
