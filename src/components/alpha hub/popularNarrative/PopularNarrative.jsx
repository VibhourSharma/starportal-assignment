import React from "react";
import top1 from "../../../assets/top-1.jpg";
import top2 from "../../../assets/top-2.jpg";
import top3 from "../../../assets/top-3.jpg";
import coin from "../../../assets/coin.svg";
import PopularNarrativeMainData from "./data";
import PopularCrowsel from "../popularNarrativeCrowsel/PopularCrowsel";

const PopularNarrative = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#080808]">
      <div className="flex items-start justify-start w-[85%] p-4">
        <div className="text-2xl">Popular Narratives</div>
      </div>
      {PopularNarrativeMainData.map((popularData) => (
        <div
          className="flex items-center justify-center text-white bg-[#141414] w-[85%] rounded-lg my-2 sm:flex-col"
          key={popularData.id}
        >
          <div className="w-[25%] sm:w-full p-3">
            <p className="text-3xl">{popularData.heading}</p>
            <p className="text-gray-500">{popularData.content}</p>
            <div className="flex items-center">
              <div className="px-4 py-1 backdrop-blur-lg bg-white/20 rounded-lg m-4 text-gray-300">
                {popularData.quests} Quests
              </div>
              <div className="relative flex items-center">
                {/* Circle 1 */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={top1}
                    alt="Profile 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circle 2 */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white z-10 -ml-6">
                  <img
                    src={top2}
                    alt="Profile 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circle 3 */}
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white z-20 -ml-6">
                  <img
                    src={top3}
                    alt="Profile 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Circle 4 with text */}
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-gray-700 font-semibold -ml-6 z-30">
                  1.3K
                </div>
              </div>
            </div>

            <div className="w-full border-1 border-dashed border-gray-400"></div>

            <div className="flex items-center justify-center gap-2 w-24 p-2 m-4 bg-white/20 rounded-full text-gray-300 text-sm">
              <img src={coin} alt="coin" className="w-4 h-4" />
              <div>{popularData.xp} XPs</div>
            </div>
            <button className="w-full p-2 bg-[#6435E9] rounded-lg">
              Start here
            </button>
          </div>

          {/* Crowsel  */}

          <div className="w-[70%] sm:w-full">
            <PopularCrowsel categories={popularData.categories} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularNarrative;
