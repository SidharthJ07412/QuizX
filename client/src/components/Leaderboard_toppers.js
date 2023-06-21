import React from "react";
import "../componentsStyles/leaderboard_toppers.css";

function Leaderboard_toppers(props) {
  const { rank, name } = props;

  let image;

  if (rank === 1) {
    image = (
      <img
        className="toppers_image1"
        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
        s
        alt="new"
      />
    );
  } else if (rank === 2) {
    image = (
      <img
        className="toppers_image2"
        src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/1-layered-haircut-for-square-faces-CUP9gE7LdhQ.jpg?resize=891%2C1002&ssl=1"
        alt="new"
      />
    );
  } else {
    image = (
      <img
        className="toppers_image3"
        src="https://i2.wp.com/www.hadviser.com/wp-content/uploads/2021/03/1-layered-haircut-for-square-faces-CUP9gE7LdhQ.jpg?resize=891%2C1002&ssl=1"
        alt="new"
      />
    );
  }
  return (
    <div className="toppers">
      {image}
      <h1 className="rank_font">{rank}</h1>
      <h3 className="name_font">{name}</h3>
    </div>
  );
}

export default Leaderboard_toppers;
