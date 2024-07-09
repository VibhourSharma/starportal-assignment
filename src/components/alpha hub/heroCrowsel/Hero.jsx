import React from "react";
import HeroCrowsel from "./HeroCrowsel";
import bgImage from "../../../assets/intract-academy-background.png";
import logo from "../../../assets/logo.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="p-8 bg-transparent">
          <img src={logo} alt="logo" className="h-28 w-auto" />
        </div>
        <HeroCrowsel />
      </div>
    </div>
  );
};

export default Hero;
