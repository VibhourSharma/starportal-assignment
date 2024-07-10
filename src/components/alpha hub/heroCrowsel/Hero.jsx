import React from "react";
import HeroCrowsel from "./HeroCrowsel";
import bgImage from "../../../assets/intract-academy-background.png";
import logo from "../../../assets/logo.gif";
import Header from "../../essentials/Header";

const Hero = ({ activeFilter }) => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />
      <div className="relative flex flex-col items-center justify-center min-h-screen">
        <div className="">
          <img src={logo} alt="logo" className="w-52 h-52" />
        </div>
        {activeFilter !== "Essentials" ? <HeroCrowsel /> : <Header />}
      </div>
    </div>
  );
};

export default Hero;
