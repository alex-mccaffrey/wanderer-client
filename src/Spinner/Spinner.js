import React from "react";
import "./Spinner.css";

export const Spinner = () => {
  return (
    // <div className="spinnerDiv">
    //   <svg className="spinner">
    //     <circle
    //       className="path"
    //       cx="25"
    //       cy="25"
    //       r="20"
    //       fill="none"
    //       strokeWidth="5"
    //     ></circle>
    //   </svg>
    //   Loading...
    // </div>
    <div className="loading">Loading&#8230;</div>
  );
};
