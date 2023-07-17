import React from "react";
import axios from "axios";
import "../componentsStyles/dashboard_quiz_entry.css";

function Dashboard_quiz_entry(props) {
  const { user_id, name, id, update_upvar } = props;

  const ondelete = () => {
    try {
      axios
        .post("http://localhost:5000/quizAdmin/deletequiz", {
          user_id: user_id,
          quiz_id: id,
        })
        .catch((err) => {
          alert("Unable to delete quiz");
        });
    } catch (err) {
      console.log(err);
    }
    update_upvar((prevState) => {
      return { count: prevState.count + 1 };
    });
    alert("Quiz Deleted");
  };

  return (
    <div className="card-body dashcard_css">
      <div className="card detail-card dashinner_card_css">
        <div className="card-body">
          <div className="row detail-head ">
            <div className="col-md-3 dashrow_rank">{name}</div>
            <h4 className="col-md-3">Quiz-Id-{id}</h4>
            <button className="col-md-2 dashrow_rank btn btn-primary">
              View LeaderBoard
            </button>
            <button className="col-md-2 dashrow_rank btn btn-success ">
              Add Questions
            </button>
            <button
              className="col-md-2 dashrow_rank btn btn-danger"
              onClick={ondelete}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_quiz_entry;
