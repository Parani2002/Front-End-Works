import React from "react";

const Flex = () => {
  return (
    <div className="flex bg-red-700 p-4 gap-4 flex-col  md:flex-row md:flex-wrap
    ">
      <div className="bg-green-500 flex-1 text-center">
        <a href="#">Home</a>
      </div>
      <div className="bg-violet-500 flex-1 text-center">
        <a href="#">Contact</a>
      </div>
      <div className="bg-blue-500 flex-1 text-center">
        <a href="#">Career</a>
      </div>
      <div className=" bg-slate-500 flex-1 text-center">
        <a href="#">About US</a>
      </div>
    </div>
  );
};

export default Flex;
