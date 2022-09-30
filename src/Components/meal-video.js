import React from "react";
import ReactPlayer from "react-player";

const MealVideo = function (props) {
  const mealVid = props.video;
  return (
    <div className="meal-vid">
      <h2 className="video-heading">
        Watch the Preparation Process in This Video
      </h2>
      <div className="video-container">
        <ReactPlayer url={mealVid} />
      </div>
    </div>
  );
};

export default MealVideo;
