import React, { useState } from "react";
import top3 from "../../assets/top-3.jpg";
import coin from "../../assets/coin.svg";

const Card = ({ heading, description, data, Xp }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="border-b px-4 py-3 cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center sm:flex-wrap sm:justify-center">
          <div className="p-2 w-32 h-32 rounded-lg bg-white/20">
            <img
              src={top3}
              alt="Preview"
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold sm:mt-4">{heading}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <div className="border-1 border-dashed text-gray-100 my-3"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2 w-24 p-2 bg-white/20 rounded-full text-gray-300 text-sm">
                <img src={coin} alt="coin" className="w-4 h-4" />
                <div>{Xp} XPs</div>
              </div>
              <div>{isOpen ? "close" : "open"}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown */}
      {isOpen && (
        <div className="max-h-72 overflow-y-auto">
          {data.map((item) => (
            <div key={item.id} className="px-4 py-2 cursor-pointer">
              <div className="flex items-center bg-white/10 rounded-xl p-2">
                <div className="w-32 object-cover h-20 rounded-lg">
                  <img
                    src={item.imgSrc}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">
                    #{item.id} {item.question}
                  </h2>
                  <div className="border-1 border-dashed text-gray-100 my-3"></div>
                  <p className="text-sm text-gray-300">{item.tasks} Tasks</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
