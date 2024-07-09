import React, { useState } from "react";
import TopCreators from "./components/topCreators/TopCreators";
import CryptoDictionary from "./components/cryptoDictionary/CryptoDictionary";
import "./index.css";
import PopularNarrative from "./components/alpha hub/popularNarrative/PopularNarrative";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero from "./components/alpha hub/heroCrowsel/Hero";
import Recommended from "./components/alpha hub/recommended-narrative/Recommended";
import ToggleButton from "./components/ToggleButton";
import Section1 from "./components/essentials/Section1";
import Section2 from "./components/essentials/Section2";

function App() {
  const [activeFilter, setActiveFilter] = useState("Essentials");

  return (
    <>
      <ToggleButton
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      <Hero activeFilter={activeFilter} />
      {activeFilter === "Alpha Hub" ? (
        <>
          <PopularNarrative />
          <Recommended />
        </>
      ) : (
        <>
          <Section1 />
          {/* <Section2 /> */}
        </>
      )}
      <TopCreators />
      <CryptoDictionary />
    </>
  );
}

export default App;
