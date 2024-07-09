import React from "react";
import openBook from "../../assets/openBook.svg";
import dictionary from "../../assets/dictionary.jpg";

const CryptoDictionary = () => {
  return (
    <div className="bg-[#080808]">
      <div className="flex flex-col items-center justify-center p-8">
        <p className="font-semibold text-2xl">Crypto Dictionary</p>
        <p>Your one-stop to catch up on all crypto terms</p>
      </div>

      <div className="flex items-center justify-center">
        <div
          key=""
          className="relative w-[75%] h-[26rem] overflow-hidden rounded-lg m-4 transform transition duration-300 group"
        >
          <img
            src={dictionary}
            alt=""
            className="object-center w-full h-full transition"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-[1px]">
            <p className="text-2xl font-semibold text-white">
              Web3 + Degen Glossary
            </p>
            <p className="text-gray-400 m-1">Your own crypto dictionary</p>
          </div>

          <div className="absolute top-4 right-4 rounded-full p-3 bg-white/30 backdrop-blur-md">
            <img src={openBook} alt="reel" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDictionary;
