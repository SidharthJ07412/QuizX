import React from "react";
import Dashboard_card from "./Dashboard_card";
import Dashboard_quiz_entry from "./Dashboard_quiz_entry";
import "../componentsStyles/dashboard.css";

function Dashboard() {
  return (
    <div>
      <div>
        <Dashboard_card />
      </div>
      <div>
        <Dashboard_quiz_entry name={"quiz1"} id={"A54BC"} status={"Pending"} />
        <Dashboard_quiz_entry name={"qu"} id={"BC686"} status={"Completed"} />
        <Dashboard_quiz_entry name={"OKOK"} id={"A5CCC"} status={"Pending"} />
        <Dashboard_quiz_entry name={"quiz1"} id={"54BCC"} status={"Ongoing"} />
        <Dashboard_quiz_entry name={"quiz1"} id={"4655C"} status={"Pending"} />
      </div>
    </div>
  );
}

export default Dashboard;
