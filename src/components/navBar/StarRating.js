import React from "react";
const StarRating = ({ count, isClicked, changeRate }) => {
  let tableStar = [];

  for (let i = 0; i < 5; i++) {
    if (i < count) {
      tableStar.push(
        <span
          style={{ cursor: "pointer"  , color: "#FFFF00"}}
          key={i}
          onClick={() => isClicked && changeRate(i + 1)}
        >
          ★
        </span>
      );
    } else {
      tableStar.push(
        <span
          style={{ cursor: "pointer" }}
          key={i}
          onClick={() => isClicked && changeRate(i + 1)}
        >
          ☆
        </span>
      );
    }
  }
  return <div className="stars">{tableStar}</div>;
};
export default StarRating;
