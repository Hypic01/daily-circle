import React, { useState, useEffect } from "react";
import Image from "next/image";

const Bar = () => {
  // Define the categories and their respective activities with colors and lengths
  const [categories, setCategories] = useState([
    {
      name: "Health",
      activities: [
        { name: "Sleeping", color: "bg-green-500", score: 8 },
        { name: "Eating", color: "bg-green-500", score: 8 },
        { name: "Workout", color: "bg-green-500", score: 8 },
      ],
    },
    {
      name: "Work",
      activities: [
        { name: "Coding", color: "bg-blue-500", score: 8 },
        { name: "Reading", color: "bg-blue-500", score: 8 },
        { name: "Academic", color: "bg-blue-500", score: 8 },
      ],
    },
    {
      name: "Relationship",
      activities: [
        { name: "Friends", color: "bg-red-500", score: 8 },
        { name: "Family", color: "bg-red-500", score: 3 },
        { name: "Romance", color: "bg-red-500", score: 2 },
      ],
    },
  ]);

  const [scores, setScores] = useState([]);

  // Function to handle the edit button click
  const handleEditClick = (categoryName, activityName) => {
    // Prompt the user to enter a new score
    const newScore = prompt(`Enter new score for ${activityName}:`, 10);
    if (newScore) {
      // Update the score in the state
      setCategories((prevCategories) =>
        prevCategories.map((category) =>
          category.name === categoryName
            ? {
                ...category,
                activities: category.activities.map((activity) =>
                  activity.name === activityName
                    ? { ...activity, score: Number(newScore) }
                    : activity
                ),
              }
            : category
        )
      );
    }
  };

  useEffect(() => {
    const date = new Date().toISOString().slice(0, 10); // format the date as YYYY-MM-DD
    fetchScores(date);
  }, []);

  const fetchScores = async (date) => {
    const { data, error } = await supabase
      .from('scores')
      .select('*')
      .eq('date', date);

    if (error) {
      console.error('Error fetching scores:', error);
    } else {
    //   setScores(data);
        console.log("Success!")
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      {categories.map((category) => (
        <div key={category.name}>
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            {category.name}
          </h3>
          {category.activities.map((activity) => (
            <div key={activity.name} className="flex items-center mb-4">
              <span className="text-sm font-medium text-gray-900 w-20">
                {activity.name}
              </span>
              <div className="flex-grow bg-gray-200 rounded overflow-hidden h-6 ml-4 mr-2">
                <div
                  className={`${activity.color} h-full rounded-l`}
                  style={{ width: `${10 * activity.score}%` }}
                />
              </div>
              <h3 className="text-black ml-2 mr-8 font-bold text-lg">{activity.score}</h3>
              <button
                onClick={() => handleEditClick(category.name, activity.name)}
                className="w-[85px] h-[42px] bg-[#CDCDCD] opacity-80 flex justify-center items-center gap-2 text-black rounded-xl"
              >
                <Image src="/edit.png" width={15} height={15} alt="Edit" />
                Edit
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bar;
