import React from 'react';

const CircleSlice = ({ clipPath, bgColor }) => {
  return (
    <div
      className={`absolute inset-0 ${bgColor}`}
      style={{ clipPath: clipPath }}
    />
  );
};

export default CircleSlice;
