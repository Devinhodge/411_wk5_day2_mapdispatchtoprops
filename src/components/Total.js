
import React from "react";
// import Total from "./Total";
// import Total from "../containers/Total";

const Total = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Total:</h1>
      <h1>{props.cars.length}</h1>
    </div>
  );
};

export default Total;