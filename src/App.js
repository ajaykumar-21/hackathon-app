import "./App.css";
// import HackathonList from "./components/HackathonList";
import NavBar from "./components/NavBar";
import HackathonCreate from "./components/HackathonCreate";

function App() {
  return (
    <div>
      <NavBar />
      <HackathonCreate />
      {/* <HackathonList /> */}
    </div>
  );
}

export default App;
