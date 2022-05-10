import React from "react";
import AvgDisplay from "./AvgDisplay";
import '../Styling/AvgContainer.css'

const AvgsContainer = ({userInputs}) => {

    let averageMinutes = userInputs.reduce((acc, input) => {
      let racingDays = parseInt(input.substring(input.length - 2, input.length))
      let racingHours = parseInt(input.substring(0, 2))
      let racingMinutes = parseInt(input.substring(3, 5))
      if(input.includes('AM') && racingHours < 12 && racingHours >= 8) {
        racingHours = racingHours - 8
      } else if (input.includes('AM') && racingHours === 12) {
        racingHours = (12 - 8) + racingHours
        console.log('racingHours', racingHours, 'days', racingDays)
        racingDays = racingDays - 1
      } else if (input.includes('PM') && racingHours < 12) {
        racingHours = (12 - 8) + racingHours
      } else if (input.includes('PM') && racingHours === 12) {
        racingHours = (12 - 8) 
      } else {
        racingHours = racingHours
      }

      let minuteTotal = (racingHours * 60) + racingMinutes + ((racingDays - 1) * 24 * 60)
      acc += minuteTotal
      return acc
    }, 0)
  let total = averageMinutes ? (averageMinutes/userInputs.length).toFixed(0) : 0
  return (
    <section className="avg-container">
      <AvgDisplay 
        average={total}/>
    </section>
  )
}

export default AvgsContainer;