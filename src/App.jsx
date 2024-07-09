import TopCreators from "./components/topCreators/TopCreators";
import CryptoDictionary from "./components/cryptoDictionary/CryptoDictionary";
import "./index.css";
import PopularNarrative from "./components/alpha hub/popularNarrative/PopularNarrative";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Hero from "./components/alpha hub/heroCrowsel/Hero";
import Recommended from "./components/alpha hub/recommended-narrative/Recommended";

function App() {
  return (
    <>
      <Hero />
      <PopularNarrative />
      <Recommended />
      <TopCreators />
      <CryptoDictionary />
    </>
  );
}

export default App;
