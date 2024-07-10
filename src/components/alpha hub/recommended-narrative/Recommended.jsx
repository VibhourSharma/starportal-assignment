import React from "react";
import coin from "../../../assets/coin.svg";
import recomendedNarratives from "./data";

const Recommended = () => {
  return (
    <div className="main-div w-full flex items-center justify-center gap-4 bg-[#080808]">
      <div className="w-[85%] flex flex-wrap items-center justify-center gap-3 sm:inline-block">
        <div className="flex items-center justify-center my-4 w-[85%]">
          <div className="text-2xl">Recommended Narratives</div>
        </div>
        {recomendedNarratives.map((narratives) => {
          return (
            <div
              className="flex items-center justify-center p-3 w-[45%] bg-[#151515] rounded-xl sm:flex-wrap sm:w-full sm:my-4"
              key={narratives.id}
            >
              <div className="p-2 h-40 w-40 bg-white/10 border rounded-xl">
                <img
                  src={narratives.imgSrc}
                  alt="image"
                  className="w-full h-full"
                />
              </div>
              <div className="px-4">
                <div className="text-2xl py-px sm:py-2">
                  {narratives.heading}
                </div>
                <div className="text-gray-500">{narratives.description}</div>
                <div className="border-1 border-dashed text-gray-100 my-3"></div>
                <div className="flex items-center justify-center gap-2 w-24 p-2 bg-white/20 rounded-full text-gray-300 text-sm">
                  <img src={coin} alt="coin" className="w-4 h-4" />
                  <div>{narratives.xp} XPs</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
