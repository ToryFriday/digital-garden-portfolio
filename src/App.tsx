import "./App.css";

import GardenNav from "./components/navigation/GardenNav";
import Hero from "./components/sections/Hero";
import Sections from "./components/sections/Sections";

function App() {
  return (
    <main className="garden">
      <GardenNav />

      <Hero />

      <Sections />
    </main>
  );
}

export default App;