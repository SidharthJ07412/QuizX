import React from "react";
import "../componentsStyles/leaderboard_row.css";

function Leaderboard_row(props) {
  const { name, score, rank } = props;

  if (rank === 1) {
    return (
      <div className="card-body card_css rank1">
        <div className="card detail-card inner_card_css">
          <div className="card-body">
            <div className="row detail-head ">
              <div className="col-md-4 row_rank">{rank}</div>
              <h4 className="col-md-4"> {name}</h4>
              <div className="col-md-4 row_rank">{score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (rank === 2) {
    return (
      <div className="card-body card_css rank2">
        <div className="card detail-card inner_card_css">
          <div className="card-body">
            <div className="row detail-head ">
              <div className="col-md-4 row_rank">{rank}</div>
              <h4 className="col-md-4"> {name}</h4>
              <div className="col-md-4 row_rank">{score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (rank === 3) {
    return (
      <div className="card-body  card_css rank3">
        <div className="card detail-card inner_card_css">
          <div className="card-body">
            <div className="row detail-head ">
              <div className="col-md-4 row_rank">{rank}</div>
              <h4 className="col-md-4"> {name}</h4>
              <div className="col-md-4 row_rank">{score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-body card_css">
        <div className="card detail-card inner_card_css">
          <div className="card-body">
            <div className="row detail-head ">
              <div className="col-md-4 row_rank">{rank}</div>
              <h4 className="col-md-4"> {name}</h4>
              <div className="col-md-4 row_rank">{score}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard_row;
