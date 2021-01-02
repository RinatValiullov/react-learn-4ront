import React from "react";
import "./Ticker.css";

export default function Ticker({ pair }) {
  return (
    <div className="ticker">
      <p>{pair.toUpperCase().replace("_", " to ")}</p>
      <p>12 000</p>
    </div>
  );
}
