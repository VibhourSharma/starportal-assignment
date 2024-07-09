import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[60%] flex flex-col gap-4 text-center">
        <span className="text-3xl font-bold">Intract Academy</span>
        <span className="text-gray-400">
          Intract users have together made more than $100 million in web3. Join
          them and learn how to earn crypto!
        </span>
        <button className="py-2 px-8 rounded-xl bg-[#7041EB]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
