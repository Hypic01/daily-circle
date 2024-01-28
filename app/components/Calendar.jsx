import React from "react";

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  // Helper function to get the style for the current day
  const getCurrentDayStyle = (day) => {
    return `text-center p-2 rounded-full ${
      day === currentDate ? 'bg-red-500 text-white' : 'text-black'
    }`;
  };

  // Generate an array for the days of the month
  // Adjust to get the correct number of days and start from the correct weekday
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="text-black">
      <div className="text-lg font-bold mb-4 text-center">{`${currentMonth} ${currentYear}`}</div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {days.map(day => (
          <div key={day} className={getCurrentDayStyle(day)}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
