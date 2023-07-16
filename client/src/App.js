import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import AddQuestions from "./components/AddQuestions";
import QuizWindow from "./components/QuizWindow";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/Signup" element={<SignUp />}></Route>
          <Route exact path="/Leaderboard" element={<Leaderboard />}></Route>
          <Route exact path="/AddQuestions" element={<AddQuestions />}></Route>
          <Route exact path="/QuizWindow" element={<QuizWindow />}></Route>
          <Route exact path="/Dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
