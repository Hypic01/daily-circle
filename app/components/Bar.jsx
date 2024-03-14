import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Bar = ({ selectedDate }) => {
  const router = useRouter();
  // Define the categories and their respective activities with colors and lengths
  const [categories, setCategories] = useState([
    {
      name: "Health",
      activities: [
        { name: "Sleeping", color: "bg-green-500", score: 5 },
        { name: "Eating", color: "bg-green-500", score: 5 },
        { name: "Workout", color: "bg-green-500", score: 5 },
      ],
    },
    {
      name: "Work",
      activities: [
        { name: "Coding", color: "bg-blue-500", score: 5 },
        { name: "Reading", color: "bg-blue-500", score: 5 },
        { name: "Academic", color: "bg-blue-500", score: 5 },
      ],
    },
    {
      name: "Relationship",
      activities: [
        { name: "Friends", color: "bg-red-500", score: 5 },
        { name: "Family", color: "bg-red-500", score: 5 },
        { name: "Romance", color: "bg-red-500", score: 5 },
      ],
    },
  ]);

  // initialize with current Date
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // get token from local storage
    const token = localStorage.getItem('user token');
    // if token is not valid, kick redirect this user to home
    if (token === null) {
      console.log("No token for this user. Redirect this guy out");
      window.alert("You are not AUTHORIZED!");
      router.push('/');
      return;
    }

    // send post request 
    try {
      const bodyContent = {
        'date': selectedDate,
        'categories': categories
      };

      const response = await fetch('http://localhost:3002/record/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(bodyContent),
      });

      const responseData = await response.json();
      if (response.status === 201) {
        // if successfully recorded
        window.alert(responseData.message);
      } else {
        window.alert(responseData.message);
      }


    } catch (err) {
      console.log("Submit Error: ", err);
      window.alert(err);
    }
  };

  const fetchScores = async () => {
    setIsLoading(true);

    // get token from local storage
    const token = localStorage.getItem('user token');
    // if token is not valid, kick redirect this user to home
    if (token === null) {
      console.log("No token for this user. Redirect this guy out");
      window.alert("You are not AUTHORIZED! Log in again please");
      router.push('/');
      setIsLoading(false);
      return;
    }

    const formattedDate = selectedDate.toISOString().slice(0, 10);
    try {
      const response = await fetch(`http://localhost:3002/summary/daily?date=${formattedDate}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      });

      if (response.status === 403) {
        console.log("Token expired. get this guy out");
        window.alert("token expired! log in please");
        router.push('/');
        setIsLoading(false);
        return;
      }

      const data = await response.json();

      // if nothing returned from backend set all equal to before but set all score to 0
      if (data.length == 0) {
        setCategories(categories => categories.map(category => ({
          ...category,
          activities: category.activities.map(activity => ({
            ...activity,
            score: 0
          }))
        })));
        return;
      }
      setCategories((prevCategories) =>
        prevCategories.map((category) => ({
          ...category,
          activities: category.activities.map((activity) => {
            const newData = data.find((d) => d.small_category === activity.name.toLowerCase());
            return {
              ...activity,
              score: newData ? newData.rating : 0,
            };
          }),
        }))
      );
    } catch (error) {
      console.error('Error fetching daily scores:', error);
      // Handle error (e.g., show a message to the user)
      window.alert('error fetching scores');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  useEffect(() => {
    if (!isLoading) {
      fetchScores();
    }
  }, [selectedDate]);

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
      <button className="bg-red-500 w-[120px] h-[40px] rounded text-base font-bold font-['Inter'] self-center"
        onClick={handleSubmit}
      >Submit</button>
    </div>
  );
};

export default Bar;
