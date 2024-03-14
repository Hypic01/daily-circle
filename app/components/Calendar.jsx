import React from "react";

const Calendar = ({ setSelectedDate }) => {
  const today = new Date();
  // const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDate = today.getDate();

  // Helper function to get the style for the current day
  const getCurrentDayStyle = (date) => {
    return `text-center p-2 rounded-full cursor-pointer ${date === currentDate ? 'bg-red-500 text-white' : 'text-black'
      }`;
  };

  const handleDateClick = (date) => {
    const selectedDateObj = new Date(currentYear, currentMonth, date);
    setSelectedDate(selectedDateObj);
  }

  // Generate an array for the days of the month
  // TODO Adjust to get the correct number of days and start from the correct weekday
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="text-black">
      <div className="text-lg font-bold mb-4 text-center">{`${today.toLocaleString('default', { month: 'long' })} ${currentYear}`}</div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold">{day}</div>
        ))}
        {dates.map(date => (
          <div key={date} className={getCurrentDayStyle(date)} onClick={() => handleDateClick(date)}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
