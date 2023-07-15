import React from "react";
import "../componentsStyles/dashboard_card.css";

function Dashboard_card() {
  return (
    <div className="dashboard_outer_card ">
      <div className="outer_card_left">
        <div>Quizzes </div>
        <div>3</div>
      </div>

      <div className="outer_card_right">
        <div>
          <div>Completed</div>
          <div>5</div>
        </div>
        <div>
          <div>Ongoing</div>
          <div>9</div>
        </div>
        <div>
          <div>Pending</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_card;
