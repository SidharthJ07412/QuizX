import React, { useEffect, useState } from "react";
import Dashboard_card from "./Dashboard_card";
import Dashboard_quiz_entry from "./Dashboard_quiz_entry";
import "../componentsStyles/dashboard.css";
import CreateQuizModal from "./CreateQuizModal";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import "../componentsStyles/dashboard.css";

function Dashboard() {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [AllQuizzes, update_AllQuizzes] = useState([]);
  const [upvar, update_upvar] = useState(0);

  useEffect(() => {
    if (!cookies.get("User")) {
      console.log("User");
      navigate("/");
    }
  });
  useEffect(() => {
    update_screen();
    console.log("updated screen");
  }, [upvar]);

  const update_screen = () => {
    try {
      axios
        .post("http://localhost:5000/quizAdmin/viewquizzes", {
          user_id: cookies.get("User").User_id,
        })
        .then((res) => {
          update_AllQuizzes(res.data);
        })
        .catch((err) => {
          alert("Unable to Update Display Quizzes");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const Logout = () => {
    cookies.remove("User");
    navigate("/");
  };

  return (
    <div className="dashboard_background">
      <div>
        <button
          className="btn btn-danger btn-lg btn-block p-3"
          onClick={Logout}
        >
          Logout
        </button>
        <Dashboard_card />
      </div>
      <div>
        <CreateQuizModal
          user_id={cookies.get("User").User_id}
          update_upvar={update_upvar}
        />
        {AllQuizzes.map((ele) => (
          <Dashboard_quiz_entry
            user_id={cookies.get("User").User_id}
            name={ele.name}
            id={ele.quiz_id}
            key={ele.quiz_id}
            update_upvar={update_upvar}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
