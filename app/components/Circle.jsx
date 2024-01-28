// Next.js component
const ActivityWheel = () => {
    const size = 800; // Increased size of the SVG for a bigger circle
    const strokeWidth = 2; // Adjust stroke width as needed
    const radius = (size / 2) - strokeWidth; // Adjust radius for stroke width
    const viewBoxSize = 200;

  // Function to calculate the SVG path for each slice
  const getPath = (index, totalSlices, radius) => {
    const anglePerSlice = 360 / totalSlices;
    const startAngle = index * anglePerSlice;
    const endAngle = startAngle + anglePerSlice;

    // Convert angles to radians for X and Y calculations
    const startAngleRad = (Math.PI * (startAngle - 90)) / 180;
    const endAngleRad = (Math.PI * (endAngle - 90)) / 180;

    // Calculate start and end points
    const startX = radius + radius * Math.cos(startAngleRad);
    const startY = radius + radius * Math.sin(startAngleRad);
    const endX = radius + radius * Math.cos(endAngleRad);
    const endY = radius + radius * Math.sin(endAngleRad);

    const largeArcFlag = anglePerSlice > 180 ? "1" : "0";

    // Construct the path data
    return [
      `M ${radius},${radius}`, // Move to center of the circle
      `L ${startX},${startY}`, // Line to the start point of the arc
      `A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`, // Arc to the end point
      `Z`, // Close the path
    ].join(" ");
  };

  // Define 9 slices, you can add unique colors or labels as needed
  const slices = new Array(9).fill({});

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-4 mb-4">
        {/* Time period selectors here */}
      </div>
      <div className="w-full max-w-xs mx-auto">
        <svg
          width="100%"  // The SVG will take up 100% of the container width
          height="100%"
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          preserveAspectRatio="xMidYMid meet" // This will preserve the aspect ratio and center the SVG
        className="block" // Ensures the SVG doesn't collapse
        >
          {slices.map((_, index) => (
            <path
              key={index}
              d={getPath(index, slices.length, radius)}
              fill="none"
              stroke="#000"
              strokeWidth={strokeWidth}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

export default ActivityWheel;

// <div className="flex justify-center ">
//     <Image src="/Circle.png" width={582} height={582} className="w-[582px] h-[582px] " />
// </div>
