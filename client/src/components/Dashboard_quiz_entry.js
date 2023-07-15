import React from "react";
import "../componentsStyles/dashboard_quiz_entry.css";

function Dashboard_quiz_entry(props) {
  const { name, id, status } = props;
  return (
    <div className="card-body dashcard_css">
      <div className="card detail-card dashinner_card_css">
        <div className="card-body">
          <div className="row detail-head ">
            <div className="col-md-3 dashrow_rank">{name}</div>
            <h4 className="col-md-3"> {id}</h4>
            <div className="col-md-2 dashrow_rank">{status}</div>
            <div className="col-md-2 dashrow_rank">EDIT</div>
            <div className="col-md-2 dashrow_rank">DELETE</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_quiz_entry;
