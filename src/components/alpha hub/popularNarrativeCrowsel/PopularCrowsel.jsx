import React from "react";
import crw1 from "../../../assets/crw1.jpg";
import coin from "../../../assets/coin.svg";
import categoryIcon from "../../../assets/category.svg";
import task from "../../../assets/task.svg";

const PopularCrowsel = ({ categories }) => {
  return (
    <div className="flex w-full gap-2 p-2 ml-4 sm:ml-0 sm:overflow-scroll">
      {categories.map((cat) => (
        <div
          className="p-3 rounded-md max-w-[37%] sm:max-w-full bg-white/10 backdrop-blur-lg"
          key={cat.id}
        >
          <img src={crw1} alt="" className="h-44 w-full rounded-md" />
          <div className="py-2">
            <div className="flex items-center gap-1 p-1">
              <img src={categoryIcon} alt="category" className="w-4 h-4" />
              <div>{cat.category}</div>
            </div>
            <div className="text-2xl">{cat.heading}</div>
          </div>
          <div className="border-1 border-dashed"></div>

          <div className="flex">
            <div className="flex items-center justify-center gap-2 w-24 p-2 m-4 bg-white/20 rounded-full text-gray-300 text-sm">
              <img src={task} alt="task" className="w-4 h-4" />
              <div>{cat.taskLeft} tasks</div>
            </div>
            <div className="flex items-center justify-center gap-2 w-24 p-2 m-4 bg-white/20 rounded-full text-gray-300 text-sm">
              <img src={coin} alt="coin" className="w-4 h-4" />
              <div>{cat.xpValue} XPs</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularCrowsel;
