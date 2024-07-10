import React from "react";
import topCryptoCreators from "./data";
import playSvg from "../../assets/play.svg";
import reelSvg from "../../assets/reel.svg";

const TopCreators = () => {
  return (
    <div className="bg-[#080808]">
      <div className="flex flex-col gap-2 items-center justify-center p-8">
        <div className="font-semibold text-2xl">
          Top Crypto Creators and Projects to Follow
        </div>
        <div>Answers to your crypto doubts, straight from the experts</div>
      </div>

      <div className="flex items-center justify-center flex-wrap">
        {topCryptoCreators.map((creator) => (
          <div
            key={creator.id}
            className="relative w-64 h-96 overflow-hidden rounded-lg m-3 transform transition duration-300 group"
          >
            <img
              src={creator.imageSrc}
              alt={creator.content}
              className="object-cover w-full h-full transition duration-300 group-hover:brightness-75 group-hover:shadow-inner group-hover:shadow-black/50"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#4A3728] to-transparent">
              <p className="text-2xl font-semibold text-white">
                {creator.content}
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 hover:opacity-1">
              <div className="rounded-full flex items-center justify-center w-16 h-16 bg-white/30">
                <img src={playSvg} alt="Play" className="w-12 h-12" />
              </div>
            </div>
            <div className="absolute top-4 right-4 rounded-full p-2 bg-white/30 backdrop-blur-md">
              <img src={reelSvg} alt="reel" className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreators;
