"use client";

import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    try {
      const formData = {
        username: email,
        password: password
      }

      const data = await loginApi(formData);
      console.log("Login Success, ", data);
      window.alert(data.message);

    } catch (err) {
      console.log("Login Error: ", err);
      window.alert(err);
    }
  };

  async function loginApi(formData) {
    let data;
    try {
      const response = await fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      data = await response.json();
      console.log('data:', data);
      if (!response.ok) {
        throw data.message;
      }

    } catch (e) {
      console.log("LoginAPI ERR: ", e);
      throw e;
    }
    return data;
  }

  return (
    <section className="bg-white h-screen flex justify-between items-center px-36 pt-12">
      <div className="flex-col justify-center items-center ">
        <h1 className="text-black font-bold text-[52px] mb-12">Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="m-0 p-0">
            <label htmlFor="email"></label>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={email}
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#000000] w-[565px] h-[60px] rounded-lg p-6 flex items-center mb-5 font-semibold text-[#ffffff] opacity-20"
            />
          </div>
          <div className="m-0 p-0">
            <label htmlFor="password"></label>
            <input
              type="password"
              required
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#000000] w-[565px] h-[60px] rounded-lg p-6 flex items-center mb-5 font-semibold text-[#ffffff] opacity-20"
            />
          </div>
          <button
            type="submit"
            className="bg-[#DE483A] w-[565px] h-[60px] cursor-pointer rounded-lg p-6 flex items-center mb-10 text-white justify-center font-semibold"
          >
            Log In
          </button>
        </form>

        <p className="underline text-black mb-4 font-semibold cursor-pointer inline-block">
          Create Account
        </p>
        <br />
        <p className="underline text-black font-semibold cursor-pointer inline-block">
          Forgot Password?
        </p>
      </div>
      <div className="flex justify-center items-center mr-24">
        <Image src="/stairs.png" alt="stairs" height={250} width={250} />
      </div>
    </section>
  );
};

export default page;
