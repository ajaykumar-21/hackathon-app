import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HackathonList from "./components/HackathonList";
import NavBar from "./components/NavBar";
import HackathonCreate from "./components/HackathonCreate";
import HeroSection from "./components/HeroSection/HeroSection";
import Filter from "./components/Filters/Filters";

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/create" element={<HackathonCreate />} />
        </Routes>
      </BrowserRouter>
      <Filter />
      {/* <HeroSection /> */}
      {/* <HackathonCreate /> */}
      <HackathonList />
    </div>
  );
}

export default App;
