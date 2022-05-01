import React from "react";
import "./Slider.css";
import left from "./icons/left.png";
import right from "./icons/right.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? right : left} />
    </button>
  );
}