import React from "react";
import "./Winboard.css";

export const Win = ({ xWinnings, oWinnings }) => {
  return (
    <div>
      <span className="x win">X - {xWinnings}</span>
      <span className="o win">O - {oWinnings}</span>
    </div>
  );
};
