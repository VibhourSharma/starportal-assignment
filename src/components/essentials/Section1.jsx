import React from "react";
import { basicsData } from "./data";
import Card from "./Card";
import crw2 from "../../assets/crw2.jpg";

const Section1 = () => {
  return (
    <div className="bg-[#080808] flex p-16 flex-wrap">
      <div className="flex items-start justify-center ml-12 gap-2 sm:mb-4">
        <span className="text-3xl">Step</span>
        <span className="p-1.5 w-10 text-center rounded-full bg-white/20">
          1
        </span>
      </div>
      <div className="max-w-md mx-auto rounded-xl overflow-hidden bg-white/5">
        <Card
          heading="Basics of Crypto"
          description=" The safest and easiest place to start your crypto journey!"
          Xp="240"
          data={basicsData}
        />
      </div>
      <div className="max-w-[20%] mr-12 sm:max-w-full sm:mr-0 sm:mt-8">
        <div className="p-2 rounded-xl h-40 w-40 bg-white/10">
          <img
            src={crw2}
            alt="image"
            className="w-full h-full object-fill rounded-xl"
          />
        </div>
        <div className="text-lg text-gray-300 p-1">
          Intract Certified: Learner NFT
        </div>
        <div className="text-sm text-gray-500 max-w-[60%]">
          Your crypto black-belt certificate!
        </div>
        <button className="text-sm text-gray-400 bg-white/20 my-2 px-12 py-1 rounded-lg">
          Claim
        </button>
      </div>
    </div>
  );
};

export default Section1;
