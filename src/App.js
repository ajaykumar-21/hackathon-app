import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HackathonCreate from "./components/HackathonCreate";
import HeroSection from "./components/HeroSection/HeroSection";
import HackathonDetails from "./components/HackathonDetails/HackathonDetails";
import HackathonEdit from "./components/HackathonEdit";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/create" element={<HackathonCreate />} />
        <Route path="/details/:id" element={<HackathonDetails />} />
        <Route path="/edit/:id" element={<HackathonEdit />} />
      </Routes>
    </div>
  );
}

export default App;
