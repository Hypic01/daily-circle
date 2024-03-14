"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const isValidEmailAndPassword = () => {
    // Example simple validation
    return email.length > 0 && email.includes("@") && password.length > 0;
  };

  async function signupApi(formData) {
    let data;
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      data = await response.json();
      console.log("data:", data.message);
      if (!response.ok) {
        throw data.message;
      }
    } catch (e) {
      console.log("Signup ERR: ", e);
      throw e;
    }
    return data;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup with:", email, password);

    if (isValidEmailAndPassword()) {
      try {
        const formData = { username: email, password: password };

        const data = await signupApi(formData);
        console.log("Signup Success, ", data);
        window.alert(data.message);

        // Set state to trigger redirection in useEffect
      } catch (err) {
        console.log("Signup Error: ", err);
        window.alert(err.message || "An error occurred");
      }
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <section className="bg-white h-screen flex justify-between items-center px-36 pt-12">
      <div className="flex-col justify-center items-center ">
        <h1 className="text-black font-bold text-[52px] mb-12">
          Create Account
        </h1>
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
            onClick={() => {
              isValidEmailAndPassword() ? router.push('/login') : console.log("Enter correct email or password!")
            }}
            className="bg-[#DE483A] w-[565px] h-[60px] cursor-pointer rounded-lg p-6 flex items-center mb-10 text-white justify-center font-semibold"
          >
            Sign up with email
          </button>
        </form>

        <p className="text-black font-semibold cursor-pointer text-center">
          Already signed up? Go to{" "}
          <a href="/login" className="underline">
            Login
          </a>
        </p>
      </div>
      <div className="flex justify-center items-center mr-24">
        <Image src="/stairs.png" alt="stairs" height={250} width={250} />
      </div>
    </section>
  );
};

export default signup;
