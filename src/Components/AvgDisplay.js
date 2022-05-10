import React from "react";
import '../Styling/AvgDisplay.css'

const AvgDisplay = ({average}) => {
  return(
    <article className="avg-display">
     <p className="result">Results</p> 
     <p className="avg-time">{average} minutes, on average.</p>
    </article>
  )
}

export default AvgDisplay;