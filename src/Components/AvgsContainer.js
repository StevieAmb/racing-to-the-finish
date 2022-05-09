import React from "react";
import AvgDisplay from "./AvgDisplay";
import '../Styling/AvgContainer.css'

const AvgsContainer = ({userInputs}) => {

  //FIND MINUTES FROM STRINGS OF TIME
  //I am taking in:
  //time of day
  //AM or PM
  //number of days

  //this is always just trying to get the time for the first day, because the first day starts at 8AM
  //So you're always going from 8AM until the end of the day, so the max number
  //of hours for the first day is 16 hours. 
  //So the morning time hours would be hours - 8
  //and the the PM time hours will always be 0 + something
  //so then, lets say if it's PM, and the hour is 12, then 
  //hour is 0
  //But if it's AM and the hour is 12, then it's 12 - 8 (for the morning hours) + 12 (for 16)

  //If the hours are less than or equal to 12, 
  //then the hours are always hours - 8 
  //however,

    let averageMinutes = userInputs.reduce((acc, input) => {
      let racingDays = parseInt(input.substring(input.length - 2, input.length))
      let racingHours = parseInt(input.substring(0, 2))
      let racingMinutes = parseInt(input.substring(3, 5))
      console.log("time", racingHours)
      console.log("min", racingMinutes)
      console.log('days', racingDays)
      if(input.includes('AM') && racingHours <= 12 && racingHours >= 8) {
        racingHours = racingHours - 8
      } else if (input.includes('AM') && racingHours === 12) {
        racingHours = (12 - 8) + racingHours
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