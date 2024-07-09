import React from "react";

const Recommended = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-center w-[85%] backdrop-blur-sm bg-white/10 bg-opacity-50 p-1 rounded-lg">
        <div className="flex items-center justify-center w-[55%] p-2">
          <div className="relative w-full h-[22rem] overflow-hidden rounded-lg transform transition duration-300">
            <img
              src=""
              alt="img"
              className="object-center w-full h-full rounded-lg"
            />
            <div className="absolute bottom-12 left-12 right-0 text-white">
              <p className="text-4xl font-semibold">hello</p>
              <p className="text-xl">imageContentDescription</p>
            </div>
          </div>
        </div>

        <div className="p-2 w-[45%]">
          <div className="p-2">
            <p className="text-3xl font-semibold">contentHeading</p>
            <p className="text-gray-200">contentDescription</p>

            <div className="w-full border m-2"></div>
            <button className="p-3 my-4 bg-[#6435E9] rounded-lg text-white">
              Begin Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
