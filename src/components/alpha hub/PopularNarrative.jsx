import React from "react";
import top1 from "../../assets/top-1.jpg";
import top2 from "../../assets/top-2.jpg";
import top3 from "../../assets/top-3.jpg";
import coin from "../../assets/coin.svg";

const PopularNarrative = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>Popular Narratives</p>
      <div className="flex items-center justify-center text-white bg-[#141414] w-[85%] rounded-lg">
        <div className="w-[25%] p-6">
          <p className="text-3xl p-2">Exploring Farcaster</p>
          <p className="text-gray-500 p-2">
            Lens Protocol is a decentralized social graph that empowers
            developers to create social media applications on the blockchain. It
            ensures data ownership...
          </p>
          <div className="flex items-center py-2">
            <div className="px-4 py-1 backdrop-blur-lg bg-white/20 rounded-lg m-4 text-gray-300">
              4 Quests
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

          <div className="w-full border border-dashed border-gray-500"></div>

          <div className="flex items-center justify-center p-1 m-3 gap-2 bg-white/20 w-24 my-6 rounded-full text-gray-300 text-sm">
            <img src={coin} alt="coin" className="w-4 h-4" />
            <p>230 XPs</p>
          </div>

          <button className="w-full p-2">Start</button>
        </div>

        <div className="w-[70%]"> working </div>
      </div>
    </div>
  );
};

export default PopularNarrative;
