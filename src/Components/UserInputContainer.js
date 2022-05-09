import React from "react";
import UserInputDisplay from "./UserInputDisplay";
import '../Styling/UserInputContainer.css'

const UserInputContainer = ({userInputTimes}) => {
  let allTimes = userInputTimes.map(input => {
    console.log('input', input)
    return (
      <UserInputDisplay 
       key={input}
       time={input}
       />
    )
  })
  return (
    <section className="input-times">
      {allTimes}
    </section>
  )
}

export default UserInputContainer;