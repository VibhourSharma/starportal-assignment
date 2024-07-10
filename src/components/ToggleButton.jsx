import React from "react";

const ToggleButton = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 rounded-full z-50 sm:text-sm">
      <button
        className={`px-8 py-2 font-semibold rounded-full transition-all duration-300 sm:px-2 ${
          activeFilter === "Essentials"
            ? "bg-white/30 text-white"
            : "bg-transparent text-gray-400"
        }`}
        onClick={() => setActiveFilter("Essentials")}
      >
        Essentials
      </button>
      <button
        className={`px-8 py-2 font-semibold rounded-full transition-all duration-300 sm:px-2 ${
          activeFilter === "Alpha Hub"
            ? "bg-white/30 text-white"
            : "bg-transparent text-gray-400"
        }`}
        onClick={() => setActiveFilter("Alpha Hub")}
      >
        Alpha Hub
      </button>
    </div>
  );
};

export default ToggleButton;
