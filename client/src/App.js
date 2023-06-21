import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="App">

      <Leaderboard />

      <Login />
      <SignUp/>
    </div>
  );
}

export default App;
