import React from "react";

const AvgDisplay = ({average}) => {
  return(
    <article className="avg-display">
     The average for racing in minutes is equal to {average}
    </article>
  )
}

export default AvgDisplay;