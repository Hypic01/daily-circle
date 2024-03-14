"use client";

import React, { useState } from "react";
import Circle from "../components/Circle";
import Image from "next/image";
import EditButton from "../components/EditButton";
import Slice from "../components/Slice";
import Calendar from "../components/Calendar";
import Bar from "../components/Bar";
import Profile from "../components/Profile";

const Dashboard = () => {
  const today = new Date();
  const options = { month: "long", day: "numeric" };
  const todayDate = today.toLocaleDateString("en-US", options);

  const [selectedDate, setSelectedDate] = useState(new Date());


  const [activePeriod, setActivePeriod] = useState("Today");

  const handlePeriodClick = (period) => {
    setActivePeriod(period);
  };

  const getButtonStyle = (period) => {
    const baseStyles =
      "text-base font-bold font-['Inter'] px-4 py-2 rounded transition-colors";
    const activeStyles = "bg-red-500 text-white";
    const inactiveStyles = "text-black hover:bg-gray-200";
    return `${baseStyles} ${activePeriod === period ? activeStyles : inactiveStyles
      }`;
  };

  const categoriesData = [
    { name: 'Health', score: 5, color: 'bg-green-500' },
    { name: 'Work', score: 8, color: 'bg-blue-500' },
    { name: 'Relationship', score: 2, color: 'bg-red-500' },
    // Add more categories as needed
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row">
      <div className="flex flex-col w-full md:w-1/3 lg:w-96 bg-slate-200 p-8 space-y-4 justify-between">
        {/* Calendar and sidebar content goes here */}
        <Calendar setSelectedDate={setSelectedDate} />
        <Profile />

      </div>
      <div className="flex-grow flex flex-col p-8">
        <div className="flex gap-2 mb-4">
          {["Today", "This Week", "This Month", "This Year"].map((period) => (
            <button
              key={period}
              className={getButtonStyle(period)}
              onClick={() => handlePeriodClick(period)}
            >
              {period}
            </button>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8 text-center">{selectedDate.toLocaleDateString("en-US", options)}</h1>
        <div className="flex-1 overflow-y-auto">
          <Bar categories={categoriesData} selectedDate={selectedDate} />
          {/* Ensure the Bar component takes the full available space */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
