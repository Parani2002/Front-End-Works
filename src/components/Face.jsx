import React from "react";

const Face = () => {
  return (
    <div className="bg-red-600 flex flex-col w-1/2 h-1/2 rounded-full p-8">
      <div className="flex justify-around mt-8">
        <span className="bg-green-700 p-8  rounded-full border border-r-2">EYE</span>
        <span className="bg-green-700 p-8  rounded-full border border-r-2">EYE</span>
      </div>
      <div className="bg-blue-700 text-center mt-8 rounded-full w-1/4 flex justify-center px-4 py-2">
        NOSE
      </div>
      <div className="flex flex-col align-middle justify-center text-center mt-8 rounded-full w-1/2 px-4 py-2">
        <span className="bg-violet-500">UPPER LIP</span>
        <span className="bg-violet-800">LOWER LIP</span>
      </div>
    </div>
  );
};

export default Face;
